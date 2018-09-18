System.register(["aurelia-framework", "../../resources/guid", "../../resources/logger", "../../services/form-service", "../../rules/array-rules", "../../services/defaults-service", "../../services/form-instances", "jquery"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, logger_1, form_service_1, array_rules_1, defaults_service_1, form_instances_1, $, SfArray;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
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
                function SfArray(arrayRules, formService, logger, defaultsService, formInstances) {
                    this.arrayRules = arrayRules;
                    this.formService = formService;
                    this.logger = logger;
                    this.defaultsService = defaultsService;
                    this.formInstances = formInstances;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = 'array';
                    this.binded = false;
                }
                SfArray.prototype.bind = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!!this.binded) return [3 /*break*/, 4];
                                    this.logger.info('sf-array', { form: this.form, model: this.model });
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
                    this.logger.info('sf-array-attached');
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
                                content = !!this.form.$tabTitle ? "" + this.form.$tabTitle : '${\'Item \' + ($index + 1)}';
                                this.tabTitleTemplate = new aurelia_framework_1.InlineViewStrategy("<template>" + content + "</template>");
                                strategy = this.formService.getTemplatePath('arrayTabs');
                            }
                            else if (this.form.$schema.items.type === 'string' && this.form.$schema.items.enum) {
                                strategy = this.formService.getTemplatePath('arrayStringEnum');
                            }
                            else {
                                strategy = this.formService.getTemplatePath('array');
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
                            this.logger.info('createView', { form: this.form.$arrayItem });
                            template = this.formService
                                .getSfTemplate('model[$index]', 'form.$arrayItem', this.form.$arrayItem.$schema.type, this.formInstance);
                            this.logger.info('createView-template', { template: template });
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
                            $("a[href=\"#tab_" + _this.id + "_" + index + "\"]").tab('show');
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
                                    this.logger.info('validated array', result);
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
                    aurelia_framework_1.inject(array_rules_1.ArrayRules, form_service_1.FormService, logger_1.SchemaFormLogger, defaults_service_1.DefaultsService, form_instances_1.FormInstances),
                    aurelia_framework_1.customElement('sf-array'),
                    __metadata("design:paramtypes", [array_rules_1.ArrayRules,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBMkNFLGlCQUNTLFVBQXNCLEVBQ3JCLFdBQXdCLEVBQ3hCLE1BQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLGFBQTRCO29CQUo3QixlQUFVLEdBQVYsVUFBVSxDQUFZO29CQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBdkJ0QyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUU1QixTQUFJLEdBQUcsT0FBTyxDQUFDO29CQVlmLFdBQU0sR0FBWSxLQUFLLENBQUM7Z0JBWXhCLENBQUM7Z0JBRUssc0JBQUksR0FBVjs7Ozs7eUNBQ00sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFaLHdCQUFZO29DQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQ0FDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0NBQzFELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQ0FDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQ0FDdkQscUJBQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFBOztvQ0FBM0IsU0FBMkIsQ0FB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LFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUE7O29DQUFsRixNQUFNLEdBQUcsU0FBeUU7b0NBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO29DQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPO3lDQUN6QixNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVIsQ0FBUSxDQUFDLENBQUM7b0NBQzNCLHNCQUFPLE1BQU0sRUFBQzs7OztpQkFDZjtnQkFqSlM7b0JBQVQsNEJBQVE7O3FEQUFxQjtnQkFDcEI7b0JBQVQsNEJBQVE7O3NEQUFjO2dCQUNiO29CQUFULDRCQUFROzs2REFBc0I7Z0JBSHBCLE9BQU87b0JBUm5CLDBCQUFNLENBQ0wsd0JBQVUsRUFDViwwQkFBVyxFQUNYLHlCQUFnQixFQUNoQixrQ0FBZSxFQUNmLDhCQUFhLENBQ2Q7b0JBQ0EsaUNBQWEsQ0FBQyxVQUFVLENBQUM7cURBeUJILHdCQUFVO3dCQUNSLDBCQUFXO3dCQUNoQix5QkFBZ0I7d0JBQ1Asa0NBQWU7d0JBQ2pCLDhCQUFhO21CQTVCM0IsT0FBTyxDQW1KbkI7Z0JBQUQsY0FBQzthQW5KRCxBQW1KQzs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdGVSZXN1bHQgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSAnLi4vLi4vcnVsZXMvYXJyYXktcnVsZXMnO1xyXG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbkBpbmplY3QoXHJcbiAgQXJyYXlSdWxlcyxcclxuICBGb3JtU2VydmljZSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIERlZmF1bHRzU2VydmljZSxcclxuICBGb3JtSW5zdGFuY2VzXHJcbilcclxuQGN1c3RvbUVsZW1lbnQoJ3NmLWFycmF5JylcclxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSAnYXJyYXknO1xyXG5cclxuICB2aWV3U3RyYXRlZ3k6IHN0cmluZztcclxuXHJcbiAgaXRlbVZpZXdTdHJhdGVneTogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICB0YWJUaXRsZVRlbXBsYXRlOiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdO1xyXG5cclxuICBlcnJvcnM6IFZhbGlkYXRlUmVzdWx0W107XHJcblxyXG4gIGJpbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzLFxyXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZGVmYXVsdHNTZXJ2aWNlOiBEZWZhdWx0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHtcclxuXHJcbiAgfVxyXG5cclxuICBhc3luYyBiaW5kKCkge1xyXG4gICAgaWYgKCF0aGlzLmJpbmRlZCkge1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1hcnJheScsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcclxuICAgICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgICB0aGlzLmJpbmRSdWxlcygpO1xyXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEuaXRlbXM7XHJcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbVZpZXcoKTtcclxuICAgICAgYXdhaXQgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcclxuICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplQXJyYXkoKTtcclxuICAgICAgdGhpcy5iaW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdGlhbGl6ZUFycmF5KCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLmVudW0gfHxcclxuICAgICAgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggPiAwKSB8fFxyXG4gICAgICB0aGlzLmZvcm0uJG5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uIHx8XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMubm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb25cclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmFkZCghIXRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcik7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLWFycmF5LWF0dGFjaGVkJyk7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcclxuICAgIGxldCBzdHJhdGVneTtcclxuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRhcnJheUFzVGFicykge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gISF0aGlzLmZvcm0uJHRhYlRpdGxlID8gYCR7dGhpcy5mb3JtLiR0YWJUaXRsZX1gIDogJyR7XFwnSXRlbSBcXCcgKyAoJGluZGV4ICsgMSl9JztcclxuICAgICAgdGhpcy50YWJUaXRsZVRlbXBsYXRlID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7Y29udGVudH08L3RlbXBsYXRlPmApO1xyXG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKCdhcnJheVRhYnMnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMudHlwZSA9PT0gJ3N0cmluZycgJiYgdGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMuZW51bSkge1xyXG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKCdhcnJheVN0cmluZ0VudW0nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZVBhdGgoJ2FycmF5Jyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpZXdTdHJhdGVneSA9IHN0cmF0ZWd5O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlSXRlbVZpZXcoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdjcmVhdGVWaWV3JywgeyBmb3JtOiB0aGlzLmZvcm0uJGFycmF5SXRlbSB9KTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZVxyXG4gICAgICAuZ2V0U2ZUZW1wbGF0ZShcclxuICAgICAgICAnbW9kZWxbJGluZGV4XScsXHJcbiAgICAgICAgJ2Zvcm0uJGFycmF5SXRlbScsXHJcbiAgICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYS50eXBlLFxyXG4gICAgICAgIHRoaXMuZm9ybUluc3RhbmNlXHJcbiAgICAgICk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdjcmVhdGVWaWV3LXRlbXBsYXRlJywgeyB0ZW1wbGF0ZSB9KTtcclxuICAgIHRoaXMuaXRlbVZpZXdTdHJhdGVneSA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlfTwvdGVtcGxhdGU+YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRSdWxlcygpIHtcclxuICAgIHRoaXMuYXJyYXlSdWxlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBhZGQodmFsaWRhdGU6IGJvb2xlYW4pIHtcclxuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmF0Q2FwYWNpdHkpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcywgbnVsbCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tb2RlbC5wdXNoKGl0ZW0pIC0gMTtcclxuICAgICAgdGhpcy5zZWxlY3RUYWIoaW5kZXgpO1xyXG4gICAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHJlbW92ZShpbmRleDogbnVtYmVyLCB2YWxpZGF0ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5zZWxlY3RUYWIodGhpcy5tb2RlbC5sZW5ndGggLSAxKTtcclxuICAgIGlmICh2YWxpZGF0ZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdFRhYihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy50YWJUaXRsZVRlbXBsYXRlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoYGFbaHJlZj1cIiN0YWJfJHt0aGlzLmlkfV8ke2luZGV4fVwiXWApLnRhYignc2hvdycpO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kc2NoZW1hLmNvbnN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcylcclxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA+PSB0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMpXHJcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhc3luYyB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCd2YWxpZGF0ZWQgYXJyYXknLCByZXN1bHQpO1xyXG4gICAgdGhpcy5lcnJvcnMgPSByZXN1bHQucmVzdWx0c1xyXG4gICAgICAuZmlsdGVyKChyKSA9PiAhci52YWxpZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
