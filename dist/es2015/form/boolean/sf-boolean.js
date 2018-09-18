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
let SfBoolean = class SfBoolean {
    constructor(configuration, rules, logger, formInstances) {
        this.configuration = configuration;
        this.rules = rules;
        this.logger = logger;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.kind = 'boolean';
    }
    modelChanged(newValue, oldValue) {
        if (this.form.$onChange) {
            this.form.$onChange(newValue, oldValue);
        }
    }
    attached() {
        this.logger.info('sf-string-attached');
        if (this.formCtrl.formOptions.validateOnRender) {
            this.formCtrl.validationController.validate({ object: this });
        }
    }
    bind() {
        this.logger.info('sf-boolean', this.form, this.model, arguments);
        this.formCtrl = this.formInstances.get(this.formInstance);
        this.schema = this.form.$schema;
        this.rules.bind(this);
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfBoolean.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], SfBoolean.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfBoolean.prototype, "formInstance", void 0);
SfBoolean = __decorate([
    inject(SchemaFormConfiguration, RulesFactory, SchemaFormLogger, FormInstances),
    customElement('sf-boolean'),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        RulesFactory,
        SchemaFormLogger,
        FormInstances])
], SfBoolean);
export { SfBoolean };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBVTlELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFtQnBCLFlBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0IsRUFDeEIsYUFBNEI7UUFIN0Isa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFoQnRDLE9BQUUsR0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQWViLENBQUM7SUFYTCxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVE7UUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBU0QsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUF1QyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBO0FBdENXO0lBQVQsUUFBUTs7dUNBQXFCO0FBQ3BCO0lBQVQsUUFBUTs7d0NBQWdCO0FBQ2Y7SUFBVCxRQUFROzsrQ0FBc0I7QUFIcEIsU0FBUztJQVByQixNQUFNLENBQ0wsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsYUFBYSxDQUNkO0lBQ0EsYUFBYSxDQUFDLFlBQVksQ0FBQztxQ0FxQkYsdUJBQXVCO1FBQy9CLFlBQVk7UUFDVixnQkFBZ0I7UUFDVCxhQUFhO0dBdkIzQixTQUFTLENBdUNyQjtTQXZDWSxTQUFTIiwiZmlsZSI6ImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9ndWlkJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeSc7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb24gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb24nO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2xvZ2dlcic7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcclxuXHJcbkBpbmplY3QoXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgUnVsZXNGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KCdzZi1ib29sZWFuJylcclxuZXhwb3J0IGNsYXNzIFNmQm9vbGVhbiB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBib29sZWFuO1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgc2NoZW1hOiBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSAnYm9vbGVhbic7XHJcblxyXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIG1vZGVsQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uJG9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuZm9ybS4kb25DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnksXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkgeyB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2Ytc3RyaW5nLWF0dGFjaGVkJyk7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2YtYm9vbGVhbicsIHRoaXMuZm9ybSwgdGhpcy5tb2RlbCwgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIHRoaXMuc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEgYXMgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbjtcclxuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
