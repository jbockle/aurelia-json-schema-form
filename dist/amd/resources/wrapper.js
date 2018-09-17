define(["require", "exports"], function (require, exports) {
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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WUFDUixPQUFPO1lBQ1AsS0FBSztTQUNOLENBQUM7UUFtREosY0FBQztLQXZFRCxBQXVFQyxJQUFBO0lBdkVZLDBCQUFPIiwiZmlsZSI6InJlc291cmNlcy93cmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRlbXBsYXRlU3RvcmUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdyYXBwZXIge1xyXG4gIHN0YXRpYyByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSBcIkBcIjtcclxuXHJcbiAgc3RhdGljIHJlYWRvbmx5IGVtbWV0UmVnZXggPSAvXkAoW2Etei1dKykoPzooPzooPzojKFxcdyspKT8pKD86KCg/OlxcLig/OlthLXpcXGQtXSspKSspPykpJC87XHJcblxyXG4gIHN0YXRpYyByZWFkb25seSB2b2lkRWxlbWVudHMgPSBbXHJcbiAgICBcImFyZWFcIixcclxuICAgIFwiYmFzZVwiLFxyXG4gICAgXCJiclwiLFxyXG4gICAgXCJjb2xcIixcclxuICAgIFwiZW1iZWRcIixcclxuICAgIFwiaHJcIixcclxuICAgIFwiaW1nXCIsXHJcbiAgICBcImlucHV0XCIsXHJcbiAgICBcImxpbmtcIixcclxuICAgIFwibWV0YVwiLFxyXG4gICAgXCJwYXJhbVwiLFxyXG4gICAgXCJzb3VyY2VcIixcclxuICAgIFwidHJhY2tcIixcclxuICAgIFwid2JyXCJcclxuICBdO1xyXG5cclxuICBzdGF0aWMgaXNDb250YWluZXIoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLmNvbnRhaW5lck1hcmtlcjtcclxuICB9XHJcblxyXG4gIHN0YXJ0Pzogc3RyaW5nO1xyXG4gIGVuZD86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBrZXkubWF0Y2goV3JhcHBlci5lbW1ldFJlZ2V4KTtcclxuXHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZU1hdGNoZXMobWF0Y2hlcywga2V5KSkge1xyXG4gICAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRFbW1ldEF0dHIobWF0Y2hlc1sxXSwgbWF0Y2hlc1syXSwgbWF0Y2hlc1szXSk7XHJcbiAgICAgIHRoaXMuc3RhcnQgPSBgPCR7YXR0ci5lbGVtZW50fSAke2F0dHIuaWR9ICR7YXR0ci5jbGFzc2VzfT5gLnJlcGxhY2UoL1xccysvLCBcIiBcIikudHJpbSgpO1xyXG4gICAgICB0aGlzLmVuZCA9IHRoaXMuaXNWb2lkRWxlbWVudChhdHRyLmVsZW1lbnQpID8gXCJcIiA6IGA8LyR7YXR0ci5lbGVtZW50fT5gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZvaWRFbGVtZW50KGVsZW1lbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIFdyYXBwZXIudm9pZEVsZW1lbnRzLmluZGV4T2YoZWxlbWVudCkgPiAtMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVNYXRjaGVzKG1hdGNoZXM6IFJlZ0V4cE1hdGNoQXJyYXksIGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIW1hdGNoZXMgJiYgV3JhcHBlci5pc0NvbnRhaW5lcihrZXkpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlIGZvcm0ga2V5IFwiJHtrZXl9XCIgZG9lcyBub3QgbWF0Y2ggXCJeKEBlbGVtZW50KSgjaWQpPygoLmNsYXNzKSspPyRcImApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEhbWF0Y2hlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RW1tZXRBdHRyKFxyXG4gICAgZWxlbWVudCwgaWQsIGNsYXNzZXNcclxuICApOiB7IGVsZW1lbnQ6IHN0cmluZywgaWQ6IHN0cmluZywgY2xhc3Nlczogc3RyaW5nIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZWxlbWVudCxcclxuICAgICAgaWQ6IGlkID8gYGlkPVwiJHtpZH1cImAgOiBcIlwiLFxyXG4gICAgICBjbGFzc2VzOiBjbGFzc2VzID8gYGNsYXNzPVwiJHtjbGFzc2VzLnNwbGl0KFwiLlwiKS5qb2luKFwiIFwiKS50cmltKCl9XCJgIDogXCJcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFwcGx5RW5kKHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSkge1xyXG4gICAgaWYgKHRoaXMuZW5kKSB7XHJcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBseVN0YXJ0KHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSkge1xyXG4gICAgaWYgKHRoaXMuc3RhcnQpIHtcclxuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLnN0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
