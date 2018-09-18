var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ValidationRules, validationMessages } from 'aurelia-validation';
import { inject } from 'aurelia-framework';
import { SchemaFormConfiguration } from '../services/schema-form-configuration';
let StringRules = class StringRules {
    constructor(configuration) {
        this.configuration = configuration;
    }
    register() {
        this.add();
        this.setCustomMessages();
    }
    setCustomMessages() {
        validationMessages.minLength = this.configuration.messages.minLength || validationMessages.minLength;
        validationMessages.maxLength = this.configuration.messages.maxLength || validationMessages.maxLength;
        validationMessages.matches = this.configuration.messages.pattern || validationMessages.matches;
        validationMessages.email = this.configuration.messages.format_email || validationMessages.email;
    }
    add() {
        // format datetime
        // tslint:disable-next-line:max-line-length
        const iso8601Datetime = /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i;
        ValidationRules
            .customRule('format_datetime', (val) => !!val ? iso8601Datetime.test(val) : true, this.configuration.messages.format_datetime || '${$displayName} is not a valid date/time.');
        // format date
        const iso8601Date = /^\d\d\d\d-[0-1]\d-[0-3]\d$/;
        ValidationRules
            .customRule('format_date', (val) => !!val ? iso8601Date.test(val) : true, this.configuration.messages.format_date || '${$displayName} is not a valid date.');
        // format time
        const iso8601Time = /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i;
        ValidationRules
            .customRule('format_time', (val) => !!val ? iso8601Time.test(val) : true, this.configuration.messages.format_time || '${$displayName} is not a valid time.');
        // format ipv4
        const ipv4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
        ValidationRules
            .customRule('format_ipv4', (val) => !!val ? ipv4.test(val) : true, this.configuration.messages.format_ipv4 || '${$displayName} is not a valid IPv4 address.');
        // format ipv6
        // tslint:disable-next-line:max-line-length
        const ipv6 = /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i;
        ValidationRules
            .customRule('format_ipv6', (val) => !!val ? ipv6.test(val) : true, this.configuration.messages.format_ipv6 || '${$displayName} is not a valid IPv6 address.');
        // format hostname
        const hostname = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i;
        ValidationRules
            .customRule('format_hostname', (val) => !!val ? hostname.test(val) : true, this.configuration.messages.format_hostname || '${$displayName} is not a valid hostname.');
        // format uri
        const uri = /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i;
        ValidationRules
            .customRule('format_uri', (val) => !!val ? uri.test(val) : true, this.configuration.messages.format_uri || '${$displayName} is not a valid URI.');
        // pattern
        ValidationRules
            .customRule('pattern', (val, _obj, pattern) => !!val ? (new RegExp(pattern)).test(val) : true, this.configuration.messages.pattern || '${$displayName} is not correctly formatted.', (pattern) => ({ pattern }));
    }
    bind(ctrl, rule) {
        if (ctrl.form.$schema.pattern) {
            rule = rule.satisfiesRule('pattern', ctrl.form.$schema.pattern);
        }
        if (ctrl.form.$schema.minLength) {
            rule = rule.minLength(ctrl.form.$schema.minLength);
        }
        if (ctrl.form.$schema.maxLength) {
            rule = rule.maxLength(ctrl.form.$schema.maxLength);
        }
        if (ctrl.form.$schema.format && ctrl.form.$schema.format !== 'email') {
            const rulename = `format_${ctrl.form.$schema.format.replace('-', '')}`;
            rule = rule.satisfiesRule(rulename);
        }
        if (ctrl.form.$schema.format === 'email') {
            rule = rule.email();
        }
    }
};
StringRules = __decorate([
    inject(SchemaFormConfiguration),
    __metadata("design:paramtypes", [SchemaFormConfiguration])
], StringRules);
export { StringRules };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q3JDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO1lBQ3hDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTVHWSxXQUFXO0lBRHZCLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztxQ0FFSyx1QkFBdUI7R0FEL0MsV0FBVyxDQTRHdkI7U0E1R1ksV0FBVyIsImZpbGUiOiJydWxlcy9zdHJpbmctcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIHZhbGlkYXRpb25NZXNzYWdlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IFNmU3RyaW5nIH0gZnJvbSAnLi4vZm9ybS90ZXh0L3NmLXN0cmluZyc7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5leHBvcnQgY2xhc3MgU3RyaW5nUnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cbiAgcmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5hZGQoKTtcbiAgICB0aGlzLnNldEN1c3RvbU1lc3NhZ2VzKCk7XG4gIH1cblxuICBzZXRDdXN0b21NZXNzYWdlcygpIHtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXMubWluTGVuZ3RoID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1pbkxlbmd0aCB8fCB2YWxpZGF0aW9uTWVzc2FnZXMubWluTGVuZ3RoO1xuICAgIHZhbGlkYXRpb25NZXNzYWdlcy5tYXhMZW5ndGggPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWF4TGVuZ3RoIHx8IHZhbGlkYXRpb25NZXNzYWdlcy5tYXhMZW5ndGg7XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzLm1hdGNoZXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMucGF0dGVybiB8fCB2YWxpZGF0aW9uTWVzc2FnZXMubWF0Y2hlcztcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXMuZW1haWwgPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2VtYWlsIHx8IHZhbGlkYXRpb25NZXNzYWdlcy5lbWFpbDtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICAvLyBmb3JtYXQgZGF0ZXRpbWVcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgY29uc3QgaXNvODYwMURhdGV0aW1lID0gL15cXGRcXGRcXGRcXGQtWzAtMV1cXGQtWzAtM11cXGRbdFxcc10oPzpbMC0yXVxcZDpbMC01XVxcZDpbMC01XVxcZHwyMzo1OTo2MCkoPzpcXC5cXGQrKT8oPzp6fFsrLV1cXGRcXGQ6XFxkXFxkKSQvaTtcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICAnZm9ybWF0X2RhdGV0aW1lJyxcbiAgICAgICAgKHZhbDogc3RyaW5nKSA9PiAhIXZhbCA/IGlzbzg2MDFEYXRldGltZS50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2RhdGV0aW1lIHx8ICckeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgZGF0ZS90aW1lLidcbiAgICAgICk7XG5cbiAgICAvLyBmb3JtYXQgZGF0ZVxuICAgIGNvbnN0IGlzbzg2MDFEYXRlID0gL15cXGRcXGRcXGRcXGQtWzAtMV1cXGQtWzAtM11cXGQkLztcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICAnZm9ybWF0X2RhdGUnLFxuICAgICAgICAodmFsOiBzdHJpbmcpID0+ICEhdmFsID8gaXNvODYwMURhdGUudGVzdCh2YWwpIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmZvcm1hdF9kYXRlIHx8ICckeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgZGF0ZS4nXG4gICAgICApO1xuXG4gICAgLy8gZm9ybWF0IHRpbWVcbiAgICBjb25zdCBpc284NjAxVGltZSA9IC9eKD86WzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGR8MjM6NTk6NjApKD86XFwuXFxkKyk/KD86enxbKy1dXFxkXFxkOlxcZFxcZCk/JC9pO1xuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgICdmb3JtYXRfdGltZScsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gISF2YWwgPyBpc284NjAxVGltZS50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X3RpbWUgfHwgJyR7JGRpc3BsYXlOYW1lfSBpcyBub3QgYSB2YWxpZCB0aW1lLidcbiAgICAgICk7XG5cbiAgICAvLyBmb3JtYXQgaXB2NFxuICAgIGNvbnN0IGlwdjQgPSAvXig/Oig/OjI1WzAtNV18MlswLTRdXFxkfFswMV0/XFxkXFxkPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1cXGR8WzAxXT9cXGRcXGQ/KSQvO1xuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgICdmb3JtYXRfaXB2NCcsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gISF2YWwgPyBpcHY0LnRlc3QodmFsKSA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5mb3JtYXRfaXB2NCB8fCAnJHskZGlzcGxheU5hbWV9IGlzIG5vdCBhIHZhbGlkIElQdjQgYWRkcmVzcy4nXG4gICAgICApO1xuXG4gICAgLy8gZm9ybWF0IGlwdjZcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgY29uc3QgaXB2NiA9IC9eXFxzKig/Oig/Oig/OlswLTlhLWZdezEsNH06KXs3fSg/OlswLTlhLWZdezEsNH18OikpfCg/Oig/OlswLTlhLWZdezEsNH06KXs2fSg/OjpbMC05YS1mXXsxLDR9fCg/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pfDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7NX0oPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSwyfSl8Oig/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pfDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7NH0oPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSwzfSl8KD86KD86OlswLTlhLWZdezEsNH0pPzooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg/Oig/OlswLTlhLWZdezEsNH06KXszfSg/Oig/Oig/OjpbMC05YS1mXXsxLDR9KXsxLDR9KXwoPzooPzo6WzAtOWEtZl17MSw0fSl7MCwyfTooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg/Oig/OlswLTlhLWZdezEsNH06KXsyfSg/Oig/Oig/OjpbMC05YS1mXXsxLDR9KXsxLDV9KXwoPzooPzo6WzAtOWEtZl17MSw0fSl7MCwzfTooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg/Oig/OlswLTlhLWZdezEsNH06KXsxfSg/Oig/Oig/OjpbMC05YS1mXXsxLDR9KXsxLDZ9KXwoPzooPzo6WzAtOWEtZl17MSw0fSl7MCw0fTooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg/OjooPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSw3fSl8KD86KD86OlswLTlhLWZdezEsNH0pezAsNX06KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKSkoPzolLispP1xccyokL2k7XG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgJ2Zvcm1hdF9pcHY2JyxcbiAgICAgICAgKHZhbDogc3RyaW5nKSA9PiAhIXZhbCA/IGlwdjYudGVzdCh2YWwpIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmZvcm1hdF9pcHY2IHx8ICckeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgSVB2NiBhZGRyZXNzLidcbiAgICAgICk7XG5cbiAgICAvLyBmb3JtYXQgaG9zdG5hbWVcbiAgICBjb25zdCBob3N0bmFtZSA9IC9eW2EtejAtOV0oPzpbYS16MC05LV17MCw2MX1bYS16MC05XSk/KD86XFwuW2EtejAtOV0oPzpbLTAtOWEtel17MCw2MX1bMC05YS16XSk/KSokL2k7XG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgJ2Zvcm1hdF9ob3N0bmFtZScsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gISF2YWwgPyBob3N0bmFtZS50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2hvc3RuYW1lIHx8ICckeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgaG9zdG5hbWUuJ1xuICAgICAgKTtcblxuICAgIC8vIGZvcm1hdCB1cmlcbiAgICBjb25zdCB1cmkgPSAvXig/OlthLXpdW2EtejAtOSstLl0qOikoPzpcXC8/XFwvKT9bXlxcc10qJC9pO1xuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgICdmb3JtYXRfdXJpJyxcbiAgICAgICAgKHZhbDogc3RyaW5nKSA9PiAhIXZhbCA/IHVyaS50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X3VyaSB8fCAnJHskZGlzcGxheU5hbWV9IGlzIG5vdCBhIHZhbGlkIFVSSS4nXG4gICAgICApO1xuXG4gICAgLy8gcGF0dGVyblxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgICdwYXR0ZXJuJyxcbiAgICAgICAgKHZhbCwgX29iaiwgcGF0dGVybikgPT4gISF2YWwgPyAobmV3IFJlZ0V4cChwYXR0ZXJuKSkudGVzdCh2YWwpIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLnBhdHRlcm4gfHwgJyR7JGRpc3BsYXlOYW1lfSBpcyBub3QgY29ycmVjdGx5IGZvcm1hdHRlZC4nLFxuICAgICAgICAocGF0dGVybikgPT4gKHsgcGF0dGVybiB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogU2ZTdHJpbmcsIHJ1bGU6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+KSB7XG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLnBhdHRlcm4pIHtcbiAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUoJ3BhdHRlcm4nLCBjdHJsLmZvcm0uJHNjaGVtYS5wYXR0ZXJuKTtcbiAgICB9XG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLm1pbkxlbmd0aCkge1xuICAgICAgcnVsZSA9IHJ1bGUubWluTGVuZ3RoKGN0cmwuZm9ybS4kc2NoZW1hLm1pbkxlbmd0aCk7XG4gICAgfVxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS5tYXhMZW5ndGgpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1heExlbmd0aChjdHJsLmZvcm0uJHNjaGVtYS5tYXhMZW5ndGgpO1xuICAgIH1cbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEuZm9ybWF0ICYmIGN0cmwuZm9ybS4kc2NoZW1hLmZvcm1hdCAhPT0gJ2VtYWlsJykge1xuICAgICAgY29uc3QgcnVsZW5hbWUgPSBgZm9ybWF0XyR7Y3RybC5mb3JtLiRzY2hlbWEuZm9ybWF0LnJlcGxhY2UoJy0nLCAnJyl9YDtcbiAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUocnVsZW5hbWUpO1xuICAgIH1cbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEuZm9ybWF0ID09PSAnZW1haWwnKSB7XG4gICAgICBydWxlID0gcnVsZS5lbWFpbCgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
