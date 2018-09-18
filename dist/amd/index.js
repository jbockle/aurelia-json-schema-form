define(["require", "exports", "aurelia-logging", "./rules/rules-factory", "aurelia-pal", "./resources/logger", "./services/schema-form-configuration", "./plugin-options", "./form/array/sf-array", "./form/au-json-schema-form", "./form/boolean/sf-boolean", "./form/form-controller", "./form/number/sf-number", "./form/object/sf-object", "./form/text/sf-string", "./interfaces/form-override", "./renderers/bootstrap-validation-renderer", "./resources/guid", "./resources/logger", "./resources/wrapper", "./rules/array-rules", "./rules/boolean-rules", "./rules/common-rules", "./rules/number-rules", "./rules/rules-factory", "./rules/string-rules", "./services/defaults-service", "./services/form-instances", "./services/form-service", "./services/schema-form-configuration", "./value-converters/sf-number-value-converter", "./plugin-options"], function (require, exports, aurelia_logging_1, rules_factory_1, aurelia_pal_1, logger_1, schema_form_configuration_1, plugin_options_1, sf_array_1, au_json_schema_form_1, sf_boolean_1, form_controller_1, sf_number_1, sf_object_1, sf_string_1, form_override_1, bootstrap_validation_renderer_1, guid_1, logger_2, wrapper_1, array_rules_1, boolean_rules_1, common_rules_1, number_rules_1, rules_factory_2, string_rules_1, defaults_service_1, form_instances_1, form_service_1, schema_form_configuration_2, sf_number_value_converter_1, plugin_options_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(frameworkConfig, callback) {
        var logger = aurelia_logging_1.getLogger('aurelia-json-schema-form');
        logger.info('initializing aurelia-json-schema-form');
        // create defaults/apply user defined configuration
        var options = new plugin_options_1.PluginOptions();
        if (callback instanceof Function) {
            callback(options);
        }
        registerLogger(logger, options, frameworkConfig);
        registerConfiguration(logger, options, frameworkConfig);
        frameworkConfig.container.get(rules_factory_1.RulesFactory).register();
        frameworkConfig.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./form/au-json-schema-form'),
            aurelia_pal_1.PLATFORM.moduleName('./value-converters/sf-number-value-converter'),
            aurelia_pal_1.PLATFORM.moduleName('./form/array/sf-array'),
            aurelia_pal_1.PLATFORM.moduleName('./form/object/sf-object'),
            aurelia_pal_1.PLATFORM.moduleName('./form/number/sf-number'),
            aurelia_pal_1.PLATFORM.moduleName('./form/text/sf-string'),
            aurelia_pal_1.PLATFORM.moduleName('./form/boolean/sf-boolean'),
            aurelia_pal_1.PLATFORM.moduleName('./templates/bootstrap4/bootstrap-tooltip')
        ]);
    }
    exports.configure = configure;
    function registerLogger(logger, options, frameworkConfig) {
        logger.setLevel(options.logLevel);
        frameworkConfig.container.registerInstance(logger_1.SchemaFormLogger, logger);
        logger.info('registered logger');
    }
    function registerConfiguration(logger, options, frameworkConfig) {
        var configuration = new schema_form_configuration_1.SchemaFormConfiguration(options.validationRenderer, options.templates, options.validationMessages);
        frameworkConfig.container.registerInstance(schema_form_configuration_1.SchemaFormConfiguration, configuration);
        logger.info('registered configuration', configuration);
    }
    __export(sf_array_1);
    __export(au_json_schema_form_1);
    __export(sf_boolean_1);
    __export(form_controller_1);
    __export(sf_number_1);
    __export(sf_object_1);
    __export(sf_string_1);
    __export(form_override_1);
    __export(bootstrap_validation_renderer_1);
    __export(guid_1);
    __export(logger_2);
    __export(wrapper_1);
    __export(array_rules_1);
    __export(boolean_rules_1);
    __export(common_rules_1);
    __export(number_rules_1);
    __export(rules_factory_2);
    __export(string_rules_1);
    __export(defaults_service_1);
    __export(form_instances_1);
    __export(form_service_1);
    __export(schema_form_configuration_2);
    __export(sf_number_value_converter_1);
    __export(plugin_options_2);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQVFBLFNBQWdCLFNBQVMsQ0FBQyxlQUF1QyxFQUFFLFFBQTBDO1FBQzNHLElBQU0sTUFBTSxHQUFHLDJCQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFFckQsbURBQW1EO1FBQ25ELElBQU0sT0FBTyxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO1FBQ3BDLElBQUksUUFBUSxZQUFZLFFBQVEsRUFBRTtZQUNoQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkI7UUFFRCxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVqRCxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXZELGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDRCQUFZLENBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekUsZUFBZSxDQUFDLGVBQWUsQ0FBQztZQUM5QixzQkFBUSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQztZQUNqRCxzQkFBUSxDQUFDLFVBQVUsQ0FBQyw4Q0FBOEMsQ0FBQztZQUVuRSxzQkFBUSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztZQUM1QyxzQkFBUSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztZQUM5QyxzQkFBUSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztZQUM5QyxzQkFBUSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztZQUM1QyxzQkFBUSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQztZQUNoRCxzQkFBUSxDQUFDLFVBQVUsQ0FBQywwQ0FBMEMsQ0FBQztTQUNoRSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBNUJELDhCQTRCQztJQUVELFNBQVMsY0FBYyxDQUNyQixNQUF3QixFQUN4QixPQUFzQixFQUN0QixlQUF1QztRQUV2QyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsQyxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHlCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsU0FBUyxxQkFBcUIsQ0FDNUIsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7UUFFdkMsSUFBTSxhQUFhLEdBQUcsSUFBSSxtREFBdUIsQ0FDL0MsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFN0UsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxtREFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVuRixNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxxQkFBc0M7SUFDdEMsZ0NBQTJDO0lBQzNDLHVCQUEwQztJQUMxQyw0QkFBdUM7SUFDdkMsc0JBQXdDO0lBQ3hDLHNCQUF3QztJQUN4QyxzQkFBc0M7SUFHdEMsMEJBQTJDO0lBTTNDLDBDQUEwRDtJQUMxRCxpQkFBaUM7SUFDakMsbUJBQW1DO0lBQ25DLG9CQUFvQztJQUNwQyx3QkFBb0M7SUFDcEMsMEJBQXNDO0lBQ3RDLHlCQUFxQztJQUNyQyx5QkFBcUM7SUFDckMsMEJBQXNDO0lBQ3RDLHlCQUFxQztJQUNyQyw2QkFBNEM7SUFDNUMsMkJBQTBDO0lBQzFDLHlCQUF3QztJQUN4QyxzQ0FBcUQ7SUFDckQsc0NBQTZEO0lBQzdELDJCQUFpQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gJ2F1cmVsaWEtbG9nZ2luZyc7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gJy4vcnVsZXMvcnVsZXMtZmFjdG9yeSc7XHJcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9wbHVnaW4tb3B0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgY2FsbGJhY2s/OiAoY29uZmlnOiBQbHVnaW5PcHRpb25zKSA9PiB2b2lkKSB7XHJcbiAgY29uc3QgbG9nZ2VyID0gZ2V0TG9nZ2VyKCdhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0nKTtcclxuXHJcbiAgbG9nZ2VyLmluZm8oJ2luaXRpYWxpemluZyBhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0nKTtcclxuXHJcbiAgLy8gY3JlYXRlIGRlZmF1bHRzL2FwcGx5IHVzZXIgZGVmaW5lZCBjb25maWd1cmF0aW9uXHJcbiAgY29uc3Qgb3B0aW9ucyA9IG5ldyBQbHVnaW5PcHRpb25zKCk7XHJcbiAgaWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgIGNhbGxiYWNrKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJMb2dnZXIobG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xyXG5cclxuICByZWdpc3RlckNvbmZpZ3VyYXRpb24obG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xyXG5cclxuICAoZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5nZXQoUnVsZXNGYWN0b3J5KSBhcyBSdWxlc0ZhY3RvcnkpLnJlZ2lzdGVyKCk7XHJcblxyXG4gIGZyYW1ld29ya0NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1xyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0nKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdmFsdWUtY29udmVydGVycy9zZi1udW1iZXItdmFsdWUtY29udmVydGVyJyksXHJcblxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL2FycmF5L3NmLWFycmF5JyksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vb2JqZWN0L3NmLW9iamVjdCcpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL251bWJlci9zZi1udW1iZXInKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS90ZXh0L3NmLXN0cmluZycpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL2Jvb2xlYW4vc2YtYm9vbGVhbicpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcCcpXHJcbiAgXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTG9nZ2VyKFxyXG4gIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxyXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxyXG4pIHtcclxuICBsb2dnZXIuc2V0TGV2ZWwob3B0aW9ucy5sb2dMZXZlbCk7XHJcblxyXG4gIGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShTY2hlbWFGb3JtTG9nZ2VyLCBsb2dnZXIpO1xyXG5cclxuICBsb2dnZXIuaW5mbygncmVnaXN0ZXJlZCBsb2dnZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJDb25maWd1cmF0aW9uKFxyXG4gIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxyXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxyXG4pIHtcclxuICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKFxyXG4gICAgb3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIsIG9wdGlvbnMudGVtcGxhdGVzLCBvcHRpb25zLnZhbGlkYXRpb25NZXNzYWdlcyk7XHJcblxyXG4gIGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgY29uZmlndXJhdGlvbik7XHJcblxyXG4gIGxvZ2dlci5pbmZvKCdyZWdpc3RlcmVkIGNvbmZpZ3VyYXRpb24nLCBjb25maWd1cmF0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2FycmF5L3NmLWFycmF5JztcclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0nO1xyXG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vYm9vbGVhbi9zZi1ib29sZWFuJztcclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2Zvcm0tY29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9udW1iZXIvc2YtbnVtYmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL29iamVjdC9zZi1vYmplY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vdGV4dC9zZi1zdHJpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3J1bGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3RlbXBsYXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3RlbXBsYXRlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcnMvYm9vdHN0cmFwLXZhbGlkYXRpb24tcmVuZGVyZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3Jlc291cmNlcy9ndWlkJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZXMvd3JhcHBlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvYXJyYXktcnVsZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL2Jvb2xlYW4tcnVsZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL2NvbW1vbi1ydWxlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvbnVtYmVyLXJ1bGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9ydWxlcy1mYWN0b3J5JztcclxuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9zdHJpbmctcnVsZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGx1Z2luLW9wdGlvbnMnO1xyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
