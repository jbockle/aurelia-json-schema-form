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
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var rules_factory_1 = require("../../rules/rules-factory");
var logger_1 = require("../../resources/logger");
var form_instances_1 = require("../../services/form-instances");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQW9FO0FBQ3BFLDZDQUE0QztBQUM1QyxzRkFBbUY7QUFDbkYsMkRBQXlEO0FBRXpELGlEQUEwRDtBQUUxRCxnRUFBOEQ7QUFVOUQ7SUFtQkUsbUJBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0IsRUFDeEIsYUFBNEI7UUFIN0Isa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFoQnRDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQWViLENBQUM7SUFYTCxnQ0FBWSxHQUFaLFVBQWEsUUFBUSxFQUFFLFFBQVE7UUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBU0QsNEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUF1QyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFyQ1M7UUFBVCw0QkFBUTs7MkNBQXFCO0lBQ3BCO1FBQVQsNEJBQVE7OzRDQUFnQjtJQUNmO1FBQVQsNEJBQVE7O21EQUFzQjtJQUhwQixTQUFTO1FBUHJCLDBCQUFNLENBQ0wsbURBQXVCLEVBQ3ZCLDRCQUFZLEVBQ1oseUJBQWdCLEVBQ2hCLDhCQUFhLENBQ2Q7UUFDQSxpQ0FBYSxDQUFDLFlBQVksQ0FBQzt5Q0FxQkYsbURBQXVCO1lBQy9CLDRCQUFZO1lBQ1YseUJBQWdCO1lBQ1QsOEJBQWE7T0F2QjNCLFNBQVMsQ0F1Q3JCO0lBQUQsZ0JBQUM7Q0F2Q0QsQUF1Q0MsSUFBQTtBQXZDWSw4QkFBUyIsImZpbGUiOiJmb3JtL2Jvb2xlYW4vc2YtYm9vbGVhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gJy4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnknO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XHJcblxyXG5AaW5qZWN0KFxyXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gIFJ1bGVzRmFjdG9yeSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudCgnc2YtYm9vbGVhbicpXHJcbmV4cG9ydCBjbGFzcyBTZkJvb2xlYW4ge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogYm9vbGVhbjtcclxuICBAYmluZGFibGUgZm9ybUluc3RhbmNlOiBzdHJpbmc7XHJcblxyXG4gIHNjaGVtYTogSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbjtcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICBraW5kID0gJ2Jvb2xlYW4nO1xyXG5cclxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBtb2RlbENoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtLiRvbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLmZvcm0uJG9uQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHsgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLXN0cmluZy1hdHRhY2hlZCcpO1xyXG4gICAgaWYgKHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xyXG4gICAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLWJvb2xlYW4nLCB0aGlzLmZvcm0sIHRoaXMubW9kZWwsIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmZvcm1DdHJsID0gdGhpcy5mb3JtSW5zdGFuY2VzLmdldCh0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMuZm9ybS4kc2NoZW1hIGFzIElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb247XHJcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
