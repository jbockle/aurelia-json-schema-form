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
import { SchemaFormConfiguration } from '../../services/schema-form-configuration';
import { SchemaFormLogger } from '../../resources/logger';
import { FormService } from '../../services/form-service';
let SfObject = class SfObject {
    constructor(configuration, formService, logger) {
        this.configuration = configuration;
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
    inject(SchemaFormConfiguration, FormService, SchemaFormLogger),
    customElement('sf-object'),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        FormService,
        SchemaFormLogger])
], SfObject);
export { SfObject };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFRMUQsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUTtJQVduQixZQUNTLGFBQXNDLEVBQ3RDLFdBQXdCLEVBQ3ZCLE1BQXdCO1FBRnpCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVRsQyxPQUFFLEdBQVcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLFNBQUksR0FBRyxRQUFRLENBQUM7SUFRWixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVLLElBQUk7O1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVc7aUJBQ3BDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtCQUFrQixDQUNoQyxhQUFhLFFBQVEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtDQUNGLENBQUE7QUEzQlc7SUFBVCxRQUFROztzQ0FBcUI7QUFDcEI7SUFBVCxRQUFROzt1Q0FBZTtBQUNkO0lBQVQsUUFBUTs7OENBQXNCO0FBSHBCLFFBQVE7SUFOcEIsTUFBTSxDQUNMLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsZ0JBQWdCLENBQ2pCO0lBQ0EsYUFBYSxDQUFDLFdBQVcsQ0FBQztxQ0FhRCx1QkFBdUI7UUFDekIsV0FBVztRQUNmLGdCQUFnQjtHQWR2QixRQUFRLENBNEJwQjtTQTVCWSxRQUFRIiwiZmlsZSI6ImZvcm0vb2JqZWN0L3NmLW9iamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9sb2dnZXInO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZSc7XG5cbkBpbmplY3QoXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBGb3JtU2VydmljZSxcbiAgU2NoZW1hRm9ybUxvZ2dlclxuKVxuQGN1c3RvbUVsZW1lbnQoJ3NmLW9iamVjdCcpXG5leHBvcnQgY2xhc3MgU2ZPYmplY3Qge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBvYmplY3Q7XG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9ICdvYmplY3QnO1xuXG4gIHZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxuICApIHsgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLW9iamVjdC1hdHRhY2hlZCcpO1xuICB9XG5cbiAgYXN5bmMgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1vYmplY3QnLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwgfSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCB0aGlzLmZvcm1TZXJ2aWNlXG4gICAgICAuZ2V0Rm9ybVRlbXBsYXRlQXN5bmModGhpcy5mb3JtLCB0aGlzLmZvcm0uJHNjaGVtYSwgdGhpcy5tb2RlbCwgdGhpcy5mb3JtSW5zdGFuY2UpO1xuICAgIHRoaXMudmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koXG4gICAgICBgPHRlbXBsYXRlPiR7dGVtcGxhdGUuY29udGVudH08L3RlbXBsYXRlPmApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
