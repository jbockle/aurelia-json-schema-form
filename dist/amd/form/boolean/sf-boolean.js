var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory", "../../resources/logger", "../../services/form-instances"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1, form_instances_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfBoolean = /** @class */ (function () {
        function SfBoolean(configuration, rules, logger, formInstances) {
            this.configuration = configuration;
            this.rules = rules;
            this.logger = logger;
            this.formInstances = formInstances;
            this.id = guid_1.Guid.newGuid();
            this.kind = 'boolean';
        }
        SfBoolean.prototype.modelChanged = function (newValue, oldValue) {
            if (this.form.$onChange) {
                this.form.$onChange(newValue, oldValue);
            }
        };
        SfBoolean.prototype.attached = function () {
            this.logger.info('sf-string-attached');
            if (this.formCtrl.formOptions.validateOnRender) {
                this.formCtrl.validationController.validate({ object: this });
            }
        };
        SfBoolean.prototype.bind = function () {
            this.logger.info('sf-boolean', this.form, this.model, arguments);
            this.formCtrl = this.formInstances.get(this.formInstance);
            this.schema = this.form.$schema;
            this.rules.bind(this);
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SfBoolean.prototype, "form", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], SfBoolean.prototype, "model", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], SfBoolean.prototype, "formInstance", void 0);
        SfBoolean = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
            aurelia_framework_1.customElement('sf-boolean'),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                rules_factory_1.RulesFactory,
                logger_1.SchemaFormLogger,
                form_instances_1.FormInstances])
        ], SfBoolean);
        return SfBoolean;
    }());
    exports.SfBoolean = SfBoolean;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQWlCQTtRQW1CRSxtQkFDUyxhQUFzQyxFQUN0QyxLQUFtQixFQUNsQixNQUF3QixFQUN4QixhQUE0QjtZQUg3QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7WUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztZQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtZQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQWhCdEMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU1QixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBZWIsQ0FBQztRQVhMLGdDQUFZLEdBQVosVUFBYSxRQUFRLEVBQUUsUUFBUTtZQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDekM7UUFDSCxDQUFDO1FBU0QsNEJBQVEsR0FBUjtZQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUM7UUFFRCx3QkFBSSxHQUFKO1lBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBdUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBckNTO1lBQVQsNEJBQVE7OytDQUFxQjtRQUNwQjtZQUFULDRCQUFROztnREFBZ0I7UUFDZjtZQUFULDRCQUFROzt1REFBc0I7UUFIcEIsU0FBUztZQVByQiwwQkFBTSxDQUNMLG1EQUF1QixFQUN2Qiw0QkFBWSxFQUNaLHlCQUFnQixFQUNoQiw4QkFBYSxDQUNkO1lBQ0EsaUNBQWEsQ0FBQyxZQUFZLENBQUM7NkNBcUJGLG1EQUF1QjtnQkFDL0IsNEJBQVk7Z0JBQ1YseUJBQWdCO2dCQUNULDhCQUFhO1dBdkIzQixTQUFTLENBdUNyQjtRQUFELGdCQUFDO0tBdkNELEFBdUNDLElBQUE7SUF2Q1ksOEJBQVMiLCJmaWxlIjoiZm9ybS9ib29sZWFuL3NmLWJvb2xlYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2d1aWQnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5JztcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvbic7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlcyc7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2UnO1xyXG5cclxuQGluamVjdChcclxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICBSdWxlc0ZhY3RvcnksXHJcbiAgU2NoZW1hRm9ybUxvZ2dlcixcclxuICBGb3JtSW5zdGFuY2VzXHJcbilcclxuQGN1c3RvbUVsZW1lbnQoJ3NmLWJvb2xlYW4nKVxyXG5leHBvcnQgY2xhc3MgU2ZCb29sZWFuIHtcclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuICBAYmluZGFibGUgbW9kZWw6IGJvb2xlYW47XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBzY2hlbWE6IElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb247XHJcblxyXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcclxuXHJcbiAga2luZCA9ICdib29sZWFuJztcclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ3RybDogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgbW9kZWxDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuZm9ybS4kb25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5mb3JtLiRvbkNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1zdHJpbmctYXR0YWNoZWQnKTtcclxuICAgIGlmICh0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcclxuICAgICAgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1ib29sZWFuJywgdGhpcy5mb3JtLCB0aGlzLm1vZGVsLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYSBhcyBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uO1xyXG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
