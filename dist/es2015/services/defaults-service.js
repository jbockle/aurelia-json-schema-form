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
import { inject } from "aurelia-framework";
import { SchemaFormLogger } from "../resources/logger";
let DefaultsService = class DefaultsService {
    constructor(logger) {
        this.logger = logger;
    }
    getSchemaDefaultAsync(schema, model) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("getSchemaDefaultAsync", { schema, model });
            switch (schema.type) {
                case "array":
                    model = yield this.getArrayDefaultAsync(model, schema.items);
                case "object":
                    model = yield this.getObjectDefaultAsync(model, schema);
                default:
                    model = yield this.getPrimitiveDefaultAsync(model, schema);
            }
            return model;
        });
    }
    getPrimitiveDefaultAsync(model, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = "";
            if (schema.type === "boolean") {
                value = false;
            }
            return model || schema.const || schema.default || value;
        });
    }
    getArrayDefaultAsync(model, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            return model || [];
        });
    }
    getObjectDefaultAsync(model, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.warn("getObjectModelDefaults", { model, schema });
            model = model || {};
            if (schema.properties) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRdkQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUUxQixZQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFJLENBQUM7SUFFM0MscUJBQXFCLENBQUMsTUFBNkIsRUFBRSxLQUFVOztZQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQzVELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDbkIsS0FBSyxPQUFPO29CQUNWLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvRCxLQUFLLFFBQVE7b0JBQ1gsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRyxNQUFzQyxDQUFDLENBQUM7Z0JBQzNGO29CQUNFLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDOUQ7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7S0FBQTtJQUVLLHdCQUF3QixDQUFDLEtBQVUsRUFBRSxNQUE2Qjs7WUFDdEUsSUFBSSxLQUFLLEdBQVEsRUFBRSxDQUFDO1lBQ3BCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzdCLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDZjtZQUNELE9BQU8sS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDMUQsQ0FBQztLQUFBO0lBRUssb0JBQW9CLENBQUMsS0FBVSxFQUFFLE1BQWtDOztZQUN2RSxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBRUsscUJBQXFCLENBQUMsS0FBYSxFQUFFLE1BQW1DOztZQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzlELEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDckIsS0FBSyxNQUFNLFFBQVEsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO29CQUN4QyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDbEc7YUFDRjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQXZDWSxlQUFlO0lBRDNCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztxQ0FHSyxnQkFBZ0I7R0FGakMsZUFBZSxDQXVDM0I7U0F2Q1ksZUFBZSIsImZpbGUiOiJzZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQge1xyXG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbixcclxuICBJSnNvblNjaGVtYURlZmluaXRpb25cclxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcblxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Mb2dnZXIpXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0c1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XHJcblxyXG4gIGFzeW5jIGdldFNjaGVtYURlZmF1bHRBc3luYyhzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgbW9kZWw6IGFueSkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldFNjaGVtYURlZmF1bHRBc3luY1wiLCB7IHNjaGVtYSwgbW9kZWwgfSlcclxuICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcclxuICAgICAgY2FzZSBcImFycmF5XCI6XHJcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldEFycmF5RGVmYXVsdEFzeW5jKG1vZGVsLCBzY2hlbWEuaXRlbXMpO1xyXG4gICAgICBjYXNlIFwib2JqZWN0XCI6XHJcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldE9iamVjdERlZmF1bHRBc3luYyhtb2RlbCwgKHNjaGVtYSBhcyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBtb2RlbCA9IGF3YWl0IHRoaXMuZ2V0UHJpbWl0aXZlRGVmYXVsdEFzeW5jKG1vZGVsLCBzY2hlbWEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0UHJpbWl0aXZlRGVmYXVsdEFzeW5jKG1vZGVsOiBhbnksIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uKSB7XHJcbiAgICBsZXQgdmFsdWU6IGFueSA9IFwiXCI7XHJcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgIHZhbHVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9kZWwgfHwgc2NoZW1hLmNvbnN0IHx8IHNjaGVtYS5kZWZhdWx0IHx8IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QXJyYXlEZWZhdWx0QXN5bmMobW9kZWw6IGFueSwgc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbik6IFByb21pc2U8YW55W10+IHtcclxuICAgIHJldHVybiBtb2RlbCB8fCBbXTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldE9iamVjdERlZmF1bHRBc3luYyhtb2RlbDogb2JqZWN0LCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikge1xyXG4gICAgdGhpcy5sb2dnZXIud2FybihcImdldE9iamVjdE1vZGVsRGVmYXVsdHNcIiwgeyBtb2RlbCwgc2NoZW1hIH0pO1xyXG4gICAgbW9kZWwgPSBtb2RlbCB8fCB7fTtcclxuICAgIGlmIChzY2hlbWEucHJvcGVydGllcykge1xyXG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHNjaGVtYS5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgbW9kZWxbcHJvcGVydHldID0gYXdhaXQgdGhpcy5nZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLCBtb2RlbFtwcm9wZXJ0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9kZWw7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
