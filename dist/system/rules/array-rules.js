System.register(["aurelia-validation"], function (exports_1, context_1) {
    "use strict";
    var aurelia_validation_1, ArrayRules;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            }
        ],
        execute: function () {
            ArrayRules = /** @class */ (function () {
                function ArrayRules() {
                }
                ArrayRules.prototype.register = function () {
                    this.add();
                };
                ArrayRules.prototype.add = function () {
                    // uniqueItems
                };
                ArrayRules.prototype.bind = function (ctrl) {
                    var rule = aurelia_validation_1.ValidationRules
                        .ensureObject()
                        .displayName(ctrl.form.$schema.title)
                        .satisfies(function () { return true; });
                    if (ctrl.form.$required) {
                        rule = rule.required();
                    }
                    if (Number.isInteger(ctrl.form.$schema.maxItems)) {
                        rule = rule.maxItems(ctrl.form.$schema.maxItems);
                    }
                    if (Number.isInteger(ctrl.form.$schema.minItems)) {
                        rule = rule.minItems(ctrl.form.$schema.minItems);
                    }
                    if (ctrl.form.$schema.uniqueItems) {
                        // TODO: add unique items rule
                    }
                    rule.on(ctrl.model);
                };
                return ArrayRules;
            }());
            exports_1("ArrayRules", ArrayRules);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUE7Z0JBNkJBLENBQUM7Z0JBM0JDLDZCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNiLENBQUM7Z0JBRUQsd0JBQUcsR0FBSDtvQkFDRSxjQUFjO2dCQUNoQixDQUFDO2dCQUVELHlCQUFJLEdBQUosVUFBSyxJQUFhO29CQUNoQixJQUFJLElBQUksR0FBRyxvQ0FBZTt5QkFDdkIsWUFBWSxFQUFFO3lCQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7eUJBQ3BDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO29CQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN4QjtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ2hELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNsRDtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ2hELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNsRDtvQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDakMsOEJBQThCO3FCQUMvQjtvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFDSCxpQkFBQztZQUFELENBN0JBLEFBNkJDLElBQUE7O1FBQ0QsQ0FBQyIsImZpbGUiOiJydWxlcy9hcnJheS1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcbmltcG9ydCB7IFNmQXJyYXkgfSBmcm9tICcuLi9mb3JtL2FycmF5L3NmLWFycmF5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheVJ1bGVzIHtcclxuXHJcbiAgcmVnaXN0ZXIoKSB7XHJcbiAgICB0aGlzLmFkZCgpO1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgLy8gdW5pcXVlSXRlbXNcclxuICB9XHJcblxyXG4gIGJpbmQoY3RybDogU2ZBcnJheSkge1xyXG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmVuc3VyZU9iamVjdCgpXHJcbiAgICAgIC5kaXNwbGF5TmFtZShjdHJsLmZvcm0uJHNjaGVtYS50aXRsZSlcclxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcclxuICAgIGlmIChjdHJsLmZvcm0uJHJlcXVpcmVkKSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLmZvcm0uJHNjaGVtYS5tYXhJdGVtcykpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUubWF4SXRlbXMoY3RybC5mb3JtLiRzY2hlbWEubWF4SXRlbXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoY3RybC5mb3JtLiRzY2hlbWEubWluSXRlbXMpKSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlLm1pbkl0ZW1zKGN0cmwuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zKTtcclxuICAgIH1cclxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS51bmlxdWVJdGVtcykge1xyXG4gICAgICAvLyBUT0RPOiBhZGQgdW5pcXVlIGl0ZW1zIHJ1bGVcclxuICAgIH1cclxuICAgIHJ1bGUub24oY3RybC5tb2RlbCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
