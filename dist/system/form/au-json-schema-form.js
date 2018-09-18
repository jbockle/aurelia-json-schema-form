System.register(["aurelia-validation", "aurelia-framework", "../services/schema-form-configuration", "../resources/logger", "./form-controller", "../services/form-service", "../resources/guid", "../services/form-instances"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, logger_1, form_controller_1, form_service_1, guid_1, form_instances_1, AuJsonSchemaForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (form_controller_1_1) {
                form_controller_1 = form_controller_1_1;
            },
            function (form_service_1_1) {
                form_service_1 = form_service_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (form_instances_1_1) {
                form_instances_1 = form_instances_1_1;
            }
        ],
        execute: function () {
            AuJsonSchemaForm = /** @class */ (function () {
                function AuJsonSchemaForm(validationControllerFactory, configuration, logger, formService, formInstances) {
                    this.validationControllerFactory = validationControllerFactory;
                    this.configuration = configuration;
                    this.logger = logger;
                    this.formService = formService;
                    this.formInstances = formInstances;
                    this.log = logger.info;
                    this.id = guid_1.Guid.newGuid();
                }
                AuJsonSchemaForm.prototype.schemaChanged = function () {
                    this.log('schemaChanged');
                    this.buildForm();
                };
                AuJsonSchemaForm.prototype.formChanged = function () {
                    this.log('formChanged');
                    this.buildForm();
                };
                AuJsonSchemaForm.prototype.bind = function () {
                    this.log('bind', arguments);
                    this.buildForm();
                };
                AuJsonSchemaForm.prototype.createValidationController = function () {
                    if (this.validationController === undefined) {
                        this.validationController = this.validationControllerFactory.createForCurrentScope();
                        this.validationController.addRenderer(this.configuration.validationRenderer);
                    }
                };
                AuJsonSchemaForm.prototype.buildForm = function () {
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
                };
                AuJsonSchemaForm.prototype.buildViewStrategy = function () {
                    this.log('buildViewStrategy');
                    this.form.$schema = this.schema;
                    this.formView = new aurelia_framework_1.InlineViewStrategy("<template>" + this.formService.getSfTemplate('model', 'form', this.schema.type, this.id) + "</template>");
                    this.formInstance = {
                        schema: this.schema,
                        form: this.form,
                        formController: new form_controller_1.FormController(this.logger, this.options, this.validationController),
                        validationController: this.validationController,
                        formOptions: this.options
                    };
                    this.logger.warn('buildViewStrategy completed', this.formInstance);
                    this.formInstances.set(this.id, this.formInstance);
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuJsonSchemaForm.prototype, "schema", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuJsonSchemaForm.prototype, "form", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], AuJsonSchemaForm.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuJsonSchemaForm.prototype, "options", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", aurelia_validation_1.ValidationController)
                ], AuJsonSchemaForm.prototype, "validationController", void 0);
                AuJsonSchemaForm = __decorate([
                    aurelia_framework_1.inject(aurelia_validation_1.ValidationControllerFactory, schema_form_configuration_1.SchemaFormConfiguration, logger_1.SchemaFormLogger, form_service_1.FormService, form_instances_1.FormInstances),
                    aurelia_framework_1.customElement('au-json-schema-form'),
                    __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory,
                        schema_form_configuration_1.SchemaFormConfiguration,
                        logger_1.SchemaFormLogger,
                        form_service_1.FormService,
                        form_instances_1.FormInstances])
                ], AuJsonSchemaForm);
                return AuJsonSchemaForm;
            }());
            exports_1("AuJsonSchemaForm", AuJsonSchemaForm);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBd0NFLDBCQUNVLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUN0QyxNQUF3QixFQUN4QixXQUF3QixFQUN4QixhQUE0QjtvQkFKNUIsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtvQkFDeEQsa0JBQWEsR0FBYixhQUFhLENBQXlCO29CQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQUVwQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELHdDQUFhLEdBQWI7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUVELHNDQUFXLEdBQVg7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUVELCtCQUFJLEdBQUo7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxxREFBMEIsR0FBMUI7b0JBQ0UsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssU0FBUyxFQUFFO3dCQUMzQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLHFCQUFxQixFQUFFLENBQUM7d0JBQ3JGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3FCQUM5RTtnQkFDSCxDQUFDO2dCQUVELG9DQUFTLEdBQVQ7b0JBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO3dCQUN0RSxPQUFPO3FCQUNSO29CQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7cUJBQ3RCO29CQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDRDQUFpQixHQUFqQjtvQkFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxzQ0FBa0IsQ0FDcEMsZUFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWEsQ0FBQyxDQUFDO29CQUN4RyxJQUFJLENBQUMsWUFBWSxHQUFHO3dCQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07d0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixjQUFjLEVBQUUsSUFBSSxnQ0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7d0JBQ3hGLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7d0JBQy9DLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTztxQkFDMUIsQ0FBQztvQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQTlFUztvQkFBVCw0QkFBUTs7Z0VBQStCO2dCQUU5QjtvQkFBVCw0QkFBUTs7OERBQXFCO2dCQUV3QjtvQkFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OytEQUFPO2dCQUVsRDtvQkFBVCw0QkFBUTs7aUVBQXVCO2dCQUV0QjtvQkFBVCw0QkFBUTs4Q0FBdUIseUNBQW9COzhFQUFDO2dCQVQxQyxnQkFBZ0I7b0JBUjVCLDBCQUFNLENBQ0wsZ0RBQTJCLEVBQzNCLG1EQUF1QixFQUN2Qix5QkFBZ0IsRUFDaEIsMEJBQVcsRUFDWCw4QkFBYSxDQUNkO29CQUNBLGlDQUFhLENBQUMscUJBQXFCLENBQUM7cURBcUJJLGdEQUEyQjt3QkFDekMsbURBQXVCO3dCQUM5Qix5QkFBZ0I7d0JBQ1gsMEJBQVc7d0JBQ1QsOEJBQWE7bUJBeEIzQixnQkFBZ0IsQ0FnRjVCO2dCQUFELHVCQUFDO2FBaEZELEFBZ0ZDOztRQUNELENBQUMiLCJmaWxlIjoiZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCwgYmluZGluZ01vZGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gJy4vZm9ybS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hRGVmaW5pdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvbic7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4uL3Jlc291cmNlcy9ndWlkJztcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlcyc7XHJcblxyXG5AaW5qZWN0KFxyXG4gIFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcclxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIEZvcm1TZXJ2aWNlLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudCgnYXUtanNvbi1zY2hlbWEtZm9ybScpXHJcbmV4cG9ydCBjbGFzcyBBdUpzb25TY2hlbWFGb3JtIHtcclxuICBAYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb247XHJcblxyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG5cclxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBtb2RlbDtcclxuXHJcbiAgQGJpbmRhYmxlIG9wdGlvbnM6IElGb3JtT3B0aW9ucztcclxuXHJcbiAgQGJpbmRhYmxlIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcclxuXHJcbiAgZm9ybVZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcclxuXHJcbiAgZm9ybUluc3RhbmNlOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGxvZzogKG1lc3NhZ2U6IHN0cmluZywgLi4ucmVzdDogYW55W10pID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3Rvcnk6IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxvZyA9IGxvZ2dlci5pbmZvO1xyXG4gICAgdGhpcy5pZCA9IEd1aWQubmV3R3VpZCgpO1xyXG4gIH1cclxuXHJcbiAgc2NoZW1hQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMubG9nKCdzY2hlbWFDaGFuZ2VkJyk7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgZm9ybUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLmxvZygnZm9ybUNoYW5nZWQnKTtcclxuICAgIHRoaXMuYnVpbGRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2coJ2JpbmQnLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVZhbGlkYXRpb25Db250cm9sbGVyKCkge1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyID0gdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnkuY3JlYXRlRm9yQ3VycmVudFNjb3BlKCk7XHJcbiAgICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkUmVuZGVyZXIodGhpcy5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25SZW5kZXJlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidWlsZEZvcm0oKSB7XHJcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSAhPT0gJ29iamVjdCcgJiYgdGhpcy5zY2hlbWEudHlwZSAhPT0gJ2FycmF5Jykge1xyXG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcignVGhlIHNjaGVtYSBtdXN0IHN0YXJ0IHdpdGggYW4gb2JqZWN0IG9yIGFuIGFycmF5Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvcm1WaWV3KSB7XHJcbiAgICAgIHRoaXMuZm9ybVZpZXcgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2coJ2J1aWxkRm9ybScsIHRoaXMub3B0aW9ucyk7XHJcbiAgICB0aGlzLmNyZWF0ZVZhbGlkYXRpb25Db250cm9sbGVyKCk7XHJcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XHJcbiAgfVxyXG5cclxuICBidWlsZFZpZXdTdHJhdGVneSgpIHtcclxuICAgIHRoaXMubG9nKCdidWlsZFZpZXdTdHJhdGVneScpO1xyXG4gICAgdGhpcy5mb3JtLiRzY2hlbWEgPSB0aGlzLnNjaGVtYTtcclxuICAgIHRoaXMuZm9ybVZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxyXG4gICAgICBgPHRlbXBsYXRlPiR7dGhpcy5mb3JtU2VydmljZS5nZXRTZlRlbXBsYXRlKCdtb2RlbCcsICdmb3JtJywgdGhpcy5zY2hlbWEudHlwZSwgdGhpcy5pZCl9PC90ZW1wbGF0ZT5gKTtcclxuICAgIHRoaXMuZm9ybUluc3RhbmNlID0ge1xyXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLFxyXG4gICAgICBmb3JtOiB0aGlzLmZvcm0sXHJcbiAgICAgIGZvcm1Db250cm9sbGVyOiBuZXcgRm9ybUNvbnRyb2xsZXIodGhpcy5sb2dnZXIsIHRoaXMub3B0aW9ucywgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciksXHJcbiAgICAgIHZhbGlkYXRpb25Db250cm9sbGVyOiB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLFxyXG4gICAgICBmb3JtT3B0aW9uczogdGhpcy5vcHRpb25zXHJcbiAgICB9O1xyXG4gICAgdGhpcy5sb2dnZXIud2FybignYnVpbGRWaWV3U3RyYXRlZ3kgY29tcGxldGVkJywgdGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5mb3JtSW5zdGFuY2VzLnNldCh0aGlzLmlkLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
