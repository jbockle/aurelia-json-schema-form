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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUE7Z0JBNkJBLENBQUM7Z0JBM0JDLDZCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNiLENBQUM7Z0JBRUQsd0JBQUcsR0FBSDtvQkFDRSxjQUFjO2dCQUNoQixDQUFDO2dCQUVELHlCQUFJLEdBQUosVUFBSyxJQUFhO29CQUNoQixJQUFJLElBQUksR0FBRyxvQ0FBZTt5QkFDdkIsWUFBWSxFQUFFO3lCQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7eUJBQ3BDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO29CQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN4QjtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ2hELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNsRDtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ2hELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNsRDtvQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDakMsOEJBQThCO3FCQUMvQjtvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFDSCxpQkFBQztZQUFELENBN0JBLEFBNkJDLElBQUE7O1FBQ0QsQ0FBQyIsImZpbGUiOiJydWxlcy9hcnJheS1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBTZkFycmF5IH0gZnJvbSAnLi4vZm9ybS9hcnJheS9zZi1hcnJheSc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheVJ1bGVzIHtcblxuICByZWdpc3RlcigpIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIC8vIHVuaXF1ZUl0ZW1zXG4gIH1cblxuICBiaW5kKGN0cmw6IFNmQXJyYXkpIHtcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmVuc3VyZU9iamVjdCgpXG4gICAgICAuZGlzcGxheU5hbWUoY3RybC5mb3JtLiRzY2hlbWEudGl0bGUpXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xuICAgIGlmIChjdHJsLmZvcm0uJHJlcXVpcmVkKSB7XG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLmZvcm0uJHNjaGVtYS5tYXhJdGVtcykpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1heEl0ZW1zKGN0cmwuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKTtcbiAgICB9XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoY3RybC5mb3JtLiRzY2hlbWEubWluSXRlbXMpKSB7XG4gICAgICBydWxlID0gcnVsZS5taW5JdGVtcyhjdHJsLmZvcm0uJHNjaGVtYS5taW5JdGVtcyk7XG4gICAgfVxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS51bmlxdWVJdGVtcykge1xuICAgICAgLy8gVE9ETzogYWRkIHVuaXF1ZSBpdGVtcyBydWxlXG4gICAgfVxuICAgIHJ1bGUub24oY3RybC5tb2RlbCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
