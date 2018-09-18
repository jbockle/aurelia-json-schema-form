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
import { inject } from 'aurelia-framework';
import { SchemaFormLogger } from '../resources/logger';
let DefaultsService = class DefaultsService {
    constructor(logger) {
        this.logger = logger;
    }
    getSchemaDefaultAsync(schema, model) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('getSchemaDefaultAsync', { schema, model });
            switch (schema.type) {
                case 'array':
                    model = yield this.getArrayDefaultAsync(model);
                case 'object':
                    model = yield this.getObjectDefaultAsync(model, schema);
                default:
                    model = yield this.getPrimitiveDefaultAsync(model, schema);
            }
            return model;
        });
    }
    getPrimitiveDefaultAsync(model, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = '';
            if (schema.type === 'boolean') {
                value = false;
            }
            return model || schema.const || schema.default || value;
        });
    }
    getArrayDefaultAsync(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return model || [];
        });
    }
    getObjectDefaultAsync(model, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.warn('getObjectModelDefaults', { model, schema });
            model = model || {};
            if (schema.properties) {
                // tslint:disable-next-line:forin
                for (const property in schema.properties) {
                    model[property] = yield this.getSchemaDefaultAsync(schema.properties[property], model[property]);
                }
            }
            return model;
        });
    }
};
DefaultsService = __decorate([
    inject(SchemaFormLogger),
    __metadata("design:paramtypes", [SchemaFormLogger])
], DefaultsService);
export { DefaultsService };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFPdkQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUUxQixZQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFJLENBQUM7SUFFM0MscUJBQXFCLENBQUMsTUFBNkIsRUFBRSxLQUFVOztZQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzdELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDbkIsS0FBSyxPQUFPO29CQUNWLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakQsS0FBSyxRQUFRO29CQUNYLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUcsTUFBc0MsQ0FBQyxDQUFDO2dCQUMzRjtvQkFDRSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzlEO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFSyx3QkFBd0IsQ0FBQyxLQUFVLEVBQUUsTUFBNkI7O1lBQ3RFLElBQUksS0FBSyxHQUFRLEVBQUUsQ0FBQztZQUNwQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ2Y7WUFDRCxPQUFPLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1FBQzFELENBQUM7S0FBQTtJQUVLLG9CQUFvQixDQUFDLEtBQVU7O1lBQ25DLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDO0tBQUE7SUFFSyxxQkFBcUIsQ0FBQyxLQUFhLEVBQUUsTUFBbUM7O1lBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDOUQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDcEIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUNyQixpQ0FBaUM7Z0JBQ2pDLEtBQUssTUFBTSxRQUFRLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtvQkFDeEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQ2xHO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7S0FBQTtDQUNGLENBQUE7QUF4Q1ksZUFBZTtJQUQzQixNQUFNLENBQUMsZ0JBQWdCLENBQUM7cUNBR0ssZ0JBQWdCO0dBRmpDLGVBQWUsQ0F3QzNCO1NBeENZLGVBQWUiLCJmaWxlIjoic2VydmljZXMvZGVmYXVsdHMtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQge1xyXG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYURlZmluaXRpb25cclxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb24nO1xyXG5cclxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdHNTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxyXG5cclxuICBhc3luYyBnZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIG1vZGVsOiBhbnkpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2dldFNjaGVtYURlZmF1bHRBc3luYycsIHsgc2NoZW1hLCBtb2RlbCB9KTtcclxuICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcclxuICAgICAgY2FzZSAnYXJyYXknOlxyXG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRBcnJheURlZmF1bHRBc3luYyhtb2RlbCk7XHJcbiAgICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldE9iamVjdERlZmF1bHRBc3luYyhtb2RlbCwgKHNjaGVtYSBhcyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBtb2RlbCA9IGF3YWl0IHRoaXMuZ2V0UHJpbWl0aXZlRGVmYXVsdEFzeW5jKG1vZGVsLCBzY2hlbWEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0UHJpbWl0aXZlRGVmYXVsdEFzeW5jKG1vZGVsOiBhbnksIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uKSB7XHJcbiAgICBsZXQgdmFsdWU6IGFueSA9ICcnO1xyXG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgdmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBtb2RlbCB8fCBzY2hlbWEuY29uc3QgfHwgc2NoZW1hLmRlZmF1bHQgfHwgdmFsdWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRBcnJheURlZmF1bHRBc3luYyhtb2RlbDogYW55KTogUHJvbWlzZTxhbnlbXT4ge1xyXG4gICAgcmV0dXJuIG1vZGVsIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0T2JqZWN0RGVmYXVsdEFzeW5jKG1vZGVsOiBvYmplY3QsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKCdnZXRPYmplY3RNb2RlbERlZmF1bHRzJywgeyBtb2RlbCwgc2NoZW1hIH0pO1xyXG4gICAgbW9kZWwgPSBtb2RlbCB8fCB7fTtcclxuICAgIGlmIChzY2hlbWEucHJvcGVydGllcykge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEucHJvcGVydGllcykge1xyXG4gICAgICAgIG1vZGVsW3Byb3BlcnR5XSA9IGF3YWl0IHRoaXMuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XSwgbW9kZWxbcHJvcGVydHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
