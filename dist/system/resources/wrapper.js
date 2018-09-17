System.register([], function (exports_1, context_1) {
    "use strict";
    var Wrapper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Wrapper = /** @class */ (function () {
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
            exports_1("Wrapper", Wrapper);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFDUCxNQUFNO29CQUNOLE1BQU07b0JBQ04sT0FBTztvQkFDUCxRQUFRO29CQUNSLE9BQU87b0JBQ1AsS0FBSztpQkFDTixDQUFDO2dCQW1ESixjQUFDO2FBdkVELEFBdUVDOztRQUNELENBQUMiLCJmaWxlIjoicmVzb3VyY2VzL3dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVGVtcGxhdGVTdG9yZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV3JhcHBlciB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGNvbnRhaW5lck1hcmtlciA9IFwiQFwiO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgZW1tZXRSZWdleCA9IC9eQChbYS16LV0rKSg/Oig/Oig/OiMoXFx3KykpPykoPzooKD86XFwuKD86W2EtelxcZC1dKykpKyk/KSkkLztcclxuXHJcbiAgc3RhdGljIHJlYWRvbmx5IHZvaWRFbGVtZW50cyA9IFtcclxuICAgIFwiYXJlYVwiLFxyXG4gICAgXCJiYXNlXCIsXHJcbiAgICBcImJyXCIsXHJcbiAgICBcImNvbFwiLFxyXG4gICAgXCJlbWJlZFwiLFxyXG4gICAgXCJoclwiLFxyXG4gICAgXCJpbWdcIixcclxuICAgIFwiaW5wdXRcIixcclxuICAgIFwibGlua1wiLFxyXG4gICAgXCJtZXRhXCIsXHJcbiAgICBcInBhcmFtXCIsXHJcbiAgICBcInNvdXJjZVwiLFxyXG4gICAgXCJ0cmFja1wiLFxyXG4gICAgXCJ3YnJcIlxyXG4gIF07XHJcblxyXG4gIHN0YXRpYyBpc0NvbnRhaW5lcihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGtleS5jaGFyQXQoMCkgPT09IHRoaXMuY29udGFpbmVyTWFya2VyO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQ/OiBzdHJpbmc7XHJcbiAgZW5kPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGtleS5tYXRjaChXcmFwcGVyLmVtbWV0UmVnZXgpO1xyXG5cclxuICAgIGlmICh0aGlzLnZhbGlkYXRlTWF0Y2hlcyhtYXRjaGVzLCBrZXkpKSB7XHJcbiAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmdldEVtbWV0QXR0cihtYXRjaGVzWzFdLCBtYXRjaGVzWzJdLCBtYXRjaGVzWzNdKTtcclxuICAgICAgdGhpcy5zdGFydCA9IGA8JHthdHRyLmVsZW1lbnR9ICR7YXR0ci5pZH0gJHthdHRyLmNsYXNzZXN9PmAucmVwbGFjZSgvXFxzKy8sIFwiIFwiKS50cmltKCk7XHJcbiAgICAgIHRoaXMuZW5kID0gdGhpcy5pc1ZvaWRFbGVtZW50KGF0dHIuZWxlbWVudCkgPyBcIlwiIDogYDwvJHthdHRyLmVsZW1lbnR9PmA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVm9pZEVsZW1lbnQoZWxlbWVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gV3JhcHBlci52b2lkRWxlbWVudHMuaW5kZXhPZihlbGVtZW50KSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZU1hdGNoZXMobWF0Y2hlczogUmVnRXhwTWF0Y2hBcnJheSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghbWF0Y2hlcyAmJiBXcmFwcGVyLmlzQ29udGFpbmVyKGtleSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgZm9ybSBrZXkgXCIke2tleX1cIiBkb2VzIG5vdCBtYXRjaCBcIl4oQGVsZW1lbnQpKCNpZCk/KCguY2xhc3MpKyk/JFwiYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISFtYXRjaGVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbW1ldEF0dHIoXHJcbiAgICBlbGVtZW50LCBpZCwgY2xhc3Nlc1xyXG4gICk6IHsgZWxlbWVudDogc3RyaW5nLCBpZDogc3RyaW5nLCBjbGFzc2VzOiBzdHJpbmcgfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlbGVtZW50LFxyXG4gICAgICBpZDogaWQgPyBgaWQ9XCIke2lkfVwiYCA6IFwiXCIsXHJcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMgPyBgY2xhc3M9XCIke2NsYXNzZXMuc3BsaXQoXCIuXCIpLmpvaW4oXCIgXCIpLnRyaW0oKX1cImAgOiBcIlwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXBwbHlFbmQodGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlKSB7XHJcbiAgICBpZiAodGhpcy5lbmQpIHtcclxuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLmVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5U3RhcnQodGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlKSB7XHJcbiAgICBpZiAodGhpcy5zdGFydCkge1xyXG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
