System.register(["../interfaces/form-override", "../resources/logger", "./defaults-service", "../resources/wrapper", "aurelia-framework", "./schema-form-configuration"], function (exports_1, context_1) {
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
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var form_override_1, logger_1, defaults_service_1, wrapper_1, aurelia_framework_1, schema_form_configuration_1, FormService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (form_override_1_1) {
                form_override_1 = form_override_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (defaults_service_1_1) {
                defaults_service_1 = defaults_service_1_1;
            },
            function (wrapper_1_1) {
                wrapper_1 = wrapper_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            }
        ],
        execute: function () {
            FormService = /** @class */ (function () {
                function FormService(defaultsService, taskQueue, logger, configuration) {
                    this.defaultsService = defaultsService;
                    this.taskQueue = taskQueue;
                    this.logger = logger;
                    this.configuration = configuration;
                }
                FormService.prototype.getFormTemplateAsync = function (form, schema, model, instanceId) {
                    return __awaiter(this, void 0, void 0, function () {
                        var template;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.logger.warn('getFormTemplateAsync', { form: form, schema: schema, model: model, instanceId: instanceId });
                                    template = { content: '' };
                                    return [4 /*yield*/, this.defaultsService.getSchemaDefaultAsync(schema, model)];
                                case 1:
                                    model = _a.sent();
                                    form_override_1.setFormOverrides(form, null, null, schema);
                                    this.generateTemplate(form, schema, template, instanceId);
                                    this.logger.warn('template created', { template: template });
                                    return [2 /*return*/, template];
                            }
                        });
                    });
                };
                FormService.prototype.generateTemplate = function (form, schema, template, instanceId, segment) {
                    var _this = this;
                    if (segment === void 0) { segment = ''; }
                    this.logger.info('transformTemplate', { form: form, schema: schema });
                    for (var formKey in form) {
                        if (form_override_1.isOverride(formKey)) {
                            continue;
                        }
                        var wrapper = new wrapper_1.Wrapper(formKey);
                        wrapper.applyStart(template);
                        if (wrapper_1.Wrapper.isContainer(formKey)) {
                            this.appendContainer(form, formKey, schema, template, instanceId, segment);
                        }
                        else if (form_override_1.isTemplateModule(formKey)) {
                            form._element.forEach(function (element) {
                                _this.appendTemplateElement(template, element, schema, segment, instanceId);
                            });
                        }
                        else {
                            this.appendSfTemplate(form, formKey, schema, template, segment, instanceId);
                        }
                        wrapper.applyEnd(template);
                    }
                };
                FormService.prototype.appendContainer = function (form, formKey, schema, template, instanceId, segment) {
                    var _this = this;
                    form[formKey].forEach(function (childForm, idx) {
                        _this.generateTemplate(childForm, schema, template, instanceId, segment + "['" + formKey + "'][" + idx + "]");
                    });
                };
                FormService.prototype.appendSfTemplate = function (form, formKey, schema, template, segment, instanceId) {
                    form_override_1.setFormOverrides(form[formKey], schema, formKey, this.getFormKeySchema(formKey, schema));
                    template.content += this.getSfTemplate("model['" + formKey + "']", "form" + segment + "['" + formKey + "']", this.getFormKeySchema(formKey, schema).type, instanceId);
                };
                FormService.prototype.appendTemplateElement = function (template, templateModule, parentSchema, segment, instanceId) {
                    this.logger.info('appendTemplateElement', { template: template, templateModule: templateModule, parentSchema: parentSchema, segment: segment });
                    template.content += "<" + templateModule.elementName + " ";
                    if (templateModule.schemaKey) {
                        template.content += " model.two-way=\"model['" + templateModule.schemaKey + "']\"" +
                            (" form-instance=\"" + instanceId + "\"") +
                            (" schema.to-view=\"form" + segment + ".$schema");
                        switch (parentSchema.type) {
                            case 'array':
                                template.content += '.items';
                                break;
                            case 'object':
                                template.content += '.properties';
                                break;
                        }
                        template.content += "['" + templateModule.schemaKey + "']\"";
                    }
                    template.content += "></" + templateModule.elementName + ">";
                };
                FormService.prototype.getSfTemplate = function (modelPath, formPath, schemaType, instanceId) {
                    this.logger.info('getTemplate', { modelPath: modelPath, formPath: formPath, schemaType: schemaType, instanceId: instanceId });
                    return "<sf-" + schemaType +
                        (" model.two-way=\"" + modelPath + "\"") +
                        (" form.to-view=\"" + formPath + "\"") +
                        (" form-instance=\"" + instanceId + "\"") +
                        ("></sf-" + schemaType + ">");
                };
                FormService.prototype.getFormKeySchema = function (formKey, schema) {
                    this.logger.info('getFormKeySchema', { formKey: formKey, schema: schema });
                    if (schema.type === 'object') {
                        return schema.properties[formKey];
                    }
                    else if (schema.type === 'array') {
                        return schema.items[formKey];
                    }
                };
                FormService.prototype.getTemplatePath = function (type, child) {
                    var templates = this.configuration.templates;
                    if (child) {
                        templates = templates[child];
                    }
                    return templates[type].replace('./', '../../');
                };
                FormService = __decorate([
                    aurelia_framework_1.inject(defaults_service_1.DefaultsService, aurelia_framework_1.TaskQueue, logger_1.SchemaFormLogger, schema_form_configuration_1.SchemaFormConfiguration),
                    __metadata("design:paramtypes", [defaults_service_1.DefaultsService,
                        aurelia_framework_1.TaskQueue,
                        logger_1.SchemaFormLogger,
                        schema_form_configuration_1.SchemaFormConfiguration])
                ], FormService);
                return FormService;
            }());
            exports_1("FormService", FormService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFvQkUscUJBQ1MsZUFBZ0MsRUFDaEMsU0FBb0IsRUFDbkIsTUFBd0IsRUFDekIsYUFBc0M7b0JBSHRDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBVztvQkFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtnQkFDM0MsQ0FBQztnQkFFQywwQ0FBb0IsR0FBMUIsVUFDRSxJQUFtQixFQUFFLE1BQTZCLEVBQUUsS0FBVSxFQUFFLFVBQWtCOzs7Ozs7b0NBRWxGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQyxDQUFDO29DQUV4RSxRQUFRLEdBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO29DQUV6QyxxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBQTs7b0NBQXZFLEtBQUssR0FBRyxTQUErRCxDQUFDO29DQUV4RSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztvQ0FFM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29DQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztvQ0FDbkQsc0JBQU8sUUFBUSxF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QUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTt3QkFDNUIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztxQkFDNUQ7eUJBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTt3QkFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztxQkFDdkQ7Z0JBQ0gsQ0FBQztnQkFFRCxxQ0FBZSxHQUFmLFVBQWdCLElBQVksRUFBRSxLQUFjO29CQUMxQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztvQkFDN0MsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDOUI7b0JBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkF0SVUsV0FBVztvQkFEdkIsMEJBQU0sQ0FBQyxrQ0FBZSxFQUFFLDZCQUFTLEVBQUUseUJBQWdCLEVBQUUsbURBQXVCLENBQUM7cURBR2xELGtDQUFlO3dCQUNyQiw2QkFBUzt3QkFDWCx5QkFBZ0I7d0JBQ1YsbURBQXVCO21CQUxwQyxXQUFXLENBdUl2QjtnQkFBRCxrQkFBQzthQXZJRCxBQXVJQzs7UUFDRCxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSUZvcm1PdmVycmlkZSxcclxuICBpc092ZXJyaWRlLFxyXG4gIHNldEZvcm1PdmVycmlkZXMsXHJcbiAgSVRlbXBsYXRlRWxlbWVudCxcclxuICBpc1RlbXBsYXRlTW9kdWxlXHJcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHtcclxuICBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgU2NoZW1hVHlwZVxyXG59IGZyb20gJy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvbic7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgSVRlbXBsYXRlU3RvcmUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9kZWZhdWx0cy1zZXJ2aWNlJztcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gJy4uL3Jlc291cmNlcy93cmFwcGVyJztcclxuaW1wb3J0IHsgaW5qZWN0LCBUYXNrUXVldWUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcclxuXHJcbkBpbmplY3QoRGVmYXVsdHNTZXJ2aWNlLCBUYXNrUXVldWUsIFNjaGVtYUZvcm1Mb2dnZXIsIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxyXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb25cclxuICApIHsgfVxyXG5cclxuICBhc3luYyBnZXRGb3JtVGVtcGxhdGVBc3luYyhcclxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCBtb2RlbDogYW55LCBpbnN0YW5jZUlkOiBzdHJpbmdcclxuICApOiBQcm9taXNlPElUZW1wbGF0ZVN0b3JlPiB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKCdnZXRGb3JtVGVtcGxhdGVBc3luYycsIHsgZm9ybSwgc2NoZW1hLCBtb2RlbCwgaW5zdGFuY2VJZCB9KTtcclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUgPSB7IGNvbnRlbnQ6ICcnIH07XHJcblxyXG4gICAgbW9kZWwgPSBhd2FpdCB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hLCBtb2RlbCk7XHJcblxyXG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtLCBudWxsLCBudWxsLCBzY2hlbWEpO1xyXG5cclxuICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShmb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkKTtcclxuXHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKCd0ZW1wbGF0ZSBjcmVhdGVkJywgeyB0ZW1wbGF0ZSB9KTtcclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlVGVtcGxhdGUoXHJcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxyXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXHJcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmcsXHJcbiAgICBzZWdtZW50OiBzdHJpbmcgPSAnJ1xyXG4gICkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygndHJhbnNmb3JtVGVtcGxhdGUnLCB7IGZvcm0sIHNjaGVtYSB9KTtcclxuICAgIGZvciAoY29uc3QgZm9ybUtleSBpbiBmb3JtKSB7XHJcbiAgICAgIGlmIChpc092ZXJyaWRlKGZvcm1LZXkpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBXcmFwcGVyKGZvcm1LZXkpO1xyXG4gICAgICB3cmFwcGVyLmFwcGx5U3RhcnQodGVtcGxhdGUpO1xyXG4gICAgICBpZiAoV3JhcHBlci5pc0NvbnRhaW5lcihmb3JtS2V5KSkge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kQ29udGFpbmVyKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIHNlZ21lbnQpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzVGVtcGxhdGVNb2R1bGUoZm9ybUtleSkpIHtcclxuICAgICAgICBmb3JtLl9lbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXBwZW5kVGVtcGxhdGVFbGVtZW50KHRlbXBsYXRlLCBlbGVtZW50LCBzY2hlbWEsIHNlZ21lbnQsIGluc3RhbmNlSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kU2ZUZW1wbGF0ZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIHRlbXBsYXRlLCBzZWdtZW50LCBpbnN0YW5jZUlkKTtcclxuICAgICAgfVxyXG4gICAgICB3cmFwcGVyLmFwcGx5RW5kKHRlbXBsYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwZW5kQ29udGFpbmVyKFxyXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcclxuICAgIGZvcm1LZXk6IHN0cmluZyxcclxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nLFxyXG4gICAgc2VnbWVudDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICAoZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlW10pLmZvckVhY2goKGNoaWxkRm9ybSwgaWR4KSA9PiB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShjaGlsZEZvcm0sIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIGAke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11bJHtpZHh9XWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRTZlRlbXBsYXRlKFxyXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcclxuICAgIGZvcm1LZXk6IHN0cmluZyxcclxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxyXG4gICAgc2VnbWVudDogc3RyaW5nLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBzZXRGb3JtT3ZlcnJpZGVzKGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZSwgc2NoZW1hLCBmb3JtS2V5LCB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKSk7XHJcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuZ2V0U2ZUZW1wbGF0ZShcclxuICAgICAgYG1vZGVsWycke2Zvcm1LZXl9J11gLFxyXG4gICAgICBgZm9ybSR7c2VnbWVudH1bJyR7Zm9ybUtleX0nXWAsXHJcbiAgICAgIHRoaXMuZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5LCBzY2hlbWEpLnR5cGUsXHJcbiAgICAgIGluc3RhbmNlSWRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRUZW1wbGF0ZUVsZW1lbnQoXHJcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXHJcbiAgICB0ZW1wbGF0ZU1vZHVsZTogSVRlbXBsYXRlRWxlbWVudCxcclxuICAgIHBhcmVudFNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgc2VnbWVudDogc3RyaW5nLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdhcHBlbmRUZW1wbGF0ZUVsZW1lbnQnLCB7IHRlbXBsYXRlLCB0ZW1wbGF0ZU1vZHVsZSwgcGFyZW50U2NoZW1hLCBzZWdtZW50IH0pO1xyXG4gICAgdGVtcGxhdGUuY29udGVudCArPSBgPCR7dGVtcGxhdGVNb2R1bGUuZWxlbWVudE5hbWV9IGA7XHJcbiAgICBpZiAodGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5KSB7XHJcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYCBtb2RlbC50d28td2F5PVwibW9kZWxbJyR7dGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5fSddXCJgICtcclxuICAgICAgICBgIGZvcm0taW5zdGFuY2U9XCIke2luc3RhbmNlSWR9XCJgICtcclxuICAgICAgICBgIHNjaGVtYS50by12aWV3PVwiZm9ybSR7c2VnbWVudH0uJHNjaGVtYWA7XHJcbiAgICAgIHN3aXRjaCAocGFyZW50U2NoZW1hLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdhcnJheSc6XHJcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9ICcuaXRlbXMnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gJy5wcm9wZXJ0aWVzJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYFsnJHt0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXl9J11cImA7XHJcbiAgICB9XHJcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGA+PC8ke3RlbXBsYXRlTW9kdWxlLmVsZW1lbnROYW1lfT5gO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2ZUZW1wbGF0ZShcclxuICAgIG1vZGVsUGF0aDogc3RyaW5nLCBmb3JtUGF0aDogc3RyaW5nLCBzY2hlbWFUeXBlOiBTY2hlbWFUeXBlLCBpbnN0YW5jZUlkOiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2dldFRlbXBsYXRlJywgeyBtb2RlbFBhdGgsIGZvcm1QYXRoLCBzY2hlbWFUeXBlLCBpbnN0YW5jZUlkIH0pO1xyXG4gICAgcmV0dXJuIGA8c2YtJHtzY2hlbWFUeXBlfWAgK1xyXG4gICAgICBgIG1vZGVsLnR3by13YXk9XCIke21vZGVsUGF0aH1cImAgK1xyXG4gICAgICBgIGZvcm0udG8tdmlldz1cIiR7Zm9ybVBhdGh9XCJgICtcclxuICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXHJcbiAgICAgIGA+PC9zZi0ke3NjaGVtYVR5cGV9PmA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZvcm1LZXlTY2hlbWEoZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbikge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnZ2V0Rm9ybUtleVNjaGVtYScsIHsgZm9ybUtleSwgc2NoZW1hIH0pO1xyXG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXR1cm4gc2NoZW1hLnByb3BlcnRpZXNbZm9ybUtleV0gYXMgSUpzb25TY2hlbWFEZWZpbml0aW9uO1xyXG4gICAgfSBlbHNlIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xyXG4gICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRlbXBsYXRlUGF0aCh0eXBlOiBzdHJpbmcsIGNoaWxkPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgdGVtcGxhdGVzID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcztcclxuICAgIGlmIChjaGlsZCkge1xyXG4gICAgICB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNbY2hpbGRdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXBsYXRlc1t0eXBlXS5yZXBsYWNlKCcuLycsICcuLi8uLi8nKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
