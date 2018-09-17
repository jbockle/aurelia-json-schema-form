"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_rules_1 = require("./rules/common-rules");
exports.CommonRules = common_rules_1.CommonRules;
var number_rules_1 = require("./rules/number-rules");
exports.NumberRules = number_rules_1.NumberRules;
var array_rules_1 = require("./rules/array-rules");
exports.ArrayRules = array_rules_1.ArrayRules;
var string_rules_1 = require("./rules/string-rules");
exports.StringRules = string_rules_1.StringRules;
var form_instances_1 = require("./services/form-instances");
exports.FormInstances = form_instances_1.FormInstances;
require("./resources/number");
var bootstrap_validation_renderer_1 = require("./renderers/bootstrap-validation-renderer");
exports.BootstrapValidationRenderer = bootstrap_validation_renderer_1.BootstrapValidationRenderer;
var schema_form_configuration_1 = require("./services/schema-form-configuration");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_logging_1 = require("aurelia-logging");
var logger_1 = require("./resources/logger");
var index_1 = require("./templates/bootstrap4/index");
var au_json_schema_form_1 = require("./form/au-json-schema-form");
exports.AuJsonSchemaForm = au_json_schema_form_1.AuJsonSchemaForm;
var rules_factory_1 = require("./rules/rules-factory");
exports.RulesFactory = rules_factory_1.RulesFactory;
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
        this.templates = index_1.GetBootstrapTemplates();
    }
    return PluginOptions;
}());
exports.PluginOptions = PluginOptions;
function configure(frameworkConfig, callback) {
    var logger = aurelia_logging_1.getLogger("aurelia-json-schema-form");
    logger.info("initializing aurelia-json-schema-form");
    // create defaults/apply user defined configuration
    var options = new PluginOptions();
    if (callback instanceof Function) {
        callback(options);
    }
    registerLogger(logger, options, frameworkConfig);
    registerConfiguration(logger, options, frameworkConfig);
    frameworkConfig.container.get(rules_factory_1.RulesFactory).register();
    frameworkConfig.globalResources([
        aurelia_framework_1.PLATFORM.moduleName("./form/au-json-schema-form"),
        aurelia_framework_1.PLATFORM.moduleName("./value-converters/number-value-converter"),
        aurelia_framework_1.PLATFORM.moduleName("./form/array/sf-array"),
        aurelia_framework_1.PLATFORM.moduleName("./form/object/sf-object"),
        aurelia_framework_1.PLATFORM.moduleName("./form/number/sf-number"),
        aurelia_framework_1.PLATFORM.moduleName("./form/text/sf-string"),
        aurelia_framework_1.PLATFORM.moduleName("./form/boolean/sf-boolean"),
        aurelia_framework_1.PLATFORM.moduleName("./templates/bootstrap4/bootstrap-tooltip")
    ]);
}
exports.configure = configure;
function registerLogger(logger, options, frameworkConfig) {
    logger.setLevel(options.logLevel);
    frameworkConfig.container.registerInstance(logger_1.SchemaFormLogger, logger);
    logger.info("registered logger");
}
function registerConfiguration(logger, options, frameworkConfig) {
    var configuration = new schema_form_configuration_1.SchemaFormConfiguration(options.validationRenderer, options.templates, options.validationMessages);
    frameworkConfig.container.registerInstance(schema_form_configuration_1.SchemaFormConfiguration, configuration);
    logger.info("registered configuration", configuration);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUN0QixlQUF1QztJQUV2QyxJQUFNLGFBQWEsR0FBRyxJQUFJLG1EQUF1QixDQUMvQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUU3RSxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLG1EQUF1QixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRW5GLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDekQsQ0FBQyIsImZpbGUiOiJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25SdWxlcyB9IGZyb20gXCIuL3J1bGVzL2NvbW1vbi1ydWxlc1wiO1xyXG5pbXBvcnQgeyBOdW1iZXJSdWxlcyB9IGZyb20gXCIuL3J1bGVzL251bWJlci1ydWxlc1wiO1xyXG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSBcIi4vcnVsZXMvYXJyYXktcnVsZXNcIjtcclxuaW1wb3J0IHsgU3RyaW5nUnVsZXMgfSBmcm9tIFwiLi9ydWxlcy9zdHJpbmctcnVsZXNcIjtcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gXCIuL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcclxuaW1wb3J0IFwiLi9yZXNvdXJjZXMvbnVtYmVyXCI7XHJcbmltcG9ydCB7IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gXCIuL3JlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgUExBVEZPUk0sIExvZ01hbmFnZXIgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tIFwiYXVyZWxpYS1sb2dnaW5nXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IElUZW1wbGF0ZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RlbXBsYXRlc1wiO1xyXG5pbXBvcnQgeyBHZXRCb290c3RyYXBUZW1wbGF0ZXMgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbmRleFwiO1xyXG5pbXBvcnQgeyBJVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XHJcbmltcG9ydCB7IEF1SnNvblNjaGVtYUZvcm0gfSBmcm9tIFwiLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm1cIjtcclxuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xyXG5pbXBvcnQge1xyXG4gIElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uLFxyXG4gIElKc29uU2NoZW1hU3RyaW5nRGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uXHJcbn0gZnJvbSBcIi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUsIElUZW1wbGF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcclxuXHJcbmNsYXNzIFBsdWdpbk9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBtb2RpZmllcyBET00gdG8gZGlzcGxheSBlcnJvci9zdWNjZXNzIHN0YXRlcyBcclxuICAgKiBAZGVmYXVsdCBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgXCJ0YXJnZXRzIEJvb3RzdHJhcCB2NFwiXHJcbiAgICovXHJcbiAgdmFsaWRhdGlvblJlbmRlcmVyOiBWYWxpZGF0aW9uUmVuZGVyZXIgPSBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBkZWZpbmVzIG1vZHVsZU5hbWVzIG9mIGZvcm0gZWxlbWVudHMgXHJcbiAgICogQGRlZmF1bHQgYm9vdHN0cmFwNCBcInByZS1kZWZpbmVkIGN1c3RvbSBlbGVtZW50c1wiXHJcbiAgICovXHJcbiAgdGVtcGxhdGVzOiBJVGVtcGxhdGVzO1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgZ2xvYmFsIHZhbGlkYXRpb24gbWVzc2FnZSBvdmVycmlkZXMsIGNob29zZSB3aGljaCBtZXNzYWdlcyB5b3Ugd2FudCB0byBvdmVycmlkZSAoZGVmYXVsdClcclxuICAgKiBAZGVmYXVsdCBlbXB0eSBcInVzZSB2YWxpZGF0b3IncyBkZWZhdWx0IG1lc3NhZ2VcIlxyXG4gICAqL1xyXG4gIHZhbGlkYXRpb25NZXNzYWdlczogSVZhbGlkYXRpb25NZXNzYWdlcyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgc2V0cyB0aGUgbG9nIGxldmVsIChhdmFpbGFibGUgdmFsdWVzIGZyb20gTG9nTWFuYWdlci5sb2dMZXZlbClcclxuICAgKiBAZGVmYXVsdCBub25lIFwib25seSBpbml0aWFsaXphdGlvbiBpcyBsb2dnZWRcIlxyXG4gICAqL1xyXG4gIGxvZ0xldmVsOiBudW1iZXIgPSBMb2dNYW5hZ2VyLmxvZ0xldmVsLm5vbmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBHZXRCb290c3RyYXBUZW1wbGF0ZXMoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIGNhbGxiYWNrPzogKGNvbmZpZzogUGx1Z2luT3B0aW9ucykgPT4gdm9pZCkge1xyXG5cclxuICBjb25zdCBsb2dnZXIgPSBnZXRMb2dnZXIoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIik7XHJcblxyXG4gIGxvZ2dlci5pbmZvKFwiaW5pdGlhbGl6aW5nIGF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKTtcclxuXHJcbiAgLy8gY3JlYXRlIGRlZmF1bHRzL2FwcGx5IHVzZXIgZGVmaW5lZCBjb25maWd1cmF0aW9uXHJcbiAgY29uc3Qgb3B0aW9ucyA9IG5ldyBQbHVnaW5PcHRpb25zKCk7XHJcbiAgaWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgIGNhbGxiYWNrKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJMb2dnZXIobG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xyXG5cclxuICByZWdpc3RlckNvbmZpZ3VyYXRpb24obG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xyXG5cclxuICAoZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5nZXQoUnVsZXNGYWN0b3J5KSBhcyBSdWxlc0ZhY3RvcnkpLnJlZ2lzdGVyKCk7XHJcblxyXG4gIGZyYW1ld29ya0NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1xyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtXCIpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vdmFsdWUtY29udmVydGVycy9udW1iZXItdmFsdWUtY29udmVydGVyXCIpLFxyXG5cclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXJyYXkvc2YtYXJyYXlcIiksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL29iamVjdC9zZi1vYmplY3RcIiksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL251bWJlci9zZi1udW1iZXJcIiksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL3RleHQvc2Ytc3RyaW5nXCIpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9ib29sZWFuL3NmLWJvb2xlYW5cIiksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcFwiKVxyXG4gIF0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJMb2dnZXIoXHJcbiAgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXHJcbiAgZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uXHJcbikge1xyXG4gIGxvZ2dlci5zZXRMZXZlbChvcHRpb25zLmxvZ0xldmVsKTtcclxuXHJcbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Mb2dnZXIsIGxvZ2dlcik7XHJcblxyXG4gIGxvZ2dlci5pbmZvKFwicmVnaXN0ZXJlZCBsb2dnZXJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihcclxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgb3B0aW9uczogUGx1Z2luT3B0aW9ucyxcclxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cclxuKSB7XHJcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbihcclxuICAgIG9wdGlvbnMudmFsaWRhdGlvblJlbmRlcmVyLCBvcHRpb25zLnRlbXBsYXRlcywgb3B0aW9ucy52YWxpZGF0aW9uTWVzc2FnZXMpO1xyXG5cclxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICBsb2dnZXIuaW5mbyhcInJlZ2lzdGVyZWQgY29uZmlndXJhdGlvblwiLCBjb25maWd1cmF0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjb25maWd1cmUsXHJcbiAgSVRlbXBsYXRlcyxcclxuICBJVmFsaWRhdGlvbk1lc3NhZ2VzLFxyXG4gIFBsdWdpbk9wdGlvbnMsXHJcbiAgSUZvcm1PcHRpb25zLFxyXG4gIEF1SnNvblNjaGVtYUZvcm0sXHJcbiAgSUZvcm1PdmVycmlkZSxcclxuICBJRm9ybUluc3RhbmNlLFxyXG4gIEZvcm1JbnN0YW5jZXMsXHJcbiAgSVRlbXBsYXRlRWxlbWVudCxcclxuICBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLFxyXG4gIElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYVN0cmluZ0RlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbixcclxuICBSdWxlc0ZhY3RvcnksXHJcbiAgU3RyaW5nUnVsZXMsXHJcbiAgQXJyYXlSdWxlcyxcclxuICBOdW1iZXJSdWxlcyxcclxuICBDb21tb25SdWxlcyxcclxuICBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXJcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
