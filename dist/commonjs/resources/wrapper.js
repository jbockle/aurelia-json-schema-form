"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Wrapper = /** @class */ (function () {
    function Wrapper(key) {
        var matches = key.match(Wrapper.emmetRegex);
        if (this.validateMatches(matches, key)) {
            var attr = this.getEmmetAttr(matches[1], matches[2], matches[3]);
            this.start = ("<" + attr.element + " " + attr.id + " " + attr.classes + ">").replace(/\s+/, " ").trim();
            this.end = this.isVoidElement(attr.element) ? "" : "</" + attr.element + ">";
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
            id: id ? "id=\"" + id + "\"" : "",
            classes: classes ? "class=\"" + classes.split(".").join(" ").trim() + "\"" : ""
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
    Wrapper.containerMarker = "@";
    Wrapper.emmetRegex = /^@([a-z-]+)(?:(?:(?:#(\w+))?)(?:((?:\.(?:[a-z\d-]+))+)?))$/;
    Wrapper.voidElements = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
    ];
    return Wrapper;
}());
exports.Wrapper = Wrapper;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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UUFDUCxLQUFLO0tBQ04sQ0FBQztJQW1ESixjQUFDO0NBdkVELEFBdUVDLElBQUE7QUF2RVksMEJBQU8iLCJmaWxlIjoicmVzb3VyY2VzL3dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVGVtcGxhdGVTdG9yZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV3JhcHBlciB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGNvbnRhaW5lck1hcmtlciA9IFwiQFwiO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgZW1tZXRSZWdleCA9IC9eQChbYS16LV0rKSg/Oig/Oig/OiMoXFx3KykpPykoPzooKD86XFwuKD86W2EtelxcZC1dKykpKyk/KSkkLztcclxuXHJcbiAgc3RhdGljIHJlYWRvbmx5IHZvaWRFbGVtZW50cyA9IFtcclxuICAgIFwiYXJlYVwiLFxyXG4gICAgXCJiYXNlXCIsXHJcbiAgICBcImJyXCIsXHJcbiAgICBcImNvbFwiLFxyXG4gICAgXCJlbWJlZFwiLFxyXG4gICAgXCJoclwiLFxyXG4gICAgXCJpbWdcIixcclxuICAgIFwiaW5wdXRcIixcclxuICAgIFwibGlua1wiLFxyXG4gICAgXCJtZXRhXCIsXHJcbiAgICBcInBhcmFtXCIsXHJcbiAgICBcInNvdXJjZVwiLFxyXG4gICAgXCJ0cmFja1wiLFxyXG4gICAgXCJ3YnJcIlxyXG4gIF07XHJcblxyXG4gIHN0YXRpYyBpc0NvbnRhaW5lcihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGtleS5jaGFyQXQoMCkgPT09IHRoaXMuY29udGFpbmVyTWFya2VyO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQ/OiBzdHJpbmc7XHJcbiAgZW5kPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGtleS5tYXRjaChXcmFwcGVyLmVtbWV0UmVnZXgpO1xyXG5cclxuICAgIGlmICh0aGlzLnZhbGlkYXRlTWF0Y2hlcyhtYXRjaGVzLCBrZXkpKSB7XHJcbiAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmdldEVtbWV0QXR0cihtYXRjaGVzWzFdLCBtYXRjaGVzWzJdLCBtYXRjaGVzWzNdKTtcclxuICAgICAgdGhpcy5zdGFydCA9IGA8JHthdHRyLmVsZW1lbnR9ICR7YXR0ci5pZH0gJHthdHRyLmNsYXNzZXN9PmAucmVwbGFjZSgvXFxzKy8sIFwiIFwiKS50cmltKCk7XHJcbiAgICAgIHRoaXMuZW5kID0gdGhpcy5pc1ZvaWRFbGVtZW50KGF0dHIuZWxlbWVudCkgPyBcIlwiIDogYDwvJHthdHRyLmVsZW1lbnR9PmA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVm9pZEVsZW1lbnQoZWxlbWVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gV3JhcHBlci52b2lkRWxlbWVudHMuaW5kZXhPZihlbGVtZW50KSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZU1hdGNoZXMobWF0Y2hlczogUmVnRXhwTWF0Y2hBcnJheSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghbWF0Y2hlcyAmJiBXcmFwcGVyLmlzQ29udGFpbmVyKGtleSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgZm9ybSBrZXkgXCIke2tleX1cIiBkb2VzIG5vdCBtYXRjaCBcIl4oQGVsZW1lbnQpKCNpZCk/KCguY2xhc3MpKyk/JFwiYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISFtYXRjaGVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbW1ldEF0dHIoXHJcbiAgICBlbGVtZW50LCBpZCwgY2xhc3Nlc1xyXG4gICk6IHsgZWxlbWVudDogc3RyaW5nLCBpZDogc3RyaW5nLCBjbGFzc2VzOiBzdHJpbmcgfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlbGVtZW50LFxyXG4gICAgICBpZDogaWQgPyBgaWQ9XCIke2lkfVwiYCA6IFwiXCIsXHJcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMgPyBgY2xhc3M9XCIke2NsYXNzZXMuc3BsaXQoXCIuXCIpLmpvaW4oXCIgXCIpLnRyaW0oKX1cImAgOiBcIlwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXBwbHlFbmQodGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlKSB7XHJcbiAgICBpZiAodGhpcy5lbmQpIHtcclxuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLmVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5U3RhcnQodGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlKSB7XHJcbiAgICBpZiAodGhpcy5zdGFydCkge1xyXG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
