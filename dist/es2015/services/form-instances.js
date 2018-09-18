var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { singleton, inject } from 'aurelia-framework';
import { SchemaFormLogger } from '../resources/logger';
let FormInstances = class FormInstances {
    constructor(logger) {
        this.logger = logger;
        this.instances = {};
    }
    set(key, instance) {
        this.logger.warn('setting form instance', { key, instance });
        this.instances[key] = instance;
    }
    get(key) {
        this.logger.warn('getting form instance', { key, instances: this.instances });
        return this.instances[key];
    }
};
FormInstances = __decorate([
    singleton(),
    inject(SchemaFormLogger),
    __metadata("design:paramtypes", [SchemaFormLogger])
], FormInstances);
export { FormInstances };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdkQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUt4QixZQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUpwQyxjQUFTLEdBRWIsRUFBRSxDQUFDO0lBRXlDLENBQUM7SUFFakQsR0FBRyxDQUFDLEdBQVcsRUFBRSxRQUF1QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM5RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7QUFoQlksYUFBYTtJQUZ6QixTQUFTLEVBQUU7SUFDWCxNQUFNLENBQUMsZ0JBQWdCLENBQUM7cUNBTUssZ0JBQWdCO0dBTGpDLGFBQWEsQ0FnQnpCO1NBaEJZLGFBQWEiLCJmaWxlIjoic2VydmljZXMvZm9ybS1pbnN0YW5jZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaW5nbGV0b24sIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuXHJcbkBzaW5nbGV0b24oKVxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Mb2dnZXIpXHJcbmV4cG9ydCBjbGFzcyBGb3JtSW5zdGFuY2VzIHtcclxuICBwcml2YXRlIGluc3RhbmNlczoge1xyXG4gICAgW2tleTogc3RyaW5nXTogSUZvcm1JbnN0YW5jZVxyXG4gIH0gPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIGluc3RhbmNlOiBJRm9ybUluc3RhbmNlKSB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKCdzZXR0aW5nIGZvcm0gaW5zdGFuY2UnLCB7IGtleSwgaW5zdGFuY2UgfSk7XHJcbiAgICB0aGlzLmluc3RhbmNlc1trZXldID0gaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBnZXQoa2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oJ2dldHRpbmcgZm9ybSBpbnN0YW5jZScsIHsga2V5LCBpbnN0YW5jZXM6IHRoaXMuaW5zdGFuY2VzIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW2tleV07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
