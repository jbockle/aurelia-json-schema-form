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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkE7UUF1QkUsaUJBQ1MsVUFBc0IsRUFDckIsV0FBd0IsRUFDeEIsTUFBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsYUFBNEI7WUFKN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtZQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtZQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7WUF2QnRDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFNUIsU0FBSSxHQUFHLE9BQU8sQ0FBQztZQVlmLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFZeEIsQ0FBQztRQUVLLHNCQUFJLEdBQVY7Ozs7O2lDQUNNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBWix3QkFBWTs0QkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7NEJBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUMxRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7NEJBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7NEJBQ3ZELHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQTs7NEJBQTNCLFNBQTJCLENBQUM7NEJBQzVCLHFCQUFNLElBQUksQ0FBQyxxQkFBcUIsRUFB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QUMsRUFBQTs7NEJBQWxGLE1BQU0sR0FBRyxTQUF5RTs0QkFDeEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7NEJBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU87aUNBQ3pCLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBUixDQUFRLENBQUMsQ0FBQzs0QkFDM0Isc0JBQU8sTUFBTSxFQUFDOzs7O1NBQ2Y7UUFqSlM7WUFBVCw0QkFBUTs7NkNBQXFCO1FBQ3BCO1lBQVQsNEJBQVE7OzhDQUFjO1FBQ2I7WUFBVCw0QkFBUTs7cURBQXNCO1FBSHBCLE9BQU87WUFSbkIsMEJBQU0sQ0FDTCx3QkFBVSxFQUNWLDBCQUFXLEVBQ1gseUJBQWdCLEVBQ2hCLGtDQUFlLEVBQ2YsOEJBQWEsQ0FDZDtZQUNBLGlDQUFhLENBQUMsVUFBVSxDQUFDOzZDQXlCSCx3QkFBVTtnQkFDUiwwQkFBVztnQkFDaEIseUJBQWdCO2dCQUNQLGtDQUFlO2dCQUNqQiw4QkFBYTtXQTVCM0IsT0FBTyxDQW1KbkI7UUFBRCxjQUFDO0tBbkpELEFBbUpDLElBQUE7SUFuSlksMEJBQU8iLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2xvZ2dlcic7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcbmltcG9ydCB7IFZhbGlkYXRlUmVzdWx0IH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tICcuLi8uLi9ydWxlcy9hcnJheS1ydWxlcyc7XG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlcyc7XG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlJztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuQGluamVjdChcbiAgQXJyYXlSdWxlcyxcbiAgRm9ybVNlcnZpY2UsXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXG4gIERlZmF1bHRzU2VydmljZSxcbiAgRm9ybUluc3RhbmNlc1xuKVxuQGN1c3RvbUVsZW1lbnQoJ3NmLWFycmF5JylcbmV4cG9ydCBjbGFzcyBTZkFycmF5IHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9ICdhcnJheSc7XG5cbiAgdmlld1N0cmF0ZWd5OiBzdHJpbmc7XG5cbiAgaXRlbVZpZXdTdHJhdGVneTogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIHRhYlRpdGxlVGVtcGxhdGU6IElubGluZVZpZXdTdHJhdGVneTtcblxuICB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXTtcblxuICBlcnJvcnM6IFZhbGlkYXRlUmVzdWx0W107XG5cbiAgYmluZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBmb3JtQ3RybDogSUZvcm1JbnN0YW5jZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXJyYXlSdWxlczogQXJyYXlSdWxlcyxcbiAgICBwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwcml2YXRlIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xuICApIHtcblxuICB9XG5cbiAgYXN5bmMgYmluZCgpIHtcbiAgICBpZiAoIXRoaXMuYmluZGVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1hcnJheScsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcbiAgICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcbiAgICAgIHRoaXMuYmluZFJ1bGVzKCk7XG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEuaXRlbXM7XG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZUl0ZW1WaWV3KCk7XG4gICAgICBhd2FpdCB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xuICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplQXJyYXkoKTtcbiAgICAgIHRoaXMuYmluZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBpbml0aWFsaXplQXJyYXkoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYS5lbnVtIHx8XG4gICAgICAodGhpcy5tb2RlbCAmJiB0aGlzLm1vZGVsLmxlbmd0aCA+IDApIHx8XG4gICAgICB0aGlzLmZvcm0uJG5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uIHx8XG4gICAgICB0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLm5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuYWRkKCEhdGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLWFycmF5LWF0dGFjaGVkJyk7XG4gICAgaWYgKHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcbiAgICBsZXQgc3RyYXRlZ3k7XG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS4kYXJyYXlBc1RhYnMpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAhIXRoaXMuZm9ybS4kdGFiVGl0bGUgPyBgJHt0aGlzLmZvcm0uJHRhYlRpdGxlfWAgOiAnJHtcXCdJdGVtIFxcJyArICgkaW5kZXggKyAxKX0nO1xuICAgICAgdGhpcy50YWJUaXRsZVRlbXBsYXRlID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7Y29udGVudH08L3RlbXBsYXRlPmApO1xuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldFRlbXBsYXRlUGF0aCgnYXJyYXlUYWJzJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy50eXBlID09PSAnc3RyaW5nJyAmJiB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy5lbnVtKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0VGVtcGxhdGVQYXRoKCdhcnJheVN0cmluZ0VudW0nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldFRlbXBsYXRlUGF0aCgnYXJyYXknKTtcbiAgICB9XG4gICAgdGhpcy52aWV3U3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUl0ZW1WaWV3KCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2NyZWF0ZVZpZXcnLCB7IGZvcm06IHRoaXMuZm9ybS4kYXJyYXlJdGVtIH0pO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZVxuICAgICAgLmdldFNmVGVtcGxhdGUoXG4gICAgICAgICdtb2RlbFskaW5kZXhdJyxcbiAgICAgICAgJ2Zvcm0uJGFycmF5SXRlbScsXG4gICAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEudHlwZSxcbiAgICAgICAgdGhpcy5mb3JtSW5zdGFuY2VcbiAgICAgICk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnY3JlYXRlVmlldy10ZW1wbGF0ZScsIHsgdGVtcGxhdGUgfSk7XG4gICAgdGhpcy5pdGVtVmlld1N0cmF0ZWd5ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7dGVtcGxhdGV9PC90ZW1wbGF0ZT5gKTtcbiAgfVxuXG4gIHByaXZhdGUgYmluZFJ1bGVzKCkge1xuICAgIHRoaXMuYXJyYXlSdWxlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkT2JqZWN0KHRoaXMubW9kZWwpO1xuICB9XG5cbiAgYXN5bmMgYWRkKHZhbGlkYXRlOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuYXRDYXBhY2l0eSkge1xuICAgICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcywgbnVsbCk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubW9kZWwucHVzaChpdGVtKSAtIDE7XG4gICAgICB0aGlzLnNlbGVjdFRhYihpbmRleCk7XG4gICAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlbW92ZShpbmRleDogbnVtYmVyLCB2YWxpZGF0ZTogYm9vbGVhbikge1xuICAgIHRoaXMubW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnNlbGVjdFRhYih0aGlzLm1vZGVsLmxlbmd0aCAtIDEpO1xuICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0VGFiKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy50YWJUaXRsZVRlbXBsYXRlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJChgYVtocmVmPVwiI3RhYl8ke3RoaXMuaWR9XyR7aW5kZXh9XCJdYCkudGFiKCdzaG93Jyk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLnJlYWRPbmx5IHx8ICEhdGhpcy5mb3JtLiRzY2hlbWEuY29uc3Q7XG4gIH1cblxuICBnZXQgYXRDYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPj0gdGhpcy5mb3JtLiRzY2hlbWEubWF4SXRlbXMgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBhdE1pbmltdW1DYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5taW5JdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3ZhbGlkYXRlZCBhcnJheScsIHJlc3VsdCk7XG4gICAgdGhpcy5lcnJvcnMgPSByZXN1bHQucmVzdWx0c1xuICAgICAgLmZpbHRlcigocikgPT4gIXIudmFsaWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
