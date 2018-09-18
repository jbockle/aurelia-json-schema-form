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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQXFEO0FBR3JEO0lBQUE7SUE2QkEsQ0FBQztJQTNCQyw2QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELHdCQUFHLEdBQUg7UUFDRSxjQUFjO0lBQ2hCLENBQUM7SUFFRCx5QkFBSSxHQUFKLFVBQUssSUFBYTtRQUNoQixJQUFJLElBQUksR0FBRyxvQ0FBZTthQUN2QixZQUFZLEVBQUU7YUFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3BDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2pDLDhCQUE4QjtTQUMvQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxpQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlksZ0NBQVUiLCJmaWxlIjoicnVsZXMvYXJyYXktcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgU2ZBcnJheSB9IGZyb20gJy4uL2Zvcm0vYXJyYXkvc2YtYXJyYXknO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlSdWxlcyB7XG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICAvLyB1bmlxdWVJdGVtc1xuICB9XG5cbiAgYmluZChjdHJsOiBTZkFycmF5KSB7XG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5lbnN1cmVPYmplY3QoKVxuICAgICAgLmRpc3BsYXlOYW1lKGN0cmwuZm9ybS4kc2NoZW1hLnRpdGxlKVxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcbiAgICBpZiAoY3RybC5mb3JtLiRyZXF1aXJlZCkge1xuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcbiAgICB9XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoY3RybC5mb3JtLiRzY2hlbWEubWF4SXRlbXMpKSB7XG4gICAgICBydWxlID0gcnVsZS5tYXhJdGVtcyhjdHJsLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyk7XG4gICAgfVxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zKSkge1xuICAgICAgcnVsZSA9IHJ1bGUubWluSXRlbXMoY3RybC5mb3JtLiRzY2hlbWEubWluSXRlbXMpO1xuICAgIH1cbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEudW5pcXVlSXRlbXMpIHtcbiAgICAgIC8vIFRPRE86IGFkZCB1bmlxdWUgaXRlbXMgcnVsZVxuICAgIH1cbiAgICBydWxlLm9uKGN0cmwubW9kZWwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
