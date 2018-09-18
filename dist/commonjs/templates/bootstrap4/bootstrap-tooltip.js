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
var $ = require("jquery");
var BootstrapTooltip = /** @class */ (function () {
    function BootstrapTooltip(element) {
        this.element = element;
        this.element = element;
    }
    BootstrapTooltip.prototype.bind = function () {
        this.element.setAttribute('data-toggle', 'tooltip');
        $(this.element).tooltip();
    };
    BootstrapTooltip.prototype.unbind = function () {
        $(this.element).tooltip('dispose');
    };
    BootstrapTooltip = __decorate([
        aurelia_framework_1.customAttribute('bootstrap-tooltip'),
        aurelia_framework_1.inject(Element),
        __metadata("design:paramtypes", [Element])
    ], BootstrapTooltip);
    return BootstrapTooltip;
}());
exports.BootstrapTooltip = BootstrapTooltip;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQTREO0FBQzVELDBCQUE0QjtBQUk1QjtJQUNFLDBCQUFtQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBWlUsZ0JBQWdCO1FBRjVCLG1DQUFlLENBQUMsbUJBQW1CLENBQUM7UUFDcEMsMEJBQU0sQ0FBQyxPQUFPLENBQUM7eUNBRWMsT0FBTztPQUR4QixnQkFBZ0IsQ0FhNUI7SUFBRCx1QkFBQztDQWJELEFBYUMsSUFBQTtBQWJZLDRDQUFnQiIsImZpbGUiOiJ0ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUF0dHJpYnV0ZSwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKCdib290c3RyYXAtdG9vbHRpcCcpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFRvb2x0aXAge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3Rvb2x0aXAnKTtcclxuICAgICQodGhpcy5lbGVtZW50KS50b29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICB1bmJpbmQoKSB7XHJcbiAgICAkKHRoaXMuZWxlbWVudCkudG9vbHRpcCgnZGlzcG9zZScpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
