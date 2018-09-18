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
let SfString = class SfString {
    constructor(configuration, rules, logger, formInstances) {
        this.configuration = configuration;
        this.rules = rules;
        this.logger = logger;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.kind = 'string';
    }
    modelChanged(newValue, oldValue) {
        if (this.form.$onChange) {
            this.form.$onChange(newValue, oldValue);
        }
    }
    attached() {
        this.logger.info('sf-string-attached');
        if (this.formCtrl.formOptions.validateOnRender) {
            this.formCtrl.validationController.validate({ object: this, propertyName: 'model' });
        }
    }
    bind() {
        this.logger.info('sf-string', { form: this.form, model: this.model }, arguments);
        this.formCtrl = this.formInstances.get(this.formInstance);
        this.rules.bind(this);
        this.determineViewStrategy();
    }
    determineViewStrategy() {
        this.view = this.configuration.templates.string;
        if (this.form.$altTemplate) {
            this.view = this.form.$altTemplate;
        }
        else if (this.form.$schema.enum && this.form.$schema.enum.length <= 5) {
            this.view = this.configuration.templates.stringRadioEnum;
        }
        else if (this.form.$schema.enum) {
            this.view = this.configuration.templates.stringSelectEnum;
        }
        else if (['date-time', 'date', 'time'].indexOf(this.form.$schema.format) > -1) {
            if (this.configuration.templates.formats
                && this.configuration.templates.formats[this.form.$schema.format]) {
                this.view = this.configuration.templates.formats[this.form.$schema.format];
            }
        }
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfString.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfString.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfString.prototype, "formInstance", void 0);
SfString = __decorate([
    inject(SchemaFormConfiguration, RulesFactory, SchemaFormLogger, FormInstances),
    customElement('sf-string'),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        RulesFactory,
        SchemaFormLogger,
        FormInstances])
], SfString);
export { SfString };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi1zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFVOUQsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUTtJQWFuQixZQUNTLGFBQXNDLEVBQ3RDLEtBQW1CLEVBQ2xCLE1BQXdCLEVBQ3hCLGFBQTRCO1FBSDdCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWnRDLE9BQUUsR0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQVdaLENBQUM7SUFFTCxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVE7UUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDdEY7SUFDSCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDcEM7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztTQUMxRDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7U0FDM0Q7YUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDL0UsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPO21CQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVFO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXREVztJQUFULFFBQVE7O3NDQUFxQjtBQUNwQjtJQUFULFFBQVE7O3VDQUFlO0FBQ2Q7SUFBVCxRQUFROzs4Q0FBc0I7QUFIcEIsUUFBUTtJQVBwQixNQUFNLENBQ0wsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsYUFBYSxDQUNkO0lBQ0EsYUFBYSxDQUFDLFdBQVcsQ0FBQztxQ0FlRCx1QkFBdUI7UUFDL0IsWUFBWTtRQUNWLGdCQUFnQjtRQUNULGFBQWE7R0FqQjNCLFFBQVEsQ0F1RHBCO1NBdkRZLFFBQVEiLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gJy4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnknO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcclxuXHJcbkBpbmplY3QoXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgUnVsZXNGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KCdzZi1zdHJpbmcnKVxyXG5leHBvcnQgY2xhc3MgU2ZTdHJpbmcge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogc3RyaW5nO1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICBraW5kID0gJ3N0cmluZyc7XHJcblxyXG4gIHZpZXc7XHJcblxyXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnksXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkgeyB9XHJcblxyXG4gIG1vZGVsQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uJG9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuZm9ybS4kb25DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2Ytc3RyaW5nLWF0dGFjaGVkJyk7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMsIHByb3BlcnR5TmFtZTogJ21vZGVsJyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1zdHJpbmcnLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwgfSwgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuc3RyaW5nO1xyXG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRzY2hlbWEuZW51bSAmJiB0aGlzLmZvcm0uJHNjaGVtYS5lbnVtLmxlbmd0aCA8PSA1KSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuc3RyaW5nUmFkaW9FbnVtO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5lbnVtKSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuc3RyaW5nU2VsZWN0RW51bTtcclxuICAgIH0gZWxzZSBpZiAoWydkYXRlLXRpbWUnLCAnZGF0ZScsICd0aW1lJ10uaW5kZXhPZih0aGlzLmZvcm0uJHNjaGVtYS5mb3JtYXQpID4gLTEpIHtcclxuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuZm9ybWF0c1xyXG4gICAgICAgICYmIHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuZm9ybWF0c1t0aGlzLmZvcm0uJHNjaGVtYS5mb3JtYXRdKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5mb3JtYXRzW3RoaXMuZm9ybS4kc2NoZW1hLmZvcm1hdF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
