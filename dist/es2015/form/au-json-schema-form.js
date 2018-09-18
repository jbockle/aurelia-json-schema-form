var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ValidationControllerFactory, ValidationController } from 'aurelia-validation';
import { inject, bindable, InlineViewStrategy, customElement, bindingMode } from 'aurelia-framework';
import { SchemaFormConfiguration } from '../services/schema-form-configuration';
import { SchemaFormLogger } from '../resources/logger';
import { FormController } from './form-controller';
import { FormService } from '../services/form-service';
import { Guid } from '../resources/guid';
import { FormInstances } from '../services/form-instances';
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
        this.log('schemaChanged');
        this.buildForm();
    }
    formChanged() {
        this.log('formChanged');
        this.buildForm();
    }
    bind() {
        this.log('bind', arguments);
        this.buildForm();
    }
    createValidationController() {
        if (this.validationController === undefined) {
            this.validationController = this.validationControllerFactory.createForCurrentScope();
            this.validationController.addRenderer(this.configuration.validationRenderer);
        }
    }
    buildForm() {
        if (this.schema.type !== 'object' && this.schema.type !== 'array') {
            this.logger.error('The schema must start with an object or an array');
            return;
        }
        if (this.formView) {
            this.formView = null;
        }
        this.log('buildForm', this.options);
        this.createValidationController();
        this.buildViewStrategy();
    }
    buildViewStrategy() {
        this.log('buildViewStrategy');
        this.form.$schema = this.schema;
        this.formView = new InlineViewStrategy(`<template>${this.formService.getSfTemplate('model', 'form', this.schema.type, this.id)}</template>`);
        this.formInstance = {
            schema: this.schema,
            form: this.form,
            formController: new FormController(this.logger, this.options, this.validationController),
            validationController: this.validationController,
            formOptions: this.options
        };
        this.logger.warn('buildViewStrategy completed', this.formInstance);
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
    customElement('au-json-schema-form'),
    __metadata("design:paramtypes", [ValidationControllerFactory,
        SchemaFormConfiguration,
        SchemaFormLogger,
        FormService,
        FormInstances])
], AuJsonSchemaForm);
export { AuJsonSchemaForm };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBVTNELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBbUIzQixZQUNVLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUN0QyxNQUF3QixFQUN4QixXQUF3QixFQUN4QixhQUE0QjtRQUo1QixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUVwQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFCLElB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LENBQUMscUJBQXFCLENBQUM7cUNBcUJJLDJCQUEyQjtRQUN6Qyx1QkFBdUI7UUFDOUIsZ0JBQWdCO1FBQ1gsV0FBVztRQUNULGFBQWE7R0F4QjNCLGdCQUFnQixDQWdGNUI7U0FoRlksZ0JBQWdCIiwiZmlsZSI6ImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlLCBJbmxpbmVWaWV3U3RyYXRlZ3ksIGN1c3RvbUVsZW1lbnQsIGJpbmRpbmdNb2RlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9ucyc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tICcuL2Zvcm0tY29udHJvbGxlcic7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb24nO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZSc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2UnO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSAnLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xyXG5cclxuQGluamVjdChcclxuICBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgU2NoZW1hRm9ybUxvZ2dlcixcclxuICBGb3JtU2VydmljZSxcclxuICBGb3JtSW5zdGFuY2VzXHJcbilcclxuQGN1c3RvbUVsZW1lbnQoJ2F1LWpzb24tc2NoZW1hLWZvcm0nKVxyXG5leHBvcnQgY2xhc3MgQXVKc29uU2NoZW1hRm9ybSB7XHJcbiAgQGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uO1xyXG5cclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuXHJcbiAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgbW9kZWw7XHJcblxyXG4gIEBiaW5kYWJsZSBvcHRpb25zOiBJRm9ybU9wdGlvbnM7XHJcblxyXG4gIEBiaW5kYWJsZSB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XHJcblxyXG4gIGZvcm1WaWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIGZvcm1JbnN0YW5jZTogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5OiBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkge1xyXG4gICAgdGhpcy5sb2cgPSBsb2dnZXIuaW5mbztcclxuICAgIHRoaXMuaWQgPSBHdWlkLm5ld0d1aWQoKTtcclxuICB9XHJcblxyXG4gIHNjaGVtYUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLmxvZygnc2NoZW1hQ2hhbmdlZCcpO1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIGZvcm1DaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5sb2coJ2Zvcm1DaGFuZ2VkJyk7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMubG9nKCdiaW5kJywgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuYnVpbGRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVWYWxpZGF0aW9uQ29udHJvbGxlcigpIHtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LmNyZWF0ZUZvckN1cnJlbnRTY29wZSgpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZFJlbmRlcmVyKHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnVpbGRGb3JtKCkge1xyXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgIT09ICdvYmplY3QnICYmIHRoaXMuc2NoZW1hLnR5cGUgIT09ICdhcnJheScpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ1RoZSBzY2hlbWEgbXVzdCBzdGFydCB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb3JtVmlldykge1xyXG4gICAgICB0aGlzLmZvcm1WaWV3ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMubG9nKCdidWlsZEZvcm0nLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5jcmVhdGVWYWxpZGF0aW9uQ29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XHJcbiAgICB0aGlzLmxvZygnYnVpbGRWaWV3U3RyYXRlZ3knKTtcclxuICAgIHRoaXMuZm9ybS4kc2NoZW1hID0gdGhpcy5zY2hlbWE7XHJcbiAgICB0aGlzLmZvcm1WaWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShcclxuICAgICAgYDx0ZW1wbGF0ZT4ke3RoaXMuZm9ybVNlcnZpY2UuZ2V0U2ZUZW1wbGF0ZSgnbW9kZWwnLCAnZm9ybScsIHRoaXMuc2NoZW1hLnR5cGUsIHRoaXMuaWQpfTwvdGVtcGxhdGU+YCk7XHJcbiAgICB0aGlzLmZvcm1JbnN0YW5jZSA9IHtcclxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSxcclxuICAgICAgZm9ybTogdGhpcy5mb3JtLFxyXG4gICAgICBmb3JtQ29udHJvbGxlcjogbmV3IEZvcm1Db250cm9sbGVyKHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMsIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIpLFxyXG4gICAgICB2YWxpZGF0aW9uQ29udHJvbGxlcjogdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlcixcclxuICAgICAgZm9ybU9wdGlvbnM6IHRoaXMub3B0aW9uc1xyXG4gICAgfTtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oJ2J1aWxkVmlld1N0cmF0ZWd5IGNvbXBsZXRlZCcsIHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIHRoaXMuZm9ybUluc3RhbmNlcy5zZXQodGhpcy5pZCwgdGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
