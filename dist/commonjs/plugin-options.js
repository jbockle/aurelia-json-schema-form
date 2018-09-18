"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_json_schema_form_1 = require("./aurelia-json-schema-form");
var aurelia_framework_1 = require("aurelia-framework");
var bootstrap4_1 = require("./templates/bootstrap4");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdUVBQThGO0FBRTlGLHVEQUErQztBQUMvQyxxREFBK0Q7QUFFL0Q7SUF5QkU7UUF4QkE7OztXQUdHO1FBQ0gsdUJBQWtCLEdBQXVCLElBQUksc0RBQTJCLEVBQUUsQ0FBQztRQVEzRTs7O1dBR0c7UUFDSCx1QkFBa0IsR0FBd0IsRUFBRSxDQUFDO1FBRTdDOzs7V0FHRztRQUNILGFBQVEsR0FBVyw4QkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFHMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQ0FBcUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFDSCxvQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1Qlksc0NBQWEiLCJmaWxlIjoicGx1Z2luLW9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyLCBJVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSAnLi9hdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0nO1xuaW1wb3J0IHsgSVRlbXBsYXRlcyB9IGZyb20gJy4vaW50ZXJmYWNlcy90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgTG9nTWFuYWdlciB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEdldEJvb3RzdHJhcFRlbXBsYXRlcyB9IGZyb20gJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQnO1xuXG5leHBvcnQgY2xhc3MgUGx1Z2luT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBAcHJvcGVydHkgbW9kaWZpZXMgRE9NIHRvIGRpc3BsYXkgZXJyb3Ivc3VjY2VzcyBzdGF0ZXNcbiAgICogQGRlZmF1bHQgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIFwidGFyZ2V0cyBCb290c3RyYXAgdjRcIlxuICAgKi9cbiAgdmFsaWRhdGlvblJlbmRlcmVyOiBWYWxpZGF0aW9uUmVuZGVyZXIgPSBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyKCk7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBkZWZpbmVzIG1vZHVsZU5hbWVzIG9mIGZvcm0gZWxlbWVudHNcbiAgICogQGRlZmF1bHQgYm9vdHN0cmFwNCBcInByZS1kZWZpbmVkIGN1c3RvbSBlbGVtZW50c1wiXG4gICAqL1xuICB0ZW1wbGF0ZXM6IElUZW1wbGF0ZXM7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBnbG9iYWwgdmFsaWRhdGlvbiBtZXNzYWdlIG92ZXJyaWRlcywgY2hvb3NlIHdoaWNoIG1lc3NhZ2VzIHlvdSB3YW50IHRvIG92ZXJyaWRlIChkZWZhdWx0KVxuICAgKiBAZGVmYXVsdCBlbXB0eSBcInVzZSB2YWxpZGF0b3IncyBkZWZhdWx0IG1lc3NhZ2VcIlxuICAgKi9cbiAgdmFsaWRhdGlvbk1lc3NhZ2VzOiBJVmFsaWRhdGlvbk1lc3NhZ2VzID0ge307XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBzZXRzIHRoZSBsb2cgbGV2ZWwgKGF2YWlsYWJsZSB2YWx1ZXMgZnJvbSBMb2dNYW5hZ2VyLmxvZ0xldmVsKVxuICAgKiBAZGVmYXVsdCBub25lIFwib25seSBpbml0aWFsaXphdGlvbiBpcyBsb2dnZWRcIlxuICAgKi9cbiAgbG9nTGV2ZWw6IG51bWJlciA9IExvZ01hbmFnZXIubG9nTGV2ZWwubm9uZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRlbXBsYXRlcyA9IEdldEJvb3RzdHJhcFRlbXBsYXRlcygpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
