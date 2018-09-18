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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1, form_instances_1, SfNumber;
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
            SfNumber = /** @class */ (function () {
                function SfNumber(configuration, rules, logger, formInstances) {
                    this.configuration = configuration;
                    this.rules = rules;
                    this.logger = logger;
                    this.formInstances = formInstances;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = 'number';
                }
                SfNumber.prototype.modelChanged = function (newValue, oldValue) {
                    if (this.form.$onChange) {
                        this.form.$onChange(newValue, oldValue);
                    }
                };
                SfNumber.prototype.attached = function () {
                    this.logger.info('sf-number-attached');
                    if (this.formCtrl.formOptions.validateOnRender) {
                        this.formCtrl.validationController.validate({ object: this });
                    }
                };
                SfNumber.prototype.bind = function () {
                    this.logger.info('sf-number', this.form, this.model, arguments);
                    this.formCtrl = this.formInstances.get(this.formInstance);
                    this.form.$schema = this.form.$schema;
                    this.rules.bind(this);
                    this.form.$step = this.form.$step || 1;
                    this.determineViewStrategy();
                };
                SfNumber.prototype.determineViewStrategy = function () {
                    this.view = this.configuration.templates.number;
                    if (this.form.$altTemplate) {
                        this.view = this.form.$altTemplate;
                    }
                    else if (this.minimum !== undefined && this.maximum !== undefined) {
                        this.view = this.configuration.templates.numberRange;
                    }
                };
                Object.defineProperty(SfNumber.prototype, "minimum", {
                    get: function () {
                        if (Number.isInteger(this.form.$schema.minimum)) {
                            return this.form.$schema.minimum;
                        }
                        else if (Number.isInteger(this.form.$schema.exclusiveMinimum)) {
                            return this.form.$schema.exclusiveMinimum + this.form.$step;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SfNumber.prototype, "maximum", {
                    get: function () {
                        if (Number.isInteger(this.form.$schema.maximum)) {
                            return this.form.$schema.maximum;
                        }
                        else if (Number.isInteger(this.form.$schema.exclusiveMaximum)) {
                            return this.form.$schema.exclusiveMaximum - this.form.$step;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfNumber.prototype, "form", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Number)
                ], SfNumber.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfNumber.prototype, "formInstance", void 0);
                SfNumber = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
                    aurelia_framework_1.customElement('sf-number'),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                        rules_factory_1.RulesFactory,
                        logger_1.SchemaFormLogger,
                        form_instances_1.FormInstances])
                ], SfNumber);
                return SfNumber;
            }());
            exports_1("SfNumber", SfNumber);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBOEJFLGtCQUNTLGFBQXNDLEVBQ3RDLEtBQW1CLEVBQ2xCLE1BQXdCLEVBQ3hCLGFBQTRCO29CQUg3QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7b0JBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWtCO29CQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFadEMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFJNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztnQkFTWixDQUFDO2dCQUVMLCtCQUFZLEdBQVosVUFBYSxRQUFRLEVBQUUsUUFBUTtvQkFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUN6QztnQkFDSCxDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztxQkFDL0Q7Z0JBQ0gsQ0FBQztnQkFFRCx1QkFBSSxHQUFKO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQXNDLENBQUM7b0JBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUVELHdDQUFxQixHQUFyQjtvQkFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztvQkFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztxQkFDcEM7eUJBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTt3QkFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7cUJBQ3REO2dCQUNILENBQUM7Z0JBRUQsc0JBQUksNkJBQU87eUJBQVg7d0JBQ0UsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzt5QkFDbEM7NkJBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7NEJBQy9ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQzdEO29CQUNILENBQUM7OzttQkFBQTtnQkFFRCxzQkFBSSw2QkFBTzt5QkFBWDt3QkFDRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQy9DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO3lCQUNsQzs2QkFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTs0QkFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDN0Q7b0JBQ0gsQ0FBQzs7O21CQUFBO2dCQWhFUztvQkFBVCw0QkFBUTs7c0RBQXFCO2dCQUNwQjtvQkFBVCw0QkFBUTs7dURBQWU7Z0JBQ2Q7b0JBQVQsNEJBQVE7OzhEQUFzQjtnQkFIcEIsUUFBUTtvQkFQcEIsMEJBQU0sQ0FDTCxtREFBdUIsRUFDdkIsNEJBQVksRUFDWix5QkFBZ0IsRUFDaEIsOEJBQWEsQ0FDZDtvQkFDQSxpQ0FBYSxDQUFDLFdBQVcsQ0FBQztxREFlRCxtREFBdUI7d0JBQy9CLDRCQUFZO3dCQUNWLHlCQUFnQjt3QkFDVCw4QkFBYTttQkFqQjNCLFFBQVEsQ0FrRXBCO2dCQUFELGVBQUM7YUFsRUQsQUFrRUM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL251bWJlci9zZi1udW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2d1aWQnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5JztcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XHJcblxyXG5AaW5qZWN0KFxyXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gIFJ1bGVzRmFjdG9yeSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudCgnc2YtbnVtYmVyJylcclxuZXhwb3J0IGNsYXNzIFNmTnVtYmVyIHtcclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuICBAYmluZGFibGUgbW9kZWw6IG51bWJlcjtcclxuICBAYmluZGFibGUgZm9ybUluc3RhbmNlOiBzdHJpbmc7XHJcblxyXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcclxuXHJcbiAgdmlldztcclxuXHJcbiAga2luZCA9ICdudW1iZXInO1xyXG5cclxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHsgfVxyXG5cclxuICBtb2RlbENoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtLiRvbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLmZvcm0uJG9uQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLW51bWJlci1hdHRhY2hlZCcpO1xyXG4gICAgaWYgKHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xyXG4gICAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLW51bWJlcicsIHRoaXMuZm9ybSwgdGhpcy5tb2RlbCwgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIHRoaXMuZm9ybS4kc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEgYXMgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uO1xyXG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mb3JtLiRzdGVwID0gdGhpcy5mb3JtLiRzdGVwIHx8IDE7XHJcbiAgICB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xyXG4gIH1cclxuXHJcbiAgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xyXG4gICAgdGhpcy52aWV3ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5udW1iZXI7XHJcbiAgICBpZiAodGhpcy5mb3JtLiRhbHRUZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1pbmltdW0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLm1heGltdW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLm51bWJlclJhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1pbmltdW0oKSB7XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5taW5pbXVtKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEubWluaW11bTtcclxuICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEuZXhjbHVzaXZlTWluaW11bSArIHRoaXMuZm9ybS4kc3RlcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBtYXhpbXVtKCkge1xyXG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWF4aW11bSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLm1heGltdW07XHJcbiAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gLSB0aGlzLmZvcm0uJHN0ZXA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
