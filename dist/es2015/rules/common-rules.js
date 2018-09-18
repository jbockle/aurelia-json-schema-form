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
import { SchemaFormConfiguration } from '../services/schema-form-configuration';
import { ValidationRules, validationMessages } from 'aurelia-validation';
let CommonRules = class CommonRules {
    constructor(configuration) {
        this.configuration = configuration;
        this.type = 'common';
    }
    register() {
        this.add();
    }
    setCustomMessages() {
        validationMessages.const = this.configuration.messages.const || validationMessages.equals;
    }
    add() {
        // enum
        ValidationRules
            .customRule('enum', (val, _obj, allowedValues) => val !== undefined ? allowedValues.indexOf(val) >= 0 : true, this.configuration.messages.enum || '${$displayName} has an invalid selection.', (allowedValues) => ({ allowedValues }));
    }
    bind(ctrl) {
        let rule = ValidationRules
            .ensure('model')
            .displayName(ctrl.form.$schema.title)
            .satisfies(() => true);
        if (ctrl.form.$schema.const) {
            rule = rule.equals(ctrl.form.$schema.const);
        }
        if (ctrl.form.$schema.enum) {
            rule = rule.satisfiesRule('enum', ctrl.form.$schema.enum);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQztBQUcvRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBQ3RCLFlBQW9CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUUxRCxTQUFJLEdBQUcsUUFBUSxDQUFDO0lBRjhDLENBQUM7SUFJL0QsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxpQkFBaUI7UUFDZixrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztJQUM1RixDQUFDO0lBRUQsR0FBRztRQUNELE9BQU87UUFDUCxlQUFlO2FBQ1osVUFBVSxDQUNULE1BQU0sRUFDTixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsYUFBb0IsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDL0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLDJDQUEyQyxFQUMvRSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQ3ZDLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVM7UUFDWixJQUFJLElBQUksR0FBRyxlQUFlO2FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3BDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUF4Q1ksV0FBVztJQUR2QixNQUFNLENBQUMsdUJBQXVCLENBQUM7cUNBRUssdUJBQXVCO0dBRC9DLFdBQVcsQ0F3Q3ZCO1NBeENZLFdBQVciLCJmaWxlIjoicnVsZXMvY29tbW9uLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJ1bGVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ydWxlcyc7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCB2YWxpZGF0aW9uTWVzc2FnZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcclxuXHJcbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXHJcbmV4cG9ydCBjbGFzcyBDb21tb25SdWxlcyBpbXBsZW1lbnRzIElSdWxlcyB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XHJcblxyXG4gIHR5cGUgPSAnY29tbW9uJztcclxuXHJcbiAgcmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VzdG9tTWVzc2FnZXMoKSB7XHJcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXMuY29uc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuY29uc3QgfHwgdmFsaWRhdGlvbk1lc3NhZ2VzLmVxdWFscztcclxuICB9XHJcblxyXG4gIGFkZCgpOiB2b2lkIHtcclxuICAgIC8vIGVudW1cclxuICAgIFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuY3VzdG9tUnVsZShcclxuICAgICAgICAnZW51bScsXHJcbiAgICAgICAgKHZhbCwgX29iaiwgYWxsb3dlZFZhbHVlczogYW55W10pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gYWxsb3dlZFZhbHVlcy5pbmRleE9mKHZhbCkgPj0gMCA6IHRydWUsXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmVudW0gfHwgJyR7JGRpc3BsYXlOYW1lfSBoYXMgYW4gaW52YWxpZCBzZWxlY3Rpb24uJyxcclxuICAgICAgICAoYWxsb3dlZFZhbHVlcykgPT4gKHsgYWxsb3dlZFZhbHVlcyB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgYmluZChjdHJsOiBhbnkpOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55PiB7XHJcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuZW5zdXJlKCdtb2RlbCcpXHJcbiAgICAgIC5kaXNwbGF5TmFtZShjdHJsLmZvcm0uJHNjaGVtYS50aXRsZSlcclxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcclxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS5jb25zdCkge1xyXG4gICAgICBydWxlID0gcnVsZS5lcXVhbHMoY3RybC5mb3JtLiRzY2hlbWEuY29uc3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLmVudW0pIHtcclxuICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZSgnZW51bScsIGN0cmwuZm9ybS4kc2NoZW1hLmVudW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGN0cmwuZm9ybS4kcmVxdWlyZWQpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBydWxlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
