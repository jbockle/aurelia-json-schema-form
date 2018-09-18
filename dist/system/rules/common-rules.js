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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT0UscUJBQW9CLGFBQXNDO29CQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBRTFELFNBQUksR0FBRyxRQUFRLENBQUM7Z0JBRjhDLENBQUM7Z0JBSS9ELDhCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNiLENBQUM7Z0JBRUQsdUNBQWlCLEdBQWpCO29CQUNFLHVDQUFrQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksdUNBQWtCLENBQUMsTUFBTSxDQUFDO2dCQUM1RixDQUFDO2dCQUVELHlCQUFHLEdBQUg7b0JBQ0UsT0FBTztvQkFDUCxvQ0FBZTt5QkFDWixVQUFVLENBQ1QsTUFBTSxFQUNOLFVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxhQUFvQixJQUFLLE9BQUEsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBMUQsQ0FBMEQsRUFDL0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLDJDQUEyQyxFQUMvRSxVQUFDLGFBQWEsSUFBSyxPQUFBLENBQUMsRUFBRSxhQUFhLGVBQUEsRUFBRSxDQUFDLEVBQW5CLENBQW1CLENBQ3ZDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCwwQkFBSSxHQUFKLFVBQUssSUFBUztvQkFDWixJQUFJLElBQUksR0FBRyxvQ0FBZTt5QkFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQzt5QkFDZixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3lCQUNwQyxTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztvQkFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7d0JBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM3QztvQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTt3QkFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMzRDtvQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN4QjtvQkFDRCxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQXZDVSxXQUFXO29CQUR2QiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDO3FEQUVLLG1EQUF1QjttQkFEL0MsV0FBVyxDQXdDdkI7Z0JBQUQsa0JBQUM7YUF4Q0QsQUF3Q0M7O1FBQ0QsQ0FBQyIsImZpbGUiOiJydWxlcy9jb21tb24tcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUnVsZXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3J1bGVzJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIHZhbGlkYXRpb25NZXNzYWdlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIENvbW1vblJ1bGVzIGltcGxlbWVudHMgSVJ1bGVzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgdHlwZSA9ICdjb21tb24nO1xuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cblxuICBzZXRDdXN0b21NZXNzYWdlcygpIHtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXMuY29uc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuY29uc3QgfHwgdmFsaWRhdGlvbk1lc3NhZ2VzLmVxdWFscztcbiAgfVxuXG4gIGFkZCgpOiB2b2lkIHtcbiAgICAvLyBlbnVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgJ2VudW0nLFxuICAgICAgICAodmFsLCBfb2JqLCBhbGxvd2VkVmFsdWVzOiBhbnlbXSkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBhbGxvd2VkVmFsdWVzLmluZGV4T2YodmFsKSA+PSAwIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmVudW0gfHwgJyR7JGRpc3BsYXlOYW1lfSBoYXMgYW4gaW52YWxpZCBzZWxlY3Rpb24uJyxcbiAgICAgICAgKGFsbG93ZWRWYWx1ZXMpID0+ICh7IGFsbG93ZWRWYWx1ZXMgfSlcbiAgICAgICk7XG4gIH1cblxuICBiaW5kKGN0cmw6IGFueSk6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+IHtcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmVuc3VyZSgnbW9kZWwnKVxuICAgICAgLmRpc3BsYXlOYW1lKGN0cmwuZm9ybS4kc2NoZW1hLnRpdGxlKVxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEuY29uc3QpIHtcbiAgICAgIHJ1bGUgPSBydWxlLmVxdWFscyhjdHJsLmZvcm0uJHNjaGVtYS5jb25zdCk7XG4gICAgfVxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS5lbnVtKSB7XG4gICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKCdlbnVtJywgY3RybC5mb3JtLiRzY2hlbWEuZW51bSk7XG4gICAgfVxuICAgIGlmIChjdHJsLmZvcm0uJHJlcXVpcmVkKSB7XG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
