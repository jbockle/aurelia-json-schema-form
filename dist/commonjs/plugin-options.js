"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var bootstrap_validation_renderer_1 = require("./renderers/bootstrap-validation-renderer");
var PluginOptions = /** @class */ (function () {
    function PluginOptions() {
        /**
         * @property modifies DOM to display error/success states
         * @default BootstrapValidationRenderer "targets Bootstrap v4"
         */
        this.validationRenderer = new bootstrap_validation_renderer_1.BootstrapValidationRenderer();
        /**
         * @property global validation message overrides, choose which messages you want to override (default)
         * @default empty "use validator's default message"
         */
        this.validationMessages = {};
        /**
         * @property sets the log level (available values from LogManager.logLevel)
         * @default none "only initialization is logged"
         */
        this.logLevel = aurelia_framework_1.LogManager.logLevel.none;
        this.templates = {
            boolean: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-boolean.html'),
            number: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-number.html'),
            numberRange: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-number-range.html'),
            string: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string.html'),
            stringRadioEnum: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string-radio-enum.html'),
            stringSelectEnum: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string-select-enum.html'),
            object: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-object.html'),
            array: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array.html'),
            arrayTabs: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array-tabs.html'),
            arrayStringEnum: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array-string-enum.html')
        };
    }
    return PluginOptions;
}());
exports.PluginOptions = PluginOptions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsdURBQXlEO0FBQ3pELDJGQUF3RjtBQUd4RjtJQXlCRTtRQXhCQTs7O1dBR0c7UUFDSCx1QkFBa0IsR0FBdUIsSUFBSSwyREFBMkIsRUFBRSxDQUFDO1FBUTNFOzs7V0FHRztRQUNILHVCQUFrQixHQUF3QixFQUFFLENBQUM7UUFFN0M7OztXQUdHO1FBQ0gsYUFBUSxHQUFXLDhCQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUcxQyxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsT0FBTyxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLGdEQUFnRCxDQUFDO1lBQzlFLE1BQU0sRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQywrQ0FBK0MsQ0FBQztZQUM1RSxXQUFXLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMscURBQXFELENBQUM7WUFDdkYsTUFBTSxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDO1lBQzVFLGVBQWUsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQywwREFBMEQsQ0FBQztZQUNoRyxnQkFBZ0IsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQywyREFBMkQsQ0FBQztZQUNsRyxNQUFNLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUM7WUFDNUUsS0FBSyxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLDhDQUE4QyxDQUFDO1lBQzFFLFNBQVMsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxtREFBbUQsQ0FBQztZQUNuRixlQUFlLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMERBQTBELENBQUM7U0FDakcsQ0FBQztJQUNKLENBQUM7SUFDSCxvQkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF2Q1ksc0NBQWEiLCJmaWxlIjoicGx1Z2luLW9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBJVGVtcGxhdGVzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3RlbXBsYXRlcyc7XHJcbmltcG9ydCB7IExvZ01hbmFnZXIsIFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlcic7XHJcbmltcG9ydCB7IElWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tICcuL2ludGVyZmFjZXMvdmFsaWRhdGlvbi1tZXNzYWdlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGx1Z2luT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IG1vZGlmaWVzIERPTSB0byBkaXNwbGF5IGVycm9yL3N1Y2Nlc3Mgc3RhdGVzXHJcbiAgICogQGRlZmF1bHQgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIFwidGFyZ2V0cyBCb290c3RyYXAgdjRcIlxyXG4gICAqL1xyXG4gIHZhbGlkYXRpb25SZW5kZXJlcjogVmFsaWRhdGlvblJlbmRlcmVyID0gbmV3IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgZGVmaW5lcyBtb2R1bGVOYW1lcyBvZiBmb3JtIGVsZW1lbnRzXHJcbiAgICogQGRlZmF1bHQgYm9vdHN0cmFwNCBcInByZS1kZWZpbmVkIGN1c3RvbSBlbGVtZW50c1wiXHJcbiAgICovXHJcbiAgdGVtcGxhdGVzOiBJVGVtcGxhdGVzO1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgZ2xvYmFsIHZhbGlkYXRpb24gbWVzc2FnZSBvdmVycmlkZXMsIGNob29zZSB3aGljaCBtZXNzYWdlcyB5b3Ugd2FudCB0byBvdmVycmlkZSAoZGVmYXVsdClcclxuICAgKiBAZGVmYXVsdCBlbXB0eSBcInVzZSB2YWxpZGF0b3IncyBkZWZhdWx0IG1lc3NhZ2VcIlxyXG4gICAqL1xyXG4gIHZhbGlkYXRpb25NZXNzYWdlczogSVZhbGlkYXRpb25NZXNzYWdlcyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgc2V0cyB0aGUgbG9nIGxldmVsIChhdmFpbGFibGUgdmFsdWVzIGZyb20gTG9nTWFuYWdlci5sb2dMZXZlbClcclxuICAgKiBAZGVmYXVsdCBub25lIFwib25seSBpbml0aWFsaXphdGlvbiBpcyBsb2dnZWRcIlxyXG4gICAqL1xyXG4gIGxvZ0xldmVsOiBudW1iZXIgPSBMb2dNYW5hZ2VyLmxvZ0xldmVsLm5vbmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSB7XHJcbiAgICAgIGJvb2xlYW46IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1ib29sZWFuLmh0bWwnKSxcclxuICAgICAgbnVtYmVyOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtbnVtYmVyLmh0bWwnKSxcclxuICAgICAgbnVtYmVyUmFuZ2U6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1udW1iZXItcmFuZ2UuaHRtbCcpLFxyXG4gICAgICBzdHJpbmc6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1zdHJpbmcuaHRtbCcpLFxyXG4gICAgICBzdHJpbmdSYWRpb0VudW06IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1zdHJpbmctcmFkaW8tZW51bS5odG1sJyksXHJcbiAgICAgIHN0cmluZ1NlbGVjdEVudW06IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1zdHJpbmctc2VsZWN0LWVudW0uaHRtbCcpLFxyXG4gICAgICBvYmplY3Q6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1vYmplY3QuaHRtbCcpLFxyXG4gICAgICBhcnJheTogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWFycmF5Lmh0bWwnKSxcclxuICAgICAgYXJyYXlUYWJzOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtYXJyYXktdGFicy5odG1sJyksXHJcbiAgICAgIGFycmF5U3RyaW5nRW51bTogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWFycmF5LXN0cmluZy1lbnVtLmh0bWwnKVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
