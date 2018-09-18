var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../services/schema-form-configuration"], function (require, exports, aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberRules = /** @class */ (function () {
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
    exports.NumberRules = NumberRules;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0UsU0FBUztnQkFDVCxTQUFTO2dCQUNULGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixZQUFZO2FBQ2IsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dCQUNWLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFsRVUsV0FBVztZQUR2QiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDOzZDQUVLLG1EQUF1QjtXQUQvQyxXQUFXLENBbUV2QjtRQUFELGtCQUFDO0tBbkVELEFBbUVDLElBQUE7SUFuRVksa0NBQVciLCJmaWxlIjoicnVsZXMvbnVtYmVyLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgU2ZOdW1iZXIgfSBmcm9tICcuLi9mb3JtL251bWJlci9zZi1udW1iZXInO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIE51bWJlclJ1bGVzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICAvLyBtaW5pbXVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgJ21pbmltdW0nLFxuICAgICAgICAodmFsLCBfb2JqLCBtaW4pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsID49IG1pbiA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5taW5pbXVtIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHskY29uZmlnLm1pbn0uJyxcbiAgICAgICAgKG1pbikgPT4gKHsgbWluIH0pXG4gICAgICApO1xuXG4gICAgLy8gZXhjbHVzaW9uTWluaW11bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgICdleGNsdXNpdmVNaW5pbXVtJyxcbiAgICAgICAgKHZhbCwgX29iaiwgbWluKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA+IG1pbiA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5leGNsdXNpdmVNaW5pbXVtIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gJHskY29uZmlnLm1pbn0uJyxcbiAgICAgICAgKG1pbikgPT4gKHsgbWluIH0pXG4gICAgICApO1xuXG4gICAgLy8gbWF4aW11bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgICdtYXhpbXVtJyxcbiAgICAgICAgKHZhbCwgX29iaiwgbWF4KSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA8PSBtYXggOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWF4aW11bSB8fCAnJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7JGNvbmZpZy5tYXh9LicsXG4gICAgICAgIChtYXgpID0+ICh7IG1heCB9KVxuICAgICAgKTtcblxuICAgIC8vIGV4Y2x1c2l2ZU1heGltdW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICAnZXhjbHVzaXZlTWF4aW11bScsXG4gICAgICAgICh2YWwsIF9vYmosIG1heCkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPCBtYXggOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZXhjbHVzaXZlTWF4aW11bSB8fCAnJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuICR7JGNvbmZpZy5tYXh9LicsXG4gICAgICAgIChtYXgpID0+ICh7IG1heCB9KVxuICAgICAgKTtcblxuICAgIC8vIG11bHRpcGxlT2ZcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICAnbXVsdGlwbGVPZicsXG4gICAgICAgICh2YWwsIF9vYmosIG11bHRpcGxlKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/ICgodmFsICUgbXVsdGlwbGUpIC8gMTAwKSA9PT0gMCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5tdWx0aXBsZU9mIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7JGNvbmZpZy5tdWx0aXBsZX0uJyxcbiAgICAgICAgKG11bHRpcGxlKSA9PiAoeyBtdWx0aXBsZSB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogU2ZOdW1iZXIsIHJ1bGU6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+KSB7XG4gICAgW1xuICAgICAgJ21pbmltdW0nLFxuICAgICAgJ21heGltdW0nLFxuICAgICAgJ2V4Y2x1c2l2ZU1pbmltdW0nLFxuICAgICAgJ2V4Y2x1c2l2ZU1heGltdW0nLFxuICAgICAgJ211bHRpcGxlT2YnXG4gICAgXS5mb3JFYWNoKChyKSA9PiB7XG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLmZvcm0uJHNjaGVtYVtyXSkpIHtcbiAgICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZShyLCBjdHJsLmZvcm0uJHNjaGVtYVtyXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
