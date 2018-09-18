System.register(["aurelia-framework", "../../resources/guid", "../../resources/logger", "../../services/form-service"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, logger_1, form_service_1, SfObject;
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
            }
        ],
        execute: function () {
            SfObject = /** @class */ (function () {
                function SfObject(formService, logger) {
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
                    aurelia_framework_1.inject(form_service_1.FormService, logger_1.SchemaFormLogger),
                    aurelia_framework_1.customElement('sf-object'),
                    __metadata("design:paramtypes", [form_service_1.FormService,
                        logger_1.SchemaFormLogger])
                ], SfObject);
                return SfObject;
            }());
            exports_1("SfObject", SfObject);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFzQkUsa0JBQ1MsV0FBd0IsRUFDdkIsTUFBd0I7b0JBRHpCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFSbEMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztnQkFPWixDQUFDO2dCQUVMLDJCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFFSyx1QkFBSSxHQUFWOzs7Ozs7b0NBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO29DQUNyRCxxQkFBTSxJQUFJLENBQUMsV0FBVzs2Q0FDcEMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQTs7b0NBRDlFLFFBQVEsR0FBRyxTQUNtRTtvQ0FDcEYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHNDQUFrQixDQUNoQyxlQUFhLFFBQVEsQ0FBQyxPQUFPLGdCQUFhLENBQUMsQ0FBQzs7Ozs7aUJBQy9DO2dCQXpCUztvQkFBVCw0QkFBUTs7c0RBQXFCO2dCQUNwQjtvQkFBVCw0QkFBUTs7dURBQWU7Z0JBQ2Q7b0JBQVQsNEJBQVE7OzhEQUFzQjtnQkFIcEIsUUFBUTtvQkFMcEIsMEJBQU0sQ0FDTCwwQkFBVyxFQUNYLHlCQUFnQixDQUNqQjtvQkFDQSxpQ0FBYSxDQUFDLFdBQVcsQ0FBQztxREFhSCwwQkFBVzt3QkFDZix5QkFBZ0I7bUJBYnZCLFFBQVEsQ0EyQnBCO2dCQUFELGVBQUM7YUEzQkQsQUEyQkM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL29iamVjdC9zZi1vYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZ3VpZCc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlJztcclxuXHJcbkBpbmplY3QoXHJcbiAgRm9ybVNlcnZpY2UsXHJcbiAgU2NoZW1hRm9ybUxvZ2dlclxyXG4pXHJcbkBjdXN0b21FbGVtZW50KCdzZi1vYmplY3QnKVxyXG5leHBvcnQgY2xhc3MgU2ZPYmplY3Qge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogb2JqZWN0O1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICBraW5kID0gJ29iamVjdCc7XHJcblxyXG4gIHZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcclxuICApIHsgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLW9iamVjdC1hdHRhY2hlZCcpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgYmluZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NmLW9iamVjdCcsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgdGhpcy5mb3JtU2VydmljZVxyXG4gICAgICAuZ2V0Rm9ybVRlbXBsYXRlQXN5bmModGhpcy5mb3JtLCB0aGlzLmZvcm0uJHNjaGVtYSwgdGhpcy5tb2RlbCwgdGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy52aWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShcclxuICAgICAgYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlLmNvbnRlbnR9PC90ZW1wbGF0ZT5gKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
