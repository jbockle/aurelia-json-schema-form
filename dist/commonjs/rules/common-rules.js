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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var schema_form_configuration_1 = require("../services/schema-form-configuration");
var aurelia_validation_1 = require("aurelia-validation");
var CommonRules = /** @class */ (function () {
    function CommonRules(configuration) {
        this.configuration = configuration;
        this.type = 'common';
    }
    CommonRules.prototype.register = function () {
        this.add();
    };
    CommonRules.prototype.setCustomMessages = function () {
        aurelia_validation_1.validationMessages.const = this.configuration.messages.const || aurelia_validation_1.validationMessages.equals;
    };
    CommonRules.prototype.add = function () {
        // enum
        aurelia_validation_1.ValidationRules
            .customRule('enum', function (val, _obj, allowedValues) { return val !== undefined ? allowedValues.indexOf(val) >= 0 : true; }, this.configuration.messages.enum || '${$displayName} has an invalid selection.', function (allowedValues) { return ({ allowedValues: allowedValues }); });
    };
    CommonRules.prototype.bind = function (ctrl) {
        var rule = aurelia_validation_1.ValidationRules
            .ensure('model')
            .displayName(ctrl.form.$schema.title)
            .satisfies(function () { return true; });
        if (ctrl.form.$schema.const) {
            rule = rule.equals(ctrl.form.$schema.const);
        }
        if (ctrl.form.$schema.enum) {
            rule = rule.satisfiesRule('enum', ctrl.form.$schema.enum);
        }
        if (ctrl.form.$required) {
            rule = rule.required();
        }
        return rule;
    };
    CommonRules = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
    ], CommonRules);
    return CommonRules;
}());
exports.CommonRules = CommonRules;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVEQUEyQztBQUMzQyxtRkFBZ0Y7QUFDaEYseURBQStGO0FBRy9GO0lBQ0UscUJBQW9CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUUxRCxTQUFJLEdBQUcsUUFBUSxDQUFDO0lBRjhDLENBQUM7SUFJL0QsOEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCx1Q0FBaUIsR0FBakI7UUFDRSx1Q0FBa0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLHVDQUFrQixDQUFDLE1BQU0sQ0FBQztJQUM1RixDQUFDO0lBRUQseUJBQUcsR0FBSDtRQUNFLE9BQU87UUFDUCxvQ0FBZTthQUNaLFVBQVUsQ0FDVCxNQUFNLEVBQ04sVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGFBQW9CLElBQUssT0FBQSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUExRCxDQUEwRCxFQUMvRixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksMkNBQTJDLEVBQy9FLFVBQUMsYUFBYSxJQUFLLE9BQUEsQ0FBQyxFQUFFLGFBQWEsZUFBQSxFQUFFLENBQUMsRUFBbkIsQ0FBbUIsQ0FDdkMsQ0FBQztJQUNOLENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQUssSUFBUztRQUNaLElBQUksSUFBSSxHQUFHLG9DQUFlO2FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3BDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBdkNVLFdBQVc7UUFEdkIsMEJBQU0sQ0FBQyxtREFBdUIsQ0FBQzt5Q0FFSyxtREFBdUI7T0FEL0MsV0FBVyxDQXdDdkI7SUFBRCxrQkFBQztDQXhDRCxBQXdDQyxJQUFBO0FBeENZLGtDQUFXIiwiZmlsZSI6InJ1bGVzL2NvbW1vbi1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSdWxlcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcnVsZXMnO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgdmFsaWRhdGlvbk1lc3NhZ2VzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcblxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uUnVsZXMgaW1wbGVtZW50cyBJUnVsZXMge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxyXG5cclxuICB0eXBlID0gJ2NvbW1vbic7XHJcblxyXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hZGQoKTtcclxuICB9XHJcblxyXG4gIHNldEN1c3RvbU1lc3NhZ2VzKCkge1xyXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzLmNvbnN0ID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmNvbnN0IHx8IHZhbGlkYXRpb25NZXNzYWdlcy5lcXVhbHM7XHJcbiAgfVxyXG5cclxuICBhZGQoKTogdm9pZCB7XHJcbiAgICAvLyBlbnVtXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgJ2VudW0nLFxyXG4gICAgICAgICh2YWwsIF9vYmosIGFsbG93ZWRWYWx1ZXM6IGFueVtdKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IGFsbG93ZWRWYWx1ZXMuaW5kZXhPZih2YWwpID49IDAgOiB0cnVlLFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5lbnVtIHx8ICckeyRkaXNwbGF5TmFtZX0gaGFzIGFuIGludmFsaWQgc2VsZWN0aW9uLicsXHJcbiAgICAgICAgKGFsbG93ZWRWYWx1ZXMpID0+ICh7IGFsbG93ZWRWYWx1ZXMgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGJpbmQoY3RybDogYW55KTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4ge1xyXG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmVuc3VyZSgnbW9kZWwnKVxyXG4gICAgICAuZGlzcGxheU5hbWUoY3RybC5mb3JtLiRzY2hlbWEudGl0bGUpXHJcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XHJcbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEuY29uc3QpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUuZXF1YWxzKGN0cmwuZm9ybS4kc2NoZW1hLmNvbnN0KTtcclxuICAgIH1cclxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS5lbnVtKSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUoJ2VudW0nLCBjdHJsLmZvcm0uJHNjaGVtYS5lbnVtKTtcclxuICAgIH1cclxuICAgIGlmIChjdHJsLmZvcm0uJHJlcXVpcmVkKSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcnVsZTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
