System.register(["./rules/common-rules", "./rules/number-rules", "./rules/array-rules", "./rules/string-rules", "./services/form-instances", "./resources/number", "./renderers/bootstrap-validation-renderer", "./services/schema-form-configuration", "aurelia-framework", "aurelia-logging", "./resources/logger", "./templates/bootstrap4/index", "./form/au-json-schema-form", "./rules/rules-factory"], function (exports_1, context_1) {
    "use strict";
    var common_rules_1, number_rules_1, array_rules_1, string_rules_1, form_instances_1, bootstrap_validation_renderer_1, schema_form_configuration_1, aurelia_framework_1, aurelia_logging_1, logger_1, index_1, au_json_schema_form_1, rules_factory_1, PluginOptions;
    var __moduleName = context_1 && context_1.id;
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
    exports_1("configure", configure);
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
    return {
        setters: [
            function (common_rules_1_1) {
                common_rules_1 = common_rules_1_1;
            },
            function (number_rules_1_1) {
                number_rules_1 = number_rules_1_1;
            },
            function (array_rules_1_1) {
                array_rules_1 = array_rules_1_1;
            },
            function (string_rules_1_1) {
                string_rules_1 = string_rules_1_1;
            },
            function (form_instances_1_1) {
                form_instances_1 = form_instances_1_1;
            },
            function (_1) {
            },
            function (bootstrap_validation_renderer_1_1) {
                bootstrap_validation_renderer_1 = bootstrap_validation_renderer_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (au_json_schema_form_1_1) {
                au_json_schema_form_1 = au_json_schema_form_1_1;
            },
            function (rules_factory_1_1) {
                rules_factory_1 = rules_factory_1_1;
            }
        ],
        execute: function () {
            exports_1("CommonRules", common_rules_1.CommonRules);
            exports_1("NumberRules", number_rules_1.NumberRules);
            exports_1("ArrayRules", array_rules_1.ArrayRules);
            exports_1("StringRules", string_rules_1.StringRules);
            exports_1("FormInstances", form_instances_1.FormInstances);
            exports_1("BootstrapValidationRenderer", bootstrap_validation_renderer_1.BootstrapValidationRenderer);
            exports_1("AuJsonSchemaForm", au_json_schema_form_1.AuJsonSchemaForm);
            exports_1("RulesFactory", rules_factory_1.RulesFactory);
            PluginOptions = /** @class */ (function () {
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
            exports_1("PluginOptions", PluginOptions);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBMkRBLFNBQVMsU0FBUyxDQUFDLGVBQXVDLEVBQUUsUUFBMEM7UUFFcEcsSUFBTSxNQUFNLEdBQUcsMkJBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUVyRCxtREFBbUQ7UUFDbkQsSUFBTSxPQUFPLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFFBQVEsWUFBWSxRQUFRLEVBQUU7WUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO1FBRUQsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFakQscUJBQXFCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV2RCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpFLGVBQWUsQ0FBQyxlQUFlLENBQUM7WUFDOUIsNEJBQVEsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7WUFDakQsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMkNBQTJDLENBQUM7WUFFaEUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7WUFDaEQsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMENBQTBDLENBQUM7U0FDaEUsQ0FBQyxDQUFDO0lBRUwsQ0FBQzs7SUFFRCxTQUFTLGNBQWMsQ0FDckIsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7UUFFdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVyRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFNBQVMscUJBQXFCLENBQzVCLE1BQXdCLEVBQ3hCLE9BQXNCLEVBQ3RCLGVBQXVDO1FBRXZDLElBQU0sYUFBYSxHQUFHLElBQUksbURBQXVCLENBQy9DLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTdFLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsbURBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFbkYsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQWxIUSwwQkFBVztxQ0FDWCwwQkFBVztvQ0FDWCx3QkFBVTtxQ0FDViwwQkFBVzt1Q0FDWCw4QkFBYTtxREFHYiwyREFBMkI7MENBVTNCLHNDQUFnQjtzQ0FDaEIsNEJBQVk7WUFXckI7Z0JBeUJFO29CQXhCQTs7O3VCQUdHO29CQUNILHVCQUFrQixHQUF1QixJQUFJLDJEQUEyQixFQUFFLENBQUM7b0JBUTNFOzs7dUJBR0c7b0JBQ0gsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztvQkFFN0M7Ozt1QkFHRztvQkFDSCxhQUFRLEdBQVcsOEJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUcxQyxJQUFJLENBQUMsU0FBUyxHQUFHLDZCQUFxQixFQUFFLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0gsb0JBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBOztRQW1GRCxDQUFDIiwiZmlsZSI6ImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vblJ1bGVzIH0gZnJvbSBcIi4vcnVsZXMvY29tbW9uLXJ1bGVzXCI7XHJcbmltcG9ydCB7IE51bWJlclJ1bGVzIH0gZnJvbSBcIi4vcnVsZXMvbnVtYmVyLXJ1bGVzXCI7XHJcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tIFwiLi9ydWxlcy9hcnJheS1ydWxlc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdSdWxlcyB9IGZyb20gXCIuL3J1bGVzL3N0cmluZy1ydWxlc1wiO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXNcIjtcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xyXG5pbXBvcnQgXCIuL3Jlc291cmNlcy9udW1iZXJcIjtcclxuaW1wb3J0IHsgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBQTEFURk9STSwgTG9nTWFuYWdlciB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gXCJhdXJlbGlhLWxvZ2dpbmdcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgSVRlbXBsYXRlcyB9IGZyb20gXCIuL2ludGVyZmFjZXMvdGVtcGxhdGVzXCI7XHJcbmltcG9ydCB7IEdldEJvb3RzdHJhcFRlbXBsYXRlcyB9IGZyb20gXCIuL3RlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4XCI7XHJcbmltcG9ydCB7IElWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3ZhbGlkYXRpb24tbWVzc2FnZXNcIjtcclxuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcclxuaW1wb3J0IHsgQXVKc29uU2NoZW1hRm9ybSB9IGZyb20gXCIuL2Zvcm0vYXUtanNvbi1zY2hlbWEtZm9ybVwiO1xyXG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XHJcbmltcG9ydCB7XHJcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxyXG4gIElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLFxyXG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFTdHJpbmdEZWZpbml0aW9uLFxyXG4gIElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb25cclxufSBmcm9tIFwiLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSwgSVRlbXBsYXRlRWxlbWVudCB9IGZyb20gXCIuL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5cclxuY2xhc3MgUGx1Z2luT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IG1vZGlmaWVzIERPTSB0byBkaXNwbGF5IGVycm9yL3N1Y2Nlc3Mgc3RhdGVzIFxyXG4gICAqIEBkZWZhdWx0IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciBcInRhcmdldHMgQm9vdHN0cmFwIHY0XCJcclxuICAgKi9cclxuICB2YWxpZGF0aW9uUmVuZGVyZXI6IFZhbGlkYXRpb25SZW5kZXJlciA9IG5ldyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IGRlZmluZXMgbW9kdWxlTmFtZXMgb2YgZm9ybSBlbGVtZW50cyBcclxuICAgKiBAZGVmYXVsdCBib290c3RyYXA0IFwicHJlLWRlZmluZWQgY3VzdG9tIGVsZW1lbnRzXCJcclxuICAgKi9cclxuICB0ZW1wbGF0ZXM6IElUZW1wbGF0ZXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBnbG9iYWwgdmFsaWRhdGlvbiBtZXNzYWdlIG92ZXJyaWRlcywgY2hvb3NlIHdoaWNoIG1lc3NhZ2VzIHlvdSB3YW50IHRvIG92ZXJyaWRlIChkZWZhdWx0KVxyXG4gICAqIEBkZWZhdWx0IGVtcHR5IFwidXNlIHZhbGlkYXRvcidzIGRlZmF1bHQgbWVzc2FnZVwiXHJcbiAgICovXHJcbiAgdmFsaWRhdGlvbk1lc3NhZ2VzOiBJVmFsaWRhdGlvbk1lc3NhZ2VzID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBzZXRzIHRoZSBsb2cgbGV2ZWwgKGF2YWlsYWJsZSB2YWx1ZXMgZnJvbSBMb2dNYW5hZ2VyLmxvZ0xldmVsKVxyXG4gICAqIEBkZWZhdWx0IG5vbmUgXCJvbmx5IGluaXRpYWxpemF0aW9uIGlzIGxvZ2dlZFwiXHJcbiAgICovXHJcbiAgbG9nTGV2ZWw6IG51bWJlciA9IExvZ01hbmFnZXIubG9nTGV2ZWwubm9uZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRlbXBsYXRlcyA9IEdldEJvb3RzdHJhcFRlbXBsYXRlcygpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlKGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgY2FsbGJhY2s/OiAoY29uZmlnOiBQbHVnaW5PcHRpb25zKSA9PiB2b2lkKSB7XHJcblxyXG4gIGNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcihcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKTtcclxuXHJcbiAgbG9nZ2VyLmluZm8oXCJpbml0aWFsaXppbmcgYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtXCIpO1xyXG5cclxuICAvLyBjcmVhdGUgZGVmYXVsdHMvYXBwbHkgdXNlciBkZWZpbmVkIGNvbmZpZ3VyYXRpb25cclxuICBjb25zdCBvcHRpb25zID0gbmV3IFBsdWdpbk9wdGlvbnMoKTtcclxuICBpZiAoY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgY2FsbGJhY2sob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlckxvZ2dlcihsb2dnZXIsIG9wdGlvbnMsIGZyYW1ld29ya0NvbmZpZyk7XHJcblxyXG4gIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihsb2dnZXIsIG9wdGlvbnMsIGZyYW1ld29ya0NvbmZpZyk7XHJcblxyXG4gIChmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLmdldChSdWxlc0ZhY3RvcnkpIGFzIFJ1bGVzRmFjdG9yeSkucmVnaXN0ZXIoKTtcclxuXHJcbiAgZnJhbWV3b3JrQ29uZmlnLmdsb2JhbFJlc291cmNlcyhbXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm1cIiksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi92YWx1ZS1jb252ZXJ0ZXJzL251bWJlci12YWx1ZS1jb252ZXJ0ZXJcIiksXHJcblxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hcnJheS9zZi1hcnJheVwiKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vb2JqZWN0L3NmLW9iamVjdFwiKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vbnVtYmVyL3NmLW51bWJlclwiKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vdGV4dC9zZi1zdHJpbmdcIiksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL2Jvb2xlYW4vc2YtYm9vbGVhblwiKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3RlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwXCIpXHJcbiAgXSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckxvZ2dlcihcclxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgb3B0aW9uczogUGx1Z2luT3B0aW9ucyxcclxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cclxuKSB7XHJcbiAgbG9nZ2VyLnNldExldmVsKG9wdGlvbnMubG9nTGV2ZWwpO1xyXG5cclxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUxvZ2dlciwgbG9nZ2VyKTtcclxuXHJcbiAgbG9nZ2VyLmluZm8oXCJyZWdpc3RlcmVkIGxvZ2dlclwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJDb25maWd1cmF0aW9uKFxyXG4gIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxyXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxyXG4pIHtcclxuICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKFxyXG4gICAgb3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIsIG9wdGlvbnMudGVtcGxhdGVzLCBvcHRpb25zLnZhbGlkYXRpb25NZXNzYWdlcyk7XHJcblxyXG4gIGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgY29uZmlndXJhdGlvbik7XHJcblxyXG4gIGxvZ2dlci5pbmZvKFwicmVnaXN0ZXJlZCBjb25maWd1cmF0aW9uXCIsIGNvbmZpZ3VyYXRpb24pO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNvbmZpZ3VyZSxcclxuICBJVGVtcGxhdGVzLFxyXG4gIElWYWxpZGF0aW9uTWVzc2FnZXMsXHJcbiAgUGx1Z2luT3B0aW9ucyxcclxuICBJRm9ybU9wdGlvbnMsXHJcbiAgQXVKc29uU2NoZW1hRm9ybSxcclxuICBJRm9ybU92ZXJyaWRlLFxyXG4gIElGb3JtSW5zdGFuY2UsXHJcbiAgRm9ybUluc3RhbmNlcyxcclxuICBJVGVtcGxhdGVFbGVtZW50LFxyXG4gIElKc29uU2NoZW1hRGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uLFxyXG4gIElKc29uU2NoZW1hU3RyaW5nRGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uLFxyXG4gIFJ1bGVzRmFjdG9yeSxcclxuICBTdHJpbmdSdWxlcyxcclxuICBBcnJheVJ1bGVzLFxyXG4gIE51bWJlclJ1bGVzLFxyXG4gIENvbW1vblJ1bGVzLFxyXG4gIEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlclxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
