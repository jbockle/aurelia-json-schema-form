import { CommonRules } from "./rules/common-rules";
import { NumberRules } from "./rules/number-rules";
import { ArrayRules } from "./rules/array-rules";
import { StringRules } from "./rules/string-rules";
import { FormInstances } from "./services/form-instances";
import "./resources/number";
import { BootstrapValidationRenderer } from "./renderers/bootstrap-validation-renderer";
import { SchemaFormConfiguration } from "./services/schema-form-configuration";
import { PLATFORM, LogManager } from "aurelia-framework";
import { getLogger } from "aurelia-logging";
import { SchemaFormLogger } from "./resources/logger";
import { GetBootstrapTemplates } from "./templates/bootstrap4/index";
import { AuJsonSchemaForm } from "./form/au-json-schema-form";
import { RulesFactory } from "./rules/rules-factory";
class PluginOptions {
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
        this.templates = GetBootstrapTemplates();
    }
}
function configure(frameworkConfig, callback) {
    const logger = getLogger("aurelia-json-schema-form");
    logger.info("initializing aurelia-json-schema-form");
    // create defaults/apply user defined configuration
    const options = new PluginOptions();
    if (callback instanceof Function) {
        callback(options);
    }
    registerLogger(logger, options, frameworkConfig);
    registerConfiguration(logger, options, frameworkConfig);
    frameworkConfig.container.get(RulesFactory).register();
    frameworkConfig.globalResources([
        PLATFORM.moduleName("./form/au-json-schema-form"),
        PLATFORM.moduleName("./value-converters/number-value-converter"),
        PLATFORM.moduleName("./form/array/sf-array"),
        PLATFORM.moduleName("./form/object/sf-object"),
        PLATFORM.moduleName("./form/number/sf-number"),
        PLATFORM.moduleName("./form/text/sf-string"),
        PLATFORM.moduleName("./form/boolean/sf-boolean"),
        PLATFORM.moduleName("./templates/bootstrap4/bootstrap-tooltip")
    ]);
}
function registerLogger(logger, options, frameworkConfig) {
    logger.setLevel(options.logLevel);
    frameworkConfig.container.registerInstance(SchemaFormLogger, logger);
    logger.info("registered logger");
}
function registerConfiguration(logger, options, frameworkConfig) {
    const configuration = new SchemaFormConfiguration(options.validationRenderer, options.templates, options.validationMessages);
    frameworkConfig.container.registerInstance(SchemaFormConfiguration, configuration);
    logger.info("registered configuration", configuration);
}
export { configure, PluginOptions, AuJsonSchemaForm, FormInstances, RulesFactory, StringRules, ArrayRules, NumberRules, CommonRules, BootstrapValidationRenderer };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUEwQixRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVdyRCxNQUFNLGFBQWE7SUF5QmpCO1FBeEJBOzs7V0FHRztRQUNILHVCQUFrQixHQUF1QixJQUFJLDJCQUEyQixFQUFFLENBQUM7UUFRM0U7OztXQUdHO1FBQ0gsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztRQUU3Qzs7O1dBR0c7UUFDSCxhQUFRLEdBQVcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFHMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQUVELFNBQVMsU0FBUyxDQUFDLGVBQXVDLEVBQUUsUUFBMEM7SUFFcEcsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFFckQsTUFBTSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBRXJELG1EQUFtRDtJQUNuRCxNQUFNLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ3BDLElBQUksUUFBUSxZQUFZLFFBQVEsRUFBRTtRQUNoQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbkI7SUFFRCxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztJQUVqRCxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRXZELGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUV6RSxlQUFlLENBQUMsZUFBZSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7UUFDakQsUUFBUSxDQUFDLFVBQVUsQ0FBQywyQ0FBMkMsQ0FBQztRQUVoRSxRQUFRLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1FBQzVDLFFBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7UUFDOUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztRQUM5QyxRQUFRLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1FBQzVDLFFBQVEsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7UUFDaEQsUUFBUSxDQUFDLFVBQVUsQ0FBQywwQ0FBMEMsQ0FBQztLQUNoRSxDQUFDLENBQUM7QUFFTCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQ3JCLE1BQXdCLEVBQ3hCLE9BQXNCLEVBQ3RCLGVBQXVDO0lBRXZDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWxDLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFckUsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFTLHFCQUFxQixDQUM1QixNQUF3QixFQUN4QixPQUFzQixFQUN0QixlQUF1QztJQUV2QyxNQUFNLGFBQWEsR0FBRyxJQUFJLHVCQUF1QixDQUMvQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUU3RSxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRW5GLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUVELE9BQU8sRUFDTCxTQUFTLEVBR1QsYUFBYSxFQUViLGdCQUFnQixFQUdoQixhQUFhLEVBUWIsWUFBWSxFQUNaLFdBQVcsRUFDWCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFdBQVcsRUFDWCwyQkFBMkIsRUFDNUIsQ0FBQyIsImZpbGUiOiJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25SdWxlcyB9IGZyb20gXCIuL3J1bGVzL2NvbW1vbi1ydWxlc1wiO1xyXG5pbXBvcnQgeyBOdW1iZXJSdWxlcyB9IGZyb20gXCIuL3J1bGVzL251bWJlci1ydWxlc1wiO1xyXG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSBcIi4vcnVsZXMvYXJyYXktcnVsZXNcIjtcclxuaW1wb3J0IHsgU3RyaW5nUnVsZXMgfSBmcm9tIFwiLi9ydWxlcy9zdHJpbmctcnVsZXNcIjtcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gXCIuL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcclxuaW1wb3J0IFwiLi9yZXNvdXJjZXMvbnVtYmVyXCI7XHJcbmltcG9ydCB7IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gXCIuL3JlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgUExBVEZPUk0sIExvZ01hbmFnZXIgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tIFwiYXVyZWxpYS1sb2dnaW5nXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IElUZW1wbGF0ZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RlbXBsYXRlc1wiO1xyXG5pbXBvcnQgeyBHZXRCb290c3RyYXBUZW1wbGF0ZXMgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbmRleFwiO1xyXG5pbXBvcnQgeyBJVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XHJcbmltcG9ydCB7IEF1SnNvblNjaGVtYUZvcm0gfSBmcm9tIFwiLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm1cIjtcclxuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xyXG5pbXBvcnQge1xyXG4gIElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uLFxyXG4gIElKc29uU2NoZW1hU3RyaW5nRGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uXHJcbn0gZnJvbSBcIi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUsIElUZW1wbGF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcclxuXHJcbmNsYXNzIFBsdWdpbk9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBtb2RpZmllcyBET00gdG8gZGlzcGxheSBlcnJvci9zdWNjZXNzIHN0YXRlcyBcclxuICAgKiBAZGVmYXVsdCBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgXCJ0YXJnZXRzIEJvb3RzdHJhcCB2NFwiXHJcbiAgICovXHJcbiAgdmFsaWRhdGlvblJlbmRlcmVyOiBWYWxpZGF0aW9uUmVuZGVyZXIgPSBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBkZWZpbmVzIG1vZHVsZU5hbWVzIG9mIGZvcm0gZWxlbWVudHMgXHJcbiAgICogQGRlZmF1bHQgYm9vdHN0cmFwNCBcInByZS1kZWZpbmVkIGN1c3RvbSBlbGVtZW50c1wiXHJcbiAgICovXHJcbiAgdGVtcGxhdGVzOiBJVGVtcGxhdGVzO1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgZ2xvYmFsIHZhbGlkYXRpb24gbWVzc2FnZSBvdmVycmlkZXMsIGNob29zZSB3aGljaCBtZXNzYWdlcyB5b3Ugd2FudCB0byBvdmVycmlkZSAoZGVmYXVsdClcclxuICAgKiBAZGVmYXVsdCBlbXB0eSBcInVzZSB2YWxpZGF0b3IncyBkZWZhdWx0IG1lc3NhZ2VcIlxyXG4gICAqL1xyXG4gIHZhbGlkYXRpb25NZXNzYWdlczogSVZhbGlkYXRpb25NZXNzYWdlcyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgc2V0cyB0aGUgbG9nIGxldmVsIChhdmFpbGFibGUgdmFsdWVzIGZyb20gTG9nTWFuYWdlci5sb2dMZXZlbClcclxuICAgKiBAZGVmYXVsdCBub25lIFwib25seSBpbml0aWFsaXphdGlvbiBpcyBsb2dnZWRcIlxyXG4gICAqL1xyXG4gIGxvZ0xldmVsOiBudW1iZXIgPSBMb2dNYW5hZ2VyLmxvZ0xldmVsLm5vbmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBHZXRCb290c3RyYXBUZW1wbGF0ZXMoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIGNhbGxiYWNrPzogKGNvbmZpZzogUGx1Z2luT3B0aW9ucykgPT4gdm9pZCkge1xyXG5cclxuICBjb25zdCBsb2dnZXIgPSBnZXRMb2dnZXIoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIik7XHJcblxyXG4gIGxvZ2dlci5pbmZvKFwiaW5pdGlhbGl6aW5nIGF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKTtcclxuXHJcbiAgLy8gY3JlYXRlIGRlZmF1bHRzL2FwcGx5IHVzZXIgZGVmaW5lZCBjb25maWd1cmF0aW9uXHJcbiAgY29uc3Qgb3B0aW9ucyA9IG5ldyBQbHVnaW5PcHRpb25zKCk7XHJcbiAgaWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgIGNhbGxiYWNrKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJMb2dnZXIobG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xyXG5cclxuICByZWdpc3RlckNvbmZpZ3VyYXRpb24obG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xyXG5cclxuICAoZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5nZXQoUnVsZXNGYWN0b3J5KSBhcyBSdWxlc0ZhY3RvcnkpLnJlZ2lzdGVyKCk7XHJcblxyXG4gIGZyYW1ld29ya0NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1xyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtXCIpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vdmFsdWUtY29udmVydGVycy9udW1iZXItdmFsdWUtY29udmVydGVyXCIpLFxyXG5cclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXJyYXkvc2YtYXJyYXlcIiksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL29iamVjdC9zZi1vYmplY3RcIiksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL251bWJlci9zZi1udW1iZXJcIiksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL3RleHQvc2Ytc3RyaW5nXCIpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9ib29sZWFuL3NmLWJvb2xlYW5cIiksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcFwiKVxyXG4gIF0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJMb2dnZXIoXHJcbiAgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXHJcbiAgZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uXHJcbikge1xyXG4gIGxvZ2dlci5zZXRMZXZlbChvcHRpb25zLmxvZ0xldmVsKTtcclxuXHJcbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Mb2dnZXIsIGxvZ2dlcik7XHJcblxyXG4gIGxvZ2dlci5pbmZvKFwicmVnaXN0ZXJlZCBsb2dnZXJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihcclxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgb3B0aW9uczogUGx1Z2luT3B0aW9ucyxcclxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cclxuKSB7XHJcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbihcclxuICAgIG9wdGlvbnMudmFsaWRhdGlvblJlbmRlcmVyLCBvcHRpb25zLnRlbXBsYXRlcywgb3B0aW9ucy52YWxpZGF0aW9uTWVzc2FnZXMpO1xyXG5cclxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICBsb2dnZXIuaW5mbyhcInJlZ2lzdGVyZWQgY29uZmlndXJhdGlvblwiLCBjb25maWd1cmF0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjb25maWd1cmUsXHJcbiAgSVRlbXBsYXRlcyxcclxuICBJVmFsaWRhdGlvbk1lc3NhZ2VzLFxyXG4gIFBsdWdpbk9wdGlvbnMsXHJcbiAgSUZvcm1PcHRpb25zLFxyXG4gIEF1SnNvblNjaGVtYUZvcm0sXHJcbiAgSUZvcm1PdmVycmlkZSxcclxuICBJRm9ybUluc3RhbmNlLFxyXG4gIEZvcm1JbnN0YW5jZXMsXHJcbiAgSVRlbXBsYXRlRWxlbWVudCxcclxuICBJSnNvblNjaGVtYURlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLFxyXG4gIElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYVN0cmluZ0RlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbixcclxuICBSdWxlc0ZhY3RvcnksXHJcbiAgU3RyaW5nUnVsZXMsXHJcbiAgQXJyYXlSdWxlcyxcclxuICBOdW1iZXJSdWxlcyxcclxuICBDb21tb25SdWxlcyxcclxuICBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXJcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
