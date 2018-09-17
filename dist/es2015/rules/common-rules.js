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
import { ValidationRules, validationMessages } from "aurelia-validation";
let CommonRules = class CommonRules {
    constructor(configuration) {
        this.configuration = configuration;
        this.type = "common";
    }
    register() {
        this.add();
    }
    setCustomMessages() {
        validationMessages["const"] = this.configuration.messages["const"] || validationMessages["equals"];
    }
    add() {
        // enum
        ValidationRules
            .customRule("enum", (val, obj, allowedValues) => val !== undefined ? allowedValues.indexOf(val) >= 0 : true, this.configuration.messages.enum || "${$displayName} has an invalid selection.", (allowedValues) => ({ allowedValues }));
    }
    bind(ctrl) {
        let rule = ValidationRules
            .ensure("model")
            .displayName(ctrl.form.$schema.title)
            .satisfies(() => true);
        if (ctrl.form.$schema.const) {
            rule = rule.equals(ctrl.form.$schema.const);
        }
        if (ctrl.form.$schema.enum) {
            rule = rule.satisfiesRule("enum", ctrl.form.$schema.enum);
        }
        if (ctrl.form.$required) {
            rule = rule.required();
        }
        return rule;
    }
};
CommonRules = __decorate([
    inject(SchemaFormConfiguration),
    __metadata("design:paramtypes", [SchemaFormConfiguration])
], CommonRules);
export { CommonRules };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBZ0QsTUFBTSxvQkFBb0IsQ0FBQztBQUd2SCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBQ3RCLFlBQW9CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUUxRCxTQUFJLEdBQUcsUUFBUSxDQUFDO0lBRjhDLENBQUM7SUFJL0QsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxpQkFBaUI7UUFDZixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQsR0FBRztRQUNELE9BQU87UUFDUCxlQUFlO2FBQ1osVUFBVSxDQUNULE1BQU0sRUFDTixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsYUFBb0IsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDOUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLDJDQUEyQyxFQUMvRSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQ3ZDLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVM7UUFDWixJQUFJLElBQUksR0FBRyxlQUFlO2FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3BDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUF4Q1ksV0FBVztJQUR2QixNQUFNLENBQUMsdUJBQXVCLENBQUM7cUNBRUssdUJBQXVCO0dBRC9DLFdBQVcsQ0F3Q3ZCO1NBeENZLFdBQVciLCJmaWxlIjoicnVsZXMvY29tbW9uLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJ1bGVzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcnVsZXNcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCB2YWxpZGF0aW9uTWVzc2FnZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyLCBQcm9wZXJ0eUFjY2Vzc29yUGFyc2VyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xyXG5cclxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcclxuZXhwb3J0IGNsYXNzIENvbW1vblJ1bGVzIGltcGxlbWVudHMgSVJ1bGVzIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cclxuXHJcbiAgdHlwZSA9IFwiY29tbW9uXCI7XHJcblxyXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hZGQoKTtcclxuICB9XHJcblxyXG4gIHNldEN1c3RvbU1lc3NhZ2VzKCkge1xyXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiY29uc3RcIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXNbXCJjb25zdFwiXSB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbXCJlcXVhbHNcIl07XHJcbiAgfVxyXG5cclxuICBhZGQoKTogdm9pZCB7XHJcbiAgICAvLyBlbnVtXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgXCJlbnVtXCIsXHJcbiAgICAgICAgKHZhbCwgb2JqLCBhbGxvd2VkVmFsdWVzOiBhbnlbXSkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBhbGxvd2VkVmFsdWVzLmluZGV4T2YodmFsKSA+PSAwIDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZW51bSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBoYXMgYW4gaW52YWxpZCBzZWxlY3Rpb24uXCIsXHJcbiAgICAgICAgKGFsbG93ZWRWYWx1ZXMpID0+ICh7IGFsbG93ZWRWYWx1ZXMgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGJpbmQoY3RybDogYW55KTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4ge1xyXG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmVuc3VyZShcIm1vZGVsXCIpXHJcbiAgICAgIC5kaXNwbGF5TmFtZShjdHJsLmZvcm0uJHNjaGVtYS50aXRsZSlcclxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcclxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS5jb25zdCkge1xyXG4gICAgICBydWxlID0gcnVsZS5lcXVhbHMoY3RybC5mb3JtLiRzY2hlbWEuY29uc3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLmVudW0pIHtcclxuICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZShcImVudW1cIiwgY3RybC5mb3JtLiRzY2hlbWEuZW51bSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3RybC5mb3JtLiRyZXF1aXJlZCkge1xyXG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJ1bGU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
