"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Wrapper = /** @class */ (function () {
    function Wrapper(key) {
        var matches = key.match(Wrapper.emmetRegex);
        if (this.validateMatches(matches, key)) {
            var attr = this.getEmmetAttr(matches[1], matches[2], matches[3]);
            this.start = ("<" + attr.element + " " + attr.id + " " + attr.classes + ">").replace(/\s+/, ' ').trim();
            this.end = this.isVoidElement(attr.element) ? '' : "</" + attr.element + ">";
        }
    }
    Wrapper.isContainer = function (key) {
        return key.charAt(0) === this.containerMarker;
    };
    Wrapper.prototype.isVoidElement = function (element) {
        return Wrapper.voidElements.indexOf(element) > -1;
    };
    Wrapper.prototype.validateMatches = function (matches, key) {
        if (!matches && Wrapper.isContainer(key)) {
            throw new Error("the form key \"" + key + "\" does not match \"^(@element)(#id)?((.class)+)?$\"");
        }
        return !!matches;
    };
    Wrapper.prototype.getEmmetAttr = function (element, id, classes) {
        return {
            element: element,
            id: id ? "id=\"" + id + "\"" : '',
            classes: classes ? "class=\"" + classes.split('.').join(' ').trim() + "\"" : ''
        };
    };
    Wrapper.prototype.applyEnd = function (template) {
        if (this.end) {
            template.content += this.end;
        }
    };
    Wrapper.prototype.applyStart = function (template) {
        if (this.start) {
            template.content += this.start;
        }
    };
    Wrapper.containerMarker = '@';
    Wrapper.emmetRegex = /^@([a-z-]+)(?:(?:(?:#(\w+))?)(?:((?:\.(?:[a-z\d-]+))+)?))$/;
    Wrapper.voidElements = [
        'area',
        'base',
        'br',
        'col',
        'embed',
        'hr',
        'img',
        'input',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr'
    ];
    return Wrapper;
}());
exports.Wrapper = Wrapper;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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UUFDUCxLQUFLO0tBQ04sQ0FBQztJQW1ESixjQUFDO0NBdkVELEFBdUVDLElBQUE7QUF2RVksMEJBQU8iLCJmaWxlIjoicmVzb3VyY2VzL3dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVGVtcGxhdGVTdG9yZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdGVtcGxhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdyYXBwZXIge1xyXG4gIHN0YXRpYyByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSAnQCc7XHJcblxyXG4gIHN0YXRpYyByZWFkb25seSBlbW1ldFJlZ2V4ID0gL15AKFthLXotXSspKD86KD86KD86IyhcXHcrKSk/KSg/OigoPzpcXC4oPzpbYS16XFxkLV0rKSkrKT8pKSQvO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgdm9pZEVsZW1lbnRzID0gW1xyXG4gICAgJ2FyZWEnLFxyXG4gICAgJ2Jhc2UnLFxyXG4gICAgJ2JyJyxcclxuICAgICdjb2wnLFxyXG4gICAgJ2VtYmVkJyxcclxuICAgICdocicsXHJcbiAgICAnaW1nJyxcclxuICAgICdpbnB1dCcsXHJcbiAgICAnbGluaycsXHJcbiAgICAnbWV0YScsXHJcbiAgICAncGFyYW0nLFxyXG4gICAgJ3NvdXJjZScsXHJcbiAgICAndHJhY2snLFxyXG4gICAgJ3dicidcclxuICBdO1xyXG5cclxuICBzdGF0aWMgaXNDb250YWluZXIoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLmNvbnRhaW5lck1hcmtlcjtcclxuICB9XHJcblxyXG4gIHN0YXJ0Pzogc3RyaW5nO1xyXG4gIGVuZD86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBrZXkubWF0Y2goV3JhcHBlci5lbW1ldFJlZ2V4KTtcclxuXHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZU1hdGNoZXMobWF0Y2hlcywga2V5KSkge1xyXG4gICAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRFbW1ldEF0dHIobWF0Y2hlc1sxXSwgbWF0Y2hlc1syXSwgbWF0Y2hlc1szXSk7XHJcbiAgICAgIHRoaXMuc3RhcnQgPSBgPCR7YXR0ci5lbGVtZW50fSAke2F0dHIuaWR9ICR7YXR0ci5jbGFzc2VzfT5gLnJlcGxhY2UoL1xccysvLCAnICcpLnRyaW0oKTtcclxuICAgICAgdGhpcy5lbmQgPSB0aGlzLmlzVm9pZEVsZW1lbnQoYXR0ci5lbGVtZW50KSA/ICcnIDogYDwvJHthdHRyLmVsZW1lbnR9PmA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVm9pZEVsZW1lbnQoZWxlbWVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gV3JhcHBlci52b2lkRWxlbWVudHMuaW5kZXhPZihlbGVtZW50KSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZU1hdGNoZXMobWF0Y2hlczogUmVnRXhwTWF0Y2hBcnJheSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghbWF0Y2hlcyAmJiBXcmFwcGVyLmlzQ29udGFpbmVyKGtleSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgZm9ybSBrZXkgXCIke2tleX1cIiBkb2VzIG5vdCBtYXRjaCBcIl4oQGVsZW1lbnQpKCNpZCk/KCguY2xhc3MpKyk/JFwiYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISFtYXRjaGVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbW1ldEF0dHIoXHJcbiAgICBlbGVtZW50LCBpZCwgY2xhc3Nlc1xyXG4gICk6IHsgZWxlbWVudDogc3RyaW5nLCBpZDogc3RyaW5nLCBjbGFzc2VzOiBzdHJpbmcgfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlbGVtZW50LFxyXG4gICAgICBpZDogaWQgPyBgaWQ9XCIke2lkfVwiYCA6ICcnLFxyXG4gICAgICBjbGFzc2VzOiBjbGFzc2VzID8gYGNsYXNzPVwiJHtjbGFzc2VzLnNwbGl0KCcuJykuam9pbignICcpLnRyaW0oKX1cImAgOiAnJ1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFwcGx5RW5kKHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSkge1xyXG4gICAgaWYgKHRoaXMuZW5kKSB7XHJcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBseVN0YXJ0KHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSkge1xyXG4gICAgaWYgKHRoaXMuc3RhcnQpIHtcclxuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLnN0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
