define(["require", "exports", "aurelia-validation"], function (require, exports, aurelia_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArrayRules = /** @class */ (function () {
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
    exports.ArrayRules = ArrayRules;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUdBO1FBQUE7UUE2QkEsQ0FBQztRQTNCQyw2QkFBUSxHQUFSO1lBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQztRQUVELHdCQUFHLEdBQUg7WUFDRSxjQUFjO1FBQ2hCLENBQUM7UUFFRCx5QkFBSSxHQUFKLFVBQUssSUFBYTtZQUNoQixJQUFJLElBQUksR0FBRyxvQ0FBZTtpQkFDdkIsWUFBWSxFQUFFO2lCQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQ3BDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsRDtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUNqQyw4QkFBOEI7YUFDL0I7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0gsaUJBQUM7SUFBRCxDQTdCQSxBQTZCQyxJQUFBO0lBN0JZLGdDQUFVIiwiZmlsZSI6InJ1bGVzL2FycmF5LXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcbmltcG9ydCB7IFNmQXJyYXkgfSBmcm9tICcuLi9mb3JtL2FycmF5L3NmLWFycmF5JztcblxuZXhwb3J0IGNsYXNzIEFycmF5UnVsZXMge1xuXG4gIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgLy8gdW5pcXVlSXRlbXNcbiAgfVxuXG4gIGJpbmQoY3RybDogU2ZBcnJheSkge1xuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuZW5zdXJlT2JqZWN0KClcbiAgICAgIC5kaXNwbGF5TmFtZShjdHJsLmZvcm0uJHNjaGVtYS50aXRsZSlcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XG4gICAgaWYgKGN0cmwuZm9ybS4kcmVxdWlyZWQpIHtcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XG4gICAgfVxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKSkge1xuICAgICAgcnVsZSA9IHJ1bGUubWF4SXRlbXMoY3RybC5mb3JtLiRzY2hlbWEubWF4SXRlbXMpO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLmZvcm0uJHNjaGVtYS5taW5JdGVtcykpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1pbkl0ZW1zKGN0cmwuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zKTtcbiAgICB9XG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLnVuaXF1ZUl0ZW1zKSB7XG4gICAgICAvLyBUT0RPOiBhZGQgdW5pcXVlIGl0ZW1zIHJ1bGVcbiAgICB9XG4gICAgcnVsZS5vbihjdHJsLm1vZGVsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
