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
var logger_1 = require("../../resources/logger");
var form_service_1 = require("../../services/form-service");
var array_rules_1 = require("../../rules/array-rules");
var defaults_service_1 = require("../../services/defaults-service");
var form_instances_1 = require("../../services/form-instances");
var $ = require("jquery");
var SfArray = /** @class */ (function () {
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
exports.SfArray = SfArray;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF3RjtBQUN4Riw2Q0FBNEM7QUFDNUMsaURBQTBEO0FBRTFELDREQUEwRDtBQUUxRCx1REFBcUQ7QUFDckQsb0VBQWtFO0FBQ2xFLGdFQUE4RDtBQUU5RCwwQkFBNEI7QUFVNUI7SUF1QkUsaUJBQ1MsVUFBc0IsRUFDckIsV0FBd0IsRUFDeEIsTUFBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsYUFBNEI7UUFKN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF2QnRDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLE9BQU8sQ0FBQztRQVlmLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFZeEIsQ0FBQztJQUVLLHNCQUFJLEdBQVY7Ozs7OzZCQUNNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBWix3QkFBWTt3QkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7d0JBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FB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OzRCQUNpQixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQTs7d0JBQWxGLE1BQU0sR0FBRyxTQUF5RTt3QkFDeEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU87NkJBQ3pCLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBUixDQUFRLENBQUMsQ0FBQzt3QkFDM0Isc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2Y7SUFqSlM7UUFBVCw0QkFBUTs7eUNBQXFCO0lBQ3BCO1FBQVQsNEJBQVE7OzBDQUFjO0lBQ2I7UUFBVCw0QkFBUTs7aURBQXNCO0lBSHBCLE9BQU87UUFSbkIsMEJBQU0sQ0FDTCx3QkFBVSxFQUNWLDBCQUFXLEVBQ1gseUJBQWdCLEVBQ2hCLGtDQUFlLEVBQ2YsOEJBQWEsQ0FDZDtRQUNBLGlDQUFhLENBQUMsVUFBVSxDQUFDO3lDQXlCSCx3QkFBVTtZQUNSLDBCQUFXO1lBQ2hCLHlCQUFnQjtZQUNQLGtDQUFlO1lBQ2pCLDhCQUFhO09BNUIzQixPQUFPLENBbUpuQjtJQUFELGNBQUM7Q0FuSkQsQUFtSkMsSUFBQTtBQW5KWSwwQkFBTyIsImZpbGUiOiJmb3JtL2FycmF5L3NmLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9ndWlkJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyJztcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2UnO1xuaW1wb3J0IHsgVmFsaWRhdGVSZXN1bHQgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgQXJyYXlSdWxlcyB9IGZyb20gJy4uLy4uL3J1bGVzL2FycmF5LXJ1bGVzJztcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2UnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5AaW5qZWN0KFxuICBBcnJheVJ1bGVzLFxuICBGb3JtU2VydmljZSxcbiAgU2NoZW1hRm9ybUxvZ2dlcixcbiAgRGVmYXVsdHNTZXJ2aWNlLFxuICBGb3JtSW5zdGFuY2VzXG4pXG5AY3VzdG9tRWxlbWVudCgnc2YtYXJyYXknKVxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBraW5kID0gJ2FycmF5JztcblxuICB2aWV3U3RyYXRlZ3k6IHN0cmluZztcblxuICBpdGVtVmlld1N0cmF0ZWd5OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgdGFiVGl0bGVUZW1wbGF0ZTogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdO1xuXG4gIGVycm9yczogVmFsaWRhdGVSZXN1bHRbXTtcblxuICBiaW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzLFxuICAgIHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHByaXZhdGUgZGVmYXVsdHNTZXJ2aWNlOiBEZWZhdWx0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXG4gICkge1xuXG4gIH1cblxuICBhc3luYyBiaW5kKCkge1xuICAgIGlmICghdGhpcy5iaW5kZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLWFycmF5JywgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xuICAgICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xuICAgICAgdGhpcy5iaW5kUnVsZXMoKTtcbiAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcztcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbVZpZXcoKTtcbiAgICAgIGF3YWl0IHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XG4gICAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVBcnJheSgpO1xuICAgICAgdGhpcy5iaW5kZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemVBcnJheSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLmVudW0gfHxcbiAgICAgICh0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwubGVuZ3RoID4gMCkgfHxcbiAgICAgIHRoaXMuZm9ybS4kbm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb24gfHxcbiAgICAgIHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMubm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb25cbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5hZGQoISF0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2YtYXJyYXktYXR0YWNoZWQnKTtcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xuICAgIGxldCBzdHJhdGVneTtcbiAgICBpZiAodGhpcy5mb3JtLiRhbHRUZW1wbGF0ZSkge1xuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRhcnJheUFzVGFicykge1xuICAgICAgY29uc3QgY29udGVudCA9ICEhdGhpcy5mb3JtLiR0YWJUaXRsZSA/IGAke3RoaXMuZm9ybS4kdGFiVGl0bGV9YCA6ICcke1xcJ0l0ZW0gXFwnICsgKCRpbmRleCArIDEpfSc7XG4gICAgICB0aGlzLnRhYlRpdGxlVGVtcGxhdGUgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHtjb250ZW50fTwvdGVtcGxhdGU+YCk7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKCdhcnJheVRhYnMnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLnR5cGUgPT09ICdzdHJpbmcnICYmIHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLmVudW0pIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZVBhdGgoJ2FycmF5U3RyaW5nRW51bScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKCdhcnJheScpO1xuICAgIH1cbiAgICB0aGlzLnZpZXdTdHJhdGVneSA9IHN0cmF0ZWd5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlSXRlbVZpZXcoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnY3JlYXRlVmlldycsIHsgZm9ybTogdGhpcy5mb3JtLiRhcnJheUl0ZW0gfSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmZvcm1TZXJ2aWNlXG4gICAgICAuZ2V0U2ZUZW1wbGF0ZShcbiAgICAgICAgJ21vZGVsWyRpbmRleF0nLFxuICAgICAgICAnZm9ybS4kYXJyYXlJdGVtJyxcbiAgICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYS50eXBlLFxuICAgICAgICB0aGlzLmZvcm1JbnN0YW5jZVxuICAgICAgKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdjcmVhdGVWaWV3LXRlbXBsYXRlJywgeyB0ZW1wbGF0ZSB9KTtcbiAgICB0aGlzLml0ZW1WaWV3U3RyYXRlZ3kgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZX08L3RlbXBsYXRlPmApO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kUnVsZXMoKSB7XG4gICAgdGhpcy5hcnJheVJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XG4gIH1cblxuICBhc3luYyBhZGQodmFsaWRhdGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5hdENhcGFjaXR5KSB7XG4gICAgICBjb25zdCBpdGVtID0gYXdhaXQgdGhpcy5kZWZhdWx0c1NlcnZpY2UuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLCBudWxsKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tb2RlbC5wdXNoKGl0ZW0pIC0gMTtcbiAgICAgIHRoaXMuc2VsZWN0VGFiKGluZGV4KTtcbiAgICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVtb3ZlKGluZGV4OiBudW1iZXIsIHZhbGlkYXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMubW9kZWwubGVuZ3RoIC0gMSk7XG4gICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnRhYlRpdGxlVGVtcGxhdGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkKGBhW2hyZWY9XCIjdGFiXyR7dGhpcy5pZH1fJHtpbmRleH1cIl1gKS50YWIoJ3Nob3cnKTtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEucmVhZE9ubHkgfHwgISF0aGlzLmZvcm0uJHNjaGVtYS5jb25zdDtcbiAgfVxuXG4gIGdldCBhdENhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA+PSB0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA9PT0gdGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMgOiBmYWxzZTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygndmFsaWRhdGVkIGFycmF5JywgcmVzdWx0KTtcbiAgICB0aGlzLmVycm9ycyA9IHJlc3VsdC5yZXN1bHRzXG4gICAgICAuZmlsdGVyKChyKSA9PiAhci52YWxpZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
