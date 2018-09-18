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
define(["require", "exports", "aurelia-framework", "../resources/logger"], function (require, exports, aurelia_framework_1, logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DefaultsService = /** @class */ (function () {
        function DefaultsService(logger) {
            this.logger = logger;
        }
        DefaultsService.prototype.getSchemaDefaultAsync = function (schema, model) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.info('getSchemaDefaultAsync', { schema: schema, model: model });
                            _a = schema.type;
                            switch (_a) {
                                case 'array': return [3 /*break*/, 1];
                                case 'object': return [3 /*break*/, 3];
                            }
                            return [3 /*break*/, 5];
                        case 1: return [4 /*yield*/, this.getArrayDefaultAsync(model)];
                        case 2:
                            model = _b.sent();
                            _b.label = 3;
                        case 3: return [4 /*yield*/, this.getObjectDefaultAsync(model, schema)];
                        case 4:
                            model = _b.sent();
                            _b.label = 5;
                        case 5: return [4 /*yield*/, this.getPrimitiveDefaultAsync(model, schema)];
                        case 6:
                            model = _b.sent();
                            _b.label = 7;
                        case 7: return [2 /*return*/, model];
                    }
                });
            });
        };
        DefaultsService.prototype.getPrimitiveDefaultAsync = function (model, schema) {
            return __awaiter(this, void 0, void 0, function () {
                var value;
                return __generator(this, function (_a) {
                    value = '';
                    if (schema.type === 'boolean') {
                        value = false;
                    }
                    return [2 /*return*/, model || schema.const || schema.default || value];
                });
            });
        };
        DefaultsService.prototype.getArrayDefaultAsync = function (model) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, model || []];
                });
            });
        };
        DefaultsService.prototype.getObjectDefaultAsync = function (model, schema) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, property, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            this.logger.warn('getObjectModelDefaults', { model: model, schema: schema });
                            model = model || {};
                            if (!schema.properties) return [3 /*break*/, 4];
                            _a = [];
                            for (_b in schema.properties)
                                _a.push(_b);
                            _i = 0;
                            _e.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            property = _a[_i];
                            _c = model;
                            _d = property;
                            return [4 /*yield*/, this.getSchemaDefaultAsync(schema.properties[property], model[property])];
                        case 2:
                            _c[_d] = _e.sent();
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/, model];
                    }
                });
            });
        };
        DefaultsService = __decorate([
            aurelia_framework_1.inject(logger_1.SchemaFormLogger),
            __metadata("design:paramtypes", [logger_1.SchemaFormLogger])
        ], DefaultsService);
        return DefaultsService;
    }());
    exports.DefaultsService = DefaultsService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRQTtRQUVFLHlCQUFvQixNQUF3QjtZQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFJLENBQUM7UUFFM0MsK0NBQXFCLEdBQTNCLFVBQTRCLE1BQTZCLEVBQUUsS0FBVTs7Ozs7OzRCQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQzs0QkFDckQsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFBOztxQ0FDWixPQUFPLENBQUMsQ0FBUix3QkFBTztxQ0FFUCxRQUFRLENBQUMsQ0FBVCx3QkFBUTs7O2dDQURILHFCQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBQTs7NEJBQTlDLEtBQUssR0FBRyxTQUFzQyxDQUFDOztnQ0FFdkMscUJBQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRyxNQUFzQyxDQUFDLEVBQUE7OzRCQUF4RixLQUFLLEdBQUcsU0FBZ0YsQ0FBQzs7Z0NBRWpGLHFCQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUE7OzRCQUExRCxLQUFLLEdBQUcsU0FBa0QsQ0FBQzs7Z0NBRS9ELHNCQUFPLEtBQUssRUFBQzs7OztTQUNkO1FBRUssa0RBQXdCLEdBQTlCLFVBQStCLEtBQVUsRUFBRSxNQUE2Qjs7OztvQkFDbEUsS0FBSyxHQUFRLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTt3QkFDN0IsS0FBSyxHQUFHLEtBQUssQ0FBQztxQkFDZjtvQkFDRCxzQkFBTyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBQzs7O1NBQ3pEO1FBRUssOENBQW9CLEdBQTFCLFVBQTJCLEtBQVU7OztvQkFDbkMsc0JBQU8sS0FBSyxJQUFJLEVBQUUsRUFBQzs7O1NBQ3BCO1FBRUssK0NBQXFCLEdBQTNCLFVBQTRCLEtBQWEsRUFBRSxNQUFtQzs7Ozs7OzRCQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQzs0QkFDOUQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7aUNBQ2hCLE1BQU0sQ0FBQyxVQUFVLEVBQWpCLHdCQUFpQjs7dUNBRUksTUFBTSxDQUFDLFVBQVU7Ozs7Ozs7NEJBQ3RDLEtBQUEsS0FBSyxDQUFBOzRCQUFDLEtBQUEsUUFBUSxDQUFBOzRCQUFJLHFCQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFBOzs0QkFBaEcsTUFBZSxHQUFHLFNBQThFLENBQUM7Ozs7O2dDQUdyRyxzQkFBTyxLQUFLLEVBQUM7Ozs7U0FDZDtRQXZDVSxlQUFlO1lBRDNCLDBCQUFNLENBQUMseUJBQWdCLENBQUM7NkNBR0sseUJBQWdCO1dBRmpDLGVBQWUsQ0F3QzNCO1FBQUQsc0JBQUM7S0F4Q0QsQUF3Q0MsSUFBQTtJQXhDWSwwQ0FBZSIsImZpbGUiOiJzZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vcmVzb3VyY2VzL2xvZ2dlcic7XHJcbmltcG9ydCB7XHJcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLFxyXG4gIElKc29uU2NoZW1hRGVmaW5pdGlvblxyXG59IGZyb20gJy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvbic7XHJcblxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Mb2dnZXIpXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0c1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XHJcblxyXG4gIGFzeW5jIGdldFNjaGVtYURlZmF1bHRBc3luYyhzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgbW9kZWw6IGFueSkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnZ2V0U2NoZW1hRGVmYXVsdEFzeW5jJywgeyBzY2hlbWEsIG1vZGVsIH0pO1xyXG4gICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xyXG4gICAgICBjYXNlICdhcnJheSc6XHJcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldEFycmF5RGVmYXVsdEFzeW5jKG1vZGVsKTtcclxuICAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICBtb2RlbCA9IGF3YWl0IHRoaXMuZ2V0T2JqZWN0RGVmYXVsdEFzeW5jKG1vZGVsLCAoc2NoZW1hIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRQcmltaXRpdmVEZWZhdWx0QXN5bmMobW9kZWwsIHNjaGVtYSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9kZWw7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRQcmltaXRpdmVEZWZhdWx0QXN5bmMobW9kZWw6IGFueSwgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24pIHtcclxuICAgIGxldCB2YWx1ZTogYW55ID0gJyc7XHJcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykge1xyXG4gICAgICB2YWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5jb25zdCB8fCBzY2hlbWEuZGVmYXVsdCB8fCB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEFycmF5RGVmYXVsdEFzeW5jKG1vZGVsOiBhbnkpOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgICByZXR1cm4gbW9kZWwgfHwgW107XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRPYmplY3REZWZhdWx0QXN5bmMobW9kZWw6IG9iamVjdCwgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oJ2dldE9iamVjdE1vZGVsRGVmYXVsdHMnLCB7IG1vZGVsLCBzY2hlbWEgfSk7XHJcbiAgICBtb2RlbCA9IG1vZGVsIHx8IHt9O1xyXG4gICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHNjaGVtYS5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgbW9kZWxbcHJvcGVydHldID0gYXdhaXQgdGhpcy5nZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLCBtb2RlbFtwcm9wZXJ0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9kZWw7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
