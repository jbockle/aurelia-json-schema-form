System.register(["aurelia-logging", "./rules/rules-factory", "aurelia-pal", "./resources/logger", "./services/schema-form-configuration", "./plugin-options", "./form/array/sf-array", "./form/au-json-schema-form", "./form/boolean/sf-boolean", "./form/form-controller", "./form/number/sf-number", "./form/object/sf-object", "./form/text/sf-string", "./interfaces/form-override", "./renderers/bootstrap-validation-renderer", "./resources/guid", "./resources/wrapper", "./rules/array-rules", "./rules/boolean-rules", "./rules/common-rules", "./rules/number-rules", "./rules/string-rules", "./services/defaults-service", "./services/form-instances", "./services/form-service", "./templates/bootstrap4/bootstrap-tooltip", "./templates/bootstrap4/index", "./value-converters/sf-number-value-converter"], function (exports_1, context_1) {
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
            function (bootstrap_tooltip_1_1) {
                exportStar_1(bootstrap_tooltip_1_1);
            },
            function (index_1_1) {
                exportStar_1(index_1_1);
            },
            function (sf_number_value_converter_1_1) {
                exportStar_1(sf_number_value_converter_1_1);
            }
        ],
        execute: function () {
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBUUEsU0FBZ0IsU0FBUyxDQUFDLGVBQXVDLEVBQUUsUUFBMEM7UUFFM0csSUFBTSxNQUFNLEdBQUcsMkJBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUVyRCxtREFBbUQ7UUFDbkQsSUFBTSxPQUFPLEdBQUcsSUFBSSw4QkFBYSxFQUFFLENBQUM7UUFDcEMsSUFBSSxRQUFRLFlBQVksUUFBUSxFQUFFO1lBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQjtRQUVELGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRWpELHFCQUFxQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFdkQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQVksQ0FBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6RSxlQUFlLENBQUMsZUFBZSxDQUFDO1lBQzlCLHNCQUFRLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDO1lBQ2pELHNCQUFRLENBQUMsVUFBVSxDQUFDLDhDQUE4QyxDQUFDO1lBRW5FLHNCQUFRLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1lBQzVDLHNCQUFRLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO1lBQzlDLHNCQUFRLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO1lBQzlDLHNCQUFRLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1lBQzVDLHNCQUFRLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDO1lBQ2hELHNCQUFRLENBQUMsVUFBVSxDQUFDLDBDQUEwQyxDQUFDO1NBQ2hFLENBQUMsQ0FBQztJQUVMLENBQUM7O0lBRUQsU0FBUyxjQUFjLENBQ3JCLE1BQXdCLEVBQ3hCLE9BQXNCLEVBQ3RCLGVBQXVDO1FBRXZDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxDLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMseUJBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFckUsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxTQUFTLHFCQUFxQixDQUM1QixNQUF3QixFQUN4QixPQUFzQixFQUN0QixlQUF1QztRQUV2QyxJQUFNLGFBQWEsR0FBRyxJQUFJLG1EQUF1QixDQUMvQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU3RSxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLG1EQUF1QixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW1DRCxDQUFDIiwiZmlsZSI6ImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tICdhdXJlbGlhLWxvZ2dpbmcnO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSAnLi9ydWxlcy9ydWxlcy1mYWN0b3J5JztcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4vcmVzb3VyY2VzL2xvZ2dlcic7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9wbHVnaW4tb3B0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBjYWxsYmFjaz86IChjb25maWc6IFBsdWdpbk9wdGlvbnMpID0+IHZvaWQpIHtcblxuICBjb25zdCBsb2dnZXIgPSBnZXRMb2dnZXIoJ2F1cmVsaWEtanNvbi1zY2hlbWEtZm9ybScpO1xuXG4gIGxvZ2dlci5pbmZvKCdpbml0aWFsaXppbmcgYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtJyk7XG5cbiAgLy8gY3JlYXRlIGRlZmF1bHRzL2FwcGx5IHVzZXIgZGVmaW5lZCBjb25maWd1cmF0aW9uXG4gIGNvbnN0IG9wdGlvbnMgPSBuZXcgUGx1Z2luT3B0aW9ucygpO1xuICBpZiAoY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGNhbGxiYWNrKG9wdGlvbnMpO1xuICB9XG5cbiAgcmVnaXN0ZXJMb2dnZXIobG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xuXG4gIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihsb2dnZXIsIG9wdGlvbnMsIGZyYW1ld29ya0NvbmZpZyk7XG5cbiAgKGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIuZ2V0KFJ1bGVzRmFjdG9yeSkgYXMgUnVsZXNGYWN0b3J5KS5yZWdpc3RlcigpO1xuXG4gIGZyYW1ld29ya0NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1xuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtJyksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi92YWx1ZS1jb252ZXJ0ZXJzL3NmLW51bWJlci12YWx1ZS1jb252ZXJ0ZXInKSxcblxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS9hcnJheS9zZi1hcnJheScpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS9vYmplY3Qvc2Ytb2JqZWN0JyksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL251bWJlci9zZi1udW1iZXInKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vdGV4dC9zZi1zdHJpbmcnKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vYm9vbGVhbi9zZi1ib29sZWFuJyksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcCcpXG4gIF0pO1xuXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTG9nZ2VyKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGxvZ2dlci5zZXRMZXZlbChvcHRpb25zLmxvZ0xldmVsKTtcblxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUxvZ2dlciwgbG9nZ2VyKTtcblxuICBsb2dnZXIuaW5mbygncmVnaXN0ZXJlZCBsb2dnZXInKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDb25maWd1cmF0aW9uKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24oXG4gICAgb3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIsIG9wdGlvbnMudGVtcGxhdGVzLCBvcHRpb25zLnZhbGlkYXRpb25NZXNzYWdlcyk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBjb25maWd1cmF0aW9uKTtcblxuICBsb2dnZXIuaW5mbygncmVnaXN0ZXJlZCBjb25maWd1cmF0aW9uJywgY29uZmlndXJhdGlvbik7XG59XG5cbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9hcnJheS9zZi1hcnJheSc7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vYXUtanNvbi1zY2hlbWEtZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vYm9vbGVhbi9zZi1ib29sZWFuJztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9mb3JtLWNvbnRyb2xsZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL251bWJlci9zZi1udW1iZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL29iamVjdC9zZi1vYmplY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtL3RleHQvc2Ytc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3J1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy90ZW1wbGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvdGVtcGxhdGVzJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzb3VyY2VzL2d1aWQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZXMvbG9nZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzb3VyY2VzL3dyYXBwZXInO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9hcnJheS1ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL2Jvb2xlYW4tcnVsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9jb21tb24tcnVsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9udW1iZXItcnVsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9ydWxlcy1mYWN0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvc3RyaW5nLXJ1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvZGVmYXVsdHMtc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwJztcbmV4cG9ydCAqIGZyb20gJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi92YWx1ZS1jb252ZXJ0ZXJzL3NmLW51bWJlci12YWx1ZS1jb252ZXJ0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9wbHVnaW4tb3B0aW9ucyc7XG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
