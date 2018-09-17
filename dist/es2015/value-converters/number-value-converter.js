var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { valueConverter } from "aurelia-binding";
let NumberValueConverter = class NumberValueConverter {
    toView(val) {
        return val;
    }
    fromView(val) {
        if (val === "") {
            return null;
        }
        return Number(val);
    }
};
NumberValueConverter = __decorate([
    valueConverter("number")
], NumberValueConverter);
export { NumberValueConverter };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsTUFBTSxDQUFDLEdBQUc7UUFDUixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBRztRQUNWLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFDaEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztDQUNGLENBQUE7QUFUWSxvQkFBb0I7SUFEaEMsY0FBYyxDQUFDLFFBQVEsQ0FBQztHQUNaLG9CQUFvQixDQVNoQztTQVRZLG9CQUFvQiIsImZpbGUiOiJ2YWx1ZS1jb252ZXJ0ZXJzL251bWJlci12YWx1ZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2YWx1ZUNvbnZlcnRlciB9IGZyb20gXCJhdXJlbGlhLWJpbmRpbmdcIjtcclxuXHJcbkB2YWx1ZUNvbnZlcnRlcihcIm51bWJlclwiKVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyVmFsdWVDb252ZXJ0ZXIge1xyXG4gIHRvVmlldyh2YWwpIHtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBmcm9tVmlldyh2YWwpIHtcclxuICAgIGlmICh2YWwgPT09IFwiXCIpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgIHJldHVybiBOdW1iZXIodmFsKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
