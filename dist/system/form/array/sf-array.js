System.register(["aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../resources/logger", "../../services/form-service", "../../rules/array-rules", "../../services/defaults-service", "../../services/form-instances", "jquery"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1, array_rules_1, defaults_service_1, form_instances_1, $, SfArray;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (form_service_1_1) {
                form_service_1 = form_service_1_1;
            },
            function (array_rules_1_1) {
                array_rules_1 = array_rules_1_1;
            },
            function (defaults_service_1_1) {
                defaults_service_1 = defaults_service_1_1;
            },
            function (form_instances_1_1) {
                form_instances_1 = form_instances_1_1;
            },
            function ($_1) {
                $ = $_1;
            }
        ],
        execute: function () {
            SfArray = /** @class */ (function () {
                function SfArray(arrayRules, configuration, formService, logger, defaultsService, formInstances) {
                    this.arrayRules = arrayRules;
                    this.configuration = configuration;
                    this.formService = formService;
                    this.logger = logger;
                    this.defaultsService = defaultsService;
                    this.formInstances = formInstances;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = "array";
                    this.binded = false;
                }
                SfArray.prototype.bind = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!!this.binded) return [3 /*break*/, 4];
                                    this.logger.info("sf-array", { form: this.form, model: this.model });
                                    this.formCtrl = this.formInstances.get(this.formInstance);
                                    this.bindRules();
                                    this.form.$arrayItem.$schema = this.form.$schema.items;
                                    return [4 /*yield*/, this.createItemView()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.determineViewStrategy()];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, this.initializeArray()];
                                case 3:
                                    _a.sent();
                                    this.binded = true;
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                };
                SfArray.prototype.initializeArray = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.form.$arrayItem.$schema.enum ||
                                        (this.model && this.model.length > 0) ||
                                        this.form.$noEmptyArrayInitialization ||
                                        this.formCtrl.formOptions.noEmptyArrayInitialization) {
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, this.add(!!this.formCtrl.formOptions.validateOnRender)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                SfArray.prototype.attached = function () {
                    this.logger.info("sf-array-attached");
                    if (this.formCtrl.formOptions.validateOnRender) {
                        this.validate();
                    }
                };
                SfArray.prototype.determineViewStrategy = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var strategy, content;
                        return __generator(this, function (_a) {
                            if (this.form.$altTemplate) {
                                strategy = this.form.$altTemplate;
                            }
                            else if (this.form.$arrayAsTabs) {
                                content = !!this.form.$tabTitle ? "" + this.form.$tabTitle : "${'Item ' + ($index + 1)}";
                                this.tabTitleTemplate = new aurelia_framework_1.InlineViewStrategy("<template>" + content + "</template>");
                                strategy = this.configuration.templates.arrayTabs;
                            }
                            else if (this.form.$schema.items.type === "string" && this.form.$schema.items.enum) {
                                strategy = this.configuration.templates.arrayStringEnum;
                            }
                            else {
                                strategy = this.configuration.templates.array;
                            }
                            this.viewStrategy = strategy;
                            return [2 /*return*/];
                        });
                    });
                };
                SfArray.prototype.createItemView = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var template;
                        return __generator(this, function (_a) {
                            this.logger.info("createView", { form: this.form.$arrayItem });
                            template = this.formService
                                .getSfTemplate("model[$index]", "form.$arrayItem", this.form.$arrayItem.$schema.type, this.formInstance);
                            this.logger.info("createView-template", { template: template });
                            this.itemViewStrategy = new aurelia_framework_1.InlineViewStrategy("<template>" + template + "</template>");
                            return [2 /*return*/];
                        });
                    });
                };
                SfArray.prototype.bindRules = function () {
                    this.arrayRules.bind(this);
                    this.formCtrl.validationController.addObject(this.model);
                };
                SfArray.prototype.add = function (validate) {
                    return __awaiter(this, void 0, void 0, function () {
                        var item, index;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(!this.isDisabled && !this.atCapacity)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.defaultsService.getSchemaDefaultAsync(this.form.$schema.items, null)];
                                case 1:
                                    item = _a.sent();
                                    index = this.model.push(item) - 1;
                                    this.selectTab(index);
                                    if (!validate) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.validate()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                SfArray.prototype.remove = function (index, validate) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.model.splice(index, 1);
                                    this.selectTab(this.model.length - 1);
                                    if (!validate) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.validate()];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    });
                };
                SfArray.prototype.selectTab = function (index) {
                    var _this = this;
                    if (this.tabTitleTemplate) {
                        setTimeout(function () {
                            $("a[href=\"#tab_" + _this.id + "_" + index + "\"]").tab("show");
                        }, 50);
                    }
                };
                Object.defineProperty(SfArray.prototype, "isDisabled", {
                    get: function () {
                        return this.form.$schema.readOnly || !!this.form.$schema.const;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SfArray.prototype, "atCapacity", {
                    get: function () {
                        return Number.isInteger(this.form.$schema.maxItems)
                            ? this.model.length >= this.form.$schema.maxItems : false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SfArray.prototype, "atMinimumCapacity", {
                    get: function () {
                        return Number.isInteger(this.form.$schema.minItems)
                            ? this.model.length === this.form.$schema.minItems : false;
                    },
                    enumerable: true,
                    configurable: true
                });
                SfArray.prototype.validate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.formCtrl.validationController.validate({ object: this.model })];
                                case 1:
                                    result = _a.sent();
                                    this.logger.info("validated array", result);
                                    this.errors = result.results
                                        .filter(function (r) { return !r.valid; });
                                    return [2 /*return*/, result];
                            }
                        });
                    });
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfArray.prototype, "form", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Array)
                ], SfArray.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfArray.prototype, "formInstance", void 0);
                SfArray = __decorate([
                    aurelia_framework_1.inject(array_rules_1.ArrayRules, schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger, defaults_service_1.DefaultsService, form_instances_1.FormInstances),
                    aurelia_framework_1.customElement("sf-array"),
                    __metadata("design:paramtypes", [array_rules_1.ArrayRules,
                        schema_form_configuration_1.SchemaFormConfiguration,
                        form_service_1.FormService,
                        logger_1.SchemaFormLogger,
                        defaults_service_1.DefaultsService,
                        form_instances_1.FormInstances])
                ], SfArray);
                return SfArray;
            }());
            exports_1("SfArray", SfArray);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBNkNFLGlCQUNTLFVBQXNCLEVBQ3RCLGFBQXNDLEVBQ3JDLFdBQXdCLEVBQ3hCLE1BQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLGFBQTRCO29CQUw3QixlQUFVLEdBQVYsVUFBVSxDQUFZO29CQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO29CQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkF4QnRDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBRTVCLFNBQUksR0FBRyxPQUFPLENBQUM7b0JBWWYsV0FBTSxHQUFZLEtBQUssQ0FBQztnQkFheEIsQ0FBQztnQkFFSyxzQkFBSSxHQUFWOzs7Ozt5Q0FDTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQVosd0JBQVk7b0NBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO29DQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQ0FDMUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29DQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29DQUN2RCxxQkFB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Ozs7Ozt3Q0FDaUIscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUE7O29DQUFsRixNQUFNLEdBQUcsU0FBeUU7b0NBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO29DQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPO3lDQUN6QixNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVIsQ0FBUSxDQUFDLENBQUM7b0NBQzNCLHNCQUFPLE1BQU0sRUFBQzs7OztpQkFDZjtnQkFsSlM7b0JBQVQsNEJBQVE7O3FEQUFxQjtnQkFDcEI7b0JBQVQsNEJBQVE7O3NEQUFjO2dCQUNiO29CQUFULDRCQUFROzs2REFBc0I7Z0JBSHBCLE9BQU87b0JBVG5CLDBCQUFNLENBQ0wsd0JBQVUsRUFDVixtREFBdUIsRUFDdkIsMEJBQVcsRUFDWCx5QkFBZ0IsRUFDaEIsa0NBQWUsRUFDZiw4QkFBYSxDQUNkO29CQUNBLGlDQUFhLENBQUMsVUFBVSxDQUFDO3FEQXlCSCx3QkFBVTt3QkFDUCxtREFBdUI7d0JBQ3hCLDBCQUFXO3dCQUNoQix5QkFBZ0I7d0JBQ1Asa0NBQWU7d0JBQ2pCLDhCQUFhO21CQTdCM0IsT0FBTyxDQW9KbkI7Z0JBQUQsY0FBQzthQXBKRCxBQW9KQzs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGVSZXN1bHQgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tIFwiLi4vLi4vcnVsZXMvYXJyYXktcnVsZXNcIjtcclxuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlc1wiO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbkBpbmplY3QoXHJcbiAgQXJyYXlSdWxlcyxcclxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICBGb3JtU2VydmljZSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIERlZmF1bHRzU2VydmljZSxcclxuICBGb3JtSW5zdGFuY2VzXHJcbilcclxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxyXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcclxuICBAYmluZGFibGUgZm9ybUluc3RhbmNlOiBzdHJpbmc7XHJcblxyXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcclxuXHJcbiAga2luZCA9IFwiYXJyYXlcIjtcclxuXHJcbiAgdmlld1N0cmF0ZWd5OiBzdHJpbmc7XHJcblxyXG4gIGl0ZW1WaWV3U3RyYXRlZ3k6IElubGluZVZpZXdTdHJhdGVneTtcclxuXHJcbiAgdGFiVGl0bGVUZW1wbGF0ZTogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXTtcclxuXHJcbiAgZXJyb3JzOiBWYWxpZGF0ZVJlc3VsdFtdO1xyXG5cclxuICBiaW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ3RybDogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYXJyYXlSdWxlczogQXJyYXlSdWxlcyxcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgYXN5bmMgYmluZCgpIHtcclxuICAgIGlmICghdGhpcy5iaW5kZWQpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5XCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcclxuICAgICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgICB0aGlzLmJpbmRSdWxlcygpO1xyXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEuaXRlbXM7XHJcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbVZpZXcoKTtcclxuICAgICAgYXdhaXQgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcclxuICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplQXJyYXkoKTtcclxuICAgICAgdGhpcy5iaW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdGlhbGl6ZUFycmF5KCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLmVudW0gfHxcclxuICAgICAgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggPiAwKSB8fFxyXG4gICAgICB0aGlzLmZvcm0uJG5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uIHx8XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMubm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb25cclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmFkZCghIXRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcik7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1hcnJheS1hdHRhY2hlZFwiKTtcclxuICAgIGlmICh0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xyXG4gICAgbGV0IHN0cmF0ZWd5O1xyXG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcclxuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJGFycmF5QXNUYWJzKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAhIXRoaXMuZm9ybS4kdGFiVGl0bGUgPyBgJHt0aGlzLmZvcm0uJHRhYlRpdGxlfWAgOiBcIiR7J0l0ZW0gJyArICgkaW5kZXggKyAxKX1cIjtcclxuICAgICAgdGhpcy50YWJUaXRsZVRlbXBsYXRlID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7Y29udGVudH08L3RlbXBsYXRlPmApO1xyXG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlUYWJzO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy50eXBlID09PSBcInN0cmluZ1wiICYmIHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLmVudW0pIHtcclxuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmFycmF5U3RyaW5nRW51bTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheTtcclxuICAgIH1cclxuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVJdGVtVmlldygpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVWaWV3XCIsIHsgZm9ybTogdGhpcy5mb3JtLiRhcnJheUl0ZW0gfSk7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZm9ybVNlcnZpY2VcclxuICAgICAgLmdldFNmVGVtcGxhdGUoXHJcbiAgICAgICAgXCJtb2RlbFskaW5kZXhdXCIsXHJcbiAgICAgICAgXCJmb3JtLiRhcnJheUl0ZW1cIixcclxuICAgICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLnR5cGUsXHJcbiAgICAgICAgdGhpcy5mb3JtSW5zdGFuY2VcclxuICAgICAgKTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVWaWV3LXRlbXBsYXRlXCIsIHsgdGVtcGxhdGUgfSk7XHJcbiAgICB0aGlzLml0ZW1WaWV3U3RyYXRlZ3kgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZX08L3RlbXBsYXRlPmApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kUnVsZXMoKSB7XHJcbiAgICB0aGlzLmFycmF5UnVsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkT2JqZWN0KHRoaXMubW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgYWRkKHZhbGlkYXRlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5hdENhcGFjaXR5KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmModGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMsIG51bGwpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubW9kZWwucHVzaChpdGVtKSAtIDE7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGFiKGluZGV4KTtcclxuICAgICAgaWYgKHZhbGlkYXRlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyByZW1vdmUoaW5kZXg6IG51bWJlciwgdmFsaWRhdGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMubW9kZWwubGVuZ3RoIC0gMSk7XHJcbiAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RUYWIoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudGFiVGl0bGVUZW1wbGF0ZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKGBhW2hyZWY9XCIjdGFiXyR7dGhpcy5pZH1fJHtpbmRleH1cIl1gKS50YWIoXCJzaG93XCIpO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kc2NoZW1hLmNvbnN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcylcclxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA+PSB0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMpXHJcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhc3luYyB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidmFsaWRhdGVkIGFycmF5XCIsIHJlc3VsdCk7XHJcbiAgICB0aGlzLmVycm9ycyA9IHJlc3VsdC5yZXN1bHRzXHJcbiAgICAgIC5maWx0ZXIoKHIpID0+ICFyLnZhbGlkKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
