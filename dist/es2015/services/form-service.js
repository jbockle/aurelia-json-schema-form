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
import { isOverride, setFormOverrides, isTemplateModule } from '../interfaces/form-override';
import { SchemaFormLogger } from '../resources/logger';
import { DefaultsService } from './defaults-service';
import { Wrapper } from '../resources/wrapper';
import { inject, TaskQueue } from 'aurelia-framework';
import { SchemaFormConfiguration } from './schema-form-configuration';
let FormService = class FormService {
    constructor(defaultsService, taskQueue, logger, configuration) {
        this.defaultsService = defaultsService;
        this.taskQueue = taskQueue;
        this.logger = logger;
        this.configuration = configuration;
    }
    getFormTemplateAsync(form, schema, model, instanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.warn('getFormTemplateAsync', { form, schema, model, instanceId });
            const template = { content: '' };
            model = yield this.defaultsService.getSchemaDefaultAsync(schema, model);
            setFormOverrides(form, null, null, schema);
            this.generateTemplate(form, schema, template, instanceId);
            this.logger.warn('template created', { template });
            return template;
        });
    }
    generateTemplate(form, schema, template, instanceId, segment = '') {
        this.logger.info('transformTemplate', { form, schema });
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
        this.logger.info('appendTemplateElement', { template, templateModule, parentSchema, segment });
        template.content += `<${templateModule.elementName} `;
        if (templateModule.schemaKey) {
            template.content += ` model.two-way="model['${templateModule.schemaKey}']"` +
                ` form-instance="${instanceId}"` +
                ` schema.to-view="form${segment}.$schema`;
            switch (parentSchema.type) {
                case 'array':
                    template.content += '.items';
                    break;
                case 'object':
                    template.content += '.properties';
                    break;
            }
            template.content += `['${templateModule.schemaKey}']"`;
        }
        template.content += `></${templateModule.elementName}>`;
    }
    getSfTemplate(modelPath, formPath, schemaType, instanceId) {
        this.logger.info('getTemplate', { modelPath, formPath, schemaType, instanceId });
        return `<sf-${schemaType}` +
            ` model.two-way="${modelPath}"` +
            ` form.to-view="${formPath}"` +
            ` form-instance="${instanceId}"` +
            `></sf-${schemaType}>`;
    }
    getFormKeySchema(formKey, schema) {
        this.logger.info('getFormKeySchema', { formKey, schema });
        if (schema.type === 'object') {
            return schema.properties[formKey];
        }
        else if (schema.type === 'array') {
            return schema.items[formKey];
        }
    }
    getTemplatePath(type, child) {
        let templates = this.configuration.templates;
        if (child) {
            templates = templates[child];
        }
        return templates[type].replace('./', '../../');
    }
};
FormService = __decorate([
    inject(DefaultsService, TaskQueue, SchemaFormLogger, SchemaFormConfiguration),
    __metadata("design:paramtypes", [DefaultsService,
        TaskQueue,
        SchemaFormLogger,
        SchemaFormConfiguration])
], FormService);
export { FormService };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFFTCxVQUFVLEVBQ1YsZ0JBQWdCLEVBRWhCLGdCQUFnQixFQUNqQixNQUFNLDZCQUE2QixDQUFDO0FBS3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUd0RSxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBQ3RCLFlBQ1MsZUFBZ0MsRUFDaEMsU0FBb0IsRUFDbkIsTUFBd0IsRUFDekIsYUFBc0M7UUFIdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQXlCO0lBQzNDLENBQUM7SUFFQyxvQkFBb0IsQ0FDeEIsSUFBbUIsRUFBRSxNQUE2QixFQUFFLEtBQVUsRUFBRSxVQUFrQjs7WUFFbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBRTlFLE1BQU0sUUFBUSxHQUFtQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUVqRCxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV4RSxnQkFBZ0IsQ0FB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LGdCQUFnQixDQUFDLE9BQWUsRUFBRSxNQUE2QjtRQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztTQUM1RDthQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztTQUN2RDtJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsSUFBWSxFQUFFLEtBQWM7UUFDMUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxLQUFLLEVBQUU7WUFDVCxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTtBQXZJWSxXQUFXO0lBRHZCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixDQUFDO3FDQUdsRCxlQUFlO1FBQ3JCLFNBQVM7UUFDWCxnQkFBZ0I7UUFDVix1QkFBdUI7R0FMcEMsV0FBVyxDQXVJdkI7U0F2SVksV0FBVyIsImZpbGUiOiJzZXJ2aWNlcy9mb3JtLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIElGb3JtT3ZlcnJpZGUsXHJcbiAgaXNPdmVycmlkZSxcclxuICBzZXRGb3JtT3ZlcnJpZGVzLFxyXG4gIElUZW1wbGF0ZUVsZW1lbnQsXHJcbiAgaXNUZW1wbGF0ZU1vZHVsZVxyXG59IGZyb20gJy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XHJcbmltcG9ydCB7XHJcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gIFNjaGVtYVR5cGVcclxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb24nO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vcmVzb3VyY2VzL2xvZ2dlcic7XHJcbmltcG9ydCB7IElUZW1wbGF0ZVN0b3JlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gJy4vZGVmYXVsdHMtc2VydmljZSc7XHJcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICcuLi9yZXNvdXJjZXMvd3JhcHBlcic7XHJcbmltcG9ydCB7IGluamVjdCwgVGFza1F1ZXVlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcblxyXG5AaW5qZWN0KERlZmF1bHRzU2VydmljZSwgVGFza1F1ZXVlLCBTY2hlbWFGb3JtTG9nZ2VyLCBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcclxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkZWZhdWx0c1NlcnZpY2U6IERlZmF1bHRzU2VydmljZSxcclxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uXHJcbiAgKSB7IH1cclxuXHJcbiAgYXN5bmMgZ2V0Rm9ybVRlbXBsYXRlQXN5bmMoXHJcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgbW9kZWw6IGFueSwgaW5zdGFuY2VJZDogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxJVGVtcGxhdGVTdG9yZT4ge1xyXG4gICAgdGhpcy5sb2dnZXIud2FybignZ2V0Rm9ybVRlbXBsYXRlQXN5bmMnLCB7IGZvcm0sIHNjaGVtYSwgbW9kZWwsIGluc3RhbmNlSWQgfSk7XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlID0geyBjb250ZW50OiAnJyB9O1xyXG5cclxuICAgIG1vZGVsID0gYXdhaXQgdGhpcy5kZWZhdWx0c1NlcnZpY2UuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYSwgbW9kZWwpO1xyXG5cclxuICAgIHNldEZvcm1PdmVycmlkZXMoZm9ybSwgbnVsbCwgbnVsbCwgc2NoZW1hKTtcclxuXHJcbiAgICB0aGlzLmdlbmVyYXRlVGVtcGxhdGUoZm9ybSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCk7XHJcblxyXG4gICAgdGhpcy5sb2dnZXIud2FybigndGVtcGxhdGUgY3JlYXRlZCcsIHsgdGVtcGxhdGUgfSk7XHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVRlbXBsYXRlKFxyXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcclxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxyXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nLFxyXG4gICAgc2VnbWVudDogc3RyaW5nID0gJydcclxuICApIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3RyYW5zZm9ybVRlbXBsYXRlJywgeyBmb3JtLCBzY2hlbWEgfSk7XHJcbiAgICBmb3IgKGNvbnN0IGZvcm1LZXkgaW4gZm9ybSkge1xyXG4gICAgICBpZiAoaXNPdmVycmlkZShmb3JtS2V5KSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgV3JhcHBlcihmb3JtS2V5KTtcclxuICAgICAgd3JhcHBlci5hcHBseVN0YXJ0KHRlbXBsYXRlKTtcclxuICAgICAgaWYgKFdyYXBwZXIuaXNDb250YWluZXIoZm9ybUtleSkpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZENvbnRhaW5lcihmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkLCBzZWdtZW50KTtcclxuICAgICAgfSBlbHNlIGlmIChpc1RlbXBsYXRlTW9kdWxlKGZvcm1LZXkpKSB7XHJcbiAgICAgICAgZm9ybS5fZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFwcGVuZFRlbXBsYXRlRWxlbWVudCh0ZW1wbGF0ZSwgZWxlbWVudCwgc2NoZW1hLCBzZWdtZW50LCBpbnN0YW5jZUlkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFwcGVuZFNmVGVtcGxhdGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hLCB0ZW1wbGF0ZSwgc2VnbWVudCwgaW5zdGFuY2VJZCk7XHJcbiAgICAgIH1cclxuICAgICAgd3JhcHBlci5hcHBseUVuZCh0ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGVuZENvbnRhaW5lcihcclxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXHJcbiAgICBmb3JtS2V5OiBzdHJpbmcsXHJcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcclxuICAgIGluc3RhbmNlSWQ6IHN0cmluZyxcclxuICAgIHNlZ21lbnQ6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgKGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZVtdKS5mb3JFYWNoKChjaGlsZEZvcm0sIGlkeCkgPT4ge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlVGVtcGxhdGUoY2hpbGRGb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkLCBgJHtzZWdtZW50fVsnJHtmb3JtS2V5fSddWyR7aWR4fV1gKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kU2ZUZW1wbGF0ZShcclxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXHJcbiAgICBmb3JtS2V5OiBzdHJpbmcsXHJcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcclxuICAgIHNlZ21lbnQ6IHN0cmluZyxcclxuICAgIGluc3RhbmNlSWQ6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGUsIHNjaGVtYSwgZm9ybUtleSwgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSkpO1xyXG4gICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLmdldFNmVGVtcGxhdGUoXHJcbiAgICAgIGBtb2RlbFsnJHtmb3JtS2V5fSddYCxcclxuICAgICAgYGZvcm0ke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11gLFxyXG4gICAgICB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKS50eXBlLFxyXG4gICAgICBpbnN0YW5jZUlkXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kVGVtcGxhdGVFbGVtZW50KFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxyXG4gICAgdGVtcGxhdGVNb2R1bGU6IElUZW1wbGF0ZUVsZW1lbnQsXHJcbiAgICBwYXJlbnRTY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICAgIHNlZ21lbnQ6IHN0cmluZyxcclxuICAgIGluc3RhbmNlSWQ6IHN0cmluZ1xyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnYXBwZW5kVGVtcGxhdGVFbGVtZW50JywgeyB0ZW1wbGF0ZSwgdGVtcGxhdGVNb2R1bGUsIHBhcmVudFNjaGVtYSwgc2VnbWVudCB9KTtcclxuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYDwke3RlbXBsYXRlTW9kdWxlLmVsZW1lbnROYW1lfSBgO1xyXG4gICAgaWYgKHRlbXBsYXRlTW9kdWxlLnNjaGVtYUtleSkge1xyXG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGAgbW9kZWwudHdvLXdheT1cIm1vZGVsWycke3RlbXBsYXRlTW9kdWxlLnNjaGVtYUtleX0nXVwiYCArXHJcbiAgICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXHJcbiAgICAgICAgYCBzY2hlbWEudG8tdmlldz1cImZvcm0ke3NlZ21lbnR9LiRzY2hlbWFgO1xyXG4gICAgICBzd2l0Y2ggKHBhcmVudFNjaGVtYS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXJyYXknOlxyXG4gICAgICAgICAgdGVtcGxhdGUuY29udGVudCArPSAnLml0ZW1zJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9ICcucHJvcGVydGllcyc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGBbJyR7dGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5fSddXCJgO1xyXG4gICAgfVxyXG4gICAgdGVtcGxhdGUuY29udGVudCArPSBgPjwvJHt0ZW1wbGF0ZU1vZHVsZS5lbGVtZW50TmFtZX0+YDtcclxuICB9XHJcblxyXG4gIGdldFNmVGVtcGxhdGUoXHJcbiAgICBtb2RlbFBhdGg6IHN0cmluZywgZm9ybVBhdGg6IHN0cmluZywgc2NoZW1hVHlwZTogU2NoZW1hVHlwZSwgaW5zdGFuY2VJZDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdnZXRUZW1wbGF0ZScsIHsgbW9kZWxQYXRoLCBmb3JtUGF0aCwgc2NoZW1hVHlwZSwgaW5zdGFuY2VJZCB9KTtcclxuICAgIHJldHVybiBgPHNmLSR7c2NoZW1hVHlwZX1gICtcclxuICAgICAgYCBtb2RlbC50d28td2F5PVwiJHttb2RlbFBhdGh9XCJgICtcclxuICAgICAgYCBmb3JtLnRvLXZpZXc9XCIke2Zvcm1QYXRofVwiYCArXHJcbiAgICAgIGAgZm9ybS1pbnN0YW5jZT1cIiR7aW5zdGFuY2VJZH1cImAgK1xyXG4gICAgICBgPjwvc2YtJHtzY2hlbWFUeXBlfT5gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24pIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2dldEZvcm1LZXlTY2hlbWEnLCB7IGZvcm1LZXksIHNjaGVtYSB9KTtcclxuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmV0dXJuIHNjaGVtYS5wcm9wZXJ0aWVzW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcclxuICAgIH0gZWxzZSBpZiAoc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcclxuICAgICAgcmV0dXJuIHNjaGVtYS5pdGVtc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUZW1wbGF0ZVBhdGgodHlwZTogc3RyaW5nLCBjaGlsZD86IHN0cmluZykge1xyXG4gICAgbGV0IHRlbXBsYXRlcyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXM7XHJcbiAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgdGVtcGxhdGVzID0gdGVtcGxhdGVzW2NoaWxkXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wbGF0ZXNbdHlwZV0ucmVwbGFjZSgnLi8nLCAnLi4vLi4vJyk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
