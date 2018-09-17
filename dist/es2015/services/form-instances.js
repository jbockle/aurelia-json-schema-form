var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { singleton, inject } from "aurelia-framework";
import { SchemaFormLogger } from "../resources/logger";
let FormInstances = class FormInstances {
    constructor(logger) {
        this.logger = logger;
        this.instances = {};
    }
    set(key, instance) {
        this.logger.warn("setting form instance", { key, instance });
        this.instances[key] = instance;
    }
    get(key) {
        this.logger.warn("getting form instance", { key, instances: this.instances });
        return this.instances[key];
    }
};
FormInstances = __decorate([
    singleton(),
    inject(SchemaFormLogger),
    __metadata("design:paramtypes", [SchemaFormLogger])
], FormInstances);
export { FormInstances };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdkQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUt4QixZQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUpwQyxjQUFTLEdBRWIsRUFBRSxDQUFDO0lBRXlDLENBQUM7SUFFakQsR0FBRyxDQUFDLEdBQVcsRUFBRSxRQUF1QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM5RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7QUFoQlksYUFBYTtJQUZ6QixTQUFTLEVBQUU7SUFDWCxNQUFNLENBQUMsZ0JBQWdCLENBQUM7cUNBTUssZ0JBQWdCO0dBTGpDLGFBQWEsQ0FnQnpCO1NBaEJZLGFBQWEiLCJmaWxlIjoic2VydmljZXMvZm9ybS1pbnN0YW5jZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaW5nbGV0b24sIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sbGVyIH0gZnJvbSBcIi4uL2Zvcm0vZm9ybS1jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5cclxuQHNpbmdsZXRvbigpXHJcbkBpbmplY3QoU2NoZW1hRm9ybUxvZ2dlcilcclxuZXhwb3J0IGNsYXNzIEZvcm1JbnN0YW5jZXMge1xyXG4gIHByaXZhdGUgaW5zdGFuY2VzOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBJRm9ybUluc3RhbmNlXHJcbiAgfSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XHJcblxyXG4gIHNldChrZXk6IHN0cmluZywgaW5zdGFuY2U6IElGb3JtSW5zdGFuY2UpIHtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJzZXR0aW5nIGZvcm0gaW5zdGFuY2VcIiwgeyBrZXksIGluc3RhbmNlIH0pO1xyXG4gICAgdGhpcy5pbnN0YW5jZXNba2V5XSA9IGluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwiZ2V0dGluZyBmb3JtIGluc3RhbmNlXCIsIHsga2V5LCBpbnN0YW5jZXM6IHRoaXMuaW5zdGFuY2VzIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW2tleV07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
