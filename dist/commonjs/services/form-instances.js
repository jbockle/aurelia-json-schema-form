"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var logger_1 = require("../resources/logger");
var FormInstances = /** @class */ (function () {
    function FormInstances(logger) {
        this.logger = logger;
        this.instances = {};
    }
    FormInstances.prototype.set = function (key, instance) {
        this.logger.warn('setting form instance', { key: key, instance: instance });
        this.instances[key] = instance;
    };
    FormInstances.prototype.get = function (key) {
        this.logger.warn('getting form instance', { key: key, instances: this.instances });
        return this.instances[key];
    };
    FormInstances = __decorate([
        aurelia_framework_1.singleton(),
        aurelia_framework_1.inject(logger_1.SchemaFormLogger),
        __metadata("design:paramtypes", [logger_1.SchemaFormLogger])
    ], FormInstances);
    return FormInstances;
}());
exports.FormInstances = FormInstances;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBRXRELDhDQUF1RDtBQUl2RDtJQUtFLHVCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUpwQyxjQUFTLEdBRWIsRUFBRSxDQUFDO0lBRXlDLENBQUM7SUFFakQsMkJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxRQUF1QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM5RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWZVLGFBQWE7UUFGekIsNkJBQVMsRUFBRTtRQUNYLDBCQUFNLENBQUMseUJBQWdCLENBQUM7eUNBTUsseUJBQWdCO09BTGpDLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7Q0FoQkQsQUFnQkMsSUFBQTtBQWhCWSxzQ0FBYSIsImZpbGUiOiJzZXJ2aWNlcy9mb3JtLWluc3RhbmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpbmdsZXRvbiwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5cclxuQHNpbmdsZXRvbigpXHJcbkBpbmplY3QoU2NoZW1hRm9ybUxvZ2dlcilcclxuZXhwb3J0IGNsYXNzIEZvcm1JbnN0YW5jZXMge1xyXG4gIHByaXZhdGUgaW5zdGFuY2VzOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBJRm9ybUluc3RhbmNlXHJcbiAgfSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XHJcblxyXG4gIHNldChrZXk6IHN0cmluZywgaW5zdGFuY2U6IElGb3JtSW5zdGFuY2UpIHtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oJ3NldHRpbmcgZm9ybSBpbnN0YW5jZScsIHsga2V5LCBpbnN0YW5jZSB9KTtcclxuICAgIHRoaXMuaW5zdGFuY2VzW2tleV0gPSBpbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGdldChrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dnZXIud2FybignZ2V0dGluZyBmb3JtIGluc3RhbmNlJywgeyBrZXksIGluc3RhbmNlczogdGhpcy5pbnN0YW5jZXMgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNba2V5XTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
