var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./string-rules", "./number-rules", "./common-rules", "./boolean-rules"], function (require, exports, aurelia_framework_1, string_rules_1, number_rules_1, common_rules_1, boolean_rules_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RulesFactory = /** @class */ (function () {
        function RulesFactory(commonRules, stringRules, numberRules, booleanRules) {
            this.type = 'factory';
            this.rules = {
                commonRules: commonRules,
                stringRules: stringRules,
                numberRules: numberRules,
                booleanRules: booleanRules
            };
        }
        RulesFactory.prototype.register = function () {
            var _this = this;
            Object.keys(this.rules)
                .forEach(function (kind) {
                return _this.rules[kind].register();
            });
        };
        RulesFactory.prototype.add = function () {
            throw new Error('Method not implemented.');
        };
        RulesFactory.prototype.bind = function (ctrl) {
            var rule = this.rules.commonRules.bind(ctrl);
            this.rules[ctrl.kind + "Rules"].bind(ctrl, rule);
            rule.on(ctrl);
        };
        RulesFactory = __decorate([
            aurelia_framework_1.inject(common_rules_1.CommonRules, string_rules_1.StringRules, number_rules_1.NumberRules, boolean_rules_1.BooleanRules),
            __metadata("design:paramtypes", [common_rules_1.CommonRules,
                string_rules_1.StringRules,
                number_rules_1.NumberRules,
                boolean_rules_1.BooleanRules])
        ], RulesFactory);
        return RulesFactory;
    }());
    exports.RulesFactory = RulesFactory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0E7UUFLRSxzQkFDRSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixXQUF3QixFQUN4QixZQUEwQjtZQVI1QixTQUFJLEdBQUcsU0FBUyxDQUFDO1lBVWYsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDWCxXQUFXLGFBQUE7Z0JBQ1gsV0FBVyxhQUFBO2dCQUNYLFdBQVcsYUFBQTtnQkFDWCxZQUFZLGNBQUE7YUFDYixDQUFDO1FBQ0osQ0FBQztRQUVELCtCQUFRLEdBQVI7WUFBQSxpQkFJQztZQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDcEIsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDWixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQTNCLENBQTJCLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQsMEJBQUcsR0FBSDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsMkJBQUksR0FBSixVQUFLLElBQVM7WUFDWixJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFqQ1UsWUFBWTtZQUR4QiwwQkFBTSxDQUFDLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDRCQUFZLENBQUM7NkNBTzNDLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNWLDRCQUFZO1dBVGpCLFlBQVksQ0FrQ3hCO1FBQUQsbUJBQUM7S0FsQ0QsQUFrQ0MsSUFBQTtJQWxDWSxvQ0FBWSIsImZpbGUiOiJydWxlcy9ydWxlcy1mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgU3RyaW5nUnVsZXMgfSBmcm9tICcuL3N0cmluZy1ydWxlcyc7XG5pbXBvcnQgeyBOdW1iZXJSdWxlcyB9IGZyb20gJy4vbnVtYmVyLXJ1bGVzJztcbmltcG9ydCB7IENvbW1vblJ1bGVzIH0gZnJvbSAnLi9jb21tb24tcnVsZXMnO1xuaW1wb3J0IHsgQm9vbGVhblJ1bGVzIH0gZnJvbSAnLi9ib29sZWFuLXJ1bGVzJztcblxuQGluamVjdChDb21tb25SdWxlcywgU3RyaW5nUnVsZXMsIE51bWJlclJ1bGVzLCBCb29sZWFuUnVsZXMpXG5leHBvcnQgY2xhc3MgUnVsZXNGYWN0b3J5IHtcbiAgdHlwZSA9ICdmYWN0b3J5JztcblxuICBydWxlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbW1vblJ1bGVzOiBDb21tb25SdWxlcyxcbiAgICBzdHJpbmdSdWxlczogU3RyaW5nUnVsZXMsXG4gICAgbnVtYmVyUnVsZXM6IE51bWJlclJ1bGVzLFxuICAgIGJvb2xlYW5SdWxlczogQm9vbGVhblJ1bGVzXG4gICkge1xuICAgIHRoaXMucnVsZXMgPSB7XG4gICAgICBjb21tb25SdWxlcyxcbiAgICAgIHN0cmluZ1J1bGVzLFxuICAgICAgbnVtYmVyUnVsZXMsXG4gICAgICBib29sZWFuUnVsZXNcbiAgICB9O1xuICB9XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ydWxlcylcbiAgICAgIC5mb3JFYWNoKChraW5kKSA9PlxuICAgICAgICB0aGlzLnJ1bGVzW2tpbmRdLnJlZ2lzdGVyKCkpO1xuICB9XG5cbiAgYWRkKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogYW55KSB7XG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLnJ1bGVzLmNvbW1vblJ1bGVzIGFzIENvbW1vblJ1bGVzKS5iaW5kKGN0cmwpO1xuICAgIHRoaXMucnVsZXNbYCR7Y3RybC5raW5kfVJ1bGVzYF0uYmluZChjdHJsLCBydWxlKTtcbiAgICBydWxlLm9uKGN0cmwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
