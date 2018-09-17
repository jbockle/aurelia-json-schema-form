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
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
let BooleanRules = class BooleanRules {
    constructor(configuration) {
        this.configuration = configuration;
    }
    register() {
        this.add();
    }
    add() {
        // nothing specific to booleans
    }
    bind(ctrl, rule) {
        // nothing specific to booleans
    }
};
BooleanRules = __decorate([
    inject(SchemaFormConfiguration),
    __metadata("design:paramtypes", [SchemaFormConfiguration])
], BooleanRules);
export { BooleanRules };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2Jvb2xlYW4tcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBS2hGLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFDdkIsWUFBb0IsYUFBc0M7UUFBdEMsa0JBQWEsR0FBYixhQUFhLENBQXlCO0lBQUksQ0FBQztJQUUvRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELEdBQUc7UUFDRCwrQkFBK0I7SUFDakMsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFlLEVBQUUsSUFBbUM7UUFDdkQsK0JBQStCO0lBQ2pDLENBQUM7Q0FDRixDQUFBO0FBZFksWUFBWTtJQUR4QixNQUFNLENBQUMsdUJBQXVCLENBQUM7cUNBRUssdUJBQXVCO0dBRC9DLFlBQVksQ0FjeEI7U0FkWSxZQUFZIiwiZmlsZSI6InJ1bGVzL2Jvb2xlYW4tcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBTZk51bWJlciB9IGZyb20gXCIuLi9mb3JtL251bWJlci9zZi1udW1iZXJcIjtcclxuaW1wb3J0IHsgU2ZCb29sZWFuIH0gZnJvbSBcIi4uL2Zvcm0vYm9vbGVhbi9zZi1ib29sZWFuXCI7XHJcblxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhblJ1bGVzIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cclxuXHJcbiAgcmVnaXN0ZXIoKSB7XHJcbiAgICB0aGlzLmFkZCgpO1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgLy8gbm90aGluZyBzcGVjaWZpYyB0byBib29sZWFuc1xyXG4gIH1cclxuXHJcbiAgYmluZChjdHJsOiBTZkJvb2xlYW4sIHJ1bGU6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+KSB7XHJcbiAgICAvLyBub3RoaW5nIHNwZWNpZmljIHRvIGJvb2xlYW5zXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
