var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customAttribute, inject } from 'aurelia-framework';
import * as $ from 'jquery';
let BootstrapTooltip = class BootstrapTooltip {
    constructor(element) {
        this.element = element;
        this.element = element;
    }
    bind() {
        this.element.setAttribute('data-toggle', 'tooltip');
        $(this.element).tooltip();
    }
    unbind() {
        $(this.element).tooltip('dispose');
    }
};
BootstrapTooltip = __decorate([
    customAttribute('bootstrap-tooltip'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], BootstrapTooltip);
export { BootstrapTooltip };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFJNUIsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFBbUIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxNQUFNO1FBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNGLENBQUE7QUFiWSxnQkFBZ0I7SUFGNUIsZUFBZSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUM7cUNBRWMsT0FBTztHQUR4QixnQkFBZ0IsQ0FhNUI7U0FiWSxnQkFBZ0IiLCJmaWxlIjoidGVtcGxhdGVzL2Jvb3RzdHJhcDQvYm9vdHN0cmFwLXRvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZSgnYm9vdHN0cmFwLXRvb2x0aXAnKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBUb29sdGlwIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0b29sdGlwJyk7XHJcbiAgICAkKHRoaXMuZWxlbWVudCkudG9vbHRpcCgpO1xyXG4gIH1cclxuXHJcbiAgdW5iaW5kKCkge1xyXG4gICAgJCh0aGlzLmVsZW1lbnQpLnRvb2x0aXAoJ2Rpc3Bvc2UnKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
