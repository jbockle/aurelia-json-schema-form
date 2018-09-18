var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../services/schema-form-configuration", "aurelia-validation"], function (require, exports, aurelia_framework_1, schema_form_configuration_1, aurelia_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommonRules = /** @class */ (function () {
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
    exports.CommonRules = CommonRules;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQUNFLHFCQUFvQixhQUFzQztZQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7WUFFMUQsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUY4QyxDQUFDO1FBSS9ELDhCQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDO1FBRUQsdUNBQWlCLEdBQWpCO1lBQ0UsdUNBQWtCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSx1Q0FBa0IsQ0FBQyxNQUFNLENBQUM7UUFDNUYsQ0FBQztRQUVELHlCQUFHLEdBQUg7WUFDRSxPQUFPO1lBQ1Asb0NBQWU7aUJBQ1osVUFBVSxDQUNULE1BQU0sRUFDTixVQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsYUFBb0IsSUFBSyxPQUFBLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQTFELENBQTBELEVBQy9GLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSwyQ0FBMkMsRUFDL0UsVUFBQyxhQUFhLElBQUssT0FBQSxDQUFDLEVBQUUsYUFBYSxlQUFBLEVBQUUsQ0FBQyxFQUFuQixDQUFtQixDQUN2QyxDQUFDO1FBQ04sQ0FBQztRQUVELDBCQUFJLEdBQUosVUFBSyxJQUFTO1lBQ1osSUFBSSxJQUFJLEdBQUcsb0NBQWU7aUJBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztpQkFDcEMsU0FBUyxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzRDtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDeEI7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUF2Q1UsV0FBVztZQUR2QiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDOzZDQUVLLG1EQUF1QjtXQUQvQyxXQUFXLENBd0N2QjtRQUFELGtCQUFDO0tBeENELEFBd0NDLElBQUE7SUF4Q1ksa0NBQVciLCJmaWxlIjoicnVsZXMvY29tbW9uLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJ1bGVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ydWxlcyc7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCB2YWxpZGF0aW9uTWVzc2FnZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcclxuXHJcbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXHJcbmV4cG9ydCBjbGFzcyBDb21tb25SdWxlcyBpbXBsZW1lbnRzIElSdWxlcyB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XHJcblxyXG4gIHR5cGUgPSAnY29tbW9uJztcclxuXHJcbiAgcmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VzdG9tTWVzc2FnZXMoKSB7XHJcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXMuY29uc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuY29uc3QgfHwgdmFsaWRhdGlvbk1lc3NhZ2VzLmVxdWFscztcclxuICB9XHJcblxyXG4gIGFkZCgpOiB2b2lkIHtcclxuICAgIC8vIGVudW1cclxuICAgIFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuY3VzdG9tUnVsZShcclxuICAgICAgICAnZW51bScsXHJcbiAgICAgICAgKHZhbCwgX29iaiwgYWxsb3dlZFZhbHVlczogYW55W10pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gYWxsb3dlZFZhbHVlcy5pbmRleE9mKHZhbCkgPj0gMCA6IHRydWUsXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmVudW0gfHwgJyR7JGRpc3BsYXlOYW1lfSBoYXMgYW4gaW52YWxpZCBzZWxlY3Rpb24uJyxcclxuICAgICAgICAoYWxsb3dlZFZhbHVlcykgPT4gKHsgYWxsb3dlZFZhbHVlcyB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgYmluZChjdHJsOiBhbnkpOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55PiB7XHJcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuZW5zdXJlKCdtb2RlbCcpXHJcbiAgICAgIC5kaXNwbGF5TmFtZShjdHJsLmZvcm0uJHNjaGVtYS50aXRsZSlcclxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcclxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS5jb25zdCkge1xyXG4gICAgICBydWxlID0gcnVsZS5lcXVhbHMoY3RybC5mb3JtLiRzY2hlbWEuY29uc3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLmVudW0pIHtcclxuICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZSgnZW51bScsIGN0cmwuZm9ybS4kc2NoZW1hLmVudW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGN0cmwuZm9ybS4kcmVxdWlyZWQpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBydWxlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
