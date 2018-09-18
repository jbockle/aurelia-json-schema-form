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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUosVUFBSyxJQUFjLEVBQUUsSUFBbUM7UUFDdEQ7WUFDRSxTQUFTO1lBQ1QsU0FBUztZQUNULGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsWUFBWTtTQUNiLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUNWLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWxFVSxXQUFXO1FBRHZCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7eUNBRUssbURBQXVCO09BRC9DLFdBQVcsQ0FtRXZCO0lBQUQsa0JBQUM7Q0FuRUQsQUFtRUMsSUFBQTtBQW5FWSxrQ0FBVyIsImZpbGUiOiJydWxlcy9udW1iZXItcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBTZk51bWJlciB9IGZyb20gJy4uL2Zvcm0vbnVtYmVyL3NmLW51bWJlcic7XHJcblxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyUnVsZXMge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxyXG5cclxuICByZWdpc3RlcigpIHtcclxuICAgIHRoaXMuYWRkKCk7XHJcbiAgfVxyXG5cclxuICBhZGQoKSB7XHJcbiAgICAvLyBtaW5pbXVtXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgJ21pbmltdW0nLFxyXG4gICAgICAgICh2YWwsIF9vYmosIG1pbikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPj0gbWluIDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWluaW11bSB8fCAnJHskZGlzcGxheU5hbWV9IG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvICR7JGNvbmZpZy5taW59LicsXHJcbiAgICAgICAgKG1pbikgPT4gKHsgbWluIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gZXhjbHVzaW9uTWluaW11bVxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgICdleGNsdXNpdmVNaW5pbXVtJyxcclxuICAgICAgICAodmFsLCBfb2JqLCBtaW4pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsID4gbWluIDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZXhjbHVzaXZlTWluaW11bSB8fCAnJHskZGlzcGxheU5hbWV9IG11c3QgYmUgZ3JlYXRlciB0aGFuICR7JGNvbmZpZy5taW59LicsXHJcbiAgICAgICAgKG1pbikgPT4gKHsgbWluIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gbWF4aW11bVxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgICdtYXhpbXVtJyxcclxuICAgICAgICAodmFsLCBfb2JqLCBtYXgpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDw9IG1heCA6IHRydWUsXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1heGltdW0gfHwgJyR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAkeyRjb25maWcubWF4fS4nLFxyXG4gICAgICAgIChtYXgpID0+ICh7IG1heCB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIGV4Y2x1c2l2ZU1heGltdW1cclxuICAgIFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuY3VzdG9tUnVsZShcclxuICAgICAgICAnZXhjbHVzaXZlTWF4aW11bScsXHJcbiAgICAgICAgKHZhbCwgX29iaiwgbWF4KSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA8IG1heCA6IHRydWUsXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1heGltdW0gfHwgJyR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiAkeyRjb25maWcubWF4fS4nLFxyXG4gICAgICAgIChtYXgpID0+ICh7IG1heCB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIG11bHRpcGxlT2ZcclxuICAgIFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuY3VzdG9tUnVsZShcclxuICAgICAgICAnbXVsdGlwbGVPZicsXHJcbiAgICAgICAgKHZhbCwgX29iaiwgbXVsdGlwbGUpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gKCh2YWwgJSBtdWx0aXBsZSkgLyAxMDApID09PSAwIDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubXVsdGlwbGVPZiB8fCAnJHskZGlzcGxheU5hbWV9IG11c3QgYmUgYSBtdWx0aXBsZSBvZiAkeyRjb25maWcubXVsdGlwbGV9LicsXHJcbiAgICAgICAgKG11bHRpcGxlKSA9PiAoeyBtdWx0aXBsZSB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgYmluZChjdHJsOiBTZk51bWJlciwgcnVsZTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4pIHtcclxuICAgIFtcclxuICAgICAgJ21pbmltdW0nLFxyXG4gICAgICAnbWF4aW11bScsXHJcbiAgICAgICdleGNsdXNpdmVNaW5pbXVtJyxcclxuICAgICAgJ2V4Y2x1c2l2ZU1heGltdW0nLFxyXG4gICAgICAnbXVsdGlwbGVPZidcclxuICAgIF0uZm9yRWFjaCgocikgPT4ge1xyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLmZvcm0uJHNjaGVtYVtyXSkpIHtcclxuICAgICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKHIsIGN0cmwuZm9ybS4kc2NoZW1hW3JdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
