System.register(["aurelia-logging", "./rules/rules-factory", "aurelia-pal", "./resources/logger", "./services/schema-form-configuration", "./plugin-options", "./form/array/sf-array", "./form/au-json-schema-form", "./form/boolean/sf-boolean", "./form/form-controller", "./form/number/sf-number", "./form/object/sf-object", "./form/text/sf-string", "./interfaces/form-override", "./renderers/bootstrap-validation-renderer", "./resources/guid", "./resources/wrapper", "./rules/array-rules", "./rules/boolean-rules", "./rules/common-rules", "./rules/number-rules", "./rules/string-rules", "./services/defaults-service", "./services/form-instances", "./services/form-service", "./value-converters/sf-number-value-converter"], function (exports_1, context_1) {
    "use strict";
    var aurelia_logging_1, rules_factory_1, aurelia_pal_1, logger_1, schema_form_configuration_1, plugin_options_1;
    var __moduleName = context_1 && context_1.id;
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
    exports_1("configure", configure);
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
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (rules_factory_1_1) {
                rules_factory_1 = rules_factory_1_1;
                exportStar_1(rules_factory_1_1);
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
                exportStar_1(logger_1_1);
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
                exportStar_1(schema_form_configuration_1_1);
            },
            function (plugin_options_1_1) {
                plugin_options_1 = plugin_options_1_1;
                exportStar_1(plugin_options_1_1);
            },
            function (sf_array_1_1) {
                exportStar_1(sf_array_1_1);
            },
            function (au_json_schema_form_1_1) {
                exportStar_1(au_json_schema_form_1_1);
            },
            function (sf_boolean_1_1) {
                exportStar_1(sf_boolean_1_1);
            },
            function (form_controller_1_1) {
                exportStar_1(form_controller_1_1);
            },
            function (sf_number_1_1) {
                exportStar_1(sf_number_1_1);
            },
            function (sf_object_1_1) {
                exportStar_1(sf_object_1_1);
            },
            function (sf_string_1_1) {
                exportStar_1(sf_string_1_1);
            },
            function (form_override_1_1) {
                exportStar_1(form_override_1_1);
            },
            function (bootstrap_validation_renderer_1_1) {
                exportStar_1(bootstrap_validation_renderer_1_1);
            },
            function (guid_1_1) {
                exportStar_1(guid_1_1);
            },
            function (wrapper_1_1) {
                exportStar_1(wrapper_1_1);
            },
            function (array_rules_1_1) {
                exportStar_1(array_rules_1_1);
            },
            function (boolean_rules_1_1) {
                exportStar_1(boolean_rules_1_1);
            },
            function (common_rules_1_1) {
                exportStar_1(common_rules_1_1);
            },
            function (number_rules_1_1) {
                exportStar_1(number_rules_1_1);
            },
            function (string_rules_1_1) {
                exportStar_1(string_rules_1_1);
            },
            function (defaults_service_1_1) {
                exportStar_1(defaults_service_1_1);
            },
            function (form_instances_1_1) {
                exportStar_1(form_instances_1_1);
            },
            function (form_service_1_1) {
                exportStar_1(form_service_1_1);
            },
            function (sf_number_value_converter_1_1) {
                exportStar_1(sf_number_value_converter_1_1);
            }
        ],
        execute: function () {
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFRQSxTQUFnQixTQUFTLENBQUMsZUFBdUMsRUFBRSxRQUEwQztRQUMzRyxJQUFNLE1BQU0sR0FBRywyQkFBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFckQsTUFBTSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBRXJELG1EQUFtRDtRQUNuRCxJQUFNLE9BQU8sR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFFBQVEsWUFBWSxRQUFRLEVBQUU7WUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO1FBRUQsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFakQscUJBQXFCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV2RCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpFLGVBQWUsQ0FBQyxlQUFlLENBQUM7WUFDOUIsc0JBQVEsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7WUFDakQsc0JBQVEsQ0FBQyxVQUFVLENBQUMsOENBQThDLENBQUM7WUFFbkUsc0JBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7WUFDaEQsc0JBQVEsQ0FBQyxVQUFVLENBQUMsMENBQTBDLENBQUM7U0FDaEUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7SUFFRCxTQUFTLGNBQWMsQ0FDckIsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7UUFFdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVyRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFNBQVMscUJBQXFCLENBQzVCLE1BQXdCLEVBQ3hCLE9BQXNCLEVBQ3RCLGVBQXVDO1FBRXZDLElBQU0sYUFBYSxHQUFHLElBQUksbURBQXVCLENBQy9DLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTdFLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsbURBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFbkYsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBaUNELENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tICdhdXJlbGlhLWxvZ2dpbmcnO1xyXG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tICcuL3J1bGVzL3J1bGVzLWZhY3RvcnknO1xyXG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ2F1cmVsaWEtcGFsJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4vcmVzb3VyY2VzL2xvZ2dlcic7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vcGx1Z2luLW9wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIGNhbGxiYWNrPzogKGNvbmZpZzogUGx1Z2luT3B0aW9ucykgPT4gdm9pZCkge1xyXG4gIGNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcignYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtJyk7XHJcblxyXG4gIGxvZ2dlci5pbmZvKCdpbml0aWFsaXppbmcgYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtJyk7XHJcblxyXG4gIC8vIGNyZWF0ZSBkZWZhdWx0cy9hcHBseSB1c2VyIGRlZmluZWQgY29uZmlndXJhdGlvblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBuZXcgUGx1Z2luT3B0aW9ucygpO1xyXG4gIGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICBjYWxsYmFjayhvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyTG9nZ2VyKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcclxuXHJcbiAgcmVnaXN0ZXJDb25maWd1cmF0aW9uKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcclxuXHJcbiAgKGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIuZ2V0KFJ1bGVzRmFjdG9yeSkgYXMgUnVsZXNGYWN0b3J5KS5yZWdpc3RlcigpO1xyXG5cclxuICBmcmFtZXdvcmtDb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtJyksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3ZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlcicpLFxyXG5cclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS9hcnJheS9zZi1hcnJheScpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL29iamVjdC9zZi1vYmplY3QnKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS9udW1iZXIvc2YtbnVtYmVyJyksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vdGV4dC9zZi1zdHJpbmcnKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS9ib29sZWFuL3NmLWJvb2xlYW4nKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvYm9vdHN0cmFwLXRvb2x0aXAnKVxyXG4gIF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckxvZ2dlcihcclxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgb3B0aW9uczogUGx1Z2luT3B0aW9ucyxcclxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cclxuKSB7XHJcbiAgbG9nZ2VyLnNldExldmVsKG9wdGlvbnMubG9nTGV2ZWwpO1xyXG5cclxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUxvZ2dlciwgbG9nZ2VyKTtcclxuXHJcbiAgbG9nZ2VyLmluZm8oJ3JlZ2lzdGVyZWQgbG9nZ2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihcclxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgb3B0aW9uczogUGx1Z2luT3B0aW9ucyxcclxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cclxuKSB7XHJcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbihcclxuICAgIG9wdGlvbnMudmFsaWRhdGlvblJlbmRlcmVyLCBvcHRpb25zLnRlbXBsYXRlcywgb3B0aW9ucy52YWxpZGF0aW9uTWVzc2FnZXMpO1xyXG5cclxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICBsb2dnZXIuaW5mbygncmVnaXN0ZXJlZCBjb25maWd1cmF0aW9uJywgY29uZmlndXJhdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9hcnJheS9zZi1hcnJheSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtJztcclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2Jvb2xlYW4vc2YtYm9vbGVhbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9mb3JtLWNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vbnVtYmVyL3NmLW51bWJlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9vYmplY3Qvc2Ytb2JqZWN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL3RleHQvc2Ytc3RyaW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9ydWxlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy90ZW1wbGF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy90ZW1wbGF0ZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvdmFsaWRhdGlvbi1tZXNzYWdlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVzb3VyY2VzL2xvZ2dlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVzb3VyY2VzL3dyYXBwZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL2FycmF5LXJ1bGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9ib29sZWFuLXJ1bGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9jb21tb24tcnVsZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL251bWJlci1ydWxlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvcnVsZXMtZmFjdG9yeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvc3RyaW5nLXJ1bGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi92YWx1ZS1jb252ZXJ0ZXJzL3NmLW51bWJlci12YWx1ZS1jb252ZXJ0ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3BsdWdpbi1vcHRpb25zJztcclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
