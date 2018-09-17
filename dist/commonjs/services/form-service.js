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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBTXFDO0FBS3JDLDhDQUF1RDtBQUV2RCx1REFBcUQ7QUFDckQsZ0RBQStDO0FBQy9DLHVEQUFzRDtBQUd0RDtJQUNFLHFCQUNTLGVBQWdDLEVBQ2hDLFNBQW9CLEVBQ25CLE1BQXdCO1FBRnpCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzlCLENBQUM7SUFFQywwQ0FBb0IsR0FBMUIsVUFDRSxJQUFtQixFQUFFLE1BQTZCLEVBQUUsS0FBVSxFQUFFLFVBQWtCOzs7Ozs7d0JBRWxGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQyxDQUFDO3dCQUV4RSxRQUFRLEdBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO3dCQUV6QyxxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBQTs7d0JBQXZFLEtBQUssR0FBRyxTQUErRCxDQUFDO3dCQUV4RSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFFM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3dCQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQzt3QkFDbkQsc0JBQU8sUUFBUSxFQUFDOzs7O0tBQ2pCO0lBRUQsc0NBQWdCLEdBQWhCLFVBQ0UsSUFBbUIsRUFDbkIsTUFBNkIsRUFDN0IsUUFBd0IsRUFDeEIsVUFBa0IsRUFDbEIsT0FBb0I7UUFMdEIsaUJBeUJDO1FBcEJDLHdCQUFBLEVBQUEsWUFBb0I7UUFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7UUFDeEQsS0FBSyxJQUFNLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDMUIsSUFBSSwwQkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN2QixTQUFTO2FBQ1Y7WUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDNUU7aUJBQU0sSUFBSSxnQ0FBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO29CQUM1QixLQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzdFO1lBQ0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTyxxQ0FBZSxHQUF2QixVQUNFLElBQW1CLEVBQ25CLE9BQWUsRUFDZixNQUE2QixFQUM3QixRQUF3QixFQUN4QixVQUFrQixFQUNsQixPQUFlO1FBTmpCLGlCQVdDO1FBSEUsSUFBSSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTLEVBQUUsR0FBRztZQUN4RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFLLE9BQU8sVUFBSyxPQUFPLFdBQU0sR0FBRyxNQUFHLENBQUMsQ0FBQztRQUNyRyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFDRSxJQUFtQixFQUNuQixPQUFlLEVBQ2YsTUFBNkIsRUFDN0IsUUFBd0IsRUFDeEIsT0FBZSxFQUNmLFVBQWtCO1FBRWxCLGdDQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQWtCLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUcsUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUNwQyxZQUFVLE9BQU8sT0FBSSxFQUNyQixTQUFPLE9BQU8sVUFBSyxPQUFPLE9BQUksRUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQzNDLFVBQVUsQ0FDWCxDQUFDO0lBQ0osQ0FBQztJQUVELDJDQUFxQixHQUFyQixVQUNFLFFBQXdCLEVBQ3hCLGNBQWdDLEVBQ2hDLFlBQW1DLEVBQ25DLE9BQWUsRUFDZixVQUFrQjtRQUVsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLGNBQWMsZ0JBQUEsRUFBRSxZQUFZLGNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7UUFDL0YsUUFBUSxDQUFDLE9BQU8sSUFBSSxNQUFJLGNBQWMsQ0FBQyxXQUFXLE1BQUcsQ0FBQztRQUN0RCxJQUFJLGNBQWMsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsUUFBUSxDQUFDLE9BQU8sSUFBSSw2QkFBMEIsY0FBYyxDQUFDLFNBQVMsU0FBSztpQkFDekUsc0JBQW1CLFVBQVUsT0FBRyxDQUFBO2lCQUNoQywyQkFBd0IsT0FBTyxhQUFVLENBQUEsQ0FBQztZQUM1QyxRQUFRLFlBQVksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLEtBQUssT0FBTztvQkFDVixRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQztvQkFDN0IsTUFBTTtnQkFDUixLQUFLLFFBQVE7b0JBQ1gsUUFBUSxDQUFDLE9BQU8sSUFBSSxhQUFhLENBQUM7b0JBQ2xDLE1BQU07YUFDVDtZQUNELFFBQVEsQ0FBQyxPQUFPLElBQUksT0FBSyxjQUFjLENBQUMsU0FBUyxTQUFLLENBQUM7U0FDeEQ7UUFDRCxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQU0sY0FBYyxDQUFDLFdBQVcsTUFBRyxDQUFDO0lBQzFELENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQ0UsU0FBaUIsRUFBRSxRQUFnQixFQUFFLFVBQXNCLEVBQUUsVUFBa0I7UUFFL0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsU0FBUyxXQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLE9BQU8sU0FBTyxVQUFZO2FBQ3hCLHNCQUFtQixTQUFTLE9BQUcsQ0FBQTthQUMvQixxQkFBa0IsUUFBUSxPQUFHLENBQUE7YUFDN0Isc0JBQW1CLFVBQVUsT0FBRyxDQUFBO2FBQ2hDLFdBQVMsVUFBVSxNQUFHLENBQUEsQ0FBQztJQUMzQixDQUFDO0lBRU8sc0NBQWdCLEdBQXhCLFVBQXlCLE9BQWUsRUFBRSxNQUE2QjtRQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQTBCLENBQUM7U0FDNUQ7YUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2xDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQTBCLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBN0hVLFdBQVc7UUFEdkIsMEJBQU0sQ0FBQyxrQ0FBZSxFQUFFLDZCQUFTLEVBQUUseUJBQWdCLENBQUM7eUNBR3pCLGtDQUFlO1lBQ3JCLDZCQUFTO1lBQ1gseUJBQWdCO09BSnZCLFdBQVcsQ0E4SHZCO0lBQUQsa0JBQUM7Q0E5SEQsQUE4SEMsSUFBQTtBQTlIWSxrQ0FBVyIsImZpbGUiOiJzZXJ2aWNlcy9mb3JtLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIElGb3JtT3ZlcnJpZGUsXHJcbiAgaXNPdmVycmlkZSxcclxuICBzZXRGb3JtT3ZlcnJpZGVzLFxyXG4gIElUZW1wbGF0ZUVsZW1lbnQsXHJcbiAgaXNUZW1wbGF0ZU1vZHVsZVxyXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcclxuaW1wb3J0IHtcclxuICBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgU2NoZW1hVHlwZVxyXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IElUZW1wbGF0ZVN0b3JlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGVtcGxhdGVcIjtcclxuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSBcIi4vZGVmYXVsdHMtc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy93cmFwcGVyXCI7XHJcbmltcG9ydCB7IGluamVjdCwgVGFza1F1ZXVlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcblxyXG5AaW5qZWN0KERlZmF1bHRzU2VydmljZSwgVGFza1F1ZXVlLCBTY2hlbWFGb3JtTG9nZ2VyKVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxyXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcclxuICApIHsgfVxyXG5cclxuICBhc3luYyBnZXRGb3JtVGVtcGxhdGVBc3luYyhcclxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCBtb2RlbDogYW55LCBpbnN0YW5jZUlkOiBzdHJpbmdcclxuICApOiBQcm9taXNlPElUZW1wbGF0ZVN0b3JlPiB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwiZ2V0Rm9ybVRlbXBsYXRlQXN5bmNcIiwgeyBmb3JtLCBzY2hlbWEsIG1vZGVsLCBpbnN0YW5jZUlkIH0pO1xyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSA9IHsgY29udGVudDogXCJcIiB9O1xyXG5cclxuICAgIG1vZGVsID0gYXdhaXQgdGhpcy5kZWZhdWx0c1NlcnZpY2UuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYSwgbW9kZWwpO1xyXG5cclxuICAgIHNldEZvcm1PdmVycmlkZXMoZm9ybSwgbnVsbCwgbnVsbCwgc2NoZW1hKTtcclxuXHJcbiAgICB0aGlzLmdlbmVyYXRlVGVtcGxhdGUoZm9ybSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCk7XHJcblxyXG4gICAgdGhpcy5sb2dnZXIud2FybihcInRlbXBsYXRlIGNyZWF0ZWRcIiwgeyB0ZW1wbGF0ZSB9KTtcclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlVGVtcGxhdGUoXHJcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxyXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXHJcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmcsXHJcbiAgICBzZWdtZW50OiBzdHJpbmcgPSBcIlwiXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidHJhbnNmb3JtVGVtcGxhdGVcIiwgeyBmb3JtLCBzY2hlbWEgfSk7XHJcbiAgICBmb3IgKGNvbnN0IGZvcm1LZXkgaW4gZm9ybSkge1xyXG4gICAgICBpZiAoaXNPdmVycmlkZShmb3JtS2V5KSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgV3JhcHBlcihmb3JtS2V5KTtcclxuICAgICAgd3JhcHBlci5hcHBseVN0YXJ0KHRlbXBsYXRlKTtcclxuICAgICAgaWYgKFdyYXBwZXIuaXNDb250YWluZXIoZm9ybUtleSkpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZENvbnRhaW5lcihmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkLCBzZWdtZW50KTtcclxuICAgICAgfSBlbHNlIGlmIChpc1RlbXBsYXRlTW9kdWxlKGZvcm1LZXkpKSB7XHJcbiAgICAgICAgZm9ybS5fZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFwcGVuZFRlbXBsYXRlRWxlbWVudCh0ZW1wbGF0ZSwgZWxlbWVudCwgc2NoZW1hLCBzZWdtZW50LCBpbnN0YW5jZUlkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFwcGVuZFNmVGVtcGxhdGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hLCB0ZW1wbGF0ZSwgc2VnbWVudCwgaW5zdGFuY2VJZCk7XHJcbiAgICAgIH1cclxuICAgICAgd3JhcHBlci5hcHBseUVuZCh0ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGVuZENvbnRhaW5lcihcclxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXHJcbiAgICBmb3JtS2V5OiBzdHJpbmcsXHJcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcclxuICAgIGluc3RhbmNlSWQ6IHN0cmluZyxcclxuICAgIHNlZ21lbnQ6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgKGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZVtdKS5mb3JFYWNoKChjaGlsZEZvcm0sIGlkeCkgPT4ge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlVGVtcGxhdGUoY2hpbGRGb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkLCBgJHtzZWdtZW50fVsnJHtmb3JtS2V5fSddWyR7aWR4fV1gKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kU2ZUZW1wbGF0ZShcclxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXHJcbiAgICBmb3JtS2V5OiBzdHJpbmcsXHJcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcclxuICAgIHNlZ21lbnQ6IHN0cmluZyxcclxuICAgIGluc3RhbmNlSWQ6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGUsIHNjaGVtYSwgZm9ybUtleSwgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSkpO1xyXG4gICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLmdldFNmVGVtcGxhdGUoXHJcbiAgICAgIGBtb2RlbFsnJHtmb3JtS2V5fSddYCxcclxuICAgICAgYGZvcm0ke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11gLFxyXG4gICAgICB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKS50eXBlLFxyXG4gICAgICBpbnN0YW5jZUlkXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kVGVtcGxhdGVFbGVtZW50KFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxyXG4gICAgdGVtcGxhdGVNb2R1bGU6IElUZW1wbGF0ZUVsZW1lbnQsXHJcbiAgICBwYXJlbnRTY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICAgIHNlZ21lbnQ6IHN0cmluZyxcclxuICAgIGluc3RhbmNlSWQ6IHN0cmluZ1xyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImFwcGVuZFRlbXBsYXRlRWxlbWVudFwiLCB7IHRlbXBsYXRlLCB0ZW1wbGF0ZU1vZHVsZSwgcGFyZW50U2NoZW1hLCBzZWdtZW50IH0pO1xyXG4gICAgdGVtcGxhdGUuY29udGVudCArPSBgPCR7dGVtcGxhdGVNb2R1bGUuZWxlbWVudE5hbWV9IGA7XHJcbiAgICBpZiAodGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5KSB7XHJcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYCBtb2RlbC50d28td2F5PVwibW9kZWxbJyR7dGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5fSddXCJgICtcclxuICAgICAgICBgIGZvcm0taW5zdGFuY2U9XCIke2luc3RhbmNlSWR9XCJgICtcclxuICAgICAgICBgIHNjaGVtYS50by12aWV3PVwiZm9ybSR7c2VnbWVudH0uJHNjaGVtYWA7XHJcbiAgICAgIHN3aXRjaCAocGFyZW50U2NoZW1hLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiYXJyYXlcIjpcclxuICAgICAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gXCIuaXRlbXNcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJvYmplY3RcIjpcclxuICAgICAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gXCIucHJvcGVydGllc1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcGxhdGUuY29udGVudCArPSBgWycke3RlbXBsYXRlTW9kdWxlLnNjaGVtYUtleX0nXVwiYDtcclxuICAgIH1cclxuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYD48LyR7dGVtcGxhdGVNb2R1bGUuZWxlbWVudE5hbWV9PmA7XHJcbiAgfVxyXG5cclxuICBnZXRTZlRlbXBsYXRlKFxyXG4gICAgbW9kZWxQYXRoOiBzdHJpbmcsIGZvcm1QYXRoOiBzdHJpbmcsIHNjaGVtYVR5cGU6IFNjaGVtYVR5cGUsIGluc3RhbmNlSWQ6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldFRlbXBsYXRlXCIsIHsgbW9kZWxQYXRoLCBmb3JtUGF0aCwgc2NoZW1hVHlwZSwgaW5zdGFuY2VJZCB9KTtcclxuICAgIHJldHVybiBgPHNmLSR7c2NoZW1hVHlwZX1gICtcclxuICAgICAgYCBtb2RlbC50d28td2F5PVwiJHttb2RlbFBhdGh9XCJgICtcclxuICAgICAgYCBmb3JtLnRvLXZpZXc9XCIke2Zvcm1QYXRofVwiYCArXHJcbiAgICAgIGAgZm9ybS1pbnN0YW5jZT1cIiR7aW5zdGFuY2VJZH1cImAgK1xyXG4gICAgICBgPjwvc2YtJHtzY2hlbWFUeXBlfT5gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24pIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRGb3JtS2V5U2NoZW1hXCIsIHsgZm9ybUtleSwgc2NoZW1hIH0pO1xyXG4gICAgaWYgKHNjaGVtYS50eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XHJcbiAgICB9IGVsc2UgaWYgKHNjaGVtYS50eXBlID09PSBcImFycmF5XCIpIHtcclxuICAgICAgcmV0dXJuIHNjaGVtYS5pdGVtc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
