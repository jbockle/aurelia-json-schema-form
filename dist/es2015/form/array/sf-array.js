var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { customElement, bindable, inject, InlineViewStrategy } from 'aurelia-framework';
import { Guid } from '../../resources/guid';
import { SchemaFormLogger } from '../../resources/logger';
import { FormService } from '../../services/form-service';
import { ArrayRules } from '../../rules/array-rules';
import { DefaultsService } from '../../services/defaults-service';
import { FormInstances } from '../../services/form-instances';
import * as $ from 'jquery';
let SfArray = class SfArray {
    constructor(arrayRules, formService, logger, defaultsService, formInstances) {
        this.arrayRules = arrayRules;
        this.formService = formService;
        this.logger = logger;
        this.defaultsService = defaultsService;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.kind = 'array';
        this.binded = false;
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.binded) {
                this.logger.info('sf-array', { form: this.form, model: this.model });
                this.formCtrl = this.formInstances.get(this.formInstance);
                this.bindRules();
                this.form.$arrayItem.$schema = this.form.$schema.items;
                yield this.createItemView();
                yield this.determineViewStrategy();
                yield this.initializeArray();
                this.binded = true;
            }
        });
    }
    initializeArray() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.$arrayItem.$schema.enum ||
                (this.model && this.model.length > 0) ||
                this.form.$noEmptyArrayInitialization ||
                this.formCtrl.formOptions.noEmptyArrayInitialization) {
                return;
            }
            yield this.add(!!this.formCtrl.formOptions.validateOnRender);
        });
    }
    attached() {
        this.logger.info('sf-array-attached');
        if (this.formCtrl.formOptions.validateOnRender) {
            this.validate();
        }
    }
    determineViewStrategy() {
        return __awaiter(this, void 0, void 0, function* () {
            let strategy;
            if (this.form.$altTemplate) {
                strategy = this.form.$altTemplate;
            }
            else if (this.form.$arrayAsTabs) {
                const content = !!this.form.$tabTitle ? `${this.form.$tabTitle}` : '${\'Item \' + ($index + 1)}';
                this.tabTitleTemplate = new InlineViewStrategy(`<template>${content}</template>`);
                strategy = this.formService.getTemplatePath('arrayTabs');
            }
            else if (this.form.$schema.items.type === 'string' && this.form.$schema.items.enum) {
                strategy = this.formService.getTemplatePath('arrayStringEnum');
            }
            else {
                strategy = this.formService.getTemplatePath('array');
            }
            this.viewStrategy = strategy;
        });
    }
    createItemView() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('createView', { form: this.form.$arrayItem });
            const template = this.formService
                .getSfTemplate('model[$index]', 'form.$arrayItem', this.form.$arrayItem.$schema.type, this.formInstance);
            this.logger.info('createView-template', { template });
            this.itemViewStrategy = new InlineViewStrategy(`<template>${template}</template>`);
        });
    }
    bindRules() {
        this.arrayRules.bind(this);
        this.formCtrl.validationController.addObject(this.model);
    }
    add(validate) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isDisabled && !this.atCapacity) {
                const item = yield this.defaultsService.getSchemaDefaultAsync(this.form.$schema.items, null);
                const index = this.model.push(item) - 1;
                this.selectTab(index);
                if (validate) {
                    yield this.validate();
                }
            }
        });
    }
    remove(index, validate) {
        return __awaiter(this, void 0, void 0, function* () {
            this.model.splice(index, 1);
            this.selectTab(this.model.length - 1);
            if (validate) {
                yield this.validate();
            }
        });
    }
    selectTab(index) {
        if (this.tabTitleTemplate) {
            setTimeout(() => {
                $(`a[href="#tab_${this.id}_${index}"]`).tab('show');
            }, 50);
        }
    }
    get isDisabled() {
        return this.form.$schema.readOnly || !!this.form.$schema.const;
    }
    get atCapacity() {
        return Number.isInteger(this.form.$schema.maxItems)
            ? this.model.length >= this.form.$schema.maxItems : false;
    }
    get atMinimumCapacity() {
        return Number.isInteger(this.form.$schema.minItems)
            ? this.model.length === this.form.$schema.minItems : false;
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.formCtrl.validationController.validate({ object: this.model });
            this.logger.info('validated array', result);
            this.errors = result.results
                .filter((r) => !r.valid);
            return result;
        });
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfArray.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", Array)
], SfArray.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfArray.prototype, "formInstance", void 0);
SfArray = __decorate([
    inject(ArrayRules, FormService, SchemaFormLogger, DefaultsService, FormInstances),
    customElement('sf-array'),
    __metadata("design:paramtypes", [ArrayRules,
        FormService,
        SchemaFormLogger,
        DefaultsService,
        FormInstances])
], SfArray);
export { SfArray };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0QsQ0FBQztJQUVLLFFBQVE7O1lBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPO2lCQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtDQUNGLENBQUE7QUFsSlc7SUFBVCxRQUFROztxQ0FBcUI7QUFDcEI7SUFBVCxRQUFROztzQ0FBYztBQUNiO0lBQVQsUUFBUTs7NkNBQXNCO0FBSHBCLE9BQU87SUFSbkIsTUFBTSxDQUNMLFVBQVUsRUFDVixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixhQUFhLENBQ2Q7SUFDQSxhQUFhLENBQUMsVUFBVSxDQUFDO3FDQXlCSCxVQUFVO1FBQ1IsV0FBVztRQUNoQixnQkFBZ0I7UUFDUCxlQUFlO1FBQ2pCLGFBQWE7R0E1QjNCLE9BQU8sQ0FtSm5CO1NBbkpZLE9BQU8iLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9ndWlkJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZVJlc3VsdCB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tICcuLi8uLi9ydWxlcy9hcnJheS1ydWxlcyc7XHJcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuQGluamVjdChcclxuICBBcnJheVJ1bGVzLFxyXG4gIEZvcm1TZXJ2aWNlLFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRGVmYXVsdHNTZXJ2aWNlLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudCgnc2YtYXJyYXknKVxyXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcclxuICBAYmluZGFibGUgZm9ybUluc3RhbmNlOiBzdHJpbmc7XHJcblxyXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcclxuXHJcbiAga2luZCA9ICdhcnJheSc7XHJcblxyXG4gIHZpZXdTdHJhdGVneTogc3RyaW5nO1xyXG5cclxuICBpdGVtVmlld1N0cmF0ZWd5OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIHRhYlRpdGxlVGVtcGxhdGU6IElubGluZVZpZXdTdHJhdGVneTtcclxuXHJcbiAgdmFsaWRhdGlvbkVycm9yczogc3RyaW5nW107XHJcblxyXG4gIGVycm9yczogVmFsaWRhdGVSZXN1bHRbXTtcclxuXHJcbiAgYmluZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGFycmF5UnVsZXM6IEFycmF5UnVsZXMsXHJcbiAgICBwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0c1NlcnZpY2U6IERlZmF1bHRzU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkge1xyXG5cclxuICB9XHJcblxyXG4gIGFzeW5jIGJpbmQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYmluZGVkKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLWFycmF5JywgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xyXG4gICAgICB0aGlzLmZvcm1DdHJsID0gdGhpcy5mb3JtSW5zdGFuY2VzLmdldCh0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICAgIHRoaXMuYmluZFJ1bGVzKCk7XHJcbiAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcztcclxuICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJdGVtVmlldygpO1xyXG4gICAgICBhd2FpdCB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xyXG4gICAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVBcnJheSgpO1xyXG4gICAgICB0aGlzLmJpbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBpbml0aWFsaXplQXJyYXkoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEuZW51bSB8fFxyXG4gICAgICAodGhpcy5tb2RlbCAmJiB0aGlzLm1vZGVsLmxlbmd0aCA+IDApIHx8XHJcbiAgICAgIHRoaXMuZm9ybS4kbm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb24gfHxcclxuICAgICAgdGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy5ub0VtcHR5QXJyYXlJbml0aWFsaXphdGlvblxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMuYWRkKCEhdGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2YtYXJyYXktYXR0YWNoZWQnKTtcclxuICAgIGlmICh0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xyXG4gICAgbGV0IHN0cmF0ZWd5O1xyXG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcclxuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJGFycmF5QXNUYWJzKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAhIXRoaXMuZm9ybS4kdGFiVGl0bGUgPyBgJHt0aGlzLmZvcm0uJHRhYlRpdGxlfWAgOiAnJHtcXCdJdGVtIFxcJyArICgkaW5kZXggKyAxKX0nO1xyXG4gICAgICB0aGlzLnRhYlRpdGxlVGVtcGxhdGUgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHtjb250ZW50fTwvdGVtcGxhdGU+YCk7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZVBhdGgoJ2FycmF5VGFicycpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy50eXBlID09PSAnc3RyaW5nJyAmJiB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy5lbnVtKSB7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZVBhdGgoJ2FycmF5U3RyaW5nRW51bScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldFRlbXBsYXRlUGF0aCgnYXJyYXknKTtcclxuICAgIH1cclxuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVJdGVtVmlldygpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2NyZWF0ZVZpZXcnLCB7IGZvcm06IHRoaXMuZm9ybS4kYXJyYXlJdGVtIH0pO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmZvcm1TZXJ2aWNlXHJcbiAgICAgIC5nZXRTZlRlbXBsYXRlKFxyXG4gICAgICAgICdtb2RlbFskaW5kZXhdJyxcclxuICAgICAgICAnZm9ybS4kYXJyYXlJdGVtJyxcclxuICAgICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLnR5cGUsXHJcbiAgICAgICAgdGhpcy5mb3JtSW5zdGFuY2VcclxuICAgICAgKTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2NyZWF0ZVZpZXctdGVtcGxhdGUnLCB7IHRlbXBsYXRlIH0pO1xyXG4gICAgdGhpcy5pdGVtVmlld1N0cmF0ZWd5ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7dGVtcGxhdGV9PC90ZW1wbGF0ZT5gKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZFJ1bGVzKCkge1xyXG4gICAgdGhpcy5hcnJheVJ1bGVzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZE9iamVjdCh0aGlzLm1vZGVsKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGFkZCh2YWxpZGF0ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuYXRDYXBhY2l0eSkge1xyXG4gICAgICBjb25zdCBpdGVtID0gYXdhaXQgdGhpcy5kZWZhdWx0c1NlcnZpY2UuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLCBudWxsKTtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm1vZGVsLnB1c2goaXRlbSkgLSAxO1xyXG4gICAgICB0aGlzLnNlbGVjdFRhYihpbmRleCk7XHJcbiAgICAgIGlmICh2YWxpZGF0ZSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVtb3ZlKGluZGV4OiBudW1iZXIsIHZhbGlkYXRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm1vZGVsLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLnNlbGVjdFRhYih0aGlzLm1vZGVsLmxlbmd0aCAtIDEpO1xyXG4gICAgaWYgKHZhbGlkYXRlKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0VGFiKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnRhYlRpdGxlVGVtcGxhdGUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChgYVtocmVmPVwiI3RhYl8ke3RoaXMuaWR9XyR7aW5kZXh9XCJdYCkudGFiKCdzaG93Jyk7XHJcbiAgICAgIH0sIDUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLnJlYWRPbmx5IHx8ICEhdGhpcy5mb3JtLiRzY2hlbWEuY29uc3Q7XHJcbiAgfVxyXG5cclxuICBnZXQgYXRDYXBhY2l0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKVxyXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID49IHRoaXMuZm9ybS4kc2NoZW1hLm1heEl0ZW1zIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgYXRNaW5pbXVtQ2FwYWNpdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5taW5JdGVtcylcclxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA9PT0gdGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3ZhbGlkYXRlZCBhcnJheScsIHJlc3VsdCk7XHJcbiAgICB0aGlzLmVycm9ycyA9IHJlc3VsdC5yZXN1bHRzXHJcbiAgICAgIC5maWx0ZXIoKHIpID0+ICFyLnZhbGlkKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
