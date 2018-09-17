var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { inject, bindable, InlineViewStrategy, customElement, bindingMode } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { SchemaFormLogger } from "../resources/logger";
import { FormController } from "./form-controller";
import { FormService } from "../services/form-service";
import { Guid } from "../resources/guid";
import { FormInstances } from "../services/form-instances";
let AuJsonSchemaForm = class AuJsonSchemaForm {
    constructor(validationControllerFactory, configuration, logger, formService, formInstances) {
        this.validationControllerFactory = validationControllerFactory;
        this.configuration = configuration;
        this.logger = logger;
        this.formService = formService;
        this.formInstances = formInstances;
        this.log = logger.info;
        this.id = Guid.newGuid();
    }
    schemaChanged() {
        this.log("schemaChanged");
        this.buildForm();
    }
    formChanged() {
        this.log("formChanged");
        this.buildForm();
    }
    bind() {
        this.log("bind", arguments);
        this.buildForm();
    }
    createValidationController() {
        if (this.validationController === undefined) {
            this.validationController = this.validationControllerFactory.createForCurrentScope();
            this.validationController.addRenderer(this.configuration.validationRenderer);
        }
    }
    buildForm() {
        if (this.schema.type !== "object" && this.schema.type !== "array") {
            this.logger.error("The schema must start with an object or an array");
            return;
        }
        if (this.formView) {
            this.formView = null;
        }
        this.log("buildForm", this.options);
        this.createValidationController();
        this.buildViewStrategy();
    }
    buildViewStrategy() {
        this.log("buildViewStrategy");
        this.form.$schema = this.schema;
        this.formView = new InlineViewStrategy(`<template>${this.formService.getSfTemplate("model", "form", this.schema.type, this.id)}</template>`);
        this.formInstance = {
            schema: this.schema,
            form: this.form,
            formController: new FormController(this.logger, this.options, this.validationController),
            validationController: this.validationController,
            formOptions: this.options
        };
        this.logger.warn("buildViewStrategy completed", this.formInstance);
        this.formInstances.set(this.id, this.formInstance);
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], AuJsonSchemaForm.prototype, "schema", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], AuJsonSchemaForm.prototype, "form", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], AuJsonSchemaForm.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], AuJsonSchemaForm.prototype, "options", void 0);
__decorate([
    bindable,
    __metadata("design:type", ValidationController)
], AuJsonSchemaForm.prototype, "validationController", void 0);
AuJsonSchemaForm = __decorate([
    inject(ValidationControllerFactory, SchemaFormConfiguration, SchemaFormLogger, FormService, FormInstances),
    customElement("au-json-schema-form"),
    __metadata("design:paramtypes", [ValidationControllerFactory,
        SchemaFormConfiguration,
        SchemaFormLogger,
        FormService,
        FormInstances])
], AuJsonSchemaForm);
export { AuJsonSchemaForm };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQWEsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBVTNELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBbUIzQixZQUNVLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUN0QyxNQUF3QixFQUN4QixXQUF3QixFQUN4QixhQUE0QjtRQUo1QixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUVwQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFCLElB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LENBQUMscUJBQXFCLENBQUM7cUNBcUJJLDJCQUEyQjtRQUN6Qyx1QkFBdUI7UUFDOUIsZ0JBQWdCO1FBQ1gsV0FBVztRQUNULGFBQWE7R0F4QjNCLGdCQUFnQixDQWdGNUI7U0FoRlksZ0JBQWdCIiwiZmlsZSI6ImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCwgQ29udGFpbmVyLCBiaW5kaW5nTW9kZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb3JtLWNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi9yZXNvdXJjZXMvZ3VpZFwiO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XHJcblxyXG5AaW5qZWN0KFxyXG4gIFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcclxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIEZvcm1TZXJ2aWNlLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudChcImF1LWpzb24tc2NoZW1hLWZvcm1cIilcclxuZXhwb3J0IGNsYXNzIEF1SnNvblNjaGVtYUZvcm0ge1xyXG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcclxuXHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcblxyXG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIG1vZGVsO1xyXG5cclxuICBAYmluZGFibGUgb3B0aW9uczogSUZvcm1PcHRpb25zO1xyXG5cclxuICBAYmluZGFibGUgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xyXG5cclxuICBmb3JtVmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICBmb3JtSW5zdGFuY2U6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgbG9nOiAobWVzc2FnZTogc3RyaW5nLCAuLi5yZXN0OiBhbnlbXSkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHtcclxuICAgIHRoaXMubG9nID0gbG9nZ2VyLmluZm87XHJcbiAgICB0aGlzLmlkID0gR3VpZC5uZXdHdWlkKCk7XHJcbiAgfVxyXG5cclxuICBzY2hlbWFDaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5sb2coXCJzY2hlbWFDaGFuZ2VkXCIpO1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIGZvcm1DaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5sb2coXCJmb3JtQ2hhbmdlZFwiKTtcclxuICAgIHRoaXMuYnVpbGRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2coXCJiaW5kXCIsIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVmFsaWRhdGlvbkNvbnRyb2xsZXIoKSB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRSZW5kZXJlcih0aGlzLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1aWxkRm9ybSgpIHtcclxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlICE9PSBcIm9iamVjdFwiICYmIHRoaXMuc2NoZW1hLnR5cGUgIT09IFwiYXJyYXlcIikge1xyXG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlRoZSBzY2hlbWEgbXVzdCBzdGFydCB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9ybVZpZXcpIHtcclxuICAgICAgdGhpcy5mb3JtVmlldyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZyhcImJ1aWxkRm9ybVwiLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5jcmVhdGVWYWxpZGF0aW9uQ29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XHJcbiAgICB0aGlzLmxvZyhcImJ1aWxkVmlld1N0cmF0ZWd5XCIpO1xyXG4gICAgdGhpcy5mb3JtLiRzY2hlbWEgPSB0aGlzLnNjaGVtYTtcclxuICAgIHRoaXMuZm9ybVZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxyXG4gICAgICBgPHRlbXBsYXRlPiR7dGhpcy5mb3JtU2VydmljZS5nZXRTZlRlbXBsYXRlKFwibW9kZWxcIiwgXCJmb3JtXCIsIHRoaXMuc2NoZW1hLnR5cGUsIHRoaXMuaWQpfTwvdGVtcGxhdGU+YCk7XHJcbiAgICB0aGlzLmZvcm1JbnN0YW5jZSA9IHtcclxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSxcclxuICAgICAgZm9ybTogdGhpcy5mb3JtLFxyXG4gICAgICBmb3JtQ29udHJvbGxlcjogbmV3IEZvcm1Db250cm9sbGVyKHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMsIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIpLFxyXG4gICAgICB2YWxpZGF0aW9uQ29udHJvbGxlcjogdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlcixcclxuICAgICAgZm9ybU9wdGlvbnM6IHRoaXMub3B0aW9uc1xyXG4gICAgfTtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJidWlsZFZpZXdTdHJhdGVneSBjb21wbGV0ZWRcIiwgdGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5mb3JtSW5zdGFuY2VzLnNldCh0aGlzLmlkLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
