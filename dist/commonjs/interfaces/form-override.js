"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_logging_1 = require("aurelia-logging");
var overrideMarker = '$';
function isOverride(key) {
    var val = key.charAt(0) === overrideMarker;
    aurelia_logging_1.getLogger('aurelia-json-schema-form')
        .info('isOverride', { key: key, val: val });
    return val;
}
exports.isOverride = isOverride;
function setFormOverrides(form, parentSchema, formKey, schema) {
    aurelia_logging_1.getLogger('aurelia-json-schema-form')
        .info('setFormOverrides', { form: form, parentSchema: parentSchema, formKey: formKey, schema: schema });
    schema.title = schema.title || (!!formKey ? fromCamelCase(formKey) : undefined);
    form.$schema = schema;
    if (form.$enum) {
        form.$schema.enum = form.$enum;
    }
    if (parentSchema && parentSchema.type === 'object') {
        form.$required = form.$required || (parentSchema.required
            ? parentSchema.required.indexOf(formKey) > -1 : false);
    }
}
exports.setFormOverrides = setFormOverrides;
function fromCamelCase(val) {
    return val
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str) { return str.toUpperCase(); });
}
var templateModuleMarker = '_element';
function isTemplateModule(key) {
    return key === templateModuleMarker;
}
exports.isTemplateModule = isTemplateModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLG1EQUE0QztBQThCNUMsSUFBTSxjQUFjLEdBQVcsR0FBRyxDQUFDO0FBQ25DLFNBQWdCLFVBQVUsQ0FBQyxHQUFXO0lBQ3BDLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDO0lBRTdDLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7U0FDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztJQUNwQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFORCxnQ0FNQztBQUVELFNBQWdCLGdCQUFnQixDQUM5QixJQUFtQixFQUFFLFlBQW1DLEVBQUUsT0FBZSxFQUFFLE1BQTZCO0lBRXhHLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7U0FDbEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNoQztJQUVELElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRO1lBQ3ZELENBQUMsQ0FBRSxZQUE0QyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNGO0FBQ0gsQ0FBQztBQWZELDRDQWVDO0FBRUQsU0FBUyxhQUFhLENBQUMsR0FBVztJQUNoQyxPQUFPLEdBQUc7U0FDUCxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztTQUMxQixPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7QUFDL0MsQ0FBQztBQW1CRCxJQUFNLG9CQUFvQixHQUFXLFVBQVUsQ0FBQztBQUVoRCxTQUFnQixnQkFBZ0IsQ0FBQyxHQUFXO0lBQzFDLE9BQU8sR0FBRyxLQUFLLG9CQUFvQixDQUFDO0FBQ3RDLENBQUM7QUFGRCw0Q0FFQyIsImZpbGUiOiJpbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb25cclxufSBmcm9tICcuL2pzb24tc2NoZW1hLWRlZmluaXRpb24nO1xyXG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tICdhdXJlbGlhLWxvZ2dpbmcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRm9ybU92ZXJyaWRlIHtcclxuICBba2V5OiBzdHJpbmddOiBPUlR5cGVzO1xyXG4gIF9lbGVtZW50PzogSVRlbXBsYXRlRWxlbWVudFtdO1xyXG4gICRub1RpdGxlPzogYm9vbGVhbjtcclxuICAkYXJyYXlJdGVtPzogSUZvcm1PdmVycmlkZTtcclxuICAkbm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb24/OiBib29sZWFuO1xyXG4gICRub3RSZW1vdmFibGU/OiBib29sZWFuO1xyXG4gICRhcnJheUFzVGFicz86IGJvb2xlYW47XHJcbiAgJHRhYlRpdGxlPzogc3RyaW5nO1xyXG4gICRwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAkaHRtbENsYXNzPzogc3RyaW5nO1xyXG4gICRhbHRUZW1wbGF0ZT86IHN0cmluZztcclxuICAkbWluRGF0ZT86IHN0cmluZzsgLy8geXl5eS1NTS1kZFxyXG4gICRtYXhEYXRlPzogc3RyaW5nOyAvLyB5eXl5LU1NLWRkXHJcbiAgJHNjaGVtYT86IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcclxuICAkcmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gICRub1NlcGFyYXRvcj86IGJvb2xlYW47XHJcbiAgJHN0ZXA/OiBudW1iZXI7IC8vIHJhbmdlIHNsaWRlciBzdGVwc1xyXG4gICRwYXJlbnRGb3JtPzogSUZvcm1PdmVycmlkZTtcclxuICAkZW51bT86IGFueTtcclxuICAkb25DaGFuZ2U/OiBPUkNoYW5nZUNhbGxiYWNrO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE9SVHlwZXMgPVxyXG4gIElGb3JtT3ZlcnJpZGVbXSB8IElGb3JtT3ZlcnJpZGUgfCBPUlByaW1pdGl2ZSB8IElKc29uU2NoZW1hRGVmaW5pdGlvbiB8IElUZW1wbGF0ZUVsZW1lbnRbXSB8IE9SQ2hhbmdlQ2FsbGJhY2s7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgT1JQcmltaXRpdmUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE9SQ2hhbmdlQ2FsbGJhY2sgPSAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB2b2lkO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVNYXJrZXI6IHN0cmluZyA9ICckJztcclxuZXhwb3J0IGZ1bmN0aW9uIGlzT3ZlcnJpZGUoa2V5OiBzdHJpbmcpIHtcclxuICBjb25zdCB2YWwgPSBrZXkuY2hhckF0KDApID09PSBvdmVycmlkZU1hcmtlcjtcclxuXHJcbiAgZ2V0TG9nZ2VyKCdhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0nKVxyXG4gICAgLmluZm8oJ2lzT3ZlcnJpZGUnLCB7IGtleSwgdmFsIH0pO1xyXG4gIHJldHVybiB2YWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRGb3JtT3ZlcnJpZGVzKFxyXG4gIGZvcm06IElGb3JtT3ZlcnJpZGUsIHBhcmVudFNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCBmb3JtS2V5OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uXHJcbikge1xyXG4gIGdldExvZ2dlcignYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtJylcclxuICAgIC5pbmZvKCdzZXRGb3JtT3ZlcnJpZGVzJywgeyBmb3JtLCBwYXJlbnRTY2hlbWEsIGZvcm1LZXksIHNjaGVtYSB9KTtcclxuICBzY2hlbWEudGl0bGUgPSBzY2hlbWEudGl0bGUgfHwgKCEhZm9ybUtleSA/IGZyb21DYW1lbENhc2UoZm9ybUtleSkgOiB1bmRlZmluZWQpO1xyXG4gIGZvcm0uJHNjaGVtYSA9IHNjaGVtYTtcclxuICBpZiAoZm9ybS4kZW51bSkge1xyXG4gICAgZm9ybS4kc2NoZW1hLmVudW0gPSBmb3JtLiRlbnVtO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhcmVudFNjaGVtYSAmJiBwYXJlbnRTY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgIGZvcm0uJHJlcXVpcmVkID0gZm9ybS4kcmVxdWlyZWQgfHwgKHBhcmVudFNjaGVtYS5yZXF1aXJlZFxyXG4gICAgICA/IChwYXJlbnRTY2hlbWEgYXMgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKS5yZXF1aXJlZC5pbmRleE9mKGZvcm1LZXkpID4gLTEgOiBmYWxzZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ2FtZWxDYXNlKHZhbDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHZhbFxyXG4gICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgJyAkMScpXHJcbiAgICAucmVwbGFjZSgvXi4vLCAoc3RyKSA9PiBzdHIudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbi8qKiBVc2VkIHRvIGRlY2xhcmUgYSBjb21wbGV0ZWx5IHNlcGFyYXRlIG1vZHVsZSB0aGF0IGRvZXNcclxuICogbm90IHBlcmZvcm0gc3RhbmRhcmQgdmFsaWRhdGlvbiwgaW1wbGVtZW50IHZpZXcvdmlldy1tb2RlbCBob3dldmVyIHlvdSB3YW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVFbGVtZW50IHtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gdGVtcGxhdGUsIG1ha2Ugc3VyZSB5b3UgaGF2ZSBhZGRlZCBpdCdzIG1vZHVsZU5hbWUgdG8gZ2xvYmFsUmVzb3VyY2VzICovXHJcbiAgZWxlbWVudE5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqIHRoZSBzY2hlbWEncyBrZXkgdG8gcGFyc2UsIGJpbmRzIGZvcm0gKHRvLXZpZXcpIGFuZCBtb2RlbCh0d28td2F5KSB0byB5b3VyIG1vZHVsZVxyXG4gICAqIEBwcm9wZXJ0eSBJZiBzY2hlbWFLZXkgaXMgc3BlY2lmaWVkLCB5b3VyIG1vZHVsZSBtdXN0IGhhdmU6XHJcbiAgICogICBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcclxuICAgKiAgIGJpbmRhYmxlIG1vZGVsOiBhbnkgb3IgbW9kZWwgdHlwZTtcclxuICAgKiAgIElmIHNjaGVtYUtleSBpcyBvbW1pdHRlZCwgbm8gYmluZGluZ3MgYXJlIG1hZGVcclxuICAgKi9cclxuICBzY2hlbWFLZXk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHRlbXBsYXRlTW9kdWxlTWFya2VyOiBzdHJpbmcgPSAnX2VsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVGVtcGxhdGVNb2R1bGUoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4ga2V5ID09PSB0ZW1wbGF0ZU1vZHVsZU1hcmtlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
