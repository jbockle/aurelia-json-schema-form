var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ValidationRules } from 'aurelia-validation';
import { inject } from 'aurelia-framework';
import { SchemaFormConfiguration } from '../services/schema-form-configuration';
let NumberRules = class NumberRules {
    constructor(configuration) {
        this.configuration = configuration;
    }
    register() {
        this.add();
    }
    add() {
        // minimum
        ValidationRules
            .customRule('minimum', (val, _obj, min) => val !== undefined ? val >= min : true, this.configuration.messages.minimum || '${$displayName} must be greater than or equal to ${$config.min}.', (min) => ({ min }));
        // exclusionMinimum
        ValidationRules
            .customRule('exclusiveMinimum', (val, _obj, min) => val !== undefined ? val > min : true, this.configuration.messages.exclusiveMinimum || '${$displayName} must be greater than ${$config.min}.', (min) => ({ min }));
        // maximum
        ValidationRules
            .customRule('maximum', (val, _obj, max) => val !== undefined ? val <= max : true, this.configuration.messages.maximum || '${$displayName} must be less than or equal to ${$config.max}.', (max) => ({ max }));
        // exclusiveMaximum
        ValidationRules
            .customRule('exclusiveMaximum', (val, _obj, max) => val !== undefined ? val < max : true, this.configuration.messages.exclusiveMaximum || '${$displayName} must be less than ${$config.max}.', (max) => ({ max }));
        // multipleOf
        ValidationRules
            .customRule('multipleOf', (val, _obj, multiple) => val !== undefined ? ((val % multiple) / 100) === 0 : true, this.configuration.messages.multipleOf || '${$displayName} must be a multiple of ${$config.multiple}.', (multiple) => ({ multiple }));
    }
    bind(ctrl, rule) {
        [
            'minimum',
            'maximum',
            'exclusiveMinimum',
            'exclusiveMaximum',
            'multipleOf'
        ].forEach((r) => {
            if (Number.isInteger(ctrl.form.$schema[r])) {
                rule = rule.satisfiesRule(r, ctrl.form.$schema[r]);
            }
        });
    }
};
NumberRules = __decorate([
    inject(SchemaFormConfiguration),
    __metadata("design:paramtypes", [SchemaFormConfiguration])
], NumberRules);
export { NumberRules };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL251bWJlci1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUF3QixNQUFNLG9CQUFvQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUloRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBQ3RCLFlBQW9CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtJQUFJLENBQUM7SUFFL0QsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxHQUFHO1FBQ0QsVUFBVTtRQUNWLGVBQWU7YUFDWixVQUFVLENBQ1QsU0FBUyxFQUNULENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLGtFQUFrRSxFQUN6RyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ25CLENBQUM7UUFFSixtQkFBbUI7UUFDbkIsZUFBZTthQUNaLFVBQVUsQ0FDVCxrQkFBa0IsRUFDbEIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsSUFBSSxzREFBc0QsRUFDdEcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUNuQixDQUFDO1FBRUosVUFBVTtRQUNWLGVBQWU7YUFDWixVQUFVLENBQ1QsU0FBUyxFQUNULENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLCtEQUErRCxFQUN0RyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ25CLENBQUM7UUFFSixtQkFBbUI7UUFDbkIsZUFBZTthQUNaLFVBQVUsQ0FDVCxrQkFBa0IsRUFDbEIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsSUFBSSxtREFBbUQsRUFDbkcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUNuQixDQUFDO1FBRUosYUFBYTtRQUNiLGVBQWU7YUFDWixVQUFVLENBQ1QsWUFBWSxFQUNaLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ2xGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSw0REFBNEQsRUFDdEcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUM3QixDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksQ0FBQyxJQUFjLEVBQUUsSUFBbUM7UUFDdEQ7WUFDRSxTQUFTO1lBQ1QsU0FBUztZQUNULGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsWUFBWTtTQUNiLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDZCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBbkVZLFdBQVc7SUFEdkIsTUFBTSxDQUFDLHVCQUF1QixDQUFDO3FDQUVLLHVCQUF1QjtHQUQvQyxXQUFXLENBbUV2QjtTQW5FWSxXQUFXIiwiZmlsZSI6InJ1bGVzL251bWJlci1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFNmTnVtYmVyIH0gZnJvbSAnLi4vZm9ybS9udW1iZXIvc2YtbnVtYmVyJztcclxuXHJcbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJSdWxlcyB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XHJcblxyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgdGhpcy5hZGQoKTtcclxuICB9XHJcblxyXG4gIGFkZCgpIHtcclxuICAgIC8vIG1pbmltdW1cclxuICAgIFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuY3VzdG9tUnVsZShcclxuICAgICAgICAnbWluaW11bScsXHJcbiAgICAgICAgKHZhbCwgX29iaiwgbWluKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA+PSBtaW4gOiB0cnVlLFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5taW5pbXVtIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHskY29uZmlnLm1pbn0uJyxcclxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBleGNsdXNpb25NaW5pbXVtXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgJ2V4Y2x1c2l2ZU1pbmltdW0nLFxyXG4gICAgICAgICh2YWwsIF9vYmosIG1pbikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPiBtaW4gOiB0cnVlLFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5leGNsdXNpdmVNaW5pbXVtIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gJHskY29uZmlnLm1pbn0uJyxcclxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBtYXhpbXVtXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgJ21heGltdW0nLFxyXG4gICAgICAgICh2YWwsIF9vYmosIG1heCkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPD0gbWF4IDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWF4aW11bSB8fCAnJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7JGNvbmZpZy5tYXh9LicsXHJcbiAgICAgICAgKG1heCkgPT4gKHsgbWF4IH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gZXhjbHVzaXZlTWF4aW11bVxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgICdleGNsdXNpdmVNYXhpbXVtJyxcclxuICAgICAgICAodmFsLCBfb2JqLCBtYXgpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDwgbWF4IDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZXhjbHVzaXZlTWF4aW11bSB8fCAnJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuICR7JGNvbmZpZy5tYXh9LicsXHJcbiAgICAgICAgKG1heCkgPT4gKHsgbWF4IH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gbXVsdGlwbGVPZlxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgICdtdWx0aXBsZU9mJyxcclxuICAgICAgICAodmFsLCBfb2JqLCBtdWx0aXBsZSkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyAoKHZhbCAlIG11bHRpcGxlKSAvIDEwMCkgPT09IDAgOiB0cnVlLFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5tdWx0aXBsZU9mIHx8ICckeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7JGNvbmZpZy5tdWx0aXBsZX0uJyxcclxuICAgICAgICAobXVsdGlwbGUpID0+ICh7IG11bHRpcGxlIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBiaW5kKGN0cmw6IFNmTnVtYmVyLCBydWxlOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55Pikge1xyXG4gICAgW1xyXG4gICAgICAnbWluaW11bScsXHJcbiAgICAgICdtYXhpbXVtJyxcclxuICAgICAgJ2V4Y2x1c2l2ZU1pbmltdW0nLFxyXG4gICAgICAnZXhjbHVzaXZlTWF4aW11bScsXHJcbiAgICAgICdtdWx0aXBsZU9mJ1xyXG4gICAgXS5mb3JFYWNoKChyKSA9PiB7XHJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hW3JdKSkge1xyXG4gICAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUociwgY3RybC5mb3JtLiRzY2hlbWFbcl0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
