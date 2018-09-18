System.register(["aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory", "../../resources/logger", "../../services/form-instances"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1, form_instances_1, SfBoolean;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (rules_factory_1_1) {
                rules_factory_1 = rules_factory_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (form_instances_1_1) {
                form_instances_1 = form_instances_1_1;
            }
        ],
        execute: function () {
            SfBoolean = /** @class */ (function () {
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
            exports_1("SfBoolean", SfBoolean);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFvQ0UsbUJBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0IsRUFDeEIsYUFBNEI7b0JBSDdCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtvQkFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztvQkFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQWhCdEMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFNUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztnQkFlYixDQUFDO2dCQVhMLGdDQUFZLEdBQVosVUFBYSxRQUFRLEVBQUUsUUFBUTtvQkFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUN6QztnQkFDSCxDQUFDO2dCQVNELDRCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztxQkFDL0Q7Z0JBQ0gsQ0FBQztnQkFFRCx3QkFBSSxHQUFKO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBdUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBckNTO29CQUFULDRCQUFROzt1REFBcUI7Z0JBQ3BCO29CQUFULDRCQUFROzt3REFBZ0I7Z0JBQ2Y7b0JBQVQsNEJBQVE7OytEQUFzQjtnQkFIcEIsU0FBUztvQkFQckIsMEJBQU0sQ0FDTCxtREFBdUIsRUFDdkIsNEJBQVksRUFDWix5QkFBZ0IsRUFDaEIsOEJBQWEsQ0FDZDtvQkFDQSxpQ0FBYSxDQUFDLFlBQVksQ0FBQztxREFxQkYsbURBQXVCO3dCQUMvQiw0QkFBWTt3QkFDVix5QkFBZ0I7d0JBQ1QsOEJBQWE7bUJBdkIzQixTQUFTLENBdUNyQjtnQkFBRCxnQkFBQzthQXZDRCxBQXVDQzs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9ndWlkJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeSc7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb24gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb24nO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2xvZ2dlcic7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcclxuXHJcbkBpbmplY3QoXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgUnVsZXNGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KCdzZi1ib29sZWFuJylcclxuZXhwb3J0IGNsYXNzIFNmQm9vbGVhbiB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBib29sZWFuO1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgc2NoZW1hOiBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSAnYm9vbGVhbic7XHJcblxyXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIG1vZGVsQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uJG9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuZm9ybS4kb25DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnksXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkgeyB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2Ytc3RyaW5nLWF0dGFjaGVkJyk7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2YtYm9vbGVhbicsIHRoaXMuZm9ybSwgdGhpcy5tb2RlbCwgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIHRoaXMuc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEgYXMgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbjtcclxuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
