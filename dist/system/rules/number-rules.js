System.register(["aurelia-validation", "aurelia-framework", "../services/schema-form-configuration"], function (exports_1, context_1) {
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
    var aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, NumberRules;
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
            }
        ],
        execute: function () {
            NumberRules = /** @class */ (function () {
                function NumberRules(configuration) {
                    this.configuration = configuration;
                }
                NumberRules.prototype.register = function () {
                    this.add();
                };
                NumberRules.prototype.add = function () {
                    // minimum
                    aurelia_validation_1.ValidationRules
                        .customRule('minimum', function (val, _obj, min) { return val !== undefined ? val >= min : true; }, this.configuration.messages.minimum || '${$displayName} must be greater than or equal to ${$config.min}.', function (min) { return ({ min: min }); });
                    // exclusionMinimum
                    aurelia_validation_1.ValidationRules
                        .customRule('exclusiveMinimum', function (val, _obj, min) { return val !== undefined ? val > min : true; }, this.configuration.messages.exclusiveMinimum || '${$displayName} must be greater than ${$config.min}.', function (min) { return ({ min: min }); });
                    // maximum
                    aurelia_validation_1.ValidationRules
                        .customRule('maximum', function (val, _obj, max) { return val !== undefined ? val <= max : true; }, this.configuration.messages.maximum || '${$displayName} must be less than or equal to ${$config.max}.', function (max) { return ({ max: max }); });
                    // exclusiveMaximum
                    aurelia_validation_1.ValidationRules
                        .customRule('exclusiveMaximum', function (val, _obj, max) { return val !== undefined ? val < max : true; }, this.configuration.messages.exclusiveMaximum || '${$displayName} must be less than ${$config.max}.', function (max) { return ({ max: max }); });
                    // multipleOf
                    aurelia_validation_1.ValidationRules
                        .customRule('multipleOf', function (val, _obj, multiple) { return val !== undefined ? ((val % multiple) / 100) === 0 : true; }, this.configuration.messages.multipleOf || '${$displayName} must be a multiple of ${$config.multiple}.', function (multiple) { return ({ multiple: multiple }); });
                };
                NumberRules.prototype.bind = function (ctrl, rule) {
                    [
                        'minimum',
                        'maximum',
                        'exclusiveMinimum',
                        'exclusiveMaximum',
                        'multipleOf'
                    ].forEach(function (r) {
                        if (Number.isInteger(ctrl.form.$schema[r])) {
                            rule = rule.satisfiesRule(r, ctrl.form.$schema[r]);
                        }
                    });
                };
                NumberRules = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
                ], NumberRules);
                return NumberRules;
            }());
            exports_1("NumberRules", NumberRules);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFLLElBQWMsRUFBRSxJQUFtQztvQkFDdEQ7d0JBQ0UsU0FBUzt3QkFDVCxTQUFTO3dCQUNULGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixZQUFZO3FCQUNiLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQzt3QkFDVixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3BEO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBbEVVLFdBQVc7b0JBRHZCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7cURBRUssbURBQXVCO21CQUQvQyxXQUFXLENBbUV2QjtnQkFBRCxrQkFBQzthQW5FRCxBQW1FQzs7UUFDRCxDQUFDIiwiZmlsZSI6InJ1bGVzL251bWJlci1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFNmTnVtYmVyIH0gZnJvbSAnLi4vZm9ybS9udW1iZXIvc2YtbnVtYmVyJztcclxuXHJcbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJSdWxlcyB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XHJcblxyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgdGhpcy5hZGQoKTtcclxuICB9XHJcblxyXG4gIGFkZCgpIHtcclxuICAgIC8vIG1pbmltdW1cclxuICAgIFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuY3VzdG9tUnVsZShcclxuICAgICAgICAnbWluaW11bScsXHJcbiAgICAgICAgKHZhbCwgX29iaiwgbWluKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA+PSBtaW4gOiB0cnVlLFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5taW5pbXVtIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHskY29uZmlnLm1pbn0uJyxcclxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBleGNsdXNpb25NaW5pbXVtXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgJ2V4Y2x1c2l2ZU1pbmltdW0nLFxyXG4gICAgICAgICh2YWwsIF9vYmosIG1pbikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPiBtaW4gOiB0cnVlLFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5leGNsdXNpdmVNaW5pbXVtIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gJHskY29uZmlnLm1pbn0uJyxcclxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBtYXhpbXVtXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgJ21heGltdW0nLFxyXG4gICAgICAgICh2YWwsIF9vYmosIG1heCkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPD0gbWF4IDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWF4aW11bSB8fCAnJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7JGNvbmZpZy5tYXh9LicsXHJcbiAgICAgICAgKG1heCkgPT4gKHsgbWF4IH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gZXhjbHVzaXZlTWF4aW11bVxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgICdleGNsdXNpdmVNYXhpbXVtJyxcclxuICAgICAgICAodmFsLCBfb2JqLCBtYXgpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDwgbWF4IDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZXhjbHVzaXZlTWF4aW11bSB8fCAnJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuICR7JGNvbmZpZy5tYXh9LicsXHJcbiAgICAgICAgKG1heCkgPT4gKHsgbWF4IH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gbXVsdGlwbGVPZlxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgICdtdWx0aXBsZU9mJyxcclxuICAgICAgICAodmFsLCBfb2JqLCBtdWx0aXBsZSkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyAoKHZhbCAlIG11bHRpcGxlKSAvIDEwMCkgPT09IDAgOiB0cnVlLFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5tdWx0aXBsZU9mIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7JGNvbmZpZy5tdWx0aXBsZX0uJyxcclxuICAgICAgICAobXVsdGlwbGUpID0+ICh7IG11bHRpcGxlIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBiaW5kKGN0cmw6IFNmTnVtYmVyLCBydWxlOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55Pikge1xyXG4gICAgW1xyXG4gICAgICAnbWluaW11bScsXHJcbiAgICAgICdtYXhpbXVtJyxcclxuICAgICAgJ2V4Y2x1c2l2ZU1pbmltdW0nLFxyXG4gICAgICAnZXhjbHVzaXZlTWF4aW11bScsXHJcbiAgICAgICdtdWx0aXBsZU9mJ1xyXG4gICAgXS5mb3JFYWNoKChyKSA9PiB7XHJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hW3JdKSkge1xyXG4gICAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUociwgY3RybC5mb3JtLiRzY2hlbWFbcl0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
