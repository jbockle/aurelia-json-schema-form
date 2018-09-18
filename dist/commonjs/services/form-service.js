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
Object.defineProperty(exports, "__esModule", { value: true });
var form_override_1 = require("../interfaces/form-override");
var logger_1 = require("../resources/logger");
var defaults_service_1 = require("./defaults-service");
var wrapper_1 = require("../resources/wrapper");
var aurelia_framework_1 = require("aurelia-framework");
var schema_form_configuration_1 = require("./schema-form-configuration");
var FormService = /** @class */ (function () {
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
exports.FormService = FormService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBTXFDO0FBS3JDLDhDQUF1RDtBQUV2RCx1REFBcUQ7QUFDckQsZ0RBQStDO0FBQy9DLHVEQUFzRDtBQUN0RCx5RUFBc0U7QUFHdEU7SUFDRSxxQkFDUyxlQUFnQyxFQUNoQyxTQUFvQixFQUNuQixNQUF3QixFQUN6QixhQUFzQztRQUh0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7SUFDM0MsQ0FBQztJQUVDLDBDQUFvQixHQUExQixVQUNFLElBQW1CLEVBQUUsTUFBNkIsRUFBRSxLQUFVLEVBQUUsVUFBa0I7Ozs7Ozt3QkFFbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7d0JBRXhFLFFBQVEsR0FBbUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7d0JBRXpDLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFBOzt3QkFBdkUsS0FBSyxHQUFHLFNBQStELENBQUM7d0JBRXhFLGdDQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUUzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBRTFELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFF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LElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztTQUM1RDthQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztTQUN2RDtJQUNILENBQUM7SUFFRCxxQ0FBZSxHQUFmLFVBQWdCLElBQVksRUFBRSxLQUFjO1FBQzFDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUksS0FBSyxFQUFFO1lBQ1QsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQXRJVSxXQUFXO1FBRHZCLDBCQUFNLENBQUMsa0NBQWUsRUFBRSw2QkFBUyxFQUFFLHlCQUFnQixFQUFFLG1EQUF1QixDQUFDO3lDQUdsRCxrQ0FBZTtZQUNyQiw2QkFBUztZQUNYLHlCQUFnQjtZQUNWLG1EQUF1QjtPQUxwQyxXQUFXLENBdUl2QjtJQUFELGtCQUFDO0NBdklELEFBdUlDLElBQUE7QUF2SVksa0NBQVciLCJmaWxlIjoic2VydmljZXMvZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSUZvcm1PdmVycmlkZSxcbiAgaXNPdmVycmlkZSxcbiAgc2V0Rm9ybU92ZXJyaWRlcyxcbiAgSVRlbXBsYXRlRWxlbWVudCxcbiAgaXNUZW1wbGF0ZU1vZHVsZVxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xuaW1wb3J0IHtcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICBTY2hlbWFUeXBlXG59IGZyb20gJy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vcmVzb3VyY2VzL2xvZ2dlcic7XG5pbXBvcnQgeyBJVGVtcGxhdGVTdG9yZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdGVtcGxhdGUnO1xuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9kZWZhdWx0cy1zZXJ2aWNlJztcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICcuLi9yZXNvdXJjZXMvd3JhcHBlcic7XG5pbXBvcnQgeyBpbmplY3QsIFRhc2tRdWV1ZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcblxuQGluamVjdChEZWZhdWx0c1NlcnZpY2UsIFRhc2tRdWV1ZSwgU2NoZW1hRm9ybUxvZ2dlciwgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGVmYXVsdHNTZXJ2aWNlOiBEZWZhdWx0c1NlcnZpY2UsXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvblxuICApIHsgfVxuXG4gIGFzeW5jIGdldEZvcm1UZW1wbGF0ZUFzeW5jKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCBtb2RlbDogYW55LCBpbnN0YW5jZUlkOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxJVGVtcGxhdGVTdG9yZT4ge1xuICAgIHRoaXMubG9nZ2VyLndhcm4oJ2dldEZvcm1UZW1wbGF0ZUFzeW5jJywgeyBmb3JtLCBzY2hlbWEsIG1vZGVsLCBpbnN0YW5jZUlkIH0pO1xuXG4gICAgY29uc3QgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlID0geyBjb250ZW50OiAnJyB9O1xuXG4gICAgbW9kZWwgPSBhd2FpdCB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hLCBtb2RlbCk7XG5cbiAgICBzZXRGb3JtT3ZlcnJpZGVzKGZvcm0sIG51bGwsIG51bGwsIHNjaGVtYSk7XG5cbiAgICB0aGlzLmdlbmVyYXRlVGVtcGxhdGUoZm9ybSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCk7XG5cbiAgICB0aGlzLmxvZ2dlci53YXJuKCd0ZW1wbGF0ZSBjcmVhdGVkJywgeyB0ZW1wbGF0ZSB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBnZW5lcmF0ZVRlbXBsYXRlKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIGluc3RhbmNlSWQ6IHN0cmluZyxcbiAgICBzZWdtZW50OiBzdHJpbmcgPSAnJ1xuICApIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCd0cmFuc2Zvcm1UZW1wbGF0ZScsIHsgZm9ybSwgc2NoZW1hIH0pO1xuICAgIGZvciAoY29uc3QgZm9ybUtleSBpbiBmb3JtKSB7XG4gICAgICBpZiAoaXNPdmVycmlkZShmb3JtS2V5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgV3JhcHBlcihmb3JtS2V5KTtcbiAgICAgIHdyYXBwZXIuYXBwbHlTdGFydCh0ZW1wbGF0ZSk7XG4gICAgICBpZiAoV3JhcHBlci5pc0NvbnRhaW5lcihmb3JtS2V5KSkge1xuICAgICAgICB0aGlzLmFwcGVuZENvbnRhaW5lcihmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkLCBzZWdtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNUZW1wbGF0ZU1vZHVsZShmb3JtS2V5KSkge1xuICAgICAgICBmb3JtLl9lbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmFwcGVuZFRlbXBsYXRlRWxlbWVudCh0ZW1wbGF0ZSwgZWxlbWVudCwgc2NoZW1hLCBzZWdtZW50LCBpbnN0YW5jZUlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFwcGVuZFNmVGVtcGxhdGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hLCB0ZW1wbGF0ZSwgc2VnbWVudCwgaW5zdGFuY2VJZCk7XG4gICAgICB9XG4gICAgICB3cmFwcGVyLmFwcGx5RW5kKHRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZENvbnRhaW5lcihcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxuICAgIGZvcm1LZXk6IHN0cmluZyxcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nLFxuICAgIHNlZ21lbnQ6IHN0cmluZ1xuICApIHtcbiAgICAoZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlW10pLmZvckVhY2goKGNoaWxkRm9ybSwgaWR4KSA9PiB7XG4gICAgICB0aGlzLmdlbmVyYXRlVGVtcGxhdGUoY2hpbGRGb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkLCBgJHtzZWdtZW50fVsnJHtmb3JtS2V5fSddWyR7aWR4fV1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFNmVGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICBmb3JtS2V5OiBzdHJpbmcsXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIHNlZ21lbnQ6IHN0cmluZyxcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGUsIHNjaGVtYSwgZm9ybUtleSwgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSkpO1xuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5nZXRTZlRlbXBsYXRlKFxuICAgICAgYG1vZGVsWycke2Zvcm1LZXl9J11gLFxuICAgICAgYGZvcm0ke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11gLFxuICAgICAgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSkudHlwZSxcbiAgICAgIGluc3RhbmNlSWRcbiAgICApO1xuICB9XG5cbiAgYXBwZW5kVGVtcGxhdGVFbGVtZW50KFxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcbiAgICB0ZW1wbGF0ZU1vZHVsZTogSVRlbXBsYXRlRWxlbWVudCxcbiAgICBwYXJlbnRTY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgICBzZWdtZW50OiBzdHJpbmcsXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2FwcGVuZFRlbXBsYXRlRWxlbWVudCcsIHsgdGVtcGxhdGUsIHRlbXBsYXRlTW9kdWxlLCBwYXJlbnRTY2hlbWEsIHNlZ21lbnQgfSk7XG4gICAgdGVtcGxhdGUuY29udGVudCArPSBgPCR7dGVtcGxhdGVNb2R1bGUuZWxlbWVudE5hbWV9IGA7XG4gICAgaWYgKHRlbXBsYXRlTW9kdWxlLnNjaGVtYUtleSkge1xuICAgICAgdGVtcGxhdGUuY29udGVudCArPSBgIG1vZGVsLnR3by13YXk9XCJtb2RlbFsnJHt0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXl9J11cImAgK1xuICAgICAgICBgIGZvcm0taW5zdGFuY2U9XCIke2luc3RhbmNlSWR9XCJgICtcbiAgICAgICAgYCBzY2hlbWEudG8tdmlldz1cImZvcm0ke3NlZ21lbnR9LiRzY2hlbWFgO1xuICAgICAgc3dpdGNoIChwYXJlbnRTY2hlbWEudHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdGVtcGxhdGUuY29udGVudCArPSAnLml0ZW1zJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9ICcucHJvcGVydGllcyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGBbJyR7dGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5fSddXCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGA+PC8ke3RlbXBsYXRlTW9kdWxlLmVsZW1lbnROYW1lfT5gO1xuICB9XG5cbiAgZ2V0U2ZUZW1wbGF0ZShcbiAgICBtb2RlbFBhdGg6IHN0cmluZywgZm9ybVBhdGg6IHN0cmluZywgc2NoZW1hVHlwZTogU2NoZW1hVHlwZSwgaW5zdGFuY2VJZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2dldFRlbXBsYXRlJywgeyBtb2RlbFBhdGgsIGZvcm1QYXRoLCBzY2hlbWFUeXBlLCBpbnN0YW5jZUlkIH0pO1xuICAgIHJldHVybiBgPHNmLSR7c2NoZW1hVHlwZX1gICtcbiAgICAgIGAgbW9kZWwudHdvLXdheT1cIiR7bW9kZWxQYXRofVwiYCArXG4gICAgICBgIGZvcm0udG8tdmlldz1cIiR7Zm9ybVBhdGh9XCJgICtcbiAgICAgIGAgZm9ybS1pbnN0YW5jZT1cIiR7aW5zdGFuY2VJZH1cImAgK1xuICAgICAgYD48L3NmLSR7c2NoZW1hVHlwZX0+YDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnZ2V0Rm9ybUtleVNjaGVtYScsIHsgZm9ybUtleSwgc2NoZW1hIH0pO1xuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICAgfSBlbHNlIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgcmV0dXJuIHNjaGVtYS5pdGVtc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICAgfVxuICB9XG5cbiAgZ2V0VGVtcGxhdGVQYXRoKHR5cGU6IHN0cmluZywgY2hpbGQ/OiBzdHJpbmcpIHtcbiAgICBsZXQgdGVtcGxhdGVzID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcztcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIHRlbXBsYXRlcyA9IHRlbXBsYXRlc1tjaGlsZF07XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZXNbdHlwZV0ucmVwbGFjZSgnLi8nLCAnLi4vLi4vJyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
