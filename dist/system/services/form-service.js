System.register(["../interfaces/form-override", "../resources/logger", "./defaults-service", "../resources/wrapper", "aurelia-framework"], function (exports_1, context_1) {
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
    var form_override_1, logger_1, defaults_service_1, wrapper_1, aurelia_framework_1, FormService;
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
            }
        ],
        execute: function () {
            FormService = /** @class */ (function () {
                function FormService(defaultsService, taskQueue, logger) {
                    this.defaultsService = defaultsService;
                    this.taskQueue = taskQueue;
                    this.logger = logger;
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
                FormService = __decorate([
                    aurelia_framework_1.inject(defaults_service_1.DefaultsService, aurelia_framework_1.TaskQueue, logger_1.SchemaFormLogger),
                    __metadata("design:paramtypes", [defaults_service_1.DefaultsService,
                        aurelia_framework_1.TaskQueue,
                        logger_1.SchemaFormLogger])
                ], FormService);
                return FormService;
            }());
            exports_1("FormService", FormService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFtQkUscUJBQ1MsZUFBZ0MsRUFDaEMsU0FBb0IsRUFDbkIsTUFBd0I7b0JBRnpCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBVztvQkFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7Z0JBQzlCLENBQUM7Z0JBRUMsMENBQW9CLEdBQTFCLFVBQ0UsSUFBbUIsRUFBRSxNQUE2QixFQUFFLEtBQVUsRUFBRSxVQUFrQjs7Ozs7O29DQUVsRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztvQ0FFeEUsUUFBUSxHQUFtQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztvQ0FFekMscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUE7O29DQUF2RSxLQUFLLEdBQUcsU0FBK0QsQ0FBQztvQ0FFeEUsZ0NBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7b0NBRTNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztvQ0FFMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7b0NBQ25ELHNCQUFPLFFBQVEsRUFBQzs7OztpQkFDakI7Z0JBRUQsc0NBQWdCLEdBQWhCLFVBQ0UsSUFBbUIs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RSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7b0JBQzFELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQzVCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQTBCLENBQUM7cUJBQzVEO3lCQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQ2xDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQTBCLENBQUM7cUJBQ3ZEO2dCQUNILENBQUM7Z0JBN0hVLFdBQVc7b0JBRHZCLDBCQUFNLENBQUMsa0NBQWUsRUFBRSw2QkFBUyxFQUFFLHlCQUFnQixDQUFDO3FEQUd6QixrQ0FBZTt3QkFDckIsNkJBQVM7d0JBQ1gseUJBQWdCO21CQUp2QixXQUFXLENBOEh2QjtnQkFBRCxrQkFBQzthQTlIRCxBQThIQzs7UUFDRCxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSUZvcm1PdmVycmlkZSxcclxuICBpc092ZXJyaWRlLFxyXG4gIHNldEZvcm1PdmVycmlkZXMsXHJcbiAgSVRlbXBsYXRlRWxlbWVudCxcclxuICBpc1RlbXBsYXRlTW9kdWxlXHJcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHtcclxuICBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgU2NoZW1hVHlwZVxyXG59IGZyb20gJy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvbic7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgSVRlbXBsYXRlU3RvcmUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9kZWZhdWx0cy1zZXJ2aWNlJztcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gJy4uL3Jlc291cmNlcy93cmFwcGVyJztcclxuaW1wb3J0IHsgaW5qZWN0LCBUYXNrUXVldWUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AaW5qZWN0KERlZmF1bHRzU2VydmljZSwgVGFza1F1ZXVlLCBTY2hlbWFGb3JtTG9nZ2VyKVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxyXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcclxuICApIHsgfVxyXG5cclxuICBhc3luYyBnZXRGb3JtVGVtcGxhdGVBc3luYyhcclxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCBtb2RlbDogYW55LCBpbnN0YW5jZUlkOiBzdHJpbmdcclxuICApOiBQcm9taXNlPElUZW1wbGF0ZVN0b3JlPiB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKCdnZXRGb3JtVGVtcGxhdGVBc3luYycsIHsgZm9ybSwgc2NoZW1hLCBtb2RlbCwgaW5zdGFuY2VJZCB9KTtcclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUgPSB7IGNvbnRlbnQ6ICcnIH07XHJcblxyXG4gICAgbW9kZWwgPSBhd2FpdCB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hLCBtb2RlbCk7XHJcblxyXG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtLCBudWxsLCBudWxsLCBzY2hlbWEpO1xyXG5cclxuICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShmb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkKTtcclxuXHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKCd0ZW1wbGF0ZSBjcmVhdGVkJywgeyB0ZW1wbGF0ZSB9KTtcclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlVGVtcGxhdGUoXHJcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxyXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXHJcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmcsXHJcbiAgICBzZWdtZW50OiBzdHJpbmcgPSAnJ1xyXG4gICkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygndHJhbnNmb3JtVGVtcGxhdGUnLCB7IGZvcm0sIHNjaGVtYSB9KTtcclxuICAgIGZvciAoY29uc3QgZm9ybUtleSBpbiBmb3JtKSB7XHJcbiAgICAgIGlmIChpc092ZXJyaWRlKGZvcm1LZXkpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBXcmFwcGVyKGZvcm1LZXkpO1xyXG4gICAgICB3cmFwcGVyLmFwcGx5U3RhcnQodGVtcGxhdGUpO1xyXG4gICAgICBpZiAoV3JhcHBlci5pc0NvbnRhaW5lcihmb3JtS2V5KSkge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kQ29udGFpbmVyKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIHNlZ21lbnQpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzVGVtcGxhdGVNb2R1bGUoZm9ybUtleSkpIHtcclxuICAgICAgICBmb3JtLl9lbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXBwZW5kVGVtcGxhdGVFbGVtZW50KHRlbXBsYXRlLCBlbGVtZW50LCBzY2hlbWEsIHNlZ21lbnQsIGluc3RhbmNlSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kU2ZUZW1wbGF0ZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIHRlbXBsYXRlLCBzZWdtZW50LCBpbnN0YW5jZUlkKTtcclxuICAgICAgfVxyXG4gICAgICB3cmFwcGVyLmFwcGx5RW5kKHRlbXBsYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwZW5kQ29udGFpbmVyKFxyXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcclxuICAgIGZvcm1LZXk6IHN0cmluZyxcclxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nLFxyXG4gICAgc2VnbWVudDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICAoZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlW10pLmZvckVhY2goKGNoaWxkRm9ybSwgaWR4KSA9PiB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShjaGlsZEZvcm0sIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIGAke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11bJHtpZHh9XWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRTZlRlbXBsYXRlKFxyXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcclxuICAgIGZvcm1LZXk6IHN0cmluZyxcclxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxyXG4gICAgc2VnbWVudDogc3RyaW5nLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBzZXRGb3JtT3ZlcnJpZGVzKGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZSwgc2NoZW1hLCBmb3JtS2V5LCB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKSk7XHJcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuZ2V0U2ZUZW1wbGF0ZShcclxuICAgICAgYG1vZGVsWycke2Zvcm1LZXl9J11gLFxyXG4gICAgICBgZm9ybSR7c2VnbWVudH1bJyR7Zm9ybUtleX0nXWAsXHJcbiAgICAgIHRoaXMuZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5LCBzY2hlbWEpLnR5cGUsXHJcbiAgICAgIGluc3RhbmNlSWRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRUZW1wbGF0ZUVsZW1lbnQoXHJcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXHJcbiAgICB0ZW1wbGF0ZU1vZHVsZTogSVRlbXBsYXRlRWxlbWVudCxcclxuICAgIHBhcmVudFNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgc2VnbWVudDogc3RyaW5nLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdhcHBlbmRUZW1wbGF0ZUVsZW1lbnQnLCB7IHRlbXBsYXRlLCB0ZW1wbGF0ZU1vZHVsZSwgcGFyZW50U2NoZW1hLCBzZWdtZW50IH0pO1xyXG4gICAgdGVtcGxhdGUuY29udGVudCArPSBgPCR7dGVtcGxhdGVNb2R1bGUuZWxlbWVudE5hbWV9IGA7XHJcbiAgICBpZiAodGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5KSB7XHJcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYCBtb2RlbC50d28td2F5PVwibW9kZWxbJyR7dGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5fSddXCJgICtcclxuICAgICAgICBgIGZvcm0taW5zdGFuY2U9XCIke2luc3RhbmNlSWR9XCJgICtcclxuICAgICAgICBgIHNjaGVtYS50by12aWV3PVwiZm9ybSR7c2VnbWVudH0uJHNjaGVtYWA7XHJcbiAgICAgIHN3aXRjaCAocGFyZW50U2NoZW1hLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdhcnJheSc6XHJcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9ICcuaXRlbXMnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gJy5wcm9wZXJ0aWVzJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYFsnJHt0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXl9J11cImA7XHJcbiAgICB9XHJcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGA+PC8ke3RlbXBsYXRlTW9kdWxlLmVsZW1lbnROYW1lfT5gO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2ZUZW1wbGF0ZShcclxuICAgIG1vZGVsUGF0aDogc3RyaW5nLCBmb3JtUGF0aDogc3RyaW5nLCBzY2hlbWFUeXBlOiBTY2hlbWFUeXBlLCBpbnN0YW5jZUlkOiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2dldFRlbXBsYXRlJywgeyBtb2RlbFBhdGgsIGZvcm1QYXRoLCBzY2hlbWFUeXBlLCBpbnN0YW5jZUlkIH0pO1xyXG4gICAgcmV0dXJuIGA8c2YtJHtzY2hlbWFUeXBlfWAgK1xyXG4gICAgICBgIG1vZGVsLnR3by13YXk9XCIke21vZGVsUGF0aH1cImAgK1xyXG4gICAgICBgIGZvcm0udG8tdmlldz1cIiR7Zm9ybVBhdGh9XCJgICtcclxuICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXHJcbiAgICAgIGA+PC9zZi0ke3NjaGVtYVR5cGV9PmA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZvcm1LZXlTY2hlbWEoZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbikge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnZ2V0Rm9ybUtleVNjaGVtYScsIHsgZm9ybUtleSwgc2NoZW1hIH0pO1xyXG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXR1cm4gc2NoZW1hLnByb3BlcnRpZXNbZm9ybUtleV0gYXMgSUpzb25TY2hlbWFEZWZpbml0aW9uO1xyXG4gICAgfSBlbHNlIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xyXG4gICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
