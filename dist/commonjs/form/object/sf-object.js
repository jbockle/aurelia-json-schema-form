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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXdGO0FBQ3hGLDZDQUE0QztBQUM1QyxzRkFBbUY7QUFDbkYsaURBQTBEO0FBRTFELDREQUEwRDtBQVExRDtJQVdFLGtCQUNTLGFBQXNDLEVBQ3RDLFdBQXdCLEVBQ3ZCLE1BQXdCO1FBRnpCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVRsQyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLFNBQUksR0FBRyxRQUFRLENBQUM7SUFRWixDQUFDO0lBRUwsMkJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVLLHVCQUFJLEdBQVY7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7d0JBQ3JELHFCQUFNLElBQUksQ0FBQyxXQUFXO2lDQUNwQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFEOUUsUUFBUSxHQUFHLFNBQ21FO3dCQUNwRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksc0NBQWtCLENBQ2hDLGVBQWEsUUFBUSxDQUFDLE9BQU8sZ0JBQWEsQ0FBQyxDQUFDOzs7OztLQUMvQztJQTFCUztRQUFULDRCQUFROzswQ0FBcUI7SUFDcEI7UUFBVCw0QkFBUTs7MkNBQWU7SUFDZDtRQUFULDRCQUFROztrREFBc0I7SUFIcEIsUUFBUTtRQU5wQiwwQkFBTSxDQUNMLG1EQUF1QixFQUN2QiwwQkFBVyxFQUNYLHlCQUFnQixDQUNqQjtRQUNBLGlDQUFhLENBQUMsV0FBVyxDQUFDO3lDQWFELG1EQUF1QjtZQUN6QiwwQkFBVztZQUNmLHlCQUFnQjtPQWR2QixRQUFRLENBNEJwQjtJQUFELGVBQUM7Q0E1QkQsQUE0QkMsSUFBQTtBQTVCWSw0QkFBUSIsImZpbGUiOiJmb3JtL29iamVjdC9zZi1vYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2d1aWQnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyJztcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUnO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2UnO1xuXG5AaW5qZWN0KFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgRm9ybVNlcnZpY2UsXG4gIFNjaGVtYUZvcm1Mb2dnZXJcbilcbkBjdXN0b21FbGVtZW50KCdzZi1vYmplY3QnKVxuZXhwb3J0IGNsYXNzIFNmT2JqZWN0IHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBtb2RlbDogb2JqZWN0O1xuICBAYmluZGFibGUgZm9ybUluc3RhbmNlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSAnb2JqZWN0JztcblxuICB2aWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcbiAgKSB7IH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZi1vYmplY3QtYXR0YWNoZWQnKTtcbiAgfVxuXG4gIGFzeW5jIGJpbmQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2Ytb2JqZWN0JywgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgdGhpcy5mb3JtU2VydmljZVxuICAgICAgLmdldEZvcm1UZW1wbGF0ZUFzeW5jKHRoaXMuZm9ybSwgdGhpcy5mb3JtLiRzY2hlbWEsIHRoaXMubW9kZWwsIHRoaXMuZm9ybUluc3RhbmNlKTtcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxuICAgICAgYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlLmNvbnRlbnR9PC90ZW1wbGF0ZT5gKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
