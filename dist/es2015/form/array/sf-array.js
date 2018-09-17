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
import { customElement, bindable, inject, InlineViewStrategy } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { FormService } from "../../services/form-service";
import { ArrayRules } from "../../rules/array-rules";
import { DefaultsService } from "../../services/defaults-service";
import { FormInstances } from "../../services/form-instances";
import * as $ from "jquery";
let SfArray = class SfArray {
    constructor(arrayRules, configuration, formService, logger, defaultsService, formInstances) {
        this.arrayRules = arrayRules;
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.defaultsService = defaultsService;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.kind = "array";
        this.binded = false;
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.binded) {
                this.logger.info("sf-array", { form: this.form, model: this.model });
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
        this.logger.info("sf-array-attached");
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
                const content = !!this.form.$tabTitle ? `${this.form.$tabTitle}` : "${'Item ' + ($index + 1)}";
                this.tabTitleTemplate = new InlineViewStrategy(`<template>${content}</template>`);
                strategy = this.configuration.templates.arrayTabs;
            }
            else if (this.form.$schema.items.type === "string" && this.form.$schema.items.enum) {
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
            this.logger.info("createView", { form: this.form.$arrayItem });
            const template = this.formService
                .getSfTemplate("model[$index]", "form.$arrayItem", this.form.$arrayItem.$schema.type, this.formInstance);
            this.logger.info("createView-template", { template });
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
                $(`a[href="#tab_${this.id}_${index}"]`).tab("show");
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
            this.logger.info("validated array", result);
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
    customElement("sf-array"),
    __metadata("design:paramtypes", [ArrayRules,
        SchemaFormConfiguration,
        FormService,
        SchemaFormLogger,
        DefaultsService,
        FormInstances])
], SfArray);
export { SfArray };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDO1lBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRCxDQUFDO0lBRUssUUFBUTs7WUFDWixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU87aUJBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQW5KVztJQUFULFFBQVE7O3FDQUFxQjtBQUNwQjtJQUFULFFBQVE7O3NDQUFjO0FBQ2I7SUFBVCxRQUFROzs2Q0FBc0I7QUFIcEIsT0FBTztJQVRuQixNQUFNLENBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixhQUFhLENBQ2Q7SUFDQSxhQUFhLENBQUMsVUFBVSxDQUFDO3FDQXlCSCxVQUFVO1FBQ1AsdUJBQXVCO1FBQ3hCLFdBQVc7UUFDaEIsZ0JBQWdCO1FBQ1AsZUFBZTtRQUNqQixhQUFhO0dBN0IzQixPQUFPLENBb0puQjtTQXBKWSxPQUFPIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGVSZXN1bHQgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tIFwiLi4vLi4vcnVsZXMvYXJyYXktcnVsZXNcIjtcclxuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlc1wiO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbkBpbmplY3QoXHJcbiAgQXJyYXlSdWxlcyxcclxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICBGb3JtU2VydmljZSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIERlZmF1bHRzU2VydmljZSxcclxuICBGb3JtSW5zdGFuY2VzXHJcbilcclxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxyXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcclxuICBAYmluZGFibGUgZm9ybUluc3RhbmNlOiBzdHJpbmc7XHJcblxyXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcclxuXHJcbiAga2luZCA9IFwiYXJyYXlcIjtcclxuXHJcbiAgdmlld1N0cmF0ZWd5OiBzdHJpbmc7XHJcblxyXG4gIGl0ZW1WaWV3U3RyYXRlZ3k6IElubGluZVZpZXdTdHJhdGVneTtcclxuXHJcbiAgdGFiVGl0bGVUZW1wbGF0ZTogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXTtcclxuXHJcbiAgZXJyb3JzOiBWYWxpZGF0ZVJlc3VsdFtdO1xyXG5cclxuICBiaW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ3RybDogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYXJyYXlSdWxlczogQXJyYXlSdWxlcyxcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgYXN5bmMgYmluZCgpIHtcclxuICAgIGlmICghdGhpcy5iaW5kZWQpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5XCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcclxuICAgICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgICB0aGlzLmJpbmRSdWxlcygpO1xyXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEuaXRlbXM7XHJcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbVZpZXcoKTtcclxuICAgICAgYXdhaXQgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcclxuICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplQXJyYXkoKTtcclxuICAgICAgdGhpcy5iaW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdGlhbGl6ZUFycmF5KCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLmVudW0gfHxcclxuICAgICAgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggPiAwKSB8fFxyXG4gICAgICB0aGlzLmZvcm0uJG5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uIHx8XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMubm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb25cclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmFkZCghIXRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcik7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1hcnJheS1hdHRhY2hlZFwiKTtcclxuICAgIGlmICh0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xyXG4gICAgbGV0IHN0cmF0ZWd5O1xyXG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcclxuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJGFycmF5QXNUYWJzKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAhIXRoaXMuZm9ybS4kdGFiVGl0bGUgPyBgJHt0aGlzLmZvcm0uJHRhYlRpdGxlfWAgOiBcIiR7J0l0ZW0gJyArICgkaW5kZXggKyAxKX1cIjtcclxuICAgICAgdGhpcy50YWJUaXRsZVRlbXBsYXRlID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7Y29udGVudH08L3RlbXBsYXRlPmApO1xyXG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlUYWJzO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy50eXBlID09PSBcInN0cmluZ1wiICYmIHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLmVudW0pIHtcclxuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmFycmF5U3RyaW5nRW51bTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheTtcclxuICAgIH1cclxuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVJdGVtVmlldygpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVWaWV3XCIsIHsgZm9ybTogdGhpcy5mb3JtLiRhcnJheUl0ZW0gfSk7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZm9ybVNlcnZpY2VcclxuICAgICAgLmdldFNmVGVtcGxhdGUoXHJcbiAgICAgICAgXCJtb2RlbFskaW5kZXhdXCIsXHJcbiAgICAgICAgXCJmb3JtLiRhcnJheUl0ZW1cIixcclxuICAgICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLnR5cGUsXHJcbiAgICAgICAgdGhpcy5mb3JtSW5zdGFuY2VcclxuICAgICAgKTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVWaWV3LXRlbXBsYXRlXCIsIHsgdGVtcGxhdGUgfSk7XHJcbiAgICB0aGlzLml0ZW1WaWV3U3RyYXRlZ3kgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZX08L3RlbXBsYXRlPmApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kUnVsZXMoKSB7XHJcbiAgICB0aGlzLmFycmF5UnVsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkT2JqZWN0KHRoaXMubW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgYWRkKHZhbGlkYXRlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5hdENhcGFjaXR5KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmModGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMsIG51bGwpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubW9kZWwucHVzaChpdGVtKSAtIDE7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGFiKGluZGV4KTtcclxuICAgICAgaWYgKHZhbGlkYXRlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyByZW1vdmUoaW5kZXg6IG51bWJlciwgdmFsaWRhdGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMubW9kZWwubGVuZ3RoIC0gMSk7XHJcbiAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RUYWIoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudGFiVGl0bGVUZW1wbGF0ZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKGBhW2hyZWY9XCIjdGFiXyR7dGhpcy5pZH1fJHtpbmRleH1cIl1gKS50YWIoXCJzaG93XCIpO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kc2NoZW1hLmNvbnN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcylcclxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA+PSB0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMpXHJcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhc3luYyB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidmFsaWRhdGVkIGFycmF5XCIsIHJlc3VsdCk7XHJcbiAgICB0aGlzLmVycm9ycyA9IHJlc3VsdC5yZXN1bHRzXHJcbiAgICAgIC5maWx0ZXIoKHIpID0+ICFyLnZhbGlkKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
