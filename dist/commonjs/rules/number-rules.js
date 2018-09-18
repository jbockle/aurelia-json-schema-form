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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_validation_1 = require("aurelia-validation");
var aurelia_framework_1 = require("aurelia-framework");
var schema_form_configuration_1 = require("../services/schema-form-configuration");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUosVUFBSyxJQUFjLEVBQUUsSUFBbUM7UUFDdEQ7WUFDRSxTQUFTO1lBQ1QsU0FBUztZQUNULGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsWUFBWTtTQUNiLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUNWLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWxFVSxXQUFXO1FBRHZCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7eUNBRUssbURBQXVCO09BRC9DLFdBQVcsQ0FtRXZCO0lBQUQsa0JBQUM7Q0FuRUQsQUFtRUMsSUFBQTtBQW5FWSxrQ0FBVyIsImZpbGUiOiJydWxlcy9udW1iZXItcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBTZk51bWJlciB9IGZyb20gJy4uL2Zvcm0vbnVtYmVyL3NmLW51bWJlcic7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5leHBvcnQgY2xhc3MgTnVtYmVyUnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICByZWdpc3RlcigpIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIC8vIG1pbmltdW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICAnbWluaW11bScsXG4gICAgICAgICh2YWwsIF9vYmosIG1pbikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPj0gbWluIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1pbmltdW0gfHwgJyR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAkeyRjb25maWcubWlufS4nLFxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcbiAgICAgICk7XG5cbiAgICAvLyBleGNsdXNpb25NaW5pbXVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgJ2V4Y2x1c2l2ZU1pbmltdW0nLFxuICAgICAgICAodmFsLCBfb2JqLCBtaW4pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsID4gbWluIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1pbmltdW0gfHwgJyR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAkeyRjb25maWcubWlufS4nLFxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcbiAgICAgICk7XG5cbiAgICAvLyBtYXhpbXVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgJ21heGltdW0nLFxuICAgICAgICAodmFsLCBfb2JqLCBtYXgpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDw9IG1heCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5tYXhpbXVtIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHskY29uZmlnLm1heH0uJyxcbiAgICAgICAgKG1heCkgPT4gKHsgbWF4IH0pXG4gICAgICApO1xuXG4gICAgLy8gZXhjbHVzaXZlTWF4aW11bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgICdleGNsdXNpdmVNYXhpbXVtJyxcbiAgICAgICAgKHZhbCwgX29iaiwgbWF4KSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA8IG1heCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5leGNsdXNpdmVNYXhpbXVtIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gJHskY29uZmlnLm1heH0uJyxcbiAgICAgICAgKG1heCkgPT4gKHsgbWF4IH0pXG4gICAgICApO1xuXG4gICAgLy8gbXVsdGlwbGVPZlxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgICdtdWx0aXBsZU9mJyxcbiAgICAgICAgKHZhbCwgX29iaiwgbXVsdGlwbGUpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gKCh2YWwgJSBtdWx0aXBsZSkgLyAxMDApID09PSAwIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm11bHRpcGxlT2YgfHwgJyR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHskY29uZmlnLm11bHRpcGxlfS4nLFxuICAgICAgICAobXVsdGlwbGUpID0+ICh7IG11bHRpcGxlIH0pXG4gICAgICApO1xuICB9XG5cbiAgYmluZChjdHJsOiBTZk51bWJlciwgcnVsZTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4pIHtcbiAgICBbXG4gICAgICAnbWluaW11bScsXG4gICAgICAnbWF4aW11bScsXG4gICAgICAnZXhjbHVzaXZlTWluaW11bScsXG4gICAgICAnZXhjbHVzaXZlTWF4aW11bScsXG4gICAgICAnbXVsdGlwbGVPZidcbiAgICBdLmZvckVhY2goKHIpID0+IHtcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hW3JdKSkge1xuICAgICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKHIsIGN0cmwuZm9ybS4kc2NoZW1hW3JdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
