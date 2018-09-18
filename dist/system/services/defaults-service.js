System.register(["aurelia-framework", "../resources/logger"], function (exports_1, context_1) {
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
    var aurelia_framework_1, logger_1, DefaultsService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            }
        ],
        execute: function () {
            DefaultsService = /** @class */ (function () {
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
            exports_1("DefaultsService", DefaultsService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBVUUseUJBQW9CLE1BQXdCO29CQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtnQkFBSSxDQUFDO2dCQUUzQywrQ0FBcUIsR0FBM0IsVUFBNEIsTUFBNkIsRUFBRSxLQUFVOzs7Ozs7b0NBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO29DQUNyRCxLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUE7OzZDQUNaLE9BQU8sQ0FBQyxDQUFSLHdCQUFPOzZDQUVQLFFBQVEsQ0FBQyxDQUFULHdCQUFROzs7d0NBREgscUJBQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFBOztvQ0FBOUMsS0FBSyxHQUFHLFNBQXNDLENBQUM7O3dDQUV2QyxxQkFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFHLE1BQXNDLENBQUMsRUFBQTs7b0NBQXhGLEtBQUssR0FBRyxTQUFnRixDQUFDOzt3Q0FFakYscUJBQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBQTs7b0NBQTFELEtBQUssR0FBRyxTQUFrRCxDQUFDOzt3Q0FFL0Qsc0JBQU8sS0FBSyxFQUFDOzs7O2lCQUNkO2dCQUVLLGtEQUF3QixHQUE5QixVQUErQixLQUFVLEVBQUUsTUFBNkI7Ozs7NEJBQ2xFLEtBQUssR0FBUSxFQUFFLENBQUM7NEJBQ3BCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0NBQzdCLEtBQUssR0FBRyxLQUFLLENBQUM7NkJBQ2Y7NEJBQ0Qsc0JBQU8sS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUM7OztpQkFDekQ7Z0JBRUssOENBQW9CLEdBQTFCLFVBQTJCLEtBQVU7Ozs0QkFDbkMsc0JBQU8sS0FBSyxJQUFJLEVBQUUsRUFBQzs7O2lCQUNwQjtnQkFFSywrQ0FBcUIsR0FBM0IsVUFBNEIsS0FBYSxFQUFFLE1BQW1DOzs7Ozs7b0NBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO29DQUM5RCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQzt5Q0FDaEIsTUFBTSxDQUFDLFVBQVUsRUFBakIsd0JBQWlCOzsrQ0FFSSxNQUFNLENBQUMsVUFBVTs7Ozs7OztvQ0FDdEMsS0FBQSxLQUFLLENBQUE7b0NBQUMsS0FBQSxRQUFRLENBQUE7b0NBQUkscUJBQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUE7O29DQUFoRyxNQUFlLEdBQUcsU0FBOEUsQ0FBQzs7Ozs7d0NBR3JHLHNCQUFPLEtBQUssRUFBQzs7OztpQkFDZDtnQkF2Q1UsZUFBZTtvQkFEM0IsMEJBQU0sQ0FBQyx5QkFBZ0IsQ0FBQztxREFHSyx5QkFBZ0I7bUJBRmpDLGVBQWUsQ0F3QzNCO2dCQUFELHNCQUFDO2FBeENELEFBd0NDOztRQUNELENBQUMiLCJmaWxlIjoic2VydmljZXMvZGVmYXVsdHMtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQge1xyXG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYURlZmluaXRpb25cclxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb24nO1xyXG5cclxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdHNTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxyXG5cclxuICBhc3luYyBnZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIG1vZGVsOiBhbnkpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2dldFNjaGVtYURlZmF1bHRBc3luYycsIHsgc2NoZW1hLCBtb2RlbCB9KTtcclxuICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcclxuICAgICAgY2FzZSAnYXJyYXknOlxyXG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRBcnJheURlZmF1bHRBc3luYyhtb2RlbCk7XHJcbiAgICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldE9iamVjdERlZmF1bHRBc3luYyhtb2RlbCwgKHNjaGVtYSBhcyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBtb2RlbCA9IGF3YWl0IHRoaXMuZ2V0UHJpbWl0aXZlRGVmYXVsdEFzeW5jKG1vZGVsLCBzY2hlbWEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0UHJpbWl0aXZlRGVmYXVsdEFzeW5jKG1vZGVsOiBhbnksIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uKSB7XHJcbiAgICBsZXQgdmFsdWU6IGFueSA9ICcnO1xyXG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgdmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBtb2RlbCB8fCBzY2hlbWEuY29uc3QgfHwgc2NoZW1hLmRlZmF1bHQgfHwgdmFsdWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRBcnJheURlZmF1bHRBc3luYyhtb2RlbDogYW55KTogUHJvbWlzZTxhbnlbXT4ge1xyXG4gICAgcmV0dXJuIG1vZGVsIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0T2JqZWN0RGVmYXVsdEFzeW5jKG1vZGVsOiBvYmplY3QsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKCdnZXRPYmplY3RNb2RlbERlZmF1bHRzJywgeyBtb2RlbCwgc2NoZW1hIH0pO1xyXG4gICAgbW9kZWwgPSBtb2RlbCB8fCB7fTtcclxuICAgIGlmIChzY2hlbWEucHJvcGVydGllcykge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEucHJvcGVydGllcykge1xyXG4gICAgICAgIG1vZGVsW3Byb3BlcnR5XSA9IGF3YWl0IHRoaXMuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XSwgbW9kZWxbcHJvcGVydHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
