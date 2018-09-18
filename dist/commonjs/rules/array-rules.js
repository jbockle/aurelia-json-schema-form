"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_validation_1 = require("aurelia-validation");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQXFEO0FBR3JEO0lBQUE7SUE2QkEsQ0FBQztJQTNCQyw2QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELHdCQUFHLEdBQUg7UUFDRSxjQUFjO0lBQ2hCLENBQUM7SUFFRCx5QkFBSSxHQUFKLFVBQUssSUFBYTtRQUNoQixJQUFJLElBQUksR0FBRyxvQ0FBZTthQUN2QixZQUFZLEVBQUU7YUFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3BDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2pDLDhCQUE4QjtTQUMvQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxpQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlksZ0NBQVUiLCJmaWxlIjoicnVsZXMvYXJyYXktcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBTZkFycmF5IH0gZnJvbSAnLi4vZm9ybS9hcnJheS9zZi1hcnJheSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyYXlSdWxlcyB7XHJcblxyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgdGhpcy5hZGQoKTtcclxuICB9XHJcblxyXG4gIGFkZCgpIHtcclxuICAgIC8vIHVuaXF1ZUl0ZW1zXHJcbiAgfVxyXG5cclxuICBiaW5kKGN0cmw6IFNmQXJyYXkpIHtcclxuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5lbnN1cmVPYmplY3QoKVxyXG4gICAgICAuZGlzcGxheU5hbWUoY3RybC5mb3JtLiRzY2hlbWEudGl0bGUpXHJcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XHJcbiAgICBpZiAoY3RybC5mb3JtLiRyZXF1aXJlZCkge1xyXG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoY3RybC5mb3JtLiRzY2hlbWEubWF4SXRlbXMpKSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlLm1heEl0ZW1zKGN0cmwuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKTtcclxuICAgIH1cclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zKSkge1xyXG4gICAgICBydWxlID0gcnVsZS5taW5JdGVtcyhjdHJsLmZvcm0uJHNjaGVtYS5taW5JdGVtcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEudW5pcXVlSXRlbXMpIHtcclxuICAgICAgLy8gVE9ETzogYWRkIHVuaXF1ZSBpdGVtcyBydWxlXHJcbiAgICB9XHJcbiAgICBydWxlLm9uKGN0cmwubW9kZWwpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
