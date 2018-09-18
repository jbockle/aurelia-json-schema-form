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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFFTCxVQUFVLEVBQ1YsZ0JBQWdCLEVBRWhCLGdCQUFnQixFQUNqQixNQUFNLDZCQUE2QixDQUFDO0FBS3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUd0RSxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBQ3RCLFlBQ1MsZUFBZ0MsRUFDaEMsU0FBb0IsRUFDbkIsTUFBd0IsRUFDekIsYUFBc0M7UUFIdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQXlCO0lBQzNDLENBQUM7SUFFQyxvQkFBb0IsQ0FDeEIsSUFBbUIsRUFBRSxNQUE2QixFQUFFLEtBQVUsRUFBRSxVQUFrQjs7WUFFbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBRTlFLE1BQU0sUUFBUSxHQUFtQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUVqRCxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV4RSxnQkFBZ0IsQ0FB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LGdCQUFnQixDQUFDLE9BQWUsRUFBRSxNQUE2QjtRQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztTQUM1RDthQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztTQUN2RDtJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsSUFBWSxFQUFFLEtBQWM7UUFDMUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxLQUFLLEVBQUU7WUFDVCxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTtBQXZJWSxXQUFXO0lBRHZCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixDQUFDO3FDQUdsRCxlQUFlO1FBQ3JCLFNBQVM7UUFDWCxnQkFBZ0I7UUFDVix1QkFBdUI7R0FMcEMsV0FBVyxDQXVJdkI7U0F2SVksV0FBVyIsImZpbGUiOiJzZXJ2aWNlcy9mb3JtLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJRm9ybU92ZXJyaWRlLFxuICBpc092ZXJyaWRlLFxuICBzZXRGb3JtT3ZlcnJpZGVzLFxuICBJVGVtcGxhdGVFbGVtZW50LFxuICBpc1RlbXBsYXRlTW9kdWxlXG59IGZyb20gJy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XG5pbXBvcnQge1xuICBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gIFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi9yZXNvdXJjZXMvbG9nZ2VyJztcbmltcG9ydCB7IElUZW1wbGF0ZVN0b3JlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZSc7XG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuL2RlZmF1bHRzLXNlcnZpY2UnO1xuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gJy4uL3Jlc291cmNlcy93cmFwcGVyJztcbmltcG9ydCB7IGluamVjdCwgVGFza1F1ZXVlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xuXG5AaW5qZWN0KERlZmF1bHRzU2VydmljZSwgVGFza1F1ZXVlLCBTY2hlbWFGb3JtTG9nZ2VyLCBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkZWZhdWx0c1NlcnZpY2U6IERlZmF1bHRzU2VydmljZSxcbiAgICBwdWJsaWMgdGFza1F1ZXVlOiBUYXNrUXVldWUsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uXG4gICkgeyB9XG5cbiAgYXN5bmMgZ2V0Rm9ybVRlbXBsYXRlQXN5bmMoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSwgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIG1vZGVsOiBhbnksIGluc3RhbmNlSWQ6IHN0cmluZ1xuICApOiBQcm9taXNlPElUZW1wbGF0ZVN0b3JlPiB7XG4gICAgdGhpcy5sb2dnZXIud2FybignZ2V0Rm9ybVRlbXBsYXRlQXN5bmMnLCB7IGZvcm0sIHNjaGVtYSwgbW9kZWwsIGluc3RhbmNlSWQgfSk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUgPSB7IGNvbnRlbnQ6ICcnIH07XG5cbiAgICBtb2RlbCA9IGF3YWl0IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyhzY2hlbWEsIG1vZGVsKTtcblxuICAgIHNldEZvcm1PdmVycmlkZXMoZm9ybSwgbnVsbCwgbnVsbCwgc2NoZW1hKTtcblxuICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShmb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkKTtcblxuICAgIHRoaXMubG9nZ2VyLndhcm4oJ3RlbXBsYXRlIGNyZWF0ZWQnLCB7IHRlbXBsYXRlIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdlbmVyYXRlVGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nLFxuICAgIHNlZ21lbnQ6IHN0cmluZyA9ICcnXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3RyYW5zZm9ybVRlbXBsYXRlJywgeyBmb3JtLCBzY2hlbWEgfSk7XG4gICAgZm9yIChjb25zdCBmb3JtS2V5IGluIGZvcm0pIHtcbiAgICAgIGlmIChpc092ZXJyaWRlKGZvcm1LZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBXcmFwcGVyKGZvcm1LZXkpO1xuICAgICAgd3JhcHBlci5hcHBseVN0YXJ0KHRlbXBsYXRlKTtcbiAgICAgIGlmIChXcmFwcGVyLmlzQ29udGFpbmVyKGZvcm1LZXkpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ29udGFpbmVyKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIHNlZ21lbnQpO1xuICAgICAgfSBlbHNlIGlmIChpc1RlbXBsYXRlTW9kdWxlKGZvcm1LZXkpKSB7XG4gICAgICAgIGZvcm0uX2VsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwZW5kVGVtcGxhdGVFbGVtZW50KHRlbXBsYXRlLCBlbGVtZW50LCBzY2hlbWEsIHNlZ21lbnQsIGluc3RhbmNlSWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXBwZW5kU2ZUZW1wbGF0ZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIHRlbXBsYXRlLCBzZWdtZW50LCBpbnN0YW5jZUlkKTtcbiAgICAgIH1cbiAgICAgIHdyYXBwZXIuYXBwbHlFbmQodGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kQ29udGFpbmVyKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXG4gICAgZm9ybUtleTogc3RyaW5nLFxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmcsXG4gICAgc2VnbWVudDogc3RyaW5nXG4gICkge1xuICAgIChmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGVbXSkuZm9yRWFjaCgoY2hpbGRGb3JtLCBpZHgpID0+IHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShjaGlsZEZvcm0sIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIGAke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11bJHtpZHh9XWApO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kU2ZUZW1wbGF0ZShcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxuICAgIGZvcm1LZXk6IHN0cmluZyxcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXG4gICAgc2VnbWVudDogc3RyaW5nLFxuICAgIGluc3RhbmNlSWQ6IHN0cmluZ1xuICApIHtcbiAgICBzZXRGb3JtT3ZlcnJpZGVzKGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZSwgc2NoZW1hLCBmb3JtS2V5LCB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKSk7XG4gICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLmdldFNmVGVtcGxhdGUoXG4gICAgICBgbW9kZWxbJyR7Zm9ybUtleX0nXWAsXG4gICAgICBgZm9ybSR7c2VnbWVudH1bJyR7Zm9ybUtleX0nXWAsXG4gICAgICB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKS50eXBlLFxuICAgICAgaW5zdGFuY2VJZFxuICAgICk7XG4gIH1cblxuICBhcHBlbmRUZW1wbGF0ZUVsZW1lbnQoXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIHRlbXBsYXRlTW9kdWxlOiBJVGVtcGxhdGVFbGVtZW50LFxuICAgIHBhcmVudFNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICAgIHNlZ21lbnQ6IHN0cmluZyxcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnYXBwZW5kVGVtcGxhdGVFbGVtZW50JywgeyB0ZW1wbGF0ZSwgdGVtcGxhdGVNb2R1bGUsIHBhcmVudFNjaGVtYSwgc2VnbWVudCB9KTtcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGA8JHt0ZW1wbGF0ZU1vZHVsZS5lbGVtZW50TmFtZX0gYDtcbiAgICBpZiAodGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5KSB7XG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGAgbW9kZWwudHdvLXdheT1cIm1vZGVsWycke3RlbXBsYXRlTW9kdWxlLnNjaGVtYUtleX0nXVwiYCArXG4gICAgICAgIGAgZm9ybS1pbnN0YW5jZT1cIiR7aW5zdGFuY2VJZH1cImAgK1xuICAgICAgICBgIHNjaGVtYS50by12aWV3PVwiZm9ybSR7c2VnbWVudH0uJHNjaGVtYWA7XG4gICAgICBzd2l0Y2ggKHBhcmVudFNjaGVtYS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9ICcuaXRlbXMnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gJy5wcm9wZXJ0aWVzJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYFsnJHt0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXl9J11cImA7XG4gICAgfVxuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYD48LyR7dGVtcGxhdGVNb2R1bGUuZWxlbWVudE5hbWV9PmA7XG4gIH1cblxuICBnZXRTZlRlbXBsYXRlKFxuICAgIG1vZGVsUGF0aDogc3RyaW5nLCBmb3JtUGF0aDogc3RyaW5nLCBzY2hlbWFUeXBlOiBTY2hlbWFUeXBlLCBpbnN0YW5jZUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnZ2V0VGVtcGxhdGUnLCB7IG1vZGVsUGF0aCwgZm9ybVBhdGgsIHNjaGVtYVR5cGUsIGluc3RhbmNlSWQgfSk7XG4gICAgcmV0dXJuIGA8c2YtJHtzY2hlbWFUeXBlfWAgK1xuICAgICAgYCBtb2RlbC50d28td2F5PVwiJHttb2RlbFBhdGh9XCJgICtcbiAgICAgIGAgZm9ybS50by12aWV3PVwiJHtmb3JtUGF0aH1cImAgK1xuICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXG4gICAgICBgPjwvc2YtJHtzY2hlbWFUeXBlfT5gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdnZXRGb3JtS2V5U2NoZW1hJywgeyBmb3JtS2V5LCBzY2hlbWEgfSk7XG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHNjaGVtYS5wcm9wZXJ0aWVzW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgICB9IGVsc2UgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgICB9XG4gIH1cblxuICBnZXRUZW1wbGF0ZVBhdGgodHlwZTogc3RyaW5nLCBjaGlsZD86IHN0cmluZykge1xuICAgIGxldCB0ZW1wbGF0ZXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzO1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgdGVtcGxhdGVzID0gdGVtcGxhdGVzW2NoaWxkXTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlc1t0eXBlXS5yZXBsYWNlKCcuLycsICcuLi8uLi8nKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
