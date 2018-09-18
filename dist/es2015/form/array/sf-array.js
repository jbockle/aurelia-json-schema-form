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
import { SchemaFormConfiguration } from '../../services/schema-form-configuration';
import { SchemaFormLogger } from '../../resources/logger';
import { FormService } from '../../services/form-service';
import { ArrayRules } from '../../rules/array-rules';
import { DefaultsService } from '../../services/defaults-service';
import { FormInstances } from '../../services/form-instances';
import * as $ from 'jquery';
let SfArray = class SfArray {
    constructor(arrayRules, configuration, formService, logger, defaultsService, formInstances) {
        this.arrayRules = arrayRules;
        this.configuration = configuration;
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
                strategy = this.configuration.templates.arrayTabs;
            }
            else if (this.form.$schema.items.type === 'string' && this.form.$schema.items.enum) {
                strategy = this.configuration.templates.arrayStringEnum;
            }
            else {
                strategy = this.configuration.templates.array;
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
    inject(ArrayRules, SchemaFormConfiguration, FormService, SchemaFormLogger, DefaultsService, FormInstances),
    customElement('sf-array'),
    __metadata("design:paramtypes", [ArrayRules,
        SchemaFormConfiguration,
        FormService,
        SchemaFormLogger,
        DefaultsService,
        FormInstances])
], SfArray);
export { SfArray };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDO1lBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRCxDQUFDO0lBRUssUUFBUTs7WUFDWixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU87aUJBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQW5KVztJQUFULFFBQVE7O3FDQUFxQjtBQUNwQjtJQUFULFFBQVE7O3NDQUFjO0FBQ2I7SUFBVCxRQUFROzs2Q0FBc0I7QUFIcEIsT0FBTztJQVRuQixNQUFNLENBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixhQUFhLENBQ2Q7SUFDQSxhQUFhLENBQUMsVUFBVSxDQUFDO3FDQXlCSCxVQUFVO1FBQ1AsdUJBQXVCO1FBQ3hCLFdBQVc7UUFDaEIsZ0JBQWdCO1FBQ1AsZUFBZTtRQUNqQixhQUFhO0dBN0IzQixPQUFPLENBb0puQjtTQXBKWSxPQUFPIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdGVSZXN1bHQgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSAnLi4vLi4vcnVsZXMvYXJyYXktcnVsZXMnO1xyXG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbkBpbmplY3QoXHJcbiAgQXJyYXlSdWxlcyxcclxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICBGb3JtU2VydmljZSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIERlZmF1bHRzU2VydmljZSxcclxuICBGb3JtSW5zdGFuY2VzXHJcbilcclxuQGN1c3RvbUVsZW1lbnQoJ3NmLWFycmF5JylcclxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSAnYXJyYXknO1xyXG5cclxuICB2aWV3U3RyYXRlZ3k6IHN0cmluZztcclxuXHJcbiAgaXRlbVZpZXdTdHJhdGVneTogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICB0YWJUaXRsZVRlbXBsYXRlOiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdO1xyXG5cclxuICBlcnJvcnM6IFZhbGlkYXRlUmVzdWx0W107XHJcblxyXG4gIGJpbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzLFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZGVmYXVsdHNTZXJ2aWNlOiBEZWZhdWx0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHtcclxuXHJcbiAgfVxyXG5cclxuICBhc3luYyBiaW5kKCkge1xyXG4gICAgaWYgKCF0aGlzLmJpbmRlZCkge1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1hcnJheScsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcclxuICAgICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgICB0aGlzLmJpbmRSdWxlcygpO1xyXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEuaXRlbXM7XHJcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbVZpZXcoKTtcclxuICAgICAgYXdhaXQgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcclxuICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplQXJyYXkoKTtcclxuICAgICAgdGhpcy5iaW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdGlhbGl6ZUFycmF5KCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLmVudW0gfHxcclxuICAgICAgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggPiAwKSB8fFxyXG4gICAgICB0aGlzLmZvcm0uJG5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uIHx8XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMubm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb25cclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmFkZCghIXRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcik7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLWFycmF5LWF0dGFjaGVkJyk7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcclxuICAgIGxldCBzdHJhdGVneTtcclxuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRhcnJheUFzVGFicykge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gISF0aGlzLmZvcm0uJHRhYlRpdGxlID8gYCR7dGhpcy5mb3JtLiR0YWJUaXRsZX1gIDogJyR7XFwnSXRlbSBcXCcgKyAoJGluZGV4ICsgMSl9JztcclxuICAgICAgdGhpcy50YWJUaXRsZVRlbXBsYXRlID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7Y29udGVudH08L3RlbXBsYXRlPmApO1xyXG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlUYWJzO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy50eXBlID09PSAnc3RyaW5nJyAmJiB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy5lbnVtKSB7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheVN0cmluZ0VudW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpZXdTdHJhdGVneSA9IHN0cmF0ZWd5O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlSXRlbVZpZXcoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdjcmVhdGVWaWV3JywgeyBmb3JtOiB0aGlzLmZvcm0uJGFycmF5SXRlbSB9KTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZVxyXG4gICAgICAuZ2V0U2ZUZW1wbGF0ZShcclxuICAgICAgICAnbW9kZWxbJGluZGV4XScsXHJcbiAgICAgICAgJ2Zvcm0uJGFycmF5SXRlbScsXHJcbiAgICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYS50eXBlLFxyXG4gICAgICAgIHRoaXMuZm9ybUluc3RhbmNlXHJcbiAgICAgICk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdjcmVhdGVWaWV3LXRlbXBsYXRlJywgeyB0ZW1wbGF0ZSB9KTtcclxuICAgIHRoaXMuaXRlbVZpZXdTdHJhdGVneSA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlfTwvdGVtcGxhdGU+YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRSdWxlcygpIHtcclxuICAgIHRoaXMuYXJyYXlSdWxlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBhZGQodmFsaWRhdGU6IGJvb2xlYW4pIHtcclxuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmF0Q2FwYWNpdHkpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcywgbnVsbCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tb2RlbC5wdXNoKGl0ZW0pIC0gMTtcclxuICAgICAgdGhpcy5zZWxlY3RUYWIoaW5kZXgpO1xyXG4gICAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHJlbW92ZShpbmRleDogbnVtYmVyLCB2YWxpZGF0ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5zZWxlY3RUYWIodGhpcy5tb2RlbC5sZW5ndGggLSAxKTtcclxuICAgIGlmICh2YWxpZGF0ZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdFRhYihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy50YWJUaXRsZVRlbXBsYXRlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoYGFbaHJlZj1cIiN0YWJfJHt0aGlzLmlkfV8ke2luZGV4fVwiXWApLnRhYignc2hvdycpO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kc2NoZW1hLmNvbnN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcylcclxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA+PSB0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMpXHJcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhc3luYyB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCd2YWxpZGF0ZWQgYXJyYXknLCByZXN1bHQpO1xyXG4gICAgdGhpcy5lcnJvcnMgPSByZXN1bHQucmVzdWx0c1xyXG4gICAgICAuZmlsdGVyKChyKSA9PiAhci52YWxpZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
