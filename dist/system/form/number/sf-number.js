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
    var aurelia_framework_1, guid_1, rules_factory_1, logger_1, form_instances_1, form_service_1, SfNumber;
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
            SfNumber = /** @class */ (function () {
                function SfNumber(formService, rules, logger, formInstances) {
                    this.formService = formService;
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
                    this.view = this.formService.getTemplatePath('number');
                    if (this.form.$altTemplate) {
                        this.view = this.form.$altTemplate;
                    }
                    else if (this.minimum !== undefined && this.maximum !== undefined) {
                        this.view = this.formService.getTemplatePath('numberRange');
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
                    aurelia_framework_1.inject(form_service_1.FormService, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
                    aurelia_framework_1.customElement('sf-number'),
                    __metadata("design:paramtypes", [form_service_1.FormService,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBOEJFLGtCQUNTLFdBQXdCLEVBQ3hCLEtBQW1CLEVBQ2xCLE1BQXdCLEVBQ3hCLGFBQTRCO29CQUg3QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBYztvQkFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQVp0QyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUk1QixTQUFJLEdBQUcsUUFBUSxDQUFDO2dCQVNaLENBQUM7Z0JBRUwsK0JBQVksR0FBWixVQUFhLFFBQVEsRUFBRSxRQUFRO29CQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ3pDO2dCQUNILENBQUM7Z0JBRUQsMkJBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFO3dCQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3FCQUMvRDtnQkFDSCxDQUFDO2dCQUVELHVCQUFJLEdBQUo7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBc0MsQ0FBQztvQkFDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsd0NBQXFCLEdBQXJCO29CQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7cUJBQ3BDO3lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7d0JBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQzdEO2dCQUNILENBQUM7Z0JBRUQsc0JBQUksNkJBQU87eUJBQVg7d0JBQ0UsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzt5QkFDbEM7NkJBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7NEJBQy9ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQzdEO29CQUNILENBQUM7OzttQkFBQTtnQkFFRCxzQkFBSSw2QkFBTzt5QkFBWDt3QkFDRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQy9DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO3lCQUNsQzs2QkFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTs0QkFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDN0Q7b0JBQ0gsQ0FBQzs7O21CQUFBO2dCQWhFUztvQkFBVCw0QkFBUTs7c0RBQXFCO2dCQUNwQjtvQkFBVCw0QkFBUTs7dURBQWU7Z0JBQ2Q7b0JBQVQsNEJBQVE7OzhEQUFzQjtnQkFIcEIsUUFBUTtvQkFQcEIsMEJBQU0sQ0FDTCwwQkFBVyxFQUNYLDRCQUFZLEVBQ1oseUJBQWdCLEVBQ2hCLDhCQUFhLENBQ2Q7b0JBQ0EsaUNBQWEsQ0FBQyxXQUFXLENBQUM7cURBZUgsMEJBQVc7d0JBQ2pCLDRCQUFZO3dCQUNWLHlCQUFnQjt3QkFDVCw4QkFBYTttQkFqQjNCLFFBQVEsQ0FrRXBCO2dCQUFELGVBQUM7YUFsRUQsQUFrRUM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL251bWJlci9zZi1udW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2d1aWQnO1xyXG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5JztcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcclxuXHJcbkBpbmplY3QoXHJcbiAgRm9ybVNlcnZpY2UsXHJcbiAgUnVsZXNGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KCdzZi1udW1iZXInKVxyXG5leHBvcnQgY2xhc3MgU2ZOdW1iZXIge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogbnVtYmVyO1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICB2aWV3O1xyXG5cclxuICBraW5kID0gJ251bWJlcic7XHJcblxyXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcclxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHsgfVxyXG5cclxuICBtb2RlbENoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtLiRvbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLmZvcm0uJG9uQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLW51bWJlci1hdHRhY2hlZCcpO1xyXG4gICAgaWYgKHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xyXG4gICAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLW51bWJlcicsIHRoaXMuZm9ybSwgdGhpcy5tb2RlbCwgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIHRoaXMuZm9ybS4kc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEgYXMgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uO1xyXG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mb3JtLiRzdGVwID0gdGhpcy5mb3JtLiRzdGVwIHx8IDE7XHJcbiAgICB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xyXG4gIH1cclxuXHJcbiAgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xyXG4gICAgdGhpcy52aWV3ID0gdGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZVBhdGgoJ251bWJlcicpO1xyXG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5taW5pbXVtICE9PSB1bmRlZmluZWQgJiYgdGhpcy5tYXhpbXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZVBhdGgoJ251bWJlclJhbmdlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWluaW11bSgpIHtcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1pbmltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5taW5pbXVtO1xyXG4gICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtICsgdGhpcy5mb3JtLiRzdGVwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1heGltdW0oKSB7XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhpbXVtKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEubWF4aW11bTtcclxuICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSAtIHRoaXMuZm9ybS4kc3RlcDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
