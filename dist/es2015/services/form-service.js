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
import { isOverride, setFormOverrides, isTemplateModule } from "../interfaces/form-override";
import { SchemaFormLogger } from "../resources/logger";
import { DefaultsService } from "./defaults-service";
import { Wrapper } from "../resources/wrapper";
import { inject, TaskQueue } from "aurelia-framework";
let FormService = class FormService {
    constructor(defaultsService, taskQueue, logger) {
        this.defaultsService = defaultsService;
        this.taskQueue = taskQueue;
        this.logger = logger;
    }
    getFormTemplateAsync(form, schema, model, instanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.warn("getFormTemplateAsync", { form, schema, model, instanceId });
            const template = { content: "" };
            model = yield this.defaultsService.getSchemaDefaultAsync(schema, model);
            setFormOverrides(form, null, null, schema);
            this.generateTemplate(form, schema, template, instanceId);
            this.logger.warn("template created", { template });
            return template;
        });
    }
    generateTemplate(form, schema, template, instanceId, segment = "") {
        this.logger.info("transformTemplate", { form, schema });
        for (const formKey in form) {
            if (isOverride(formKey)) {
                continue;
            }
            const wrapper = new Wrapper(formKey);
            wrapper.applyStart(template);
            if (Wrapper.isContainer(formKey)) {
                this.appendContainer(form, formKey, schema, template, instanceId, segment);
            }
            else if (isTemplateModule(formKey)) {
                form._element.forEach((element) => {
                    this.appendTemplateElement(template, element, schema, segment, instanceId);
                });
            }
            else {
                this.appendSfTemplate(form, formKey, schema, template, segment, instanceId);
            }
            wrapper.applyEnd(template);
        }
    }
    appendContainer(form, formKey, schema, template, instanceId, segment) {
        form[formKey].forEach((childForm, idx) => {
            this.generateTemplate(childForm, schema, template, instanceId, `${segment}['${formKey}'][${idx}]`);
        });
    }
    appendSfTemplate(form, formKey, schema, template, segment, instanceId) {
        setFormOverrides(form[formKey], schema, formKey, this.getFormKeySchema(formKey, schema));
        template.content += this.getSfTemplate(`model['${formKey}']`, `form${segment}['${formKey}']`, this.getFormKeySchema(formKey, schema).type, instanceId);
    }
    appendTemplateElement(template, templateModule, parentSchema, segment, instanceId) {
        this.logger.info("appendTemplateElement", { template, templateModule, parentSchema, segment });
        template.content += `<${templateModule.elementName} `;
        if (templateModule.schemaKey) {
            template.content += ` model.two-way="model['${templateModule.schemaKey}']"` +
                ` form-instance="${instanceId}"` +
                ` schema.to-view="form${segment}.$schema`;
            switch (parentSchema.type) {
                case "array":
                    template.content += ".items";
                    break;
                case "object":
                    template.content += ".properties";
                    break;
            }
            template.content += `['${templateModule.schemaKey}']"`;
        }
        template.content += `></${templateModule.elementName}>`;
    }
    getSfTemplate(modelPath, formPath, schemaType, instanceId) {
        this.logger.info("getTemplate", { modelPath, formPath, schemaType, instanceId });
        return `<sf-${schemaType}` +
            ` model.two-way="${modelPath}"` +
            ` form.to-view="${formPath}"` +
            ` form-instance="${instanceId}"` +
            `></sf-${schemaType}>`;
    }
    getFormKeySchema(formKey, schema) {
        this.logger.info("getFormKeySchema", { formKey, schema });
        if (schema.type === "object") {
            return schema.properties[formKey];
        }
        else if (schema.type === "array") {
            return schema.items[formKey];
        }
    }
};
FormService = __decorate([
    inject(DefaultsService, TaskQueue, SchemaFormLogger),
    __metadata("design:paramtypes", [DefaultsService,
        TaskQueue,
        SchemaFormLogger])
], FormService);
export { FormService };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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TyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUEwQixDQUFDO1NBQzVEO2FBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNsQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUEwQixDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUE5SFksV0FBVztJQUR2QixNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztxQ0FHekIsZUFBZTtRQUNyQixTQUFTO1FBQ1gsZ0JBQWdCO0dBSnZCLFdBQVcsQ0E4SHZCO1NBOUhZLFdBQVciLCJmaWxlIjoic2VydmljZXMvZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBJRm9ybU92ZXJyaWRlLFxyXG4gIGlzT3ZlcnJpZGUsXHJcbiAgc2V0Rm9ybU92ZXJyaWRlcyxcclxuICBJVGVtcGxhdGVFbGVtZW50LFxyXG4gIGlzVGVtcGxhdGVNb2R1bGVcclxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcbmltcG9ydCB7XHJcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gIFNjaGVtYVR5cGVcclxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJVGVtcGxhdGVTdG9yZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RlbXBsYXRlXCI7XHJcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gXCIuL2RlZmF1bHRzLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBpbmplY3QsIFRhc2tRdWV1ZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5cclxuQGluamVjdChEZWZhdWx0c1NlcnZpY2UsIFRhc2tRdWV1ZSwgU2NoZW1hRm9ybUxvZ2dlcilcclxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkZWZhdWx0c1NlcnZpY2U6IERlZmF1bHRzU2VydmljZSxcclxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyXHJcbiAgKSB7IH1cclxuXHJcbiAgYXN5bmMgZ2V0Rm9ybVRlbXBsYXRlQXN5bmMoXHJcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgbW9kZWw6IGFueSwgaW5zdGFuY2VJZDogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxJVGVtcGxhdGVTdG9yZT4ge1xyXG4gICAgdGhpcy5sb2dnZXIud2FybihcImdldEZvcm1UZW1wbGF0ZUFzeW5jXCIsIHsgZm9ybSwgc2NoZW1hLCBtb2RlbCwgaW5zdGFuY2VJZCB9KTtcclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUgPSB7IGNvbnRlbnQ6IFwiXCIgfTtcclxuXHJcbiAgICBtb2RlbCA9IGF3YWl0IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyhzY2hlbWEsIG1vZGVsKTtcclxuXHJcbiAgICBzZXRGb3JtT3ZlcnJpZGVzKGZvcm0sIG51bGwsIG51bGwsIHNjaGVtYSk7XHJcblxyXG4gICAgdGhpcy5nZW5lcmF0ZVRlbXBsYXRlKGZvcm0sIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQpO1xyXG5cclxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJ0ZW1wbGF0ZSBjcmVhdGVkXCIsIHsgdGVtcGxhdGUgfSk7XHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVRlbXBsYXRlKFxyXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcclxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nLFxyXG4gICAgc2VnbWVudDogc3RyaW5nID0gXCJcIlxyXG4gICkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInRyYW5zZm9ybVRlbXBsYXRlXCIsIHsgZm9ybSwgc2NoZW1hIH0pO1xyXG4gICAgZm9yIChjb25zdCBmb3JtS2V5IGluIGZvcm0pIHtcclxuICAgICAgaWYgKGlzT3ZlcnJpZGUoZm9ybUtleSkpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB3cmFwcGVyID0gbmV3IFdyYXBwZXIoZm9ybUtleSk7XHJcbiAgICAgIHdyYXBwZXIuYXBwbHlTdGFydCh0ZW1wbGF0ZSk7XHJcbiAgICAgIGlmIChXcmFwcGVyLmlzQ29udGFpbmVyKGZvcm1LZXkpKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRDb250YWluZXIoZm9ybSwgZm9ybUtleSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCwgc2VnbWVudCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNUZW1wbGF0ZU1vZHVsZShmb3JtS2V5KSkge1xyXG4gICAgICAgIGZvcm0uX2VsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hcHBlbmRUZW1wbGF0ZUVsZW1lbnQodGVtcGxhdGUsIGVsZW1lbnQsIHNjaGVtYSwgc2VnbWVudCwgaW5zdGFuY2VJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRTZlRlbXBsYXRlKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgdGVtcGxhdGUsIHNlZ21lbnQsIGluc3RhbmNlSWQpO1xyXG4gICAgICB9XHJcbiAgICAgIHdyYXBwZXIuYXBwbHlFbmQodGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBlbmRDb250YWluZXIoXHJcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxyXG4gICAgZm9ybUtleTogc3RyaW5nLFxyXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXHJcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmcsXHJcbiAgICBzZWdtZW50OiBzdHJpbmdcclxuICApIHtcclxuICAgIChmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGVbXSkuZm9yRWFjaCgoY2hpbGRGb3JtLCBpZHgpID0+IHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZVRlbXBsYXRlKGNoaWxkRm9ybSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCwgYCR7c2VnbWVudH1bJyR7Zm9ybUtleX0nXVske2lkeH1dYCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFwcGVuZFNmVGVtcGxhdGUoXHJcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxyXG4gICAgZm9ybUtleTogc3RyaW5nLFxyXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXHJcbiAgICBzZWdtZW50OiBzdHJpbmcsXHJcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmdcclxuICApIHtcclxuICAgIHNldEZvcm1PdmVycmlkZXMoZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlLCBzY2hlbWEsIGZvcm1LZXksIHRoaXMuZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5LCBzY2hlbWEpKTtcclxuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5nZXRTZlRlbXBsYXRlKFxyXG4gICAgICBgbW9kZWxbJyR7Zm9ybUtleX0nXWAsXHJcbiAgICAgIGBmb3JtJHtzZWdtZW50fVsnJHtmb3JtS2V5fSddYCxcclxuICAgICAgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSkudHlwZSxcclxuICAgICAgaW5zdGFuY2VJZFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZFRlbXBsYXRlRWxlbWVudChcclxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcclxuICAgIHRlbXBsYXRlTW9kdWxlOiBJVGVtcGxhdGVFbGVtZW50LFxyXG4gICAgcGFyZW50U2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgICBzZWdtZW50OiBzdHJpbmcsXHJcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmdcclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBlbmRUZW1wbGF0ZUVsZW1lbnRcIiwgeyB0ZW1wbGF0ZSwgdGVtcGxhdGVNb2R1bGUsIHBhcmVudFNjaGVtYSwgc2VnbWVudCB9KTtcclxuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYDwke3RlbXBsYXRlTW9kdWxlLmVsZW1lbnROYW1lfSBgO1xyXG4gICAgaWYgKHRlbXBsYXRlTW9kdWxlLnNjaGVtYUtleSkge1xyXG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGAgbW9kZWwudHdvLXdheT1cIm1vZGVsWycke3RlbXBsYXRlTW9kdWxlLnNjaGVtYUtleX0nXVwiYCArXHJcbiAgICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXHJcbiAgICAgICAgYCBzY2hlbWEudG8tdmlldz1cImZvcm0ke3NlZ21lbnR9LiRzY2hlbWFgO1xyXG4gICAgICBzd2l0Y2ggKHBhcmVudFNjaGVtYS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImFycmF5XCI6XHJcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IFwiLml0ZW1zXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XHJcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IFwiLnByb3BlcnRpZXNcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYFsnJHt0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXl9J11cImA7XHJcbiAgICB9XHJcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGA+PC8ke3RlbXBsYXRlTW9kdWxlLmVsZW1lbnROYW1lfT5gO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2ZUZW1wbGF0ZShcclxuICAgIG1vZGVsUGF0aDogc3RyaW5nLCBmb3JtUGF0aDogc3RyaW5nLCBzY2hlbWFUeXBlOiBTY2hlbWFUeXBlLCBpbnN0YW5jZUlkOiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRUZW1wbGF0ZVwiLCB7IG1vZGVsUGF0aCwgZm9ybVBhdGgsIHNjaGVtYVR5cGUsIGluc3RhbmNlSWQgfSk7XHJcbiAgICByZXR1cm4gYDxzZi0ke3NjaGVtYVR5cGV9YCArXHJcbiAgICAgIGAgbW9kZWwudHdvLXdheT1cIiR7bW9kZWxQYXRofVwiYCArXHJcbiAgICAgIGAgZm9ybS50by12aWV3PVwiJHtmb3JtUGF0aH1cImAgK1xyXG4gICAgICBgIGZvcm0taW5zdGFuY2U9XCIke2luc3RhbmNlSWR9XCJgICtcclxuICAgICAgYD48L3NmLSR7c2NoZW1hVHlwZX0+YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0Rm9ybUtleVNjaGVtYVwiLCB7IGZvcm1LZXksIHNjaGVtYSB9KTtcclxuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICByZXR1cm4gc2NoZW1hLnByb3BlcnRpZXNbZm9ybUtleV0gYXMgSUpzb25TY2hlbWFEZWZpbml0aW9uO1xyXG4gICAgfSBlbHNlIGlmIChzY2hlbWEudHlwZSA9PT0gXCJhcnJheVwiKSB7XHJcbiAgICAgIHJldHVybiBzY2hlbWEuaXRlbXNbZm9ybUtleV0gYXMgSUpzb25TY2hlbWFEZWZpbml0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
