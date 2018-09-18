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
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../resources/logger", "../../services/form-service", "../../rules/array-rules", "../../services/defaults-service", "../../services/form-instances", "jquery"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1, array_rules_1, defaults_service_1, form_instances_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfArray = /** @class */ (function () {
        function SfArray(arrayRules, configuration, formService, logger, defaultsService, formInstances) {
            this.arrayRules = arrayRules;
            this.configuration = configuration;
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
                        strategy = this.configuration.templates.arrayTabs;
                    }
                    else if (this.form.$schema.items.type === 'string' && this.form.$schema.items.enum) {
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
            aurelia_framework_1.inject(array_rules_1.ArrayRules, schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger, defaults_service_1.DefaultsService, form_instances_1.FormInstances),
            aurelia_framework_1.customElement('sf-array'),
            __metadata("design:paramtypes", [array_rules_1.ArrayRules,
                schema_form_configuration_1.SchemaFormConfiguration,
                form_service_1.FormService,
                logger_1.SchemaFormLogger,
                defaults_service_1.DefaultsService,
                form_instances_1.FormInstances])
        ], SfArray);
        return SfArray;
    }());
    exports.SfArray = SfArray;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQkE7UUF1QkUsaUJBQ1MsVUFBc0IsRUFDdEIsYUFBc0MsRUFDckMsV0FBd0IsRUFDeEIsTUFBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsYUFBNEI7WUFMN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtZQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7WUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7WUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7WUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBeEJ0QyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTVCLFNBQUksR0FBRyxPQUFPLENBQUM7WUFZZixXQUFNLEdBQVksS0FBSyxDQUFDO1FBYXhCLENBQUM7UUFFSyxzQkFBSSxHQUFWOzs7OztpQ0FDTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQVosd0JBQVk7NEJBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDOzRCQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDMUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOzRCQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOzRCQUN2RCxxQkFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUE7OzRCQUEzQixTQUEy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LElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFBOzs0QkFBbEYsTUFBTSxHQUFHLFNBQXlFOzRCQUN4RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQzs0QkFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTztpQ0FDekIsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFSLENBQVEsQ0FBQyxDQUFDOzRCQUMzQixzQkFBTyxNQUFNLEVBQUM7Ozs7U0FDZjtRQWxKUztZQUFULDRCQUFROzs2Q0FBcUI7UUFDcEI7WUFBVCw0QkFBUTs7OENBQWM7UUFDYjtZQUFULDRCQUFROztxREFBc0I7UUFIcEIsT0FBTztZQVRuQiwwQkFBTSxDQUNMLHdCQUFVLEVBQ1YsbURBQXVCLEVBQ3ZCLDBCQUFXLEVBQ1gseUJBQWdCLEVBQ2hCLGtDQUFlLEVBQ2YsOEJBQWEsQ0FDZDtZQUNBLGlDQUFhLENBQUMsVUFBVSxDQUFDOzZDQXlCSCx3QkFBVTtnQkFDUCxtREFBdUI7Z0JBQ3hCLDBCQUFXO2dCQUNoQix5QkFBZ0I7Z0JBQ1Asa0NBQWU7Z0JBQ2pCLDhCQUFhO1dBN0IzQixPQUFPLENBb0puQjtRQUFELGNBQUM7S0FwSkQsQUFvSkMsSUFBQTtJQXBKWSwwQkFBTyIsImZpbGUiOiJmb3JtL2FycmF5L3NmLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2d1aWQnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2xvZ2dlcic7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRlUmVzdWx0IH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcclxuaW1wb3J0IHsgQXJyYXlSdWxlcyB9IGZyb20gJy4uLy4uL3J1bGVzL2FycmF5LXJ1bGVzJztcclxuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVmYXVsdHMtc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlcyc7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2UnO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5AaW5qZWN0KFxyXG4gIEFycmF5UnVsZXMsXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgRm9ybVNlcnZpY2UsXHJcbiAgU2NoZW1hRm9ybUxvZ2dlcixcclxuICBEZWZhdWx0c1NlcnZpY2UsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KCdzZi1hcnJheScpXHJcbmV4cG9ydCBjbGFzcyBTZkFycmF5IHtcclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuICBAYmluZGFibGUgbW9kZWw6IGFueVtdO1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICBraW5kID0gJ2FycmF5JztcclxuXHJcbiAgdmlld1N0cmF0ZWd5OiBzdHJpbmc7XHJcblxyXG4gIGl0ZW1WaWV3U3RyYXRlZ3k6IElubGluZVZpZXdTdHJhdGVneTtcclxuXHJcbiAgdGFiVGl0bGVUZW1wbGF0ZTogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXTtcclxuXHJcbiAgZXJyb3JzOiBWYWxpZGF0ZVJlc3VsdFtdO1xyXG5cclxuICBiaW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ3RybDogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYXJyYXlSdWxlczogQXJyYXlSdWxlcyxcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgYXN5bmMgYmluZCgpIHtcclxuICAgIGlmICghdGhpcy5iaW5kZWQpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnc2YtYXJyYXknLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwgfSk7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgICAgdGhpcy5iaW5kUnVsZXMoKTtcclxuICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYSA9IHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zO1xyXG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1WaWV3KCk7XHJcbiAgICAgIGF3YWl0IHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XHJcbiAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUFycmF5KCk7XHJcbiAgICAgIHRoaXMuYmluZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGluaXRpYWxpemVBcnJheSgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYS5lbnVtIHx8XHJcbiAgICAgICh0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwubGVuZ3RoID4gMCkgfHxcclxuICAgICAgdGhpcy5mb3JtLiRub0VtcHR5QXJyYXlJbml0aWFsaXphdGlvbiB8fFxyXG4gICAgICB0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLm5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy5hZGQoISF0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1hcnJheS1hdHRhY2hlZCcpO1xyXG4gICAgaWYgKHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBkZXRlcm1pbmVWaWV3U3RyYXRlZ3koKSB7XHJcbiAgICBsZXQgc3RyYXRlZ3k7XHJcbiAgICBpZiAodGhpcy5mb3JtLiRhbHRUZW1wbGF0ZSkge1xyXG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS4kYXJyYXlBc1RhYnMpIHtcclxuICAgICAgY29uc3QgY29udGVudCA9ICEhdGhpcy5mb3JtLiR0YWJUaXRsZSA/IGAke3RoaXMuZm9ybS4kdGFiVGl0bGV9YCA6ICcke1xcJ0l0ZW0gXFwnICsgKCRpbmRleCArIDEpfSc7XHJcbiAgICAgIHRoaXMudGFiVGl0bGVUZW1wbGF0ZSA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke2NvbnRlbnR9PC90ZW1wbGF0ZT5gKTtcclxuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmFycmF5VGFicztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMudHlwZSA9PT0gJ3N0cmluZycgJiYgdGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMuZW51bSkge1xyXG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlTdHJpbmdFbnVtO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmFycmF5O1xyXG4gICAgfVxyXG4gICAgdGhpcy52aWV3U3RyYXRlZ3kgPSBzdHJhdGVneTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZUl0ZW1WaWV3KCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnY3JlYXRlVmlldycsIHsgZm9ybTogdGhpcy5mb3JtLiRhcnJheUl0ZW0gfSk7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZm9ybVNlcnZpY2VcclxuICAgICAgLmdldFNmVGVtcGxhdGUoXHJcbiAgICAgICAgJ21vZGVsWyRpbmRleF0nLFxyXG4gICAgICAgICdmb3JtLiRhcnJheUl0ZW0nLFxyXG4gICAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEudHlwZSxcclxuICAgICAgICB0aGlzLmZvcm1JbnN0YW5jZVxyXG4gICAgICApO1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnY3JlYXRlVmlldy10ZW1wbGF0ZScsIHsgdGVtcGxhdGUgfSk7XHJcbiAgICB0aGlzLml0ZW1WaWV3U3RyYXRlZ3kgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZX08L3RlbXBsYXRlPmApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kUnVsZXMoKSB7XHJcbiAgICB0aGlzLmFycmF5UnVsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkT2JqZWN0KHRoaXMubW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgYWRkKHZhbGlkYXRlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5hdENhcGFjaXR5KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmModGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMsIG51bGwpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubW9kZWwucHVzaChpdGVtKSAtIDE7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGFiKGluZGV4KTtcclxuICAgICAgaWYgKHZhbGlkYXRlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyByZW1vdmUoaW5kZXg6IG51bWJlciwgdmFsaWRhdGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMubW9kZWwubGVuZ3RoIC0gMSk7XHJcbiAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RUYWIoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudGFiVGl0bGVUZW1wbGF0ZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKGBhW2hyZWY9XCIjdGFiXyR7dGhpcy5pZH1fJHtpbmRleH1cIl1gKS50YWIoJ3Nob3cnKTtcclxuICAgICAgfSwgNTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEucmVhZE9ubHkgfHwgISF0aGlzLmZvcm0uJHNjaGVtYS5jb25zdDtcclxuICB9XHJcblxyXG4gIGdldCBhdENhcGFjaXR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWF4SXRlbXMpXHJcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPj0gdGhpcy5mb3JtLiRzY2hlbWEubWF4SXRlbXMgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldCBhdE1pbmltdW1DYXBhY2l0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zKVxyXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID09PSB0aGlzLmZvcm0uJHNjaGVtYS5taW5JdGVtcyA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdmFsaWRhdGUoKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygndmFsaWRhdGVkIGFycmF5JywgcmVzdWx0KTtcclxuICAgIHRoaXMuZXJyb3JzID0gcmVzdWx0LnJlc3VsdHNcclxuICAgICAgLmZpbHRlcigocikgPT4gIXIudmFsaWQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
