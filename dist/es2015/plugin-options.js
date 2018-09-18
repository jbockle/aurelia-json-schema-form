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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHeEYsTUFBTSxPQUFPLGFBQWE7SUF5QnhCO1FBeEJBOzs7V0FHRztRQUNILHVCQUFrQixHQUF1QixJQUFJLDJCQUEyQixFQUFFLENBQUM7UUFRM0U7OztXQUdHO1FBQ0gsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztRQUU3Qzs7O1dBR0c7UUFDSCxhQUFRLEdBQVcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFHMUMsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLGdEQUFnRCxDQUFDO1lBQzlFLE1BQU0sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDO1lBQzVFLFdBQVcsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLHFEQUFxRCxDQUFDO1lBQ3ZGLE1BQU0sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDO1lBQzVFLGVBQWUsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLDBEQUEwRCxDQUFDO1lBQ2hHLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsMkRBQTJELENBQUM7WUFDbEcsTUFBTSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUM7WUFDNUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsOENBQThDLENBQUM7WUFDMUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsbURBQW1ELENBQUM7WUFDbkYsZUFBZSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsMERBQTBELENBQUM7U0FDakcsQ0FBQztJQUNKLENBQUM7Q0FDRiIsImZpbGUiOiJwbHVnaW4tb3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBJVGVtcGxhdGVzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBMb2dNYW5hZ2VyLCBQTEFURk9STSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyJztcbmltcG9ydCB7IElWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tICcuL2ludGVyZmFjZXMvdmFsaWRhdGlvbi1tZXNzYWdlcyc7XG5cbmV4cG9ydCBjbGFzcyBQbHVnaW5PcHRpb25zIHtcbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBtb2RpZmllcyBET00gdG8gZGlzcGxheSBlcnJvci9zdWNjZXNzIHN0YXRlc1xuICAgKiBAZGVmYXVsdCBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgXCJ0YXJnZXRzIEJvb3RzdHJhcCB2NFwiXG4gICAqL1xuICB2YWxpZGF0aW9uUmVuZGVyZXI6IFZhbGlkYXRpb25SZW5kZXJlciA9IG5ldyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIoKTtcblxuICAvKipcbiAgICogQHByb3BlcnR5IGRlZmluZXMgbW9kdWxlTmFtZXMgb2YgZm9ybSBlbGVtZW50c1xuICAgKiBAZGVmYXVsdCBib290c3RyYXA0IFwicHJlLWRlZmluZWQgY3VzdG9tIGVsZW1lbnRzXCJcbiAgICovXG4gIHRlbXBsYXRlczogSVRlbXBsYXRlcztcblxuICAvKipcbiAgICogQHByb3BlcnR5IGdsb2JhbCB2YWxpZGF0aW9uIG1lc3NhZ2Ugb3ZlcnJpZGVzLCBjaG9vc2Ugd2hpY2ggbWVzc2FnZXMgeW91IHdhbnQgdG8gb3ZlcnJpZGUgKGRlZmF1bHQpXG4gICAqIEBkZWZhdWx0IGVtcHR5IFwidXNlIHZhbGlkYXRvcidzIGRlZmF1bHQgbWVzc2FnZVwiXG4gICAqL1xuICB2YWxpZGF0aW9uTWVzc2FnZXM6IElWYWxpZGF0aW9uTWVzc2FnZXMgPSB7fTtcblxuICAvKipcbiAgICogQHByb3BlcnR5IHNldHMgdGhlIGxvZyBsZXZlbCAoYXZhaWxhYmxlIHZhbHVlcyBmcm9tIExvZ01hbmFnZXIubG9nTGV2ZWwpXG4gICAqIEBkZWZhdWx0IG5vbmUgXCJvbmx5IGluaXRpYWxpemF0aW9uIGlzIGxvZ2dlZFwiXG4gICAqL1xuICBsb2dMZXZlbDogbnVtYmVyID0gTG9nTWFuYWdlci5sb2dMZXZlbC5ub25lO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGVtcGxhdGVzID0ge1xuICAgICAgYm9vbGVhbjogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWJvb2xlYW4uaHRtbCcpLFxuICAgICAgbnVtYmVyOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtbnVtYmVyLmh0bWwnKSxcbiAgICAgIG51bWJlclJhbmdlOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtbnVtYmVyLXJhbmdlLmh0bWwnKSxcbiAgICAgIHN0cmluZzogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LXN0cmluZy5odG1sJyksXG4gICAgICBzdHJpbmdSYWRpb0VudW06IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1zdHJpbmctcmFkaW8tZW51bS5odG1sJyksXG4gICAgICBzdHJpbmdTZWxlY3RFbnVtOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtc3RyaW5nLXNlbGVjdC1lbnVtLmh0bWwnKSxcbiAgICAgIG9iamVjdDogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LW9iamVjdC5odG1sJyksXG4gICAgICBhcnJheTogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWFycmF5Lmh0bWwnKSxcbiAgICAgIGFycmF5VGFiczogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWFycmF5LXRhYnMuaHRtbCcpLFxuICAgICAgYXJyYXlTdHJpbmdFbnVtOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtYXJyYXktc3RyaW5nLWVudW0uaHRtbCcpXG4gICAgfTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
