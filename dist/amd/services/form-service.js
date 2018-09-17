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
define(["require", "exports", "../interfaces/form-override", "../resources/logger", "./defaults-service", "../resources/wrapper", "aurelia-framework"], function (require, exports, form_override_1, logger_1, defaults_service_1, wrapper_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormService = /** @class */ (function () {
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
                            this.logger.warn("getFormTemplateAsync", { form: form, schema: schema, model: model, instanceId: instanceId });
                            template = { content: "" };
                            return [4 /*yield*/, this.defaultsService.getSchemaDefaultAsync(schema, model)];
                        case 1:
                            model = _a.sent();
                            form_override_1.setFormOverrides(form, null, null, schema);
                            this.generateTemplate(form, schema, template, instanceId);
                            this.logger.warn("template created", { template: template });
                            return [2 /*return*/, template];
                    }
                });
            });
        };
        FormService.prototype.generateTemplate = function (form, schema, template, instanceId, segment) {
            var _this = this;
            if (segment === void 0) { segment = ""; }
            this.logger.info("transformTemplate", { form: form, schema: schema });
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
            this.logger.info("appendTemplateElement", { template: template, templateModule: templateModule, parentSchema: parentSchema, segment: segment });
            template.content += "<" + templateModule.elementName + " ";
            if (templateModule.schemaKey) {
                template.content += " model.two-way=\"model['" + templateModule.schemaKey + "']\"" +
                    (" form-instance=\"" + instanceId + "\"") +
                    (" schema.to-view=\"form" + segment + ".$schema");
                switch (parentSchema.type) {
                    case "array":
                        template.content += ".items";
                        break;
                    case "object":
                        template.content += ".properties";
                        break;
                }
                template.content += "['" + templateModule.schemaKey + "']\"";
            }
            template.content += "></" + templateModule.elementName + ">";
        };
        FormService.prototype.getSfTemplate = function (modelPath, formPath, schemaType, instanceId) {
            this.logger.info("getTemplate", { modelPath: modelPath, formPath: formPath, schemaType: schemaType, instanceId: instanceId });
            return "<sf-" + schemaType +
                (" model.two-way=\"" + modelPath + "\"") +
                (" form.to-view=\"" + formPath + "\"") +
                (" form-instance=\"" + instanceId + "\"") +
                ("></sf-" + schemaType + ">");
        };
        FormService.prototype.getFormKeySchema = function (formKey, schema) {
            this.logger.info("getFormKeySchema", { formKey: formKey, schema: schema });
            if (schema.type === "object") {
                return schema.properties[formKey];
            }
            else if (schema.type === "array") {
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
    exports.FormService = FormService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCQTtRQUNFLHFCQUNTLGVBQWdDLEVBQ2hDLFNBQW9CLEVBQ25CLE1BQXdCO1lBRnpCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1lBQ25CLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQzlCLENBQUM7UUFFQywwQ0FBb0IsR0FBMUIsVUFDRSxJQUFtQixFQUFFLE1BQTZCLEVBQUUsS0FBVSxFQUFFLFVBQWtCOzs7Ozs7NEJBRWxGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQyxDQUFDOzRCQUV4RSxRQUFRLEdBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDOzRCQUV6QyxxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBQTs7NEJBQXZFLEtBQUssR0FBRyxTQUErRCxDQUFDOzRCQUV4RSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs0QkFFM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDOzRCQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQzs0QkFDbkQsc0JBQU8sUUFBUSxFQUFDOzs7O1NBQ2pCO1FBRUQsc0NBQWdCLEdBQWhCLFVBQ0UsSUFBbUIsRUFDbkIsTUFBNkIsRUFDN0IsUUFBd0Is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LE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUEwQixDQUFDO2FBQzVEO2lCQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ2xDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQTBCLENBQUM7YUFDdkQ7UUFDSCxDQUFDO1FBN0hVLFdBQVc7WUFEdkIsMEJBQU0sQ0FBQyxrQ0FBZSxFQUFFLDZCQUFTLEVBQUUseUJBQWdCLENBQUM7NkNBR3pCLGtDQUFlO2dCQUNyQiw2QkFBUztnQkFDWCx5QkFBZ0I7V0FKdkIsV0FBVyxDQThIdkI7UUFBRCxrQkFBQztLQTlIRCxBQThIQyxJQUFBO0lBOUhZLGtDQUFXIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSUZvcm1PdmVycmlkZSxcclxuICBpc092ZXJyaWRlLFxyXG4gIHNldEZvcm1PdmVycmlkZXMsXHJcbiAgSVRlbXBsYXRlRWxlbWVudCxcclxuICBpc1RlbXBsYXRlTW9kdWxlXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQge1xyXG4gIElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICBTY2hlbWFUeXBlXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgSVRlbXBsYXRlU3RvcmUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZVwiO1xyXG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tIFwiLi9kZWZhdWx0cy1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgaW5qZWN0LCBUYXNrUXVldWUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuXHJcbkBpbmplY3QoRGVmYXVsdHNTZXJ2aWNlLCBUYXNrUXVldWUsIFNjaGVtYUZvcm1Mb2dnZXIpXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGVmYXVsdHNTZXJ2aWNlOiBEZWZhdWx0c1NlcnZpY2UsXHJcbiAgICBwdWJsaWMgdGFza1F1ZXVlOiBUYXNrUXVldWUsXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxyXG4gICkgeyB9XHJcblxyXG4gIGFzeW5jIGdldEZvcm1UZW1wbGF0ZUFzeW5jKFxyXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSwgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIG1vZGVsOiBhbnksIGluc3RhbmNlSWQ6IHN0cmluZ1xyXG4gICk6IFByb21pc2U8SVRlbXBsYXRlU3RvcmU+IHtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJnZXRGb3JtVGVtcGxhdGVBc3luY1wiLCB7IGZvcm0sIHNjaGVtYSwgbW9kZWwsIGluc3RhbmNlSWQgfSk7XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlID0geyBjb250ZW50OiBcIlwiIH07XHJcblxyXG4gICAgbW9kZWwgPSBhd2FpdCB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hLCBtb2RlbCk7XHJcblxyXG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtLCBudWxsLCBudWxsLCBzY2hlbWEpO1xyXG5cclxuICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShmb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkKTtcclxuXHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwidGVtcGxhdGUgY3JlYXRlZFwiLCB7IHRlbXBsYXRlIH0pO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVUZW1wbGF0ZShcclxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXHJcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcclxuICAgIGluc3RhbmNlSWQ6IHN0cmluZyxcclxuICAgIHNlZ21lbnQ6IHN0cmluZyA9IFwiXCJcclxuICApIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJ0cmFuc2Zvcm1UZW1wbGF0ZVwiLCB7IGZvcm0sIHNjaGVtYSB9KTtcclxuICAgIGZvciAoY29uc3QgZm9ybUtleSBpbiBmb3JtKSB7XHJcbiAgICAgIGlmIChpc092ZXJyaWRlKGZvcm1LZXkpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBXcmFwcGVyKGZvcm1LZXkpO1xyXG4gICAgICB3cmFwcGVyLmFwcGx5U3RhcnQodGVtcGxhdGUpO1xyXG4gICAgICBpZiAoV3JhcHBlci5pc0NvbnRhaW5lcihmb3JtS2V5KSkge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kQ29udGFpbmVyKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIHNlZ21lbnQpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzVGVtcGxhdGVNb2R1bGUoZm9ybUtleSkpIHtcclxuICAgICAgICBmb3JtLl9lbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXBwZW5kVGVtcGxhdGVFbGVtZW50KHRlbXBsYXRlLCBlbGVtZW50LCBzY2hlbWEsIHNlZ21lbnQsIGluc3RhbmNlSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kU2ZUZW1wbGF0ZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIHRlbXBsYXRlLCBzZWdtZW50LCBpbnN0YW5jZUlkKTtcclxuICAgICAgfVxyXG4gICAgICB3cmFwcGVyLmFwcGx5RW5kKHRlbXBsYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwZW5kQ29udGFpbmVyKFxyXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcclxuICAgIGZvcm1LZXk6IHN0cmluZyxcclxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nLFxyXG4gICAgc2VnbWVudDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICAoZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlW10pLmZvckVhY2goKGNoaWxkRm9ybSwgaWR4KSA9PiB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShjaGlsZEZvcm0sIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIGAke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11bJHtpZHh9XWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRTZlRlbXBsYXRlKFxyXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcclxuICAgIGZvcm1LZXk6IHN0cmluZyxcclxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxyXG4gICAgc2VnbWVudDogc3RyaW5nLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBzZXRGb3JtT3ZlcnJpZGVzKGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZSwgc2NoZW1hLCBmb3JtS2V5LCB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKSk7XHJcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuZ2V0U2ZUZW1wbGF0ZShcclxuICAgICAgYG1vZGVsWycke2Zvcm1LZXl9J11gLFxyXG4gICAgICBgZm9ybSR7c2VnbWVudH1bJyR7Zm9ybUtleX0nXWAsXHJcbiAgICAgIHRoaXMuZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5LCBzY2hlbWEpLnR5cGUsXHJcbiAgICAgIGluc3RhbmNlSWRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRUZW1wbGF0ZUVsZW1lbnQoXHJcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXHJcbiAgICB0ZW1wbGF0ZU1vZHVsZTogSVRlbXBsYXRlRWxlbWVudCxcclxuICAgIHBhcmVudFNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgc2VnbWVudDogc3RyaW5nLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYXBwZW5kVGVtcGxhdGVFbGVtZW50XCIsIHsgdGVtcGxhdGUsIHRlbXBsYXRlTW9kdWxlLCBwYXJlbnRTY2hlbWEsIHNlZ21lbnQgfSk7XHJcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGA8JHt0ZW1wbGF0ZU1vZHVsZS5lbGVtZW50TmFtZX0gYDtcclxuICAgIGlmICh0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXkpIHtcclxuICAgICAgdGVtcGxhdGUuY29udGVudCArPSBgIG1vZGVsLnR3by13YXk9XCJtb2RlbFsnJHt0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXl9J11cImAgK1xyXG4gICAgICAgIGAgZm9ybS1pbnN0YW5jZT1cIiR7aW5zdGFuY2VJZH1cImAgK1xyXG4gICAgICAgIGAgc2NoZW1hLnRvLXZpZXc9XCJmb3JtJHtzZWdtZW50fS4kc2NoZW1hYDtcclxuICAgICAgc3dpdGNoIChwYXJlbnRTY2hlbWEudHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJhcnJheVwiOlxyXG4gICAgICAgICAgdGVtcGxhdGUuY29udGVudCArPSBcIi5pdGVtc1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxyXG4gICAgICAgICAgdGVtcGxhdGUuY29udGVudCArPSBcIi5wcm9wZXJ0aWVzXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGBbJyR7dGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5fSddXCJgO1xyXG4gICAgfVxyXG4gICAgdGVtcGxhdGUuY29udGVudCArPSBgPjwvJHt0ZW1wbGF0ZU1vZHVsZS5lbGVtZW50TmFtZX0+YDtcclxuICB9XHJcblxyXG4gIGdldFNmVGVtcGxhdGUoXHJcbiAgICBtb2RlbFBhdGg6IHN0cmluZywgZm9ybVBhdGg6IHN0cmluZywgc2NoZW1hVHlwZTogU2NoZW1hVHlwZSwgaW5zdGFuY2VJZDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0VGVtcGxhdGVcIiwgeyBtb2RlbFBhdGgsIGZvcm1QYXRoLCBzY2hlbWFUeXBlLCBpbnN0YW5jZUlkIH0pO1xyXG4gICAgcmV0dXJuIGA8c2YtJHtzY2hlbWFUeXBlfWAgK1xyXG4gICAgICBgIG1vZGVsLnR3by13YXk9XCIke21vZGVsUGF0aH1cImAgK1xyXG4gICAgICBgIGZvcm0udG8tdmlldz1cIiR7Zm9ybVBhdGh9XCJgICtcclxuICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXHJcbiAgICAgIGA+PC9zZi0ke3NjaGVtYVR5cGV9PmA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZvcm1LZXlTY2hlbWEoZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbikge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEZvcm1LZXlTY2hlbWFcIiwgeyBmb3JtS2V5LCBzY2hlbWEgfSk7XHJcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgcmV0dXJuIHNjaGVtYS5wcm9wZXJ0aWVzW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcclxuICAgIH0gZWxzZSBpZiAoc2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIikge1xyXG4gICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
