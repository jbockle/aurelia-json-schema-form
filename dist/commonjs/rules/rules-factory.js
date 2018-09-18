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
var aurelia_framework_1 = require("aurelia-framework");
var string_rules_1 = require("./string-rules");
var number_rules_1 = require("./number-rules");
var common_rules_1 = require("./common-rules");
var boolean_rules_1 = require("./boolean-rules");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBMkM7QUFDM0MsK0NBQTZDO0FBQzdDLCtDQUE2QztBQUM3QywrQ0FBNkM7QUFDN0MsaURBQStDO0FBRy9DO0lBS0Usc0JBQ0UsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsWUFBMEI7UUFSNUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQVVmLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxXQUFXLGFBQUE7WUFDWCxXQUFXLGFBQUE7WUFDWCxXQUFXLGFBQUE7WUFDWCxZQUFZLGNBQUE7U0FDYixDQUFDO0lBQ0osQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNwQixPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ1osT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtRQUEzQixDQUEyQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDBCQUFHLEdBQUg7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxJQUFTO1FBQ1osSUFBTSxJQUFJLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxJQUFJLFVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBakNVLFlBQVk7UUFEeEIsMEJBQU0sQ0FBQywwQkFBVyxFQUFFLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSw0QkFBWSxDQUFDO3lDQU8zQywwQkFBVztZQUNYLDBCQUFXO1lBQ1gsMEJBQVc7WUFDViw0QkFBWTtPQVRqQixZQUFZLENBa0N4QjtJQUFELG1CQUFDO0NBbENELEFBa0NDLElBQUE7QUFsQ1ksb0NBQVkiLCJmaWxlIjoicnVsZXMvcnVsZXMtZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgU3RyaW5nUnVsZXMgfSBmcm9tICcuL3N0cmluZy1ydWxlcyc7XHJcbmltcG9ydCB7IE51bWJlclJ1bGVzIH0gZnJvbSAnLi9udW1iZXItcnVsZXMnO1xyXG5pbXBvcnQgeyBDb21tb25SdWxlcyB9IGZyb20gJy4vY29tbW9uLXJ1bGVzJztcclxuaW1wb3J0IHsgQm9vbGVhblJ1bGVzIH0gZnJvbSAnLi9ib29sZWFuLXJ1bGVzJztcclxuXHJcbkBpbmplY3QoQ29tbW9uUnVsZXMsIFN0cmluZ1J1bGVzLCBOdW1iZXJSdWxlcywgQm9vbGVhblJ1bGVzKVxyXG5leHBvcnQgY2xhc3MgUnVsZXNGYWN0b3J5IHtcclxuICB0eXBlID0gJ2ZhY3RvcnknO1xyXG5cclxuICBydWxlczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvbW1vblJ1bGVzOiBDb21tb25SdWxlcyxcclxuICAgIHN0cmluZ1J1bGVzOiBTdHJpbmdSdWxlcyxcclxuICAgIG51bWJlclJ1bGVzOiBOdW1iZXJSdWxlcyxcclxuICAgIGJvb2xlYW5SdWxlczogQm9vbGVhblJ1bGVzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0ge1xyXG4gICAgICBjb21tb25SdWxlcyxcclxuICAgICAgc3RyaW5nUnVsZXMsXHJcbiAgICAgIG51bWJlclJ1bGVzLFxyXG4gICAgICBib29sZWFuUnVsZXNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZWdpc3RlcigpOiB2b2lkIHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMucnVsZXMpXHJcbiAgICAgIC5mb3JFYWNoKChraW5kKSA9PlxyXG4gICAgICAgIHRoaXMucnVsZXNba2luZF0ucmVnaXN0ZXIoKSk7XHJcbiAgfVxyXG5cclxuICBhZGQoKTogdm9pZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgfVxyXG5cclxuICBiaW5kKGN0cmw6IGFueSkge1xyXG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLnJ1bGVzLmNvbW1vblJ1bGVzIGFzIENvbW1vblJ1bGVzKS5iaW5kKGN0cmwpO1xyXG4gICAgdGhpcy5ydWxlc1tgJHtjdHJsLmtpbmR9UnVsZXNgXS5iaW5kKGN0cmwsIHJ1bGUpO1xyXG4gICAgcnVsZS5vbihjdHJsKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
