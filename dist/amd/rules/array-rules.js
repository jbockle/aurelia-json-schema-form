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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUdBO1FBQUE7UUE2QkEsQ0FBQztRQTNCQyw2QkFBUSxHQUFSO1lBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQztRQUVELHdCQUFHLEdBQUg7WUFDRSxjQUFjO1FBQ2hCLENBQUM7UUFFRCx5QkFBSSxHQUFKLFVBQUssSUFBYTtZQUNoQixJQUFJLElBQUksR0FBRyxvQ0FBZTtpQkFDdkIsWUFBWSxFQUFFO2lCQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQ3BDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsRDtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUNqQyw4QkFBOEI7YUFDL0I7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0gsaUJBQUM7SUFBRCxDQTdCQSxBQTZCQyxJQUFBO0lBN0JZLGdDQUFVIiwiZmlsZSI6InJ1bGVzL2FycmF5LXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcclxuaW1wb3J0IHsgU2ZBcnJheSB9IGZyb20gJy4uL2Zvcm0vYXJyYXkvc2YtYXJyYXknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFycmF5UnVsZXMge1xyXG5cclxuICByZWdpc3RlcigpIHtcclxuICAgIHRoaXMuYWRkKCk7XHJcbiAgfVxyXG5cclxuICBhZGQoKSB7XHJcbiAgICAvLyB1bmlxdWVJdGVtc1xyXG4gIH1cclxuXHJcbiAgYmluZChjdHJsOiBTZkFycmF5KSB7XHJcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuZW5zdXJlT2JqZWN0KClcclxuICAgICAgLmRpc3BsYXlOYW1lKGN0cmwuZm9ybS4kc2NoZW1hLnRpdGxlKVxyXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xyXG4gICAgaWYgKGN0cmwuZm9ybS4kcmVxdWlyZWQpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcclxuICAgIH1cclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKSkge1xyXG4gICAgICBydWxlID0gcnVsZS5tYXhJdGVtcyhjdHJsLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLmZvcm0uJHNjaGVtYS5taW5JdGVtcykpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUubWluSXRlbXMoY3RybC5mb3JtLiRzY2hlbWEubWluSXRlbXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLnVuaXF1ZUl0ZW1zKSB7XHJcbiAgICAgIC8vIFRPRE86IGFkZCB1bmlxdWUgaXRlbXMgcnVsZVxyXG4gICAgfVxyXG4gICAgcnVsZS5vbihjdHJsLm1vZGVsKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
