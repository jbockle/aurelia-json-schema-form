import { LogManager, PLATFORM } from 'aurelia-framework';
import { BootstrapValidationRenderer } from './renderers/bootstrap-validation-renderer';
export class PluginOptions {
    constructor() {
        /**
         * @property modifies DOM to display error/success states
         * @default BootstrapValidationRenderer "targets Bootstrap v4"
         */
        this.validationRenderer = new BootstrapValidationRenderer();
        /**
         * @property global validation message overrides, choose which messages you want to override (default)
         * @default empty "use validator's default message"
         */
        this.validationMessages = {};
        /**
         * @property sets the log level (available values from LogManager.logLevel)
         * @default none "only initialization is logged"
         */
        this.logLevel = LogManager.logLevel.none;
        this.templates = {
            boolean: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-boolean.html'),
            number: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-number.html'),
            numberRange: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-number-range.html'),
            string: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string.html'),
            stringRadioEnum: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string-radio-enum.html'),
            stringSelectEnum: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string-select-enum.html'),
            object: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-object.html'),
            array: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array.html'),
            arrayTabs: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array-tabs.html'),
            arrayStringEnum: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array-string-enum.html')
        };
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHeEYsTUFBTSxPQUFPLGFBQWE7SUF5QnhCO1FBeEJBOzs7V0FHRztRQUNILHVCQUFrQixHQUF1QixJQUFJLDJCQUEyQixFQUFFLENBQUM7UUFRM0U7OztXQUdHO1FBQ0gsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztRQUU3Qzs7O1dBR0c7UUFDSCxhQUFRLEdBQVcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFHMUMsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLGdEQUFnRCxDQUFDO1lBQzlFLE1BQU0sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDO1lBQzVFLFdBQVcsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLHFEQUFxRCxDQUFDO1lBQ3ZGLE1BQU0sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDO1lBQzVFLGVBQWUsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLDBEQUEwRCxDQUFDO1lBQ2hHLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsMkRBQTJELENBQUM7WUFDbEcsTUFBTSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUM7WUFDNUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsOENBQThDLENBQUM7WUFDMUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsbURBQW1ELENBQUM7WUFDbkYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsMERBQTBELENBQUM7U0FDakcsQ0FBQztJQUNKLENBQUM7Q0FDRiIsImZpbGUiOiJwbHVnaW4tb3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcbmltcG9ydCB7IElUZW1wbGF0ZXMgfSBmcm9tICcuL2ludGVyZmFjZXMvdGVtcGxhdGVzJztcclxuaW1wb3J0IHsgTG9nTWFuYWdlciwgUExBVEZPUk0gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyJztcclxuaW1wb3J0IHsgSVZhbGlkYXRpb25NZXNzYWdlcyB9IGZyb20gJy4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbHVnaW5PcHRpb25zIHtcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgbW9kaWZpZXMgRE9NIHRvIGRpc3BsYXkgZXJyb3Ivc3VjY2VzcyBzdGF0ZXNcclxuICAgKiBAZGVmYXVsdCBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgXCJ0YXJnZXRzIEJvb3RzdHJhcCB2NFwiXHJcbiAgICovXHJcbiAgdmFsaWRhdGlvblJlbmRlcmVyOiBWYWxpZGF0aW9uUmVuZGVyZXIgPSBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBkZWZpbmVzIG1vZHVsZU5hbWVzIG9mIGZvcm0gZWxlbWVudHNcclxuICAgKiBAZGVmYXVsdCBib290c3RyYXA0IFwicHJlLWRlZmluZWQgY3VzdG9tIGVsZW1lbnRzXCJcclxuICAgKi9cclxuICB0ZW1wbGF0ZXM6IElUZW1wbGF0ZXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBnbG9iYWwgdmFsaWRhdGlvbiBtZXNzYWdlIG92ZXJyaWRlcywgY2hvb3NlIHdoaWNoIG1lc3NhZ2VzIHlvdSB3YW50IHRvIG92ZXJyaWRlIChkZWZhdWx0KVxyXG4gICAqIEBkZWZhdWx0IGVtcHR5IFwidXNlIHZhbGlkYXRvcidzIGRlZmF1bHQgbWVzc2FnZVwiXHJcbiAgICovXHJcbiAgdmFsaWRhdGlvbk1lc3NhZ2VzOiBJVmFsaWRhdGlvbk1lc3NhZ2VzID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBzZXRzIHRoZSBsb2cgbGV2ZWwgKGF2YWlsYWJsZSB2YWx1ZXMgZnJvbSBMb2dNYW5hZ2VyLmxvZ0xldmVsKVxyXG4gICAqIEBkZWZhdWx0IG5vbmUgXCJvbmx5IGluaXRpYWxpemF0aW9uIGlzIGxvZ2dlZFwiXHJcbiAgICovXHJcbiAgbG9nTGV2ZWw6IG51bWJlciA9IExvZ01hbmFnZXIubG9nTGV2ZWwubm9uZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRlbXBsYXRlcyA9IHtcclxuICAgICAgYm9vbGVhbjogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWJvb2xlYW4uaHRtbCcpLFxyXG4gICAgICBudW1iZXI6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1udW1iZXIuaHRtbCcpLFxyXG4gICAgICBudW1iZXJSYW5nZTogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LW51bWJlci1yYW5nZS5odG1sJyksXHJcbiAgICAgIHN0cmluZzogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LXN0cmluZy5odG1sJyksXHJcbiAgICAgIHN0cmluZ1JhZGlvRW51bTogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LXN0cmluZy1yYWRpby1lbnVtLmh0bWwnKSxcclxuICAgICAgc3RyaW5nU2VsZWN0RW51bTogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LXN0cmluZy1zZWxlY3QtZW51bS5odG1sJyksXHJcbiAgICAgIG9iamVjdDogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LW9iamVjdC5odG1sJyksXHJcbiAgICAgIGFycmF5OiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtYXJyYXkuaHRtbCcpLFxyXG4gICAgICBhcnJheVRhYnM6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1hcnJheS10YWJzLmh0bWwnKSxcclxuICAgICAgYXJyYXlTdHJpbmdFbnVtOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtYXJyYXktc3RyaW5nLWVudW0uaHRtbCcpXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
