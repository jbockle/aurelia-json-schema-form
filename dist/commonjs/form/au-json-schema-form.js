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
var aurelia_validation_1 = require("aurelia-validation");
var aurelia_framework_1 = require("aurelia-framework");
var schema_form_configuration_1 = require("../services/schema-form-configuration");
var logger_1 = require("../resources/logger");
var form_controller_1 = require("./form-controller");
var form_service_1 = require("../services/form-service");
var guid_1 = require("../resources/guid");
var form_instances_1 = require("../services/form-instances");
var AuJsonSchemaForm = /** @class */ (function () {
    function AuJsonSchemaForm(validationControllerFactory, configuration, logger, formService, formInstances) {
        this.validationControllerFactory = validationControllerFactory;
        this.configuration = configuration;
        this.logger = logger;
        this.formService = formService;
        this.formInstances = formInstances;
        this.log = logger.info;
        this.id = guid_1.Guid.newGuid();
    }
    AuJsonSchemaForm.prototype.schemaChanged = function () {
        this.log("schemaChanged");
        this.buildForm();
    };
    AuJsonSchemaForm.prototype.formChanged = function () {
        this.log("formChanged");
        this.buildForm();
    };
    AuJsonSchemaForm.prototype.bind = function () {
        this.log("bind", arguments);
        this.buildForm();
    };
    AuJsonSchemaForm.prototype.createValidationController = function () {
        if (this.validationController === undefined) {
            this.validationController = this.validationControllerFactory.createForCurrentScope();
            this.validationController.addRenderer(this.configuration.validationRenderer);
        }
    };
    AuJsonSchemaForm.prototype.buildForm = function () {
        if (this.schema.type !== "object" && this.schema.type !== "array") {
            this.logger.error("The schema must start with an object or an array");
            return;
        }
        if (this.formView) {
            this.formView = null;
        }
        this.log("buildForm", this.options);
        this.createValidationController();
        this.buildViewStrategy();
    };
    AuJsonSchemaForm.prototype.buildViewStrategy = function () {
        this.log("buildViewStrategy");
        this.form.$schema = this.schema;
        this.formView = new aurelia_framework_1.InlineViewStrategy("<template>" + this.formService.getSfTemplate("model", "form", this.schema.type, this.id) + "</template>");
        this.formInstance = {
            schema: this.schema,
            form: this.form,
            formController: new form_controller_1.FormController(this.logger, this.options, this.validationController),
            validationController: this.validationController,
            formOptions: this.options
        };
        this.logger.warn("buildViewStrategy completed", this.formInstance);
        this.formInstances.set(this.id, this.formInstance);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], AuJsonSchemaForm.prototype, "schema", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], AuJsonSchemaForm.prototype, "form", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], AuJsonSchemaForm.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], AuJsonSchemaForm.prototype, "options", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", aurelia_validation_1.ValidationController)
    ], AuJsonSchemaForm.prototype, "validationController", void 0);
    AuJsonSchemaForm = __decorate([
        aurelia_framework_1.inject(aurelia_validation_1.ValidationControllerFactory, schema_form_configuration_1.SchemaFormConfiguration, logger_1.SchemaFormLogger, form_service_1.FormService, form_instances_1.FormInstances),
        aurelia_framework_1.customElement("au-json-schema-form"),
        __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory,
            schema_form_configuration_1.SchemaFormConfiguration,
            logger_1.SchemaFormLogger,
            form_service_1.FormService,
            form_instances_1.FormInstances])
    ], AuJsonSchemaForm);
    return AuJsonSchemaForm;
}());
exports.AuJsonSchemaForm = AuJsonSchemaForm;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlEQUF1RjtBQUN2Rix1REFBZ0g7QUFDaEgsbUZBQWdGO0FBRWhGLDhDQUF1RDtBQUN2RCxxREFBbUQ7QUFHbkQseURBQXVEO0FBQ3ZELDBDQUF5QztBQUV6Qyw2REFBMkQ7QUFVM0Q7SUFtQkUsMEJBQ1UsMkJBQXdELEVBQ3hELGFBQXNDLEVBQ3RDLE1BQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGFBQTRCO1FBSjVCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFDeEQsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRXBDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHFEQUEwQixHQUExQjtRQUNFLElBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLFNBQVMsRUFBRTtZQUMzQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDckYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDOUU7SUFDSCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1lBQ3RFLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHNDQUFrQixDQUNwQyxlQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBYSxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsY0FBYyxFQUFFLElBQUksZ0NBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3hGLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFDL0MsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQzFCLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQTlFUztRQUFULDRCQUFROztvREFBK0I7SUFFOUI7UUFBVCw0QkFBUTs7a0RBQXFCO0lBRXdCO1FBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzttREFBTztJQUVsRDtRQUFULDRCQUFROztxREFBdUI7SUFFdEI7UUFBVCw0QkFBUTtrQ0FBdUIseUNBQW9CO2tFQUFDO0lBVDFDLGdCQUFnQjtRQVI1QiwwQkFBTSxDQUNMLGdEQUEyQixFQUMzQixtREFBdUIsRUFDdkIseUJBQWdCLEVBQ2hCLDBCQUFXLEVBQ1gsOEJBQWEsQ0FDZDtRQUNBLGlDQUFhLENBQUMscUJBQXFCLENBQUM7eUNBcUJJLGdEQUEyQjtZQUN6QyxtREFBdUI7WUFDOUIseUJBQWdCO1lBQ1gsMEJBQVc7WUFDVCw4QkFBYTtPQXhCM0IsZ0JBQWdCLENBZ0Y1QjtJQUFELHVCQUFDO0NBaEZELEFBZ0ZDLElBQUE7QUFoRlksNENBQWdCIiwiZmlsZSI6ImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCwgQ29udGFpbmVyLCBiaW5kaW5nTW9kZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb3JtLWNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi9yZXNvdXJjZXMvZ3VpZFwiO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XHJcblxyXG5AaW5qZWN0KFxyXG4gIFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcclxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIEZvcm1TZXJ2aWNlLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudChcImF1LWpzb24tc2NoZW1hLWZvcm1cIilcclxuZXhwb3J0IGNsYXNzIEF1SnNvblNjaGVtYUZvcm0ge1xyXG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcclxuXHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcblxyXG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIG1vZGVsO1xyXG5cclxuICBAYmluZGFibGUgb3B0aW9uczogSUZvcm1PcHRpb25zO1xyXG5cclxuICBAYmluZGFibGUgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xyXG5cclxuICBmb3JtVmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICBmb3JtSW5zdGFuY2U6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgbG9nOiAobWVzc2FnZTogc3RyaW5nLCAuLi5yZXN0OiBhbnlbXSkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHtcclxuICAgIHRoaXMubG9nID0gbG9nZ2VyLmluZm87XHJcbiAgICB0aGlzLmlkID0gR3VpZC5uZXdHdWlkKCk7XHJcbiAgfVxyXG5cclxuICBzY2hlbWFDaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5sb2coXCJzY2hlbWFDaGFuZ2VkXCIpO1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIGZvcm1DaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5sb2coXCJmb3JtQ2hhbmdlZFwiKTtcclxuICAgIHRoaXMuYnVpbGRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2coXCJiaW5kXCIsIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVmFsaWRhdGlvbkNvbnRyb2xsZXIoKSB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRSZW5kZXJlcih0aGlzLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1aWxkRm9ybSgpIHtcclxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlICE9PSBcIm9iamVjdFwiICYmIHRoaXMuc2NoZW1hLnR5cGUgIT09IFwiYXJyYXlcIikge1xyXG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlRoZSBzY2hlbWEgbXVzdCBzdGFydCB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9ybVZpZXcpIHtcclxuICAgICAgdGhpcy5mb3JtVmlldyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZyhcImJ1aWxkRm9ybVwiLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5jcmVhdGVWYWxpZGF0aW9uQ29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XHJcbiAgICB0aGlzLmxvZyhcImJ1aWxkVmlld1N0cmF0ZWd5XCIpO1xyXG4gICAgdGhpcy5mb3JtLiRzY2hlbWEgPSB0aGlzLnNjaGVtYTtcclxuICAgIHRoaXMuZm9ybVZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxyXG4gICAgICBgPHRlbXBsYXRlPiR7dGhpcy5mb3JtU2VydmljZS5nZXRTZlRlbXBsYXRlKFwibW9kZWxcIiwgXCJmb3JtXCIsIHRoaXMuc2NoZW1hLnR5cGUsIHRoaXMuaWQpfTwvdGVtcGxhdGU+YCk7XHJcbiAgICB0aGlzLmZvcm1JbnN0YW5jZSA9IHtcclxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSxcclxuICAgICAgZm9ybTogdGhpcy5mb3JtLFxyXG4gICAgICBmb3JtQ29udHJvbGxlcjogbmV3IEZvcm1Db250cm9sbGVyKHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMsIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIpLFxyXG4gICAgICB2YWxpZGF0aW9uQ29udHJvbGxlcjogdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlcixcclxuICAgICAgZm9ybU9wdGlvbnM6IHRoaXMub3B0aW9uc1xyXG4gICAgfTtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJidWlsZFZpZXdTdHJhdGVneSBjb21wbGV0ZWRcIiwgdGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5mb3JtSW5zdGFuY2VzLnNldCh0aGlzLmlkLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
