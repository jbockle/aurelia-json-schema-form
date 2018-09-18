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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var guid_1 = require("../../resources/guid");
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var logger_1 = require("../../resources/logger");
var form_service_1 = require("../../services/form-service");
var array_rules_1 = require("../../rules/array-rules");
var defaults_service_1 = require("../../services/defaults-service");
var form_instances_1 = require("../../services/form-instances");
var $ = require("jquery");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMvRCxDQUFDOzs7T0FBQTtJQUVLLDBCQUFRLEdBQWQ7Ozs7OzRCQUNpQixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQTs7d0JBQWxGLE1BQU0sR0FBRyxTQUF5RTt3QkFDeEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU87NkJBQ3pCLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBUixDQUFRLENBQUMsQ0FBQzt3QkFDM0Isc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2Y7SUFsSlM7UUFBVCw0QkFBUTs7eUNBQXFCO0lBQ3BCO1FBQVQsNEJBQVE7OzBDQUFjO0lBQ2I7UUFBVCw0QkFBUTs7aURBQXNCO0lBSHBCLE9BQU87UUFUbkIsMEJBQU0sQ0FDTCx3QkFBVSxFQUNWLG1EQUF1QixFQUN2QiwwQkFBVyxFQUNYLHlCQUFnQixFQUNoQixrQ0FBZSxFQUNmLDhCQUFhLENBQ2Q7UUFDQSxpQ0FBYSxDQUFDLFVBQVUsQ0FBQzt5Q0F5Qkgsd0JBQVU7WUFDUCxtREFBdUI7WUFDeEIsMEJBQVc7WUFDaEIseUJBQWdCO1lBQ1Asa0NBQWU7WUFDakIsOEJBQWE7T0E3QjNCLE9BQU8sQ0FvSm5CO0lBQUQsY0FBQztDQXBKRCxBQW9KQyxJQUFBO0FBcEpZLDBCQUFPIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdGVSZXN1bHQgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSAnLi4vLi4vcnVsZXMvYXJyYXktcnVsZXMnO1xyXG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbkBpbmplY3QoXHJcbiAgQXJyYXlSdWxlcyxcclxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICBGb3JtU2VydmljZSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIERlZmF1bHRzU2VydmljZSxcclxuICBGb3JtSW5zdGFuY2VzXHJcbilcclxuQGN1c3RvbUVsZW1lbnQoJ3NmLWFycmF5JylcclxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSAnYXJyYXknO1xyXG5cclxuICB2aWV3U3RyYXRlZ3k6IHN0cmluZztcclxuXHJcbiAgaXRlbVZpZXdTdHJhdGVneTogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICB0YWJUaXRsZVRlbXBsYXRlOiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdO1xyXG5cclxuICBlcnJvcnM6IFZhbGlkYXRlUmVzdWx0W107XHJcblxyXG4gIGJpbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzLFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZGVmYXVsdHNTZXJ2aWNlOiBEZWZhdWx0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHtcclxuXHJcbiAgfVxyXG5cclxuICBhc3luYyBiaW5kKCkge1xyXG4gICAgaWYgKCF0aGlzLmJpbmRlZCkge1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1hcnJheScsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcclxuICAgICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgICB0aGlzLmJpbmRSdWxlcygpO1xyXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEuaXRlbXM7XHJcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbVZpZXcoKTtcclxuICAgICAgYXdhaXQgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcclxuICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplQXJyYXkoKTtcclxuICAgICAgdGhpcy5iaW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdGlhbGl6ZUFycmF5KCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLmVudW0gfHxcclxuICAgICAgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggPiAwKSB8fFxyXG4gICAgICB0aGlzLmZvcm0uJG5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uIHx8XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMubm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb25cclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmFkZCghIXRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcik7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLWFycmF5LWF0dGFjaGVkJyk7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcclxuICAgIGxldCBzdHJhdGVneTtcclxuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRhcnJheUFzVGFicykge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gISF0aGlzLmZvcm0uJHRhYlRpdGxlID8gYCR7dGhpcy5mb3JtLiR0YWJUaXRsZX1gIDogJyR7XFwnSXRlbSBcXCcgKyAoJGluZGV4ICsgMSl9JztcclxuICAgICAgdGhpcy50YWJUaXRsZVRlbXBsYXRlID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7Y29udGVudH08L3RlbXBsYXRlPmApO1xyXG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlUYWJzO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy50eXBlID09PSAnc3RyaW5nJyAmJiB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy5lbnVtKSB7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheVN0cmluZ0VudW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpZXdTdHJhdGVneSA9IHN0cmF0ZWd5O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlSXRlbVZpZXcoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdjcmVhdGVWaWV3JywgeyBmb3JtOiB0aGlzLmZvcm0uJGFycmF5SXRlbSB9KTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZVxyXG4gICAgICAuZ2V0U2ZUZW1wbGF0ZShcclxuICAgICAgICAnbW9kZWxbJGluZGV4XScsXHJcbiAgICAgICAgJ2Zvcm0uJGFycmF5SXRlbScsXHJcbiAgICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYS50eXBlLFxyXG4gICAgICAgIHRoaXMuZm9ybUluc3RhbmNlXHJcbiAgICAgICk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdjcmVhdGVWaWV3LXRlbXBsYXRlJywgeyB0ZW1wbGF0ZSB9KTtcclxuICAgIHRoaXMuaXRlbVZpZXdTdHJhdGVneSA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlfTwvdGVtcGxhdGU+YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRSdWxlcygpIHtcclxuICAgIHRoaXMuYXJyYXlSdWxlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBhZGQodmFsaWRhdGU6IGJvb2xlYW4pIHtcclxuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmF0Q2FwYWNpdHkpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcywgbnVsbCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tb2RlbC5wdXNoKGl0ZW0pIC0gMTtcclxuICAgICAgdGhpcy5zZWxlY3RUYWIoaW5kZXgpO1xyXG4gICAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHJlbW92ZShpbmRleDogbnVtYmVyLCB2YWxpZGF0ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5zZWxlY3RUYWIodGhpcy5tb2RlbC5sZW5ndGggLSAxKTtcclxuICAgIGlmICh2YWxpZGF0ZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdFRhYihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy50YWJUaXRsZVRlbXBsYXRlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoYGFbaHJlZj1cIiN0YWJfJHt0aGlzLmlkfV8ke2luZGV4fVwiXWApLnRhYignc2hvdycpO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kc2NoZW1hLmNvbnN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcylcclxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA+PSB0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMpXHJcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhc3luYyB2YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCd2YWxpZGF0ZWQgYXJyYXknLCByZXN1bHQpO1xyXG4gICAgdGhpcy5lcnJvcnMgPSByZXN1bHQucmVzdWx0c1xyXG4gICAgICAuZmlsdGVyKChyKSA9PiAhci52YWxpZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
