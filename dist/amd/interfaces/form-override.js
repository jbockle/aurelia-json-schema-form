define(["require", "exports", "aurelia-logging"], function (require, exports, aurelia_logging_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFrQ0EsSUFBTSxjQUFjLEdBQVcsR0FBRyxDQUFDO0lBQ25DLFNBQWdCLFVBQVUsQ0FBQyxHQUFXO1FBQ3BDLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDO1FBRTdDLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7YUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFORCxnQ0FNQztJQUVELFNBQWdCLGdCQUFnQixDQUM5QixJQUFtQixFQUFFLFlBQW1DLEVBQUUsT0FBZSxFQUFFLE1BQTZCO1FBRXhHLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7YUFDbEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRO2dCQUN2RCxDQUFDLENBQUUsWUFBNEMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRjtJQUNILENBQUM7SUFmRCw0Q0FlQztJQUVELFNBQVMsYUFBYSxDQUFDLEdBQVc7UUFDaEMsT0FBTyxHQUFHO2FBQ1AsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7YUFDMUIsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFtQkQsSUFBTSxvQkFBb0IsR0FBVyxVQUFVLENBQUM7SUFFaEQsU0FBZ0IsZ0JBQWdCLENBQUMsR0FBVztRQUMxQyxPQUFPLEdBQUcsS0FBSyxvQkFBb0IsQ0FBQztJQUN0QyxDQUFDO0lBRkQsNENBRUMiLCJmaWxlIjoiaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uXHJcbn0gZnJvbSAnLi9qc29uLXNjaGVtYS1kZWZpbml0aW9uJztcclxuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSAnYXVyZWxpYS1sb2dnaW5nJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1PdmVycmlkZSB7XHJcbiAgW2tleTogc3RyaW5nXTogT1JUeXBlcztcclxuICBfZWxlbWVudD86IElUZW1wbGF0ZUVsZW1lbnRbXTtcclxuICAkbm9UaXRsZT86IGJvb2xlYW47XHJcbiAgJGFycmF5SXRlbT86IElGb3JtT3ZlcnJpZGU7XHJcbiAgJG5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uPzogYm9vbGVhbjtcclxuICAkbm90UmVtb3ZhYmxlPzogYm9vbGVhbjtcclxuICAkYXJyYXlBc1RhYnM/OiBib29sZWFuO1xyXG4gICR0YWJUaXRsZT86IHN0cmluZztcclxuICAkcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgJGh0bWxDbGFzcz86IHN0cmluZztcclxuICAkYWx0VGVtcGxhdGU/OiBzdHJpbmc7XHJcbiAgJG1pbkRhdGU/OiBzdHJpbmc7IC8vIHl5eXktTU0tZGRcclxuICAkbWF4RGF0ZT86IHN0cmluZzsgLy8geXl5eS1NTS1kZFxyXG4gICRzY2hlbWE/OiBJSnNvblNjaGVtYURlZmluaXRpb247XHJcbiAgJHJlcXVpcmVkPzogYm9vbGVhbjtcclxuICAkbm9TZXBhcmF0b3I/OiBib29sZWFuO1xyXG4gICRzdGVwPzogbnVtYmVyOyAvLyByYW5nZSBzbGlkZXIgc3RlcHNcclxuICAkcGFyZW50Rm9ybT86IElGb3JtT3ZlcnJpZGU7XHJcbiAgJGVudW0/OiBhbnk7XHJcbiAgJG9uQ2hhbmdlPzogT1JDaGFuZ2VDYWxsYmFjaztcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBPUlR5cGVzID1cclxuICBJRm9ybU92ZXJyaWRlW10gfCBJRm9ybU92ZXJyaWRlIHwgT1JQcmltaXRpdmUgfCBJSnNvblNjaGVtYURlZmluaXRpb24gfCBJVGVtcGxhdGVFbGVtZW50W10gfCBPUkNoYW5nZUNhbGxiYWNrO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE9SUHJpbWl0aXZlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBPUkNoYW5nZUNhbGxiYWNrID0gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4gdm9pZDtcclxuXHJcbmNvbnN0IG92ZXJyaWRlTWFya2VyOiBzdHJpbmcgPSAnJCc7XHJcbmV4cG9ydCBmdW5jdGlvbiBpc092ZXJyaWRlKGtleTogc3RyaW5nKSB7XHJcbiAgY29uc3QgdmFsID0ga2V5LmNoYXJBdCgwKSA9PT0gb3ZlcnJpZGVNYXJrZXI7XHJcblxyXG4gIGdldExvZ2dlcignYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtJylcclxuICAgIC5pbmZvKCdpc092ZXJyaWRlJywgeyBrZXksIHZhbCB9KTtcclxuICByZXR1cm4gdmFsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9ybU92ZXJyaWRlcyhcclxuICBmb3JtOiBJRm9ybU92ZXJyaWRlLCBwYXJlbnRTY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvblxyXG4pIHtcclxuICBnZXRMb2dnZXIoJ2F1cmVsaWEtanNvbi1zY2hlbWEtZm9ybScpXHJcbiAgICAuaW5mbygnc2V0Rm9ybU92ZXJyaWRlcycsIHsgZm9ybSwgcGFyZW50U2NoZW1hLCBmb3JtS2V5LCBzY2hlbWEgfSk7XHJcbiAgc2NoZW1hLnRpdGxlID0gc2NoZW1hLnRpdGxlIHx8ICghIWZvcm1LZXkgPyBmcm9tQ2FtZWxDYXNlKGZvcm1LZXkpIDogdW5kZWZpbmVkKTtcclxuICBmb3JtLiRzY2hlbWEgPSBzY2hlbWE7XHJcbiAgaWYgKGZvcm0uJGVudW0pIHtcclxuICAgIGZvcm0uJHNjaGVtYS5lbnVtID0gZm9ybS4kZW51bTtcclxuICB9XHJcblxyXG4gIGlmIChwYXJlbnRTY2hlbWEgJiYgcGFyZW50U2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICBmb3JtLiRyZXF1aXJlZCA9IGZvcm0uJHJlcXVpcmVkIHx8IChwYXJlbnRTY2hlbWEucmVxdWlyZWRcclxuICAgICAgPyAocGFyZW50U2NoZW1hIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikucmVxdWlyZWQuaW5kZXhPZihmb3JtS2V5KSA+IC0xIDogZmFsc2UpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNhbWVsQ2FzZSh2YWw6IHN0cmluZykge1xyXG4gIHJldHVybiB2YWxcclxuICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csICcgJDEnKVxyXG4gICAgLnJlcGxhY2UoL14uLywgKHN0cikgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG4vKiogVXNlZCB0byBkZWNsYXJlIGEgY29tcGxldGVseSBzZXBhcmF0ZSBtb2R1bGUgdGhhdCBkb2VzXHJcbiAqIG5vdCBwZXJmb3JtIHN0YW5kYXJkIHZhbGlkYXRpb24sIGltcGxlbWVudCB2aWV3L3ZpZXctbW9kZWwgaG93ZXZlciB5b3Ugd2FudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlRWxlbWVudCB7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIHRlbXBsYXRlLCBtYWtlIHN1cmUgeW91IGhhdmUgYWRkZWQgaXQncyBtb2R1bGVOYW1lIHRvIGdsb2JhbFJlc291cmNlcyAqL1xyXG4gIGVsZW1lbnROYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKiB0aGUgc2NoZW1hJ3Mga2V5IHRvIHBhcnNlLCBiaW5kcyBmb3JtICh0by12aWV3KSBhbmQgbW9kZWwodHdvLXdheSkgdG8geW91ciBtb2R1bGVcclxuICAgKiBAcHJvcGVydHkgSWYgc2NoZW1hS2V5IGlzIHNwZWNpZmllZCwgeW91ciBtb2R1bGUgbXVzdCBoYXZlOlxyXG4gICAqICAgYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb247XHJcbiAgICogICBiaW5kYWJsZSBtb2RlbDogYW55IG9yIG1vZGVsIHR5cGU7XHJcbiAgICogICBJZiBzY2hlbWFLZXkgaXMgb21taXR0ZWQsIG5vIGJpbmRpbmdzIGFyZSBtYWRlXHJcbiAgICovXHJcbiAgc2NoZW1hS2V5Pzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCB0ZW1wbGF0ZU1vZHVsZU1hcmtlcjogc3RyaW5nID0gJ19lbGVtZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RlbXBsYXRlTW9kdWxlKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGtleSA9PT0gdGVtcGxhdGVNb2R1bGVNYXJrZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
