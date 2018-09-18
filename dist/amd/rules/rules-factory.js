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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0E7UUFLRSxzQkFDRSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixXQUF3QixFQUN4QixZQUEwQjtZQVI1QixTQUFJLEdBQUcsU0FBUyxDQUFDO1lBVWYsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDWCxXQUFXLGFBQUE7Z0JBQ1gsV0FBVyxhQUFBO2dCQUNYLFdBQVcsYUFBQTtnQkFDWCxZQUFZLGNBQUE7YUFDYixDQUFDO1FBQ0osQ0FBQztRQUVELCtCQUFRLEdBQVI7WUFBQSxpQkFJQztZQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDcEIsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDWixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQTNCLENBQTJCLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQsMEJBQUcsR0FBSDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsMkJBQUksR0FBSixVQUFLLElBQVM7WUFDWixJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFqQ1UsWUFBWTtZQUR4QiwwQkFBTSxDQUFDLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDRCQUFZLENBQUM7NkNBTzNDLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNWLDRCQUFZO1dBVGpCLFlBQVksQ0FrQ3hCO1FBQUQsbUJBQUM7S0FsQ0QsQUFrQ0MsSUFBQTtJQWxDWSxvQ0FBWSIsImZpbGUiOiJydWxlcy9ydWxlcy1mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBTdHJpbmdSdWxlcyB9IGZyb20gJy4vc3RyaW5nLXJ1bGVzJztcclxuaW1wb3J0IHsgTnVtYmVyUnVsZXMgfSBmcm9tICcuL251bWJlci1ydWxlcyc7XHJcbmltcG9ydCB7IENvbW1vblJ1bGVzIH0gZnJvbSAnLi9jb21tb24tcnVsZXMnO1xyXG5pbXBvcnQgeyBCb29sZWFuUnVsZXMgfSBmcm9tICcuL2Jvb2xlYW4tcnVsZXMnO1xyXG5cclxuQGluamVjdChDb21tb25SdWxlcywgU3RyaW5nUnVsZXMsIE51bWJlclJ1bGVzLCBCb29sZWFuUnVsZXMpXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0ZhY3Rvcnkge1xyXG4gIHR5cGUgPSAnZmFjdG9yeSc7XHJcblxyXG4gIHJ1bGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29tbW9uUnVsZXM6IENvbW1vblJ1bGVzLFxyXG4gICAgc3RyaW5nUnVsZXM6IFN0cmluZ1J1bGVzLFxyXG4gICAgbnVtYmVyUnVsZXM6IE51bWJlclJ1bGVzLFxyXG4gICAgYm9vbGVhblJ1bGVzOiBCb29sZWFuUnVsZXNcclxuICApIHtcclxuICAgIHRoaXMucnVsZXMgPSB7XHJcbiAgICAgIGNvbW1vblJ1bGVzLFxyXG4gICAgICBzdHJpbmdSdWxlcyxcclxuICAgICAgbnVtYmVyUnVsZXMsXHJcbiAgICAgIGJvb2xlYW5SdWxlc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5ydWxlcylcclxuICAgICAgLmZvckVhY2goKGtpbmQpID0+XHJcbiAgICAgICAgdGhpcy5ydWxlc1traW5kXS5yZWdpc3RlcigpKTtcclxuICB9XHJcblxyXG4gIGFkZCgpOiB2b2lkIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICB9XHJcblxyXG4gIGJpbmQoY3RybDogYW55KSB7XHJcbiAgICBjb25zdCBydWxlID0gKHRoaXMucnVsZXMuY29tbW9uUnVsZXMgYXMgQ29tbW9uUnVsZXMpLmJpbmQoY3RybCk7XHJcbiAgICB0aGlzLnJ1bGVzW2Ake2N0cmwua2luZH1SdWxlc2BdLmJpbmQoY3RybCwgcnVsZSk7XHJcbiAgICBydWxlLm9uKGN0cmwpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
