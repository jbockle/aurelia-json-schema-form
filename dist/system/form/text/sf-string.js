System.register(["aurelia-framework", "../../resources/guid", "../../rules/rules-factory", "../../resources/logger", "../../services/form-instances", "../../services/form-service"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, rules_factory_1, logger_1, form_instances_1, form_service_1, SfString;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (rules_factory_1_1) {
                rules_factory_1 = rules_factory_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (form_instances_1_1) {
                form_instances_1 = form_instances_1_1;
            },
            function (form_service_1_1) {
                form_service_1 = form_service_1_1;
            }
        ],
        execute: function () {
            SfString = /** @class */ (function () {
                function SfString(formService, rules, logger, formInstances) {
                    this.formService = formService;
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
                    this.view = this.formService.getTemplatePath('string');
                    if (this.form.$altTemplate) {
                        this.view = this.form.$altTemplate;
                    }
                    else if (this.form.$schema.enum && this.form.$schema.enum.length <= 5) {
                        this.view = this.formService.getTemplatePath('stringRadioEnum');
                    }
                    else if (this.form.$schema.enum) {
                        this.view = this.formService.getTemplatePath('stringSelectEnum');
                    }
                    else if (['date-time', 'date', 'time'].indexOf(this.form.$schema.format) > -1) {
                        if (this.formService.getTemplatePath(this.form.$schema.format, 'format')) {
                            this.view = this.formService.getTemplatePath(this.form.$schema.format, 'format');
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
                    aurelia_framework_1.inject(form_service_1.FormService, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
                    aurelia_framework_1.customElement('sf-string'),
                    __metadata("design:paramtypes", [form_service_1.FormService,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi1zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQTZCRSxrQkFDUyxXQUF3QixFQUN4QixLQUFtQixFQUNsQixNQUF3QixFQUN4QixhQUE0QjtvQkFIN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWM7b0JBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWtCO29CQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFadEMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztnQkFXWixDQUFDO2dCQUVMLCtCQUFZLEdBQVosVUFBYSxRQUFRLEVBQUUsUUFBUTtvQkFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUN6QztnQkFDSCxDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO3FCQUN0RjtnQkFDSCxDQUFDO2dCQUVELHVCQUFJLEdBQUo7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDakYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFFTyx3Q0FBcUIsR0FBN0I7b0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztxQkFDcEM7eUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0JBQ3ZFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQztxQkFDakU7eUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7d0JBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQztxQkFDbEU7eUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUMvRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRTs0QkFDeEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7eUJBQ2xGO3FCQUNGO2dCQUNILENBQUM7Z0JBcERTO29CQUFULDRCQUFROztzREFBcUI7Z0JBQ3BCO29CQUFULDRCQUFROzt1REFBZTtnQkFDZDtvQkFBVCw0QkFBUTs7OERBQXNCO2dCQUhwQixRQUFRO29CQVBwQiwwQkFBTSxDQUNMLDBCQUFXLEVBQ1gsNEJBQVksRUFDWix5QkFBZ0IsRUFDaEIsOEJBQWEsQ0FDZDtvQkFDQSxpQ0FBYSxDQUFDLFdBQVcsQ0FBQztxREFlSCwwQkFBVzt3QkFDakIsNEJBQVk7d0JBQ1YseUJBQWdCO3dCQUNULDhCQUFhO21CQWpCM0IsUUFBUSxDQXNEcEI7Z0JBQUQsZUFBQzthQXRERCxBQXNEQzs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vdGV4dC9zZi1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9ndWlkJztcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gJy4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnknO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2xvZ2dlcic7XG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZSc7XG5cbkBpbmplY3QoXG4gIEZvcm1TZXJ2aWNlLFxuICBSdWxlc0ZhY3RvcnksXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXG4gIEZvcm1JbnN0YW5jZXNcbilcbkBjdXN0b21FbGVtZW50KCdzZi1zdHJpbmcnKVxuZXhwb3J0IGNsYXNzIFNmU3RyaW5nIHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBtb2RlbDogc3RyaW5nO1xuICBAYmluZGFibGUgZm9ybUluc3RhbmNlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSAnc3RyaW5nJztcblxuICB2aWV3O1xuXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcbiAgKSB7IH1cblxuICBtb2RlbENoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZm9ybS4kb25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuZm9ybS4kb25DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1zdHJpbmctYXR0YWNoZWQnKTtcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XG4gICAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLCBwcm9wZXJ0eU5hbWU6ICdtb2RlbCcgfSk7XG4gICAgfVxuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1zdHJpbmcnLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwgfSwgYXJndW1lbnRzKTtcbiAgICB0aGlzLmZvcm1DdHJsID0gdGhpcy5mb3JtSW5zdGFuY2VzLmdldCh0aGlzLmZvcm1JbnN0YW5jZSk7XG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBwcml2YXRlIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldFRlbXBsYXRlUGF0aCgnc3RyaW5nJyk7XG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5lbnVtICYmIHRoaXMuZm9ybS4kc2NoZW1hLmVudW0ubGVuZ3RoIDw9IDUpIHtcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKCdzdHJpbmdSYWRpb0VudW0nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS4kc2NoZW1hLmVudW0pIHtcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKCdzdHJpbmdTZWxlY3RFbnVtJyk7XG4gICAgfSBlbHNlIGlmIChbJ2RhdGUtdGltZScsICdkYXRlJywgJ3RpbWUnXS5pbmRleE9mKHRoaXMuZm9ybS4kc2NoZW1hLmZvcm1hdCkgPiAtMSkge1xuICAgICAgaWYgKHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKHRoaXMuZm9ybS4kc2NoZW1hLmZvcm1hdCwgJ2Zvcm1hdCcpKSB7XG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKHRoaXMuZm9ybS4kc2NoZW1hLmZvcm1hdCwgJ2Zvcm1hdCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
