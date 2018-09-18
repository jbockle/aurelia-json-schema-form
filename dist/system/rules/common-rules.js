System.register(["aurelia-framework", "../services/schema-form-configuration", "aurelia-validation"], function (exports_1, context_1) {
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
    var aurelia_framework_1, schema_form_configuration_1, aurelia_validation_1, CommonRules;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            }
        ],
        execute: function () {
            CommonRules = /** @class */ (function () {
                function CommonRules(configuration) {
                    this.configuration = configuration;
                    this.type = 'common';
                }
                CommonRules.prototype.register = function () {
                    this.add();
                };
                CommonRules.prototype.setCustomMessages = function () {
                    aurelia_validation_1.validationMessages.const = this.configuration.messages.const || aurelia_validation_1.validationMessages.equals;
                };
                CommonRules.prototype.add = function () {
                    // enum
                    aurelia_validation_1.ValidationRules
                        .customRule('enum', function (val, _obj, allowedValues) { return val !== undefined ? allowedValues.indexOf(val) >= 0 : true; }, this.configuration.messages.enum || '${$displayName} has an invalid selection.', function (allowedValues) { return ({ allowedValues: allowedValues }); });
                };
                CommonRules.prototype.bind = function (ctrl) {
                    var rule = aurelia_validation_1.ValidationRules
                        .ensure('model')
                        .displayName(ctrl.form.$schema.title)
                        .satisfies(function () { return true; });
                    if (ctrl.form.$schema.const) {
                        rule = rule.equals(ctrl.form.$schema.const);
                    }
                    if (ctrl.form.$schema.enum) {
                        rule = rule.satisfiesRule('enum', ctrl.form.$schema.enum);
                    }
                    if (ctrl.form.$required) {
                        rule = rule.required();
                    }
                    return rule;
                };
                CommonRules = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
                ], CommonRules);
                return CommonRules;
            }());
            exports_1("CommonRules", CommonRules);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT0UscUJBQW9CLGFBQXNDO29CQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBRTFELFNBQUksR0FBRyxRQUFRLENBQUM7Z0JBRjhDLENBQUM7Z0JBSS9ELDhCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNiLENBQUM7Z0JBRUQsdUNBQWlCLEdBQWpCO29CQUNFLHVDQUFrQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksdUNBQWtCLENBQUMsTUFBTSxDQUFDO2dCQUM1RixDQUFDO2dCQUVELHlCQUFHLEdBQUg7b0JBQ0UsT0FBTztvQkFDUCxvQ0FBZTt5QkFDWixVQUFVLENBQ1QsTUFBTSxFQUNOLFVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxhQUFvQixJQUFLLE9BQUEsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBMUQsQ0FBMEQsRUFDL0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLDJDQUEyQyxFQUMvRSxVQUFDLGFBQWEsSUFBSyxPQUFBLENBQUMsRUFBRSxhQUFhLGVBQUEsRUFBRSxDQUFDLEVBQW5CLENBQW1CLENBQ3ZDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCwwQkFBSSxHQUFKLFVBQUssSUFBUztvQkFDWixJQUFJLElBQUksR0FBRyxvQ0FBZTt5QkFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQzt5QkFDZixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3lCQUNwQyxTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztvQkFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7d0JBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM3QztvQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTt3QkFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMzRDtvQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN4QjtvQkFDRCxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQXZDVSxXQUFXO29CQUR2QiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDO3FEQUVLLG1EQUF1QjttQkFEL0MsV0FBVyxDQXdDdkI7Z0JBQUQsa0JBQUM7YUF4Q0QsQUF3Q0M7O1FBQ0QsQ0FBQyIsImZpbGUiOiJydWxlcy9jb21tb24tcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUnVsZXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3J1bGVzJztcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIHZhbGlkYXRpb25NZXNzYWdlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5cclxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcclxuZXhwb3J0IGNsYXNzIENvbW1vblJ1bGVzIGltcGxlbWVudHMgSVJ1bGVzIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cclxuXHJcbiAgdHlwZSA9ICdjb21tb24nO1xyXG5cclxuICByZWdpc3RlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkKCk7XHJcbiAgfVxyXG5cclxuICBzZXRDdXN0b21NZXNzYWdlcygpIHtcclxuICAgIHZhbGlkYXRpb25NZXNzYWdlcy5jb25zdCA9IHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5jb25zdCB8fCB2YWxpZGF0aW9uTWVzc2FnZXMuZXF1YWxzO1xyXG4gIH1cclxuXHJcbiAgYWRkKCk6IHZvaWQge1xyXG4gICAgLy8gZW51bVxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgICdlbnVtJyxcclxuICAgICAgICAodmFsLCBfb2JqLCBhbGxvd2VkVmFsdWVzOiBhbnlbXSkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBhbGxvd2VkVmFsdWVzLmluZGV4T2YodmFsKSA+PSAwIDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZW51bSB8fCAnJHskZGlzcGxheU5hbWV9IGhhcyBhbiBpbnZhbGlkIHNlbGVjdGlvbi4nLFxyXG4gICAgICAgIChhbGxvd2VkVmFsdWVzKSA9PiAoeyBhbGxvd2VkVmFsdWVzIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBiaW5kKGN0cmw6IGFueSk6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+IHtcclxuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5lbnN1cmUoJ21vZGVsJylcclxuICAgICAgLmRpc3BsYXlOYW1lKGN0cmwuZm9ybS4kc2NoZW1hLnRpdGxlKVxyXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xyXG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLmNvbnN0KSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlLmVxdWFscyhjdHJsLmZvcm0uJHNjaGVtYS5jb25zdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEuZW51bSkge1xyXG4gICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKCdlbnVtJywgY3RybC5mb3JtLiRzY2hlbWEuZW51bSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3RybC5mb3JtLiRyZXF1aXJlZCkge1xyXG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJ1bGU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
