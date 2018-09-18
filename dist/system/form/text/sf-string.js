System.register(["aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory", "../../resources/logger", "../../services/form-instances"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1, form_instances_1, SfString;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (rules_factory_1_1) {
                rules_factory_1 = rules_factory_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (form_instances_1_1) {
                form_instances_1 = form_instances_1_1;
            }
        ],
        execute: function () {
            SfString = /** @class */ (function () {
                function SfString(configuration, rules, logger, formInstances) {
                    this.configuration = configuration;
                    this.rules = rules;
                    this.logger = logger;
                    this.formInstances = formInstances;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = 'string';
                }
                SfString.prototype.modelChanged = function (newValue, oldValue) {
                    if (this.form.$onChange) {
                        this.form.$onChange(newValue, oldValue);
                    }
                };
                SfString.prototype.attached = function () {
                    this.logger.info('sf-string-attached');
                    if (this.formCtrl.formOptions.validateOnRender) {
                        this.formCtrl.validationController.validate({ object: this, propertyName: 'model' });
                    }
                };
                SfString.prototype.bind = function () {
                    this.logger.info('sf-string', { form: this.form, model: this.model }, arguments);
                    this.formCtrl = this.formInstances.get(this.formInstance);
                    this.rules.bind(this);
                    this.determineViewStrategy();
                };
                SfString.prototype.determineViewStrategy = function () {
                    this.view = this.configuration.templates.string;
                    if (this.form.$altTemplate) {
                        this.view = this.form.$altTemplate;
                    }
                    else if (this.form.$schema.enum && this.form.$schema.enum.length <= 5) {
                        this.view = this.configuration.templates.stringRadioEnum;
                    }
                    else if (this.form.$schema.enum) {
                        this.view = this.configuration.templates.stringSelectEnum;
                    }
                    else if (['date-time', 'date', 'time'].indexOf(this.form.$schema.format) > -1) {
                        if (this.configuration.templates.formats
                            && this.configuration.templates.formats[this.form.$schema.format]) {
                            this.view = this.configuration.templates.formats[this.form.$schema.format];
                        }
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfString.prototype, "form", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfString.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfString.prototype, "formInstance", void 0);
                SfString = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
                    aurelia_framework_1.customElement('sf-string'),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                        rules_factory_1.RulesFactory,
                        logger_1.SchemaFormLogger,
                        form_instances_1.FormInstances])
                ], SfString);
                return SfString;
            }());
            exports_1("SfString", SfString);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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TyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUNuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDNUU7cUJBQ0Y7Z0JBQ0gsQ0FBQztnQkFyRFM7b0JBQVQsNEJBQVE7O3NEQUFxQjtnQkFDcEI7b0JBQVQsNEJBQVE7O3VEQUFlO2dCQUNkO29CQUFULDRCQUFROzs4REFBc0I7Z0JBSHBCLFFBQVE7b0JBUHBCLDBCQUFNLENBQ0wsbURBQXVCLEVBQ3ZCLDRCQUFZLEVBQ1oseUJBQWdCLEVBQ2hCLDhCQUFhLENBQ2Q7b0JBQ0EsaUNBQWEsQ0FBQyxXQUFXLENBQUM7cURBZUQsbURBQXVCO3dCQUMvQiw0QkFBWTt3QkFDVix5QkFBZ0I7d0JBQ1QsOEJBQWE7bUJBakIzQixRQUFRLENBdURwQjtnQkFBRCxlQUFDO2FBdkRELEFBdURDOztRQUNELENBQUMiLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gJy4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnknO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcclxuXHJcbkBpbmplY3QoXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgUnVsZXNGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KCdzZi1zdHJpbmcnKVxyXG5leHBvcnQgY2xhc3MgU2ZTdHJpbmcge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogc3RyaW5nO1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICBraW5kID0gJ3N0cmluZyc7XHJcblxyXG4gIHZpZXc7XHJcblxyXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnksXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkgeyB9XHJcblxyXG4gIG1vZGVsQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uJG9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuZm9ybS4kb25DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2Ytc3RyaW5nLWF0dGFjaGVkJyk7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMsIHByb3BlcnR5TmFtZTogJ21vZGVsJyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1zdHJpbmcnLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwgfSwgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuc3RyaW5nO1xyXG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRzY2hlbWEuZW51bSAmJiB0aGlzLmZvcm0uJHNjaGVtYS5lbnVtLmxlbmd0aCA8PSA1KSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuc3RyaW5nUmFkaW9FbnVtO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5lbnVtKSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuc3RyaW5nU2VsZWN0RW51bTtcclxuICAgIH0gZWxzZSBpZiAoWydkYXRlLXRpbWUnLCAnZGF0ZScsICd0aW1lJ10uaW5kZXhPZih0aGlzLmZvcm0uJHNjaGVtYS5mb3JtYXQpID4gLTEpIHtcclxuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuZm9ybWF0c1xyXG4gICAgICAgICYmIHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuZm9ybWF0c1t0aGlzLmZvcm0uJHNjaGVtYS5mb3JtYXRdKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5mb3JtYXRzW3RoaXMuZm9ybS4kc2NoZW1hLmZvcm1hdF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
