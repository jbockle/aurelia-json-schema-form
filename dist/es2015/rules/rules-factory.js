var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from "aurelia-framework";
import { StringRules } from "./string-rules";
import { NumberRules } from "./number-rules";
import { CommonRules } from "./common-rules";
import { BooleanRules } from "./boolean-rules";
let RulesFactory = class RulesFactory {
    constructor(commonRules, stringRules, numberRules, booleanRules) {
        this.type = "factory";
        this.rules = {
            commonRules,
            stringRules,
            numberRules,
            booleanRules
        };
    }
    register() {
        Object.keys(this.rules)
            .forEach((kind) => this.rules[kind].register());
    }
    add() {
        throw new Error("Method not implemented.");
    }
    bind(ctrl) {
        const rule = this.rules.commonRules.bind(ctrl);
        this.rules[`${ctrl.kind}Rules`].bind(ctrl, rule);
        rule.on(ctrl);
    }
};
RulesFactory = __decorate([
    inject(CommonRules, StringRules, NumberRules, BooleanRules),
    __metadata("design:paramtypes", [CommonRules,
        StringRules,
        NumberRules,
        BooleanRules])
], RulesFactory);
export { RulesFactory };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBS3ZCLFlBQ0UsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsWUFBMEI7UUFSNUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQVVmLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxXQUFXO1lBQ1gsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1NBQ2IsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3BCLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsR0FBRztRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVM7UUFDWixNQUFNLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztDQUNGLENBQUE7QUFsQ1ksWUFBWTtJQUR4QixNQUFNLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO3FDQU8zQyxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDVixZQUFZO0dBVGpCLFlBQVksQ0FrQ3hCO1NBbENZLFlBQVkiLCJmaWxlIjoicnVsZXMvcnVsZXMtZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdSdWxlcyB9IGZyb20gXCIuL3N0cmluZy1ydWxlc1wiO1xyXG5pbXBvcnQgeyBOdW1iZXJSdWxlcyB9IGZyb20gXCIuL251bWJlci1ydWxlc1wiO1xyXG5pbXBvcnQgeyBDb21tb25SdWxlcyB9IGZyb20gXCIuL2NvbW1vbi1ydWxlc1wiO1xyXG5pbXBvcnQgeyBCb29sZWFuUnVsZXMgfSBmcm9tIFwiLi9ib29sZWFuLXJ1bGVzXCI7XHJcblxyXG5AaW5qZWN0KENvbW1vblJ1bGVzLCBTdHJpbmdSdWxlcywgTnVtYmVyUnVsZXMsIEJvb2xlYW5SdWxlcylcclxuZXhwb3J0IGNsYXNzIFJ1bGVzRmFjdG9yeSB7XHJcbiAgdHlwZSA9IFwiZmFjdG9yeVwiO1xyXG5cclxuICBydWxlczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvbW1vblJ1bGVzOiBDb21tb25SdWxlcyxcclxuICAgIHN0cmluZ1J1bGVzOiBTdHJpbmdSdWxlcyxcclxuICAgIG51bWJlclJ1bGVzOiBOdW1iZXJSdWxlcyxcclxuICAgIGJvb2xlYW5SdWxlczogQm9vbGVhblJ1bGVzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0ge1xyXG4gICAgICBjb21tb25SdWxlcyxcclxuICAgICAgc3RyaW5nUnVsZXMsXHJcbiAgICAgIG51bWJlclJ1bGVzLFxyXG4gICAgICBib29sZWFuUnVsZXNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZWdpc3RlcigpOiB2b2lkIHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMucnVsZXMpXHJcbiAgICAgIC5mb3JFYWNoKChraW5kKSA9PlxyXG4gICAgICAgIHRoaXMucnVsZXNba2luZF0ucmVnaXN0ZXIoKSk7XHJcbiAgfVxyXG5cclxuICBhZGQoKTogdm9pZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIGJpbmQoY3RybDogYW55KSB7XHJcbiAgICBjb25zdCBydWxlID0gKHRoaXMucnVsZXMuY29tbW9uUnVsZXMgYXMgQ29tbW9uUnVsZXMpLmJpbmQoY3RybCk7XHJcbiAgICB0aGlzLnJ1bGVzW2Ake2N0cmwua2luZH1SdWxlc2BdLmJpbmQoY3RybCwgcnVsZSk7XHJcbiAgICBydWxlLm9uKGN0cmwpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
