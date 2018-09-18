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
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../resources/logger", "../../services/form-service", "../../rules/array-rules", "../../services/defaults-service", "../../services/form-instances", "jquery"], function (require, exports, aurelia_framework_1, guid_1, logger_1, form_service_1, array_rules_1, defaults_service_1, form_instances_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkE7UUF1QkUsaUJBQ1MsVUFBc0IsRUFDckIsV0FBd0IsRUFDeEIsTUFBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsYUFBNEI7WUFKN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtZQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtZQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7WUF2QnRDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFNUIsU0FBSSxHQUFHLE9BQU8sQ0FBQztZQVlmLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFZeEIsQ0FBQztRQUVLLHNCQUFJLEdBQVY7Ozs7O2lDQUNNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBWix3QkFBWTs0QkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7NEJBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUMxRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7NEJBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7NEJBQ3ZELHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQTs7NEJBQTNCLFNBQTJCLENBQUM7NEJBQzVCLHFCQUFNLElBQUksQ0FBQyxxQkFBcUIsRUFB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QUMsRUFBQTs7NEJBQWxGLE1BQU0sR0FBRyxTQUF5RTs0QkFDeEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7NEJBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU87aUNBQ3pCLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBUixDQUFRLENBQUMsQ0FBQzs0QkFDM0Isc0JBQU8sTUFBTSxFQUFDOzs7O1NBQ2Y7UUFqSlM7WUFBVCw0QkFBUTs7NkNBQXFCO1FBQ3BCO1lBQVQsNEJBQVE7OzhDQUFjO1FBQ2I7WUFBVCw0QkFBUTs7cURBQXNCO1FBSHBCLE9BQU87WUFSbkIsMEJBQU0sQ0FDTCx3QkFBVSxFQUNWLDBCQUFXLEVBQ1gseUJBQWdCLEVBQ2hCLGtDQUFlLEVBQ2YsOEJBQWEsQ0FDZDtZQUNBLGlDQUFhLENBQUMsVUFBVSxDQUFDOzZDQXlCSCx3QkFBVTtnQkFDUiwwQkFBVztnQkFDaEIseUJBQWdCO2dCQUNQLGtDQUFlO2dCQUNqQiw4QkFBYTtXQTVCM0IsT0FBTyxDQW1KbkI7UUFBRCxjQUFDO0tBbkpELEFBbUpDLElBQUE7SUFuSlksMEJBQU8iLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9ndWlkJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZVJlc3VsdCB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tICcuLi8uLi9ydWxlcy9hcnJheS1ydWxlcyc7XHJcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuQGluamVjdChcclxuICBBcnJheVJ1bGVzLFxyXG4gIEZvcm1TZXJ2aWNlLFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRGVmYXVsdHNTZXJ2aWNlLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudCgnc2YtYXJyYXknKVxyXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcclxuICBAYmluZGFibGUgZm9ybUluc3RhbmNlOiBzdHJpbmc7XHJcblxyXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcclxuXHJcbiAga2luZCA9ICdhcnJheSc7XHJcblxyXG4gIHZpZXdTdHJhdGVneTogc3RyaW5nO1xyXG5cclxuICBpdGVtVmlld1N0cmF0ZWd5OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIHRhYlRpdGxlVGVtcGxhdGU6IElubGluZVZpZXdTdHJhdGVneTtcclxuXHJcbiAgdmFsaWRhdGlvbkVycm9yczogc3RyaW5nW107XHJcblxyXG4gIGVycm9yczogVmFsaWRhdGVSZXN1bHRbXTtcclxuXHJcbiAgYmluZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGFycmF5UnVsZXM6IEFycmF5UnVsZXMsXHJcbiAgICBwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0c1NlcnZpY2U6IERlZmF1bHRzU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkge1xyXG5cclxuICB9XHJcblxyXG4gIGFzeW5jIGJpbmQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYmluZGVkKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLWFycmF5JywgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xyXG4gICAgICB0aGlzLmZvcm1DdHJsID0gdGhpcy5mb3JtSW5zdGFuY2VzLmdldCh0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICAgIHRoaXMuYmluZFJ1bGVzKCk7XHJcbiAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcztcclxuICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJdGVtVmlldygpO1xyXG4gICAgICBhd2FpdCB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xyXG4gICAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVBcnJheSgpO1xyXG4gICAgICB0aGlzLmJpbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBpbml0aWFsaXplQXJyYXkoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEuZW51bSB8fFxyXG4gICAgICAodGhpcy5tb2RlbCAmJiB0aGlzLm1vZGVsLmxlbmd0aCA+IDApIHx8XHJcbiAgICAgIHRoaXMuZm9ybS4kbm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb24gfHxcclxuICAgICAgdGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy5ub0VtcHR5QXJyYXlJbml0aWFsaXphdGlvblxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMuYWRkKCEhdGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2YtYXJyYXktYXR0YWNoZWQnKTtcclxuICAgIGlmICh0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xyXG4gICAgbGV0IHN0cmF0ZWd5O1xyXG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcclxuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJGFycmF5QXNUYWJzKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAhIXRoaXMuZm9ybS4kdGFiVGl0bGUgPyBgJHt0aGlzLmZvcm0uJHRhYlRpdGxlfWAgOiAnJHtcXCdJdGVtIFxcJyArICgkaW5kZXggKyAxKX0nO1xyXG4gICAgICB0aGlzLnRhYlRpdGxlVGVtcGxhdGUgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHtjb250ZW50fTwvdGVtcGxhdGU+YCk7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZVBhdGgoJ2FycmF5VGFicycpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy50eXBlID09PSAnc3RyaW5nJyAmJiB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy5lbnVtKSB7XHJcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZVBhdGgoJ2FycmF5U3RyaW5nRW51bScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldFRlbXBsYXRlUGF0aCgnYXJyYXknKTtcclxuICAgIH1cclxuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVJdGVtVmlldygpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2NyZWF0ZVZpZXcnLCB7IGZvcm06IHRoaXMuZm9ybS4kYXJyYXlJdGVtIH0pO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmZvcm1TZXJ2aWNlXHJcbiAgICAgIC5nZXRTZlRlbXBsYXRlKFxyXG4gICAgICAgICdtb2RlbFskaW5kZXhdJyxcclxuICAgICAgICAnZm9ybS4kYXJyYXlJdGVtJyxcclxuICAgICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLnR5cGUsXHJcbiAgICAgICAgdGhpcy5mb3JtSW5zdGFuY2VcclxuICAgICAgKTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2NyZWF0ZVZpZXctdGVtcGxhdGUnLCB7IHRlbXBsYXRlIH0pO1xyXG4gICAgdGhpcy5pdGVtVmlld1N0cmF0ZWd5ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7dGVtcGxhdGV9PC90ZW1wbGF0ZT5gKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZFJ1bGVzKCkge1xyXG4gICAgdGhpcy5hcnJheVJ1bGVzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZE9iamVjdCh0aGlzLm1vZGVsKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGFkZCh2YWxpZGF0ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuYXRDYXBhY2l0eSkge1xyXG4gICAgICBjb25zdCBpdGVtID0gYXdhaXQgdGhpcy5kZWZhdWx0c1NlcnZpY2UuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLCBudWxsKTtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm1vZGVsLnB1c2goaXRlbSkgLSAxO1xyXG4gICAgICB0aGlzLnNlbGVjdFRhYihpbmRleCk7XHJcbiAgICAgIGlmICh2YWxpZGF0ZSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVtb3ZlKGluZGV4OiBudW1iZXIsIHZhbGlkYXRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm1vZGVsLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLnNlbGVjdFRhYih0aGlzLm1vZGVsLmxlbmd0aCAtIDEpO1xyXG4gICAgaWYgKHZhbGlkYXRlKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0VGFiKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnRhYlRpdGxlVGVtcGxhdGUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChgYVtocmVmPVwiI3RhYl8ke3RoaXMuaWR9XyR7aW5kZXh9XCJdYCkudGFiKCdzaG93Jyk7XHJcbiAgICAgIH0sIDUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLnJlYWRPbmx5IHx8ICEhdGhpcy5mb3JtLiRzY2hlbWEuY29uc3Q7XHJcbiAgfVxyXG5cclxuICBnZXQgYXRDYXBhY2l0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKVxyXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID49IHRoaXMuZm9ybS4kc2NoZW1hLm1heEl0ZW1zIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgYXRNaW5pbXVtQ2FwYWNpdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5taW5JdGVtcylcclxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA9PT0gdGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3ZhbGlkYXRlZCBhcnJheScsIHJlc3VsdCk7XHJcbiAgICB0aGlzLmVycm9ycyA9IHJlc3VsdC5yZXN1bHRzXHJcbiAgICAgIC5maWx0ZXIoKHIpID0+ICFyLnZhbGlkKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
