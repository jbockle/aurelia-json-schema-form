define(["require", "exports", "aurelia-logging", "./rules/rules-factory", "aurelia-pal", "./resources/logger", "./services/schema-form-configuration", "./plugin-options", "./form/array/sf-array", "./form/au-json-schema-form", "./form/boolean/sf-boolean", "./form/form-controller", "./form/number/sf-number", "./form/object/sf-object", "./form/text/sf-string", "./interfaces/form-override", "./renderers/bootstrap-validation-renderer", "./resources/guid", "./resources/logger", "./resources/wrapper", "./rules/array-rules", "./rules/boolean-rules", "./rules/common-rules", "./rules/number-rules", "./rules/rules-factory", "./rules/string-rules", "./services/defaults-service", "./services/form-instances", "./services/form-service", "./services/schema-form-configuration", "./templates/bootstrap4/bootstrap-tooltip", "./templates/bootstrap4/index", "./value-converters/sf-number-value-converter", "./plugin-options"], function (require, exports, aurelia_logging_1, rules_factory_1, aurelia_pal_1, logger_1, schema_form_configuration_1, plugin_options_1, sf_array_1, au_json_schema_form_1, sf_boolean_1, form_controller_1, sf_number_1, sf_object_1, sf_string_1, form_override_1, bootstrap_validation_renderer_1, guid_1, logger_2, wrapper_1, array_rules_1, boolean_rules_1, common_rules_1, number_rules_1, rules_factory_2, string_rules_1, defaults_service_1, form_instances_1, form_service_1, schema_form_configuration_2, bootstrap_tooltip_1, index_1, sf_number_value_converter_1, plugin_options_2) {
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
    __export(bootstrap_tooltip_1);
    __export(index_1);
    __export(sf_number_value_converter_1);
    __export(plugin_options_2);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFRQSxTQUFnQixTQUFTLENBQUMsZUFBdUMsRUFBRSxRQUEwQztRQUUzRyxJQUFNLE1BQU0sR0FBRywyQkFBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFckQsTUFBTSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBRXJELG1EQUFtRDtRQUNuRCxJQUFNLE9BQU8sR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFFBQVEsWUFBWSxRQUFRLEVBQUU7WUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO1FBRUQsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFakQscUJBQXFCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV2RCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpFLGVBQWUsQ0FBQyxlQUFlLENBQUM7WUFDOUIsc0JBQVEsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7WUFDakQsc0JBQVEsQ0FBQyxVQUFVLENBQUMsOENBQThDLENBQUM7WUFFbkUsc0JBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7WUFDaEQsc0JBQVEsQ0FBQyxVQUFVLENBQUMsMENBQTBDLENBQUM7U0FDaEUsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQTlCRCw4QkE4QkM7SUFFRCxTQUFTLGNBQWMsQ0FDckIsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7UUFFdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVyRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFNBQVMscUJBQXFCLENBQzVCLE1BQXdCLEVBQ3hCLE9BQXNCLEVBQ3RCLGVBQXVDO1FBRXZDLElBQU0sYUFBYSxHQUFHLElBQUksbURBQXVCLENBQy9DLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTdFLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsbURBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFbkYsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQscUJBQXNDO0lBQ3RDLGdDQUEyQztJQUMzQyx1QkFBMEM7SUFDMUMsNEJBQXVDO0lBQ3ZDLHNCQUF3QztJQUN4QyxzQkFBd0M7SUFDeEMsc0JBQXNDO0lBR3RDLDBCQUEyQztJQU0zQywwQ0FBMEQ7SUFDMUQsaUJBQWlDO0lBQ2pDLG1CQUFtQztJQUNuQyxvQkFBb0M7SUFDcEMsd0JBQW9DO0lBQ3BDLDBCQUFzQztJQUN0Qyx5QkFBcUM7SUFDckMseUJBQXFDO0lBQ3JDLDBCQUFzQztJQUN0Qyx5QkFBcUM7SUFDckMsNkJBQTRDO0lBQzVDLDJCQUEwQztJQUMxQyx5QkFBd0M7SUFDeEMsc0NBQXFEO0lBQ3JELDhCQUF5RDtJQUN6RCxrQkFBNkM7SUFDN0Msc0NBQTZEO0lBQzdELDJCQUFpQyIsImZpbGUiOiJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSAnYXVyZWxpYS1sb2dnaW5nJztcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gJy4vcnVsZXMvcnVsZXMtZmFjdG9yeSc7XG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuL3Jlc291cmNlcy9sb2dnZXInO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vcGx1Z2luLW9wdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgY2FsbGJhY2s/OiAoY29uZmlnOiBQbHVnaW5PcHRpb25zKSA9PiB2b2lkKSB7XG5cbiAgY29uc3QgbG9nZ2VyID0gZ2V0TG9nZ2VyKCdhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0nKTtcblxuICBsb2dnZXIuaW5mbygnaW5pdGlhbGl6aW5nIGF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybScpO1xuXG4gIC8vIGNyZWF0ZSBkZWZhdWx0cy9hcHBseSB1c2VyIGRlZmluZWQgY29uZmlndXJhdGlvblxuICBjb25zdCBvcHRpb25zID0gbmV3IFBsdWdpbk9wdGlvbnMoKTtcbiAgaWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBjYWxsYmFjayhvcHRpb25zKTtcbiAgfVxuXG4gIHJlZ2lzdGVyTG9nZ2VyKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcblxuICByZWdpc3RlckNvbmZpZ3VyYXRpb24obG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xuXG4gIChmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLmdldChSdWxlc0ZhY3RvcnkpIGFzIFJ1bGVzRmFjdG9yeSkucmVnaXN0ZXIoKTtcblxuICBmcmFtZXdvcmtDb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vYXUtanNvbi1zY2hlbWEtZm9ybScpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdmFsdWUtY29udmVydGVycy9zZi1udW1iZXItdmFsdWUtY29udmVydGVyJyksXG5cbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vYXJyYXkvc2YtYXJyYXknKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vb2JqZWN0L3NmLW9iamVjdCcpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS9udW1iZXIvc2YtbnVtYmVyJyksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL3RleHQvc2Ytc3RyaW5nJyksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL2Jvb2xlYW4vc2YtYm9vbGVhbicpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvYm9vdHN0cmFwLXRvb2x0aXAnKVxuICBdKTtcblxufVxuXG5mdW5jdGlvbiByZWdpc3RlckxvZ2dlcihcbiAgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cbikge1xuICBsb2dnZXIuc2V0TGV2ZWwob3B0aW9ucy5sb2dMZXZlbCk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Mb2dnZXIsIGxvZ2dlcik7XG5cbiAgbG9nZ2VyLmluZm8oJ3JlZ2lzdGVyZWQgbG9nZ2VyJyk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihcbiAgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cbikge1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKFxuICAgIG9wdGlvbnMudmFsaWRhdGlvblJlbmRlcmVyLCBvcHRpb25zLnRlbXBsYXRlcywgb3B0aW9ucy52YWxpZGF0aW9uTWVzc2FnZXMpO1xuXG4gIGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgY29uZmlndXJhdGlvbik7XG5cbiAgbG9nZ2VyLmluZm8oJ3JlZ2lzdGVyZWQgY29uZmlndXJhdGlvbicsIGNvbmZpZ3VyYXRpb24pO1xufVxuXG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vYXJyYXkvc2YtYXJyYXknO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2Jvb2xlYW4vc2YtYm9vbGVhbic7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vZm9ybS1jb250cm9sbGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9udW1iZXIvc2YtbnVtYmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9vYmplY3Qvc2Ytb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS90ZXh0L3NmLXN0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvdGVtcGxhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3RlbXBsYXRlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvdmFsaWRhdGlvbi1tZXNzYWdlcyc7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL3Jlc291cmNlcy9ndWlkJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzb3VyY2VzL2xvZ2dlcic7XG5leHBvcnQgKiBmcm9tICcuL3Jlc291cmNlcy93cmFwcGVyJztcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvYXJyYXktcnVsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9ib29sZWFuLXJ1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvY29tbW9uLXJ1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvbnVtYmVyLXJ1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvcnVsZXMtZmFjdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL3N0cmluZy1ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2Zvcm0tc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcCc7XG5leHBvcnQgKiBmcm9tICcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vdmFsdWUtY29udmVydGVycy9zZi1udW1iZXItdmFsdWUtY29udmVydGVyJztcbmV4cG9ydCAqIGZyb20gJy4vcGx1Z2luLW9wdGlvbnMnO1xuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
