var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { customElement, bindable, inject, InlineViewStrategy } from 'aurelia-framework';
import { Guid } from '../../resources/guid';
import { SchemaFormLogger } from '../../resources/logger';
import { FormService } from '../../services/form-service';
let SfObject = class SfObject {
    constructor(formService, logger) {
        this.formService = formService;
        this.logger = logger;
        this.id = Guid.newGuid();
        this.kind = 'object';
    }
    attached() {
        this.logger.info('sf-object-attached');
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('sf-object', { form: this.form, model: this.model });
            const template = yield this.formService
                .getFormTemplateAsync(this.form, this.form.$schema, this.model, this.formInstance);
            this.view = new InlineViewStrategy(`<template>${template.content}</template>`);
        });
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfObject.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfObject.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfObject.prototype, "formInstance", void 0);
SfObject = __decorate([
    inject(FormService, SchemaFormLogger),
    customElement('sf-object'),
    __metadata("design:paramtypes", [FormService,
        SchemaFormLogger])
], SfObject);
export { SfObject };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFPMUQsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUTtJQVduQixZQUNTLFdBQXdCLEVBQ3ZCLE1BQXdCO1FBRHpCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUmxDLE9BQUUsR0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQU9aLENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUssSUFBSTs7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDdEUsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVztpQkFDcEMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksa0JBQWtCLENBQ2hDLGFBQWEsUUFBUSxDQUFDLE9BQU8sYUFBYSxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQTFCVztJQUFULFFBQVE7O3NDQUFxQjtBQUNwQjtJQUFULFFBQVE7O3VDQUFlO0FBQ2Q7SUFBVCxRQUFROzs4Q0FBc0I7QUFIcEIsUUFBUTtJQUxwQixNQUFNLENBQ0wsV0FBVyxFQUNYLGdCQUFnQixDQUNqQjtJQUNBLGFBQWEsQ0FBQyxXQUFXLENBQUM7cUNBYUgsV0FBVztRQUNmLGdCQUFnQjtHQWJ2QixRQUFRLENBMkJwQjtTQTNCWSxRQUFRIiwiZmlsZSI6ImZvcm0vb2JqZWN0L3NmLW9iamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9ndWlkJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2UnO1xyXG5cclxuQGluamVjdChcclxuICBGb3JtU2VydmljZSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyXHJcbilcclxuQGN1c3RvbUVsZW1lbnQoJ3NmLW9iamVjdCcpXHJcbmV4cG9ydCBjbGFzcyBTZk9iamVjdCB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBvYmplY3Q7XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSAnb2JqZWN0JztcclxuXHJcbiAgdmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxyXG4gICkgeyB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2Ytb2JqZWN0LWF0dGFjaGVkJyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2Ytb2JqZWN0JywgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCB0aGlzLmZvcm1TZXJ2aWNlXHJcbiAgICAgIC5nZXRGb3JtVGVtcGxhdGVBc3luYyh0aGlzLmZvcm0sIHRoaXMuZm9ybS4kc2NoZW1hLCB0aGlzLm1vZGVsLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxyXG4gICAgICBgPHRlbXBsYXRlPiR7dGVtcGxhdGUuY29udGVudH08L3RlbXBsYXRlPmApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
