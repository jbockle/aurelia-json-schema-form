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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0UsU0FBUztnQkFDVCxTQUFTO2dCQUNULGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixZQUFZO2FBQ2IsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dCQUNWLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFsRVUsV0FBVztZQUR2QiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDOzZDQUVLLG1EQUF1QjtXQUQvQyxXQUFXLENBbUV2QjtRQUFELGtCQUFDO0tBbkVELEFBbUVDLElBQUE7SUFuRVksa0NBQVciLCJmaWxlIjoicnVsZXMvbnVtYmVyLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU2ZOdW1iZXIgfSBmcm9tICcuLi9mb3JtL251bWJlci9zZi1udW1iZXInO1xyXG5cclxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcclxuZXhwb3J0IGNsYXNzIE51bWJlclJ1bGVzIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cclxuXHJcbiAgcmVnaXN0ZXIoKSB7XHJcbiAgICB0aGlzLmFkZCgpO1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgLy8gbWluaW11bVxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgICdtaW5pbXVtJyxcclxuICAgICAgICAodmFsLCBfb2JqLCBtaW4pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsID49IG1pbiA6IHRydWUsXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1pbmltdW0gfHwgJyR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAkeyRjb25maWcubWlufS4nLFxyXG4gICAgICAgIChtaW4pID0+ICh7IG1pbiB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIGV4Y2x1c2lvbk1pbmltdW1cclxuICAgIFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuY3VzdG9tUnVsZShcclxuICAgICAgICAnZXhjbHVzaXZlTWluaW11bScsXHJcbiAgICAgICAgKHZhbCwgX29iaiwgbWluKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA+IG1pbiA6IHRydWUsXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1pbmltdW0gfHwgJyR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAkeyRjb25maWcubWlufS4nLFxyXG4gICAgICAgIChtaW4pID0+ICh7IG1pbiB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIG1heGltdW1cclxuICAgIFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuY3VzdG9tUnVsZShcclxuICAgICAgICAnbWF4aW11bScsXHJcbiAgICAgICAgKHZhbCwgX29iaiwgbWF4KSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA8PSBtYXggOiB0cnVlLFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5tYXhpbXVtIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHskY29uZmlnLm1heH0uJyxcclxuICAgICAgICAobWF4KSA9PiAoeyBtYXggfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBleGNsdXNpdmVNYXhpbXVtXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgJ2V4Y2x1c2l2ZU1heGltdW0nLFxyXG4gICAgICAgICh2YWwsIF9vYmosIG1heCkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPCBtYXggOiB0cnVlLFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5leGNsdXNpdmVNYXhpbXVtIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gJHskY29uZmlnLm1heH0uJyxcclxuICAgICAgICAobWF4KSA9PiAoeyBtYXggfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBtdWx0aXBsZU9mXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgJ211bHRpcGxlT2YnLFxyXG4gICAgICAgICh2YWwsIF9vYmosIG11bHRpcGxlKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/ICgodmFsICUgbXVsdGlwbGUpIC8gMTAwKSA9PT0gMCA6IHRydWUsXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm11bHRpcGxlT2YgfHwgJyR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHskY29uZmlnLm11bHRpcGxlfS4nLFxyXG4gICAgICAgIChtdWx0aXBsZSkgPT4gKHsgbXVsdGlwbGUgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGJpbmQoY3RybDogU2ZOdW1iZXIsIHJ1bGU6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+KSB7XHJcbiAgICBbXHJcbiAgICAgICdtaW5pbXVtJyxcclxuICAgICAgJ21heGltdW0nLFxyXG4gICAgICAnZXhjbHVzaXZlTWluaW11bScsXHJcbiAgICAgICdleGNsdXNpdmVNYXhpbXVtJyxcclxuICAgICAgJ211bHRpcGxlT2YnXHJcbiAgICBdLmZvckVhY2goKHIpID0+IHtcclxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIoY3RybC5mb3JtLiRzY2hlbWFbcl0pKSB7XHJcbiAgICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZShyLCBjdHJsLmZvcm0uJHNjaGVtYVtyXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
