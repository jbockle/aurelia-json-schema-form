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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFRQSxTQUFnQixTQUFTLENBQUMsZUFBdUMsRUFBRSxRQUEwQztRQUMzRyxJQUFNLE1BQU0sR0FBRywyQkFBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFckQsTUFBTSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBRXJELG1EQUFtRDtRQUNuRCxJQUFNLE9BQU8sR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFFBQVEsWUFBWSxRQUFRLEVBQUU7WUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO1FBRUQsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFakQscUJBQXFCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV2RCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpFLGVBQWUsQ0FBQyxlQUFlLENBQUM7WUFDOUIsc0JBQVEsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7WUFDakQsc0JBQVEsQ0FBQyxVQUFVLENBQUMsOENBQThDLENBQUM7WUFFbkUsc0JBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7WUFDaEQsc0JBQVEsQ0FBQyxVQUFVLENBQUMsMENBQTBDLENBQUM7U0FDaEUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7SUFFRCxTQUFTLGNBQWMsQ0FDckIsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7UUFFdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVyRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFNBQVMscUJBQXFCLENBQzVCLE1BQXdCLEVBQ3hCLE9BQXNCLEVBQ3RCLGVBQXVDO1FBRXZDLElBQU0sYUFBYSxHQUFHLElBQUksbURBQXVCLENBQy9DLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTdFLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsbURBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFbkYsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBaUNELENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSAnYXVyZWxpYS1sb2dnaW5nJztcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gJy4vcnVsZXMvcnVsZXMtZmFjdG9yeSc7XG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuL3Jlc291cmNlcy9sb2dnZXInO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vcGx1Z2luLW9wdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgY2FsbGJhY2s/OiAoY29uZmlnOiBQbHVnaW5PcHRpb25zKSA9PiB2b2lkKSB7XG4gIGNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcignYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtJyk7XG5cbiAgbG9nZ2VyLmluZm8oJ2luaXRpYWxpemluZyBhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0nKTtcblxuICAvLyBjcmVhdGUgZGVmYXVsdHMvYXBwbHkgdXNlciBkZWZpbmVkIGNvbmZpZ3VyYXRpb25cbiAgY29uc3Qgb3B0aW9ucyA9IG5ldyBQbHVnaW5PcHRpb25zKCk7XG4gIGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgY2FsbGJhY2sob3B0aW9ucyk7XG4gIH1cblxuICByZWdpc3RlckxvZ2dlcihsb2dnZXIsIG9wdGlvbnMsIGZyYW1ld29ya0NvbmZpZyk7XG5cbiAgcmVnaXN0ZXJDb25maWd1cmF0aW9uKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcblxuICAoZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5nZXQoUnVsZXNGYWN0b3J5KSBhcyBSdWxlc0ZhY3RvcnkpLnJlZ2lzdGVyKCk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmdsb2JhbFJlc291cmNlcyhbXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0nKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3ZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlcicpLFxuXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL2FycmF5L3NmLWFycmF5JyksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL29iamVjdC9zZi1vYmplY3QnKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vbnVtYmVyL3NmLW51bWJlcicpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS90ZXh0L3NmLXN0cmluZycpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS9ib29sZWFuL3NmLWJvb2xlYW4nKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwJylcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTG9nZ2VyKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGxvZ2dlci5zZXRMZXZlbChvcHRpb25zLmxvZ0xldmVsKTtcblxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUxvZ2dlciwgbG9nZ2VyKTtcblxuICBsb2dnZXIuaW5mbygncmVnaXN0ZXJlZCBsb2dnZXInKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDb25maWd1cmF0aW9uKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24oXG4gICAgb3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIsIG9wdGlvbnMudGVtcGxhdGVzLCBvcHRpb25zLnZhbGlkYXRpb25NZXNzYWdlcyk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBjb25maWd1cmF0aW9uKTtcblxuICBsb2dnZXIuaW5mbygncmVnaXN0ZXJlZCBjb25maWd1cmF0aW9uJywgY29uZmlndXJhdGlvbik7XG59XG5cbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9hcnJheS9zZi1hcnJheSc7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vYXUtanNvbi1zY2hlbWEtZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vYm9vbGVhbi9zZi1ib29sZWFuJztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9mb3JtLWNvbnRyb2xsZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL251bWJlci9zZi1udW1iZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL29iamVjdC9zZi1vYmplY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL3RleHQvc2Ytc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3J1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy90ZW1wbGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvdGVtcGxhdGVzJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzb3VyY2VzL2d1aWQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZXMvbG9nZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzb3VyY2VzL3dyYXBwZXInO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9hcnJheS1ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL2Jvb2xlYW4tcnVsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9jb21tb24tcnVsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9udW1iZXItcnVsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9ydWxlcy1mYWN0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvc3RyaW5nLXJ1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvZGVmYXVsdHMtc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3ZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlcic7XG5leHBvcnQgKiBmcm9tICcuL3BsdWdpbi1vcHRpb25zJztcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
