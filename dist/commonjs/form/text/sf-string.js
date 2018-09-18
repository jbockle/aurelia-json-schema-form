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
var guid_1 = require("../../resources/guid");
var rules_factory_1 = require("../../rules/rules-factory");
var logger_1 = require("../../resources/logger");
var form_instances_1 = require("../../services/form-instances");
var form_service_1 = require("../../services/form-service");
var SfString = /** @class */ (function () {
    function SfString(formService, rules, logger, formInstances) {
        this.formService = formService;
        this.rules = rules;
        this.logger = logger;
        this.formInstances = formInstances;
        this.id = guid_1.Guid.newGuid();
        this.kind = 'string';
    }
    SfString.prototype.modelChanged = function (newValue, oldValue) {
        if (this.form.$onChange) {
            this.form.$onChange(newValue, oldValue);
        }
    };
    SfString.prototype.attached = function () {
        this.logger.info('sf-string-attached');
        if (this.formCtrl.formOptions.validateOnRender) {
            this.formCtrl.validationController.validate({ object: this, propertyName: 'model' });
        }
    };
    SfString.prototype.bind = function () {
        this.logger.info('sf-string', { form: this.form, model: this.model }, arguments);
        this.formCtrl = this.formInstances.get(this.formInstance);
        this.rules.bind(this);
        this.determineViewStrategy();
    };
    SfString.prototype.determineViewStrategy = function () {
        this.view = this.formService.getTemplatePath('string');
        if (this.form.$altTemplate) {
            this.view = this.form.$altTemplate;
        }
        else if (this.form.$schema.enum && this.form.$schema.enum.length <= 5) {
            this.view = this.formService.getTemplatePath('stringRadioEnum');
        }
        else if (this.form.$schema.enum) {
            this.view = this.formService.getTemplatePath('stringSelectEnum');
        }
        else if (['date-time', 'date', 'time'].indexOf(this.form.$schema.format) > -1) {
            if (this.formService.getTemplatePath(this.form.$schema.format, 'format')) {
                this.view = this.formService.getTemplatePath(this.form.$schema.format, 'format');
            }
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfString.prototype, "form", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfString.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfString.prototype, "formInstance", void 0);
    SfString = __decorate([
        aurelia_framework_1.inject(form_service_1.FormService, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
        aurelia_framework_1.customElement('sf-string'),
        __metadata("design:paramtypes", [form_service_1.FormService,
            rules_factory_1.RulesFactory,
            logger_1.SchemaFormLogger,
            form_instances_1.FormInstances])
    ], SfString);
    return SfString;
}());
exports.SfString = SfString;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2xGO1NBQ0Y7SUFDSCxDQUFDO0lBcERTO1FBQVQsNEJBQVE7OzBDQUFxQjtJQUNwQjtRQUFULDRCQUFROzsyQ0FBZTtJQUNkO1FBQVQsNEJBQVE7O2tEQUFzQjtJQUhwQixRQUFRO1FBUHBCLDBCQUFNLENBQ0wsMEJBQVcsRUFDWCw0QkFBWSxFQUNaLHlCQUFnQixFQUNoQiw4QkFBYSxDQUNkO1FBQ0EsaUNBQWEsQ0FBQyxXQUFXLENBQUM7eUNBZUgsMEJBQVc7WUFDakIsNEJBQVk7WUFDVix5QkFBZ0I7WUFDVCw4QkFBYTtPQWpCM0IsUUFBUSxDQXNEcEI7SUFBRCxlQUFDO0NBdERELEFBc0RDLElBQUE7QUF0RFksNEJBQVEiLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gJy4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnknO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2UnO1xyXG5cclxuQGluamVjdChcclxuICBGb3JtU2VydmljZSxcclxuICBSdWxlc0ZhY3RvcnksXHJcbiAgU2NoZW1hRm9ybUxvZ2dlcixcclxuICBGb3JtSW5zdGFuY2VzXHJcbilcclxuQGN1c3RvbUVsZW1lbnQoJ3NmLXN0cmluZycpXHJcbmV4cG9ydCBjbGFzcyBTZlN0cmluZyB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBzdHJpbmc7XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSAnc3RyaW5nJztcclxuXHJcbiAgdmlldztcclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ3RybDogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnksXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkgeyB9XHJcblxyXG4gIG1vZGVsQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uJG9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuZm9ybS4kb25DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2Ytc3RyaW5nLWF0dGFjaGVkJyk7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMsIHByb3BlcnR5TmFtZTogJ21vZGVsJyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1zdHJpbmcnLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwgfSwgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKCdzdHJpbmcnKTtcclxuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS4kc2NoZW1hLmVudW0gJiYgdGhpcy5mb3JtLiRzY2hlbWEuZW51bS5sZW5ndGggPD0gNSkge1xyXG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldFRlbXBsYXRlUGF0aCgnc3RyaW5nUmFkaW9FbnVtJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS4kc2NoZW1hLmVudW0pIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZVBhdGgoJ3N0cmluZ1NlbGVjdEVudW0nKTtcclxuICAgIH0gZWxzZSBpZiAoWydkYXRlLXRpbWUnLCAnZGF0ZScsICd0aW1lJ10uaW5kZXhPZih0aGlzLmZvcm0uJHNjaGVtYS5mb3JtYXQpID4gLTEpIHtcclxuICAgICAgaWYgKHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKHRoaXMuZm9ybS4kc2NoZW1hLmZvcm1hdCwgJ2Zvcm1hdCcpKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZVBhdGgodGhpcy5mb3JtLiRzY2hlbWEuZm9ybWF0LCAnZm9ybWF0Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
