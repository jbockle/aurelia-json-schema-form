var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "jquery"], function (require, exports, aurelia_framework_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BootstrapTooltip = /** @class */ (function () {
        function BootstrapTooltip(element) {
            this.element = element;
            this.element = element;
        }
        BootstrapTooltip.prototype.bind = function () {
            this.element.setAttribute("data-toggle", "tooltip");
            $(this.element).tooltip();
        };
        BootstrapTooltip.prototype.unbind = function () {
            $(this.element).tooltip("dispose");
        };
        BootstrapTooltip = __decorate([
            aurelia_framework_1.customAttribute("bootstrap-tooltip"),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], BootstrapTooltip);
        return BootstrapTooltip;
    }());
    exports.BootstrapTooltip = BootstrapTooltip;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBO1FBQ0UsMEJBQW1CLE9BQWdCO1lBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUVELCtCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBRUQsaUNBQU0sR0FBTjtZQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFaVSxnQkFBZ0I7WUFGNUIsbUNBQWUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNwQywwQkFBTSxDQUFDLE9BQU8sQ0FBQzs2Q0FFYyxPQUFPO1dBRHhCLGdCQUFnQixDQWE1QjtRQUFELHVCQUFDO0tBYkQsQUFhQyxJQUFBO0lBYlksNENBQWdCIiwiZmlsZSI6InRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlLCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKFwiYm9vdHN0cmFwLXRvb2x0aXBcIilcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVG9vbHRpcCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIsIFwidG9vbHRpcFwiKTtcclxuICAgICQodGhpcy5lbGVtZW50KS50b29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICB1bmJpbmQoKSB7XHJcbiAgICAkKHRoaXMuZWxlbWVudCkudG9vbHRpcChcImRpc3Bvc2VcIik7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
