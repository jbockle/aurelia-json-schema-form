System.register(["aurelia-framework", "jquery"], function (exports_1, context_1) {
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
    var aurelia_framework_1, $, BootstrapTooltip;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function ($_1) {
                $ = $_1;
            }
        ],
        execute: function () {
            BootstrapTooltip = /** @class */ (function () {
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
            exports_1("BootstrapTooltip", BootstrapTooltip);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFNRSwwQkFBbUIsT0FBZ0I7b0JBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7b0JBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN6QixDQUFDO2dCQUVELCtCQUFJLEdBQUo7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELGlDQUFNLEdBQU47b0JBQ0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBWlUsZ0JBQWdCO29CQUY1QixtQ0FBZSxDQUFDLG1CQUFtQixDQUFDO29CQUNwQywwQkFBTSxDQUFDLE9BQU8sQ0FBQztxREFFYyxPQUFPO21CQUR4QixnQkFBZ0IsQ0FhNUI7Z0JBQUQsdUJBQUM7YUFiRCxBQWFDOztRQUNELENBQUMiLCJmaWxlIjoidGVtcGxhdGVzL2Jvb3RzdHJhcDQvYm9vdHN0cmFwLXRvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoXCJib290c3RyYXAtdG9vbHRpcFwiKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBUb29sdGlwIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGVcIiwgXCJ0b29sdGlwXCIpO1xyXG4gICAgJCh0aGlzLmVsZW1lbnQpLnRvb2x0aXAoKTtcclxuICB9XHJcblxyXG4gIHVuYmluZCgpIHtcclxuICAgICQodGhpcy5lbGVtZW50KS50b29sdGlwKFwiZGlzcG9zZVwiKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
