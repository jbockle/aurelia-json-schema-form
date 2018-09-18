var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from 'aurelia-framework';
import { StringRules } from './string-rules';
import { NumberRules } from './number-rules';
import { CommonRules } from './common-rules';
import { BooleanRules } from './boolean-rules';
let RulesFactory = class RulesFactory {
    constructor(commonRules, stringRules, numberRules, booleanRules) {
        this.type = 'factory';
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
        throw new Error('Method not implemented.');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBS3ZCLFlBQ0UsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsWUFBMEI7UUFSNUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQVVmLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxXQUFXO1lBQ1gsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1NBQ2IsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3BCLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsR0FBRztRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVM7UUFDWixNQUFNLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztDQUNGLENBQUE7QUFsQ1ksWUFBWTtJQUR4QixNQUFNLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO3FDQU8zQyxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDVixZQUFZO0dBVGpCLFlBQVksQ0FrQ3hCO1NBbENZLFlBQVkiLCJmaWxlIjoicnVsZXMvcnVsZXMtZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFN0cmluZ1J1bGVzIH0gZnJvbSAnLi9zdHJpbmctcnVsZXMnO1xuaW1wb3J0IHsgTnVtYmVyUnVsZXMgfSBmcm9tICcuL251bWJlci1ydWxlcyc7XG5pbXBvcnQgeyBDb21tb25SdWxlcyB9IGZyb20gJy4vY29tbW9uLXJ1bGVzJztcbmltcG9ydCB7IEJvb2xlYW5SdWxlcyB9IGZyb20gJy4vYm9vbGVhbi1ydWxlcyc7XG5cbkBpbmplY3QoQ29tbW9uUnVsZXMsIFN0cmluZ1J1bGVzLCBOdW1iZXJSdWxlcywgQm9vbGVhblJ1bGVzKVxuZXhwb3J0IGNsYXNzIFJ1bGVzRmFjdG9yeSB7XG4gIHR5cGUgPSAnZmFjdG9yeSc7XG5cbiAgcnVsZXM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb21tb25SdWxlczogQ29tbW9uUnVsZXMsXG4gICAgc3RyaW5nUnVsZXM6IFN0cmluZ1J1bGVzLFxuICAgIG51bWJlclJ1bGVzOiBOdW1iZXJSdWxlcyxcbiAgICBib29sZWFuUnVsZXM6IEJvb2xlYW5SdWxlc1xuICApIHtcbiAgICB0aGlzLnJ1bGVzID0ge1xuICAgICAgY29tbW9uUnVsZXMsXG4gICAgICBzdHJpbmdSdWxlcyxcbiAgICAgIG51bWJlclJ1bGVzLFxuICAgICAgYm9vbGVhblJ1bGVzXG4gICAgfTtcbiAgfVxuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMucnVsZXMpXG4gICAgICAuZm9yRWFjaCgoa2luZCkgPT5cbiAgICAgICAgdGhpcy5ydWxlc1traW5kXS5yZWdpc3RlcigpKTtcbiAgfVxuXG4gIGFkZCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBiaW5kKGN0cmw6IGFueSkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5ydWxlcy5jb21tb25SdWxlcyBhcyBDb21tb25SdWxlcykuYmluZChjdHJsKTtcbiAgICB0aGlzLnJ1bGVzW2Ake2N0cmwua2luZH1SdWxlc2BdLmJpbmQoY3RybCwgcnVsZSk7XG4gICAgcnVsZS5vbihjdHJsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
