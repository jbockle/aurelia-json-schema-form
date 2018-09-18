var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../resources/logger"], function (require, exports, aurelia_framework_1, logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1BO1FBS0UsdUJBQW9CLE1BQXdCO1lBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBSnBDLGNBQVMsR0FFYixFQUFFLENBQUM7UUFFeUMsQ0FBQztRQUVqRCwyQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLFFBQXVCO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLENBQUM7UUFFRCwyQkFBRyxHQUFILFVBQUksR0FBVztZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBZlUsYUFBYTtZQUZ6Qiw2QkFBUyxFQUFFO1lBQ1gsMEJBQU0sQ0FBQyx5QkFBZ0IsQ0FBQzs2Q0FNSyx5QkFBZ0I7V0FMakMsYUFBYSxDQWdCekI7UUFBRCxvQkFBQztLQWhCRCxBQWdCQyxJQUFBO0lBaEJZLHNDQUFhIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ2xldG9uLCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2UnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vcmVzb3VyY2VzL2xvZ2dlcic7XHJcblxyXG5Ac2luZ2xldG9uKClcclxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxyXG5leHBvcnQgY2xhc3MgRm9ybUluc3RhbmNlcyB7XHJcbiAgcHJpdmF0ZSBpbnN0YW5jZXM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IElGb3JtSW5zdGFuY2VcclxuICB9ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyKSB7IH1cclxuXHJcbiAgc2V0KGtleTogc3RyaW5nLCBpbnN0YW5jZTogSUZvcm1JbnN0YW5jZSkge1xyXG4gICAgdGhpcy5sb2dnZXIud2Fybignc2V0dGluZyBmb3JtIGluc3RhbmNlJywgeyBrZXksIGluc3RhbmNlIH0pO1xyXG4gICAgdGhpcy5pbnN0YW5jZXNba2V5XSA9IGluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKCdnZXR0aW5nIGZvcm0gaW5zdGFuY2UnLCB7IGtleSwgaW5zdGFuY2VzOiB0aGlzLmluc3RhbmNlcyB9KTtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1trZXldO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
