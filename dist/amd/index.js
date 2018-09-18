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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQVFBLFNBQWdCLFNBQVMsQ0FBQyxlQUF1QyxFQUFFLFFBQTBDO1FBQzNHLElBQU0sTUFBTSxHQUFHLDJCQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFFckQsbURBQW1EO1FBQ25ELElBQU0sT0FBTyxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO1FBQ3BDLElBQUksUUFBUSxZQUFZLFFBQVEsRUFBRTtZQUNoQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkI7UUFFRCxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVqRCxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXZELGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDRCQUFZLENBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekUsZUFBZSxDQUFDLGVBQWUsQ0FBQztZQUM5QixzQkFBUSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQztZQUNqRCxzQkFBUSxDQUFDLFVBQVUsQ0FBQyw4Q0FBOEMsQ0FBQztZQUVuRSxzQkFBUSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztZQUM1QyxzQkFBUSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztZQUM5QyxzQkFBUSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztZQUM5QyxzQkFBUSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztZQUM1QyxzQkFBUSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQztZQUNoRCxzQkFBUSxDQUFDLFVBQVUsQ0FBQywwQ0FBMEMsQ0FBQztTQUNoRSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBNUJELDhCQTRCQztJQUVELFNBQVMsY0FBYyxDQUNyQixNQUF3QixFQUN4QixPQUFzQixFQUN0QixlQUF1QztRQUV2QyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsQyxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHlCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsU0FBUyxxQkFBcUIsQ0FDNUIsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7UUFFdkMsSUFBTSxhQUFhLEdBQUcsSUFBSSxtREFBdUIsQ0FDL0MsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFN0UsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxtREFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVuRixNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxxQkFBc0M7SUFDdEMsZ0NBQTJDO0lBQzNDLHVCQUEwQztJQUMxQyw0QkFBdUM7SUFDdkMsc0JBQXdDO0lBQ3hDLHNCQUF3QztJQUN4QyxzQkFBc0M7SUFHdEMsMEJBQTJDO0lBTTNDLDBDQUEwRDtJQUMxRCxpQkFBaUM7SUFDakMsbUJBQW1DO0lBQ25DLG9CQUFvQztJQUNwQyx3QkFBb0M7SUFDcEMsMEJBQXNDO0lBQ3RDLHlCQUFxQztJQUNyQyx5QkFBcUM7SUFDckMsMEJBQXNDO0lBQ3RDLHlCQUFxQztJQUNyQyw2QkFBNEM7SUFDNUMsMkJBQTBDO0lBQzFDLHlCQUF3QztJQUN4QyxzQ0FBcUQ7SUFDckQsc0NBQTZEO0lBQzdELDJCQUFpQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tICdhdXJlbGlhLWxvZ2dpbmcnO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSAnLi9ydWxlcy9ydWxlcy1mYWN0b3J5JztcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4vcmVzb3VyY2VzL2xvZ2dlcic7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9wbHVnaW4tb3B0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBjYWxsYmFjaz86IChjb25maWc6IFBsdWdpbk9wdGlvbnMpID0+IHZvaWQpIHtcbiAgY29uc3QgbG9nZ2VyID0gZ2V0TG9nZ2VyKCdhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0nKTtcblxuICBsb2dnZXIuaW5mbygnaW5pdGlhbGl6aW5nIGF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybScpO1xuXG4gIC8vIGNyZWF0ZSBkZWZhdWx0cy9hcHBseSB1c2VyIGRlZmluZWQgY29uZmlndXJhdGlvblxuICBjb25zdCBvcHRpb25zID0gbmV3IFBsdWdpbk9wdGlvbnMoKTtcbiAgaWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBjYWxsYmFjayhvcHRpb25zKTtcbiAgfVxuXG4gIHJlZ2lzdGVyTG9nZ2VyKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcblxuICByZWdpc3RlckNvbmZpZ3VyYXRpb24obG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xuXG4gIChmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLmdldChSdWxlc0ZhY3RvcnkpIGFzIFJ1bGVzRmFjdG9yeSkucmVnaXN0ZXIoKTtcblxuICBmcmFtZXdvcmtDb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vYXUtanNvbi1zY2hlbWEtZm9ybScpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdmFsdWUtY29udmVydGVycy9zZi1udW1iZXItdmFsdWUtY29udmVydGVyJyksXG5cbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vYXJyYXkvc2YtYXJyYXknKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vb2JqZWN0L3NmLW9iamVjdCcpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS9udW1iZXIvc2YtbnVtYmVyJyksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL3RleHQvc2Ytc3RyaW5nJyksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL2Jvb2xlYW4vc2YtYm9vbGVhbicpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvYm9vdHN0cmFwLXRvb2x0aXAnKVxuICBdKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJMb2dnZXIoXG4gIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgb3B0aW9uczogUGx1Z2luT3B0aW9ucyxcbiAgZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uXG4pIHtcbiAgbG9nZ2VyLnNldExldmVsKG9wdGlvbnMubG9nTGV2ZWwpO1xuXG4gIGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShTY2hlbWFGb3JtTG9nZ2VyLCBsb2dnZXIpO1xuXG4gIGxvZ2dlci5pbmZvKCdyZWdpc3RlcmVkIGxvZ2dlcicpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckNvbmZpZ3VyYXRpb24oXG4gIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgb3B0aW9uczogUGx1Z2luT3B0aW9ucyxcbiAgZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uXG4pIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbihcbiAgICBvcHRpb25zLnZhbGlkYXRpb25SZW5kZXJlciwgb3B0aW9ucy50ZW1wbGF0ZXMsIG9wdGlvbnMudmFsaWRhdGlvbk1lc3NhZ2VzKTtcblxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIGNvbmZpZ3VyYXRpb24pO1xuXG4gIGxvZ2dlci5pbmZvKCdyZWdpc3RlcmVkIGNvbmZpZ3VyYXRpb24nLCBjb25maWd1cmF0aW9uKTtcbn1cblxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2FycmF5L3NmLWFycmF5JztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9ib29sZWFuL3NmLWJvb2xlYW4nO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2Zvcm0tY29udHJvbGxlcic7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vbnVtYmVyL3NmLW51bWJlcic7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vb2JqZWN0L3NmLW9iamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vdGV4dC9zZi1zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvcnVsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3RlbXBsYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy90ZW1wbGF0ZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3ZhbGlkYXRpb24tbWVzc2FnZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcnMvYm9vdHN0cmFwLXZhbGlkYXRpb24tcmVuZGVyZXInO1xuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZXMvZ3VpZCc7XG5leHBvcnQgKiBmcm9tICcuL3Jlc291cmNlcy9sb2dnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZXMvd3JhcHBlcic7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL2FycmF5LXJ1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvYm9vbGVhbi1ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL2NvbW1vbi1ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL251bWJlci1ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL3J1bGVzLWZhY3RvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9zdHJpbmctcnVsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdmFsdWUtY29udmVydGVycy9zZi1udW1iZXItdmFsdWUtY29udmVydGVyJztcbmV4cG9ydCAqIGZyb20gJy4vcGx1Z2luLW9wdGlvbnMnO1xuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
