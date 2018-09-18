define(["require", "exports", "./aurelia-json-schema-form", "aurelia-framework", "./templates/bootstrap4"], function (require, exports, aurelia_json_schema_form_1, aurelia_framework_1, bootstrap4_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PluginOptions = /** @class */ (function () {
        function PluginOptions() {
            /**
             * @property modifies DOM to display error/success states
             * @default BootstrapValidationRenderer "targets Bootstrap v4"
             */
            this.validationRenderer = new aurelia_json_schema_form_1.BootstrapValidationRenderer();
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
            this.templates = bootstrap4_1.GetBootstrapTemplates();
        }
        return PluginOptions;
    }());
    exports.PluginOptions = PluginOptions;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BO1FBeUJFO1lBeEJBOzs7ZUFHRztZQUNILHVCQUFrQixHQUF1QixJQUFJLHNEQUEyQixFQUFFLENBQUM7WUFRM0U7OztlQUdHO1lBQ0gsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztZQUU3Qzs7O2VBR0c7WUFDSCxhQUFRLEdBQVcsOEJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0NBQXFCLEVBQUUsQ0FBQztRQUMzQyxDQUFDO1FBQ0gsb0JBQUM7SUFBRCxDQTVCQSxBQTRCQyxJQUFBO0lBNUJZLHNDQUFhIiwiZmlsZSI6InBsdWdpbi1vcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcbmltcG9ydCB7IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciwgSVZhbGlkYXRpb25NZXNzYWdlcyB9IGZyb20gJy4vYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtJztcbmltcG9ydCB7IElUZW1wbGF0ZXMgfSBmcm9tICcuL2ludGVyZmFjZXMvdGVtcGxhdGVzJztcbmltcG9ydCB7IExvZ01hbmFnZXIgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBHZXRCb290c3RyYXBUZW1wbGF0ZXMgfSBmcm9tICcuL3RlbXBsYXRlcy9ib290c3RyYXA0JztcblxuZXhwb3J0IGNsYXNzIFBsdWdpbk9wdGlvbnMge1xuICAvKipcbiAgICogQHByb3BlcnR5IG1vZGlmaWVzIERPTSB0byBkaXNwbGF5IGVycm9yL3N1Y2Nlc3Mgc3RhdGVzXG4gICAqIEBkZWZhdWx0IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciBcInRhcmdldHMgQm9vdHN0cmFwIHY0XCJcbiAgICovXG4gIHZhbGlkYXRpb25SZW5kZXJlcjogVmFsaWRhdGlvblJlbmRlcmVyID0gbmV3IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlcigpO1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgZGVmaW5lcyBtb2R1bGVOYW1lcyBvZiBmb3JtIGVsZW1lbnRzXG4gICAqIEBkZWZhdWx0IGJvb3RzdHJhcDQgXCJwcmUtZGVmaW5lZCBjdXN0b20gZWxlbWVudHNcIlxuICAgKi9cbiAgdGVtcGxhdGVzOiBJVGVtcGxhdGVzO1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgZ2xvYmFsIHZhbGlkYXRpb24gbWVzc2FnZSBvdmVycmlkZXMsIGNob29zZSB3aGljaCBtZXNzYWdlcyB5b3Ugd2FudCB0byBvdmVycmlkZSAoZGVmYXVsdClcbiAgICogQGRlZmF1bHQgZW1wdHkgXCJ1c2UgdmFsaWRhdG9yJ3MgZGVmYXVsdCBtZXNzYWdlXCJcbiAgICovXG4gIHZhbGlkYXRpb25NZXNzYWdlczogSVZhbGlkYXRpb25NZXNzYWdlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgc2V0cyB0aGUgbG9nIGxldmVsIChhdmFpbGFibGUgdmFsdWVzIGZyb20gTG9nTWFuYWdlci5sb2dMZXZlbClcbiAgICogQGRlZmF1bHQgbm9uZSBcIm9ubHkgaW5pdGlhbGl6YXRpb24gaXMgbG9nZ2VkXCJcbiAgICovXG4gIGxvZ0xldmVsOiBudW1iZXIgPSBMb2dNYW5hZ2VyLmxvZ0xldmVsLm5vbmU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBHZXRCb290c3RyYXBUZW1wbGF0ZXMoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
