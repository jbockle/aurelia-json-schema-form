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
import { customElement, bindable, inject, InlineViewStrategy } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { FormService } from "../../services/form-service";
import { FormInstances } from "../../services/form-instances";
let SfObject = class SfObject {
    constructor(configuration, formService, logger, formInstances) {
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.kind = "object";
    }
    attached() {
        this.logger.info("sf-object-attached");
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("sf-object", { form: this.form, model: this.model });
            this.formCtrl = this.formInstances.get(this.formInstance);
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
    inject(SchemaFormConfiguration, FormService, SchemaFormLogger, FormInstances),
    customElement("sf-object"),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        FormService,
        SchemaFormLogger,
        FormInstances])
], SfObject);
export { SfObject };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBVTlELElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVE7SUFhbkIsWUFDUyxhQUFzQyxFQUN0QyxXQUF3QixFQUN2QixNQUF3QixFQUN4QixhQUE0QjtRQUg3QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFadEMsT0FBRSxHQUFXLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1QixTQUFJLEdBQUcsUUFBUSxDQUFDO0lBV1osQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFSyxJQUFJOztZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXO2lCQUNwQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FDaEMsYUFBYSxRQUFRLENBQUMsT0FBTyxhQUFhLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQUE7Q0FDRixDQUFBO0FBL0JXO0lBQVQsUUFBUTs7c0NBQXFCO0FBQ3BCO0lBQVQsUUFBUTs7dUNBQWU7QUFDZDtJQUFULFFBQVE7OzhDQUFzQjtBQUhwQixRQUFRO0lBUHBCLE1BQU0sQ0FDTCx1QkFBdUIsRUFDdkIsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixhQUFhLENBQ2Q7SUFDQSxhQUFhLENBQUMsV0FBVyxDQUFDO3FDQWVELHVCQUF1QjtRQUN6QixXQUFXO1FBQ2YsZ0JBQWdCO1FBQ1QsYUFBYTtHQWpCM0IsUUFBUSxDQWdDcEI7U0FoQ1ksUUFBUSIsImZpbGUiOiJmb3JtL29iamVjdC9zZi1vYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XHJcblxyXG5AaW5qZWN0KFxyXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gIEZvcm1TZXJ2aWNlLFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KFwic2Ytb2JqZWN0XCIpXHJcbmV4cG9ydCBjbGFzcyBTZk9iamVjdCB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBvYmplY3Q7XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSBcIm9iamVjdFwiO1xyXG5cclxuICB2aWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2Ytb2JqZWN0LWF0dGFjaGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgYmluZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1vYmplY3RcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xyXG4gICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCB0aGlzLmZvcm1TZXJ2aWNlXHJcbiAgICAgIC5nZXRGb3JtVGVtcGxhdGVBc3luYyh0aGlzLmZvcm0sIHRoaXMuZm9ybS4kc2NoZW1hLCB0aGlzLm1vZGVsLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxyXG4gICAgICBgPHRlbXBsYXRlPiR7dGVtcGxhdGUuY29udGVudH08L3RlbXBsYXRlPmApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
