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
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../resources/logger", "../../services/form-service"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfObject = /** @class */ (function () {
        function SfObject(configuration, formService, logger) {
            this.configuration = configuration;
            this.formService = formService;
            this.logger = logger;
            this.id = guid_1.Guid.newGuid();
            this.kind = 'object';
        }
        SfObject.prototype.attached = function () {
            this.logger.info('sf-object-attached');
        };
        SfObject.prototype.bind = function () {
            return __awaiter(this, void 0, void 0, function () {
                var template;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info('sf-object', { form: this.form, model: this.model });
                            return [4 /*yield*/, this.formService
                                    .getFormTemplateAsync(this.form, this.form.$schema, this.model, this.formInstance)];
                        case 1:
                            template = _a.sent();
                            this.view = new aurelia_framework_1.InlineViewStrategy("<template>" + template.content + "</template>");
                            return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SfObject.prototype, "form", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SfObject.prototype, "model", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], SfObject.prototype, "formInstance", void 0);
        SfObject = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger),
            aurelia_framework_1.customElement('sf-object'),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                form_service_1.FormService,
                logger_1.SchemaFormLogger])
        ], SfObject);
        return SfObject;
    }());
    exports.SfObject = SfObject;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWFBO1FBV0Usa0JBQ1MsYUFBc0MsRUFDdEMsV0FBd0IsRUFDdkIsTUFBd0I7WUFGekIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1lBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBVGxDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQVFaLENBQUM7UUFFTCwyQkFBUSxHQUFSO1lBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRUssdUJBQUksR0FBVjs7Ozs7OzRCQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzs0QkFDckQscUJBQU0sSUFBSSxDQUFDLFdBQVc7cUNBQ3BDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUE7OzRCQUQ5RSxRQUFRLEdBQUcsU0FDbUU7NEJBQ3BGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxzQ0FBa0IsQ0FDaEMsZUFBYSxRQUFRLENBQUMsT0FBTyxnQkFBYSxDQUFDLENBQUM7Ozs7O1NBQy9DO1FBMUJTO1lBQVQsNEJBQVE7OzhDQUFxQjtRQUNwQjtZQUFULDRCQUFROzsrQ0FBZTtRQUNkO1lBQVQsNEJBQVE7O3NEQUFzQjtRQUhwQixRQUFRO1lBTnBCLDBCQUFNLENBQ0wsbURBQXVCLEVBQ3ZCLDBCQUFXLEVBQ1gseUJBQWdCLENBQ2pCO1lBQ0EsaUNBQWEsQ0FBQyxXQUFXLENBQUM7NkNBYUQsbURBQXVCO2dCQUN6QiwwQkFBVztnQkFDZix5QkFBZ0I7V0FkdkIsUUFBUSxDQTRCcEI7UUFBRCxlQUFDO0tBNUJELEFBNEJDLElBQUE7SUE1QlksNEJBQVEiLCJmaWxlIjoiZm9ybS9vYmplY3Qvc2Ytb2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9ndWlkJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2xvZ2dlcic7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcblxuQGluamVjdChcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIEZvcm1TZXJ2aWNlLFxuICBTY2hlbWFGb3JtTG9nZ2VyXG4pXG5AY3VzdG9tRWxlbWVudCgnc2Ytb2JqZWN0JylcbmV4cG9ydCBjbGFzcyBTZk9iamVjdCB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBAYmluZGFibGUgbW9kZWw6IG9iamVjdDtcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBraW5kID0gJ29iamVjdCc7XG5cbiAgdmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyXG4gICkgeyB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2Ytb2JqZWN0LWF0dGFjaGVkJyk7XG4gIH1cblxuICBhc3luYyBiaW5kKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLW9iamVjdCcsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHRoaXMuZm9ybVNlcnZpY2VcbiAgICAgIC5nZXRGb3JtVGVtcGxhdGVBc3luYyh0aGlzLmZvcm0sIHRoaXMuZm9ybS4kc2NoZW1hLCB0aGlzLm1vZGVsLCB0aGlzLmZvcm1JbnN0YW5jZSk7XG4gICAgdGhpcy52aWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShcbiAgICAgIGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZS5jb250ZW50fTwvdGVtcGxhdGU+YCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
