var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement, inject } from 'aurelia-framework';
import { Guid } from '../../resources/guid';
import { SchemaFormConfiguration } from '../../services/schema-form-configuration';
import { RulesFactory } from '../../rules/rules-factory';
import { SchemaFormLogger } from '../../resources/logger';
import { FormInstances } from '../../services/form-instances';
let SfNumber = class SfNumber {
    constructor(configuration, rules, logger, formInstances) {
        this.configuration = configuration;
        this.rules = rules;
        this.logger = logger;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.kind = 'number';
    }
    modelChanged(newValue, oldValue) {
        if (this.form.$onChange) {
            this.form.$onChange(newValue, oldValue);
        }
    }
    attached() {
        this.logger.info('sf-number-attached');
        if (this.formCtrl.formOptions.validateOnRender) {
            this.formCtrl.validationController.validate({ object: this });
        }
    }
    bind() {
        this.logger.info('sf-number', this.form, this.model, arguments);
        this.formCtrl = this.formInstances.get(this.formInstance);
        this.form.$schema = this.form.$schema;
        this.rules.bind(this);
        this.form.$step = this.form.$step || 1;
        this.determineViewStrategy();
    }
    determineViewStrategy() {
        this.view = this.configuration.templates.number;
        if (this.form.$altTemplate) {
            this.view = this.form.$altTemplate;
        }
        else if (this.minimum !== undefined && this.maximum !== undefined) {
            this.view = this.configuration.templates.numberRange;
        }
    }
    get minimum() {
        if (Number.isInteger(this.form.$schema.minimum)) {
            return this.form.$schema.minimum;
        }
        else if (Number.isInteger(this.form.$schema.exclusiveMinimum)) {
            return this.form.$schema.exclusiveMinimum + this.form.$step;
        }
    }
    get maximum() {
        if (Number.isInteger(this.form.$schema.maximum)) {
            return this.form.$schema.maximum;
        }
        else if (Number.isInteger(this.form.$schema.exclusiveMaximum)) {
            return this.form.$schema.exclusiveMaximum - this.form.$step;
        }
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfNumber.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", Number)
], SfNumber.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfNumber.prototype, "formInstance", void 0);
SfNumber = __decorate([
    inject(SchemaFormConfiguration, RulesFactory, SchemaFormLogger, FormInstances),
    customElement('sf-number'),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        RulesFactory,
        SchemaFormLogger,
        FormInstances])
], SfNumber);
export { SfNumber };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVU5RCxJQUFhLFFBQVEsR0FBckIsTUFBYSxRQUFRO0lBYW5CLFlBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0IsRUFDeEIsYUFBNEI7UUFIN0Isa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFadEMsT0FBRSxHQUFXLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUk1QixTQUFJLEdBQUcsUUFBUSxDQUFDO0lBU1osQ0FBQztJQUVMLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUTtRQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFO1lB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ZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gJy4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnknO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb24gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb24nO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2xvZ2dlcic7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcclxuXHJcbkBpbmplY3QoXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgUnVsZXNGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KCdzZi1udW1iZXInKVxyXG5leHBvcnQgY2xhc3MgU2ZOdW1iZXIge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogbnVtYmVyO1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICB2aWV3O1xyXG5cclxuICBraW5kID0gJ251bWJlcic7XHJcblxyXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnksXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkgeyB9XHJcblxyXG4gIG1vZGVsQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uJG9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuZm9ybS4kb25DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2YtbnVtYmVyLWF0dGFjaGVkJyk7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2YtbnVtYmVyJywgdGhpcy5mb3JtLCB0aGlzLm1vZGVsLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5mb3JtLiRzY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYSBhcyBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb247XHJcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZvcm0uJHN0ZXAgPSB0aGlzLmZvcm0uJHN0ZXAgfHwgMTtcclxuICAgIHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XHJcbiAgfVxyXG5cclxuICBkZXRlcm1pbmVWaWV3U3RyYXRlZ3koKSB7XHJcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLm51bWJlcjtcclxuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubWluaW11bSAhPT0gdW5kZWZpbmVkICYmIHRoaXMubWF4aW11bSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMubnVtYmVyUmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWluaW11bSgpIHtcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1pbmltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5taW5pbXVtO1xyXG4gICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtICsgdGhpcy5mb3JtLiRzdGVwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1heGltdW0oKSB7XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhpbXVtKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEubWF4aW11bTtcclxuICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSAtIHRoaXMuZm9ybS4kc3RlcDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
