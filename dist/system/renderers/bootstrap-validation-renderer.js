System.register([], function (exports_1, context_1) {
    "use strict";
    var State, BootstrapValidationRenderer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (State) {
                State["valid"] = "is-valid";
                State["invalid"] = "is-invalid";
            })(State || (State = {}));
            BootstrapValidationRenderer = /** @class */ (function () {
                /**
                 * BootrapValidationRenderer - Sets validation state/error messages on bootstrap v4 form-groups
                 */
                // tslint:disable-next-line:no-empty
                function BootstrapValidationRenderer() {
                    this.messageSelector = '.invalid-feedback';
                    this.parentSelector = '.form-group';
                }
                /**
                 * renderer entry point
                 * @param instruction list of instructions from validation controller
                 */
                BootstrapValidationRenderer.prototype.render = function (instruction) {
                    // this.logger.info("render", instruction);
                    if (!instruction) {
                        return;
                    }
                    for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                        var _b = _a[_i], result = _b.result, elements = _b.elements;
                        for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                            var element = elements_1[_c];
                            if (!result.valid) {
                                try {
                                    this.remove(element, result);
                                }
                                catch ( /*do nothing*/_d) { /*do nothing*/ }
                            }
                        }
                    }
                    for (var _e = 0, _f = instruction.render; _e < _f.length; _e++) {
                        var _g = _f[_e], result = _g.result, elements = _g.elements;
                        for (var _h = 0, elements_2 = elements; _h < elements_2.length; _h++) {
                            var element = elements_2[_h];
                            if (!result.valid) {
                                try {
                                    this.add(element, result);
                                }
                                catch ( /*do nothing*/_j) { /*do nothing*/ }
                            }
                        }
                    }
                };
                /**
                 *
                 * @param element the element to remove/add class from
                 * @param state the state to set
                 */
                BootstrapValidationRenderer.prototype.setClass = function (element, state) {
                    var remove = state === State.valid ? State.invalid : State.valid;
                    this.removeClass(element, remove);
                    this.addClass(element, state);
                };
                /**
                 * Adds className to element if it is not already added
                 * @param element the element to add class to
                 * @param className the class name to add
                 */
                BootstrapValidationRenderer.prototype.addClass = function (element, className) {
                    if (!element.classList.contains(className)) {
                        element.classList.add(className);
                    }
                };
                /**
                 * Removes className from element if it is present
                 * @param element the element to remove class from
                 * @param className the class name to remove
                 */
                BootstrapValidationRenderer.prototype.removeClass = function (element, className) {
                    if (element && element.classList.contains(className)) {
                        element.classList.remove(className);
                    }
                };
                /**
                 * finds closest parent element with parentSelector class
                 * @param element the element to find parent from
                 */
                BootstrapValidationRenderer.prototype.getParentElement = function (element) {
                    return Promise.resolve(element.closest(this.parentSelector));
                };
                /**
                 * sets element class(state) and error message
                 * @param element the input element
                 * @param state the state to set it to
                 * @param message the error message
                 */
                BootstrapValidationRenderer.prototype.setState = function (element, state, message) {
                    var _this = this;
                    return function (parent) {
                        if (parent) {
                            parent.querySelector(_this.messageSelector).textContent = message;
                            _this.setClass(element, state);
                        }
                    };
                };
                /**
                 * adds invalid state to input element and adds error message
                 * @param element the input element to set invalid state to
                 * @param result the validation result
                 */
                BootstrapValidationRenderer.prototype.add = function (element, result) {
                    this.getParentElement(element)
                        .then(this.setState(element, State.invalid, result.message));
                };
                /**
                 * adds valid state to input element and removes error message
                 * @param element the input element to set valid state to
                 * @param result the validation result
                 */
                BootstrapValidationRenderer.prototype.remove = function (element, result) {
                    this.getParentElement(element)
                        .then(this.setState(element, State.valid, result.message));
                };
                return BootstrapValidationRenderer;
            }());
            exports_1("BootstrapValidationRenderer", BootstrapValidationRenderer);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUEsV0FBSyxLQUFLO2dCQUNSLDJCQUFrQixDQUFBO2dCQUNsQiwrQkFBc0IsQ0FBQTtZQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtZQUVEO2dCQUlFOzttQkFFRztnQkFDSCxvQ0FBb0M7Z0JBQ3BDO29CQVBRLG9CQUFlLEdBQVcsbUJBQW1CLENBQUM7b0JBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO2dCQU0vQixDQUFDO2dCQUVqQjs7O21CQUdHO2dCQUNILDRDQUFNLEdBQU4sVUFBTyxXQUE4QjtvQkFDbkMsMkNBQTJDO29CQUMzQyxJQUFJLENBQUMsV0FBVyxFQUFFO3dCQUNoQixPQUFPO3FCQUNSO29CQUNELEtBQW1DLFVBQW9CLEVBQXBCLEtBQUEsV0FBVyxDQUFDLFFBQVEsRUFBcEIsY0FBb0IsRUFBcEIsSUFBb0IsRUFBRTt3QkFBOUMsSUFBQSxXQUFvQixFQUFsQixrQkFBTSxFQUFFLHNCQUFRO3dCQUMzQixLQUFzQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTs0QkFBM0IsSUFBTSxPQUFPLGlCQUFBOzRCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtnQ0FDakIsSUFBSTtvQ0FDRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztpQ0FDOUI7Z0NBQUMsUUFBUSxjQUFjLElBQWhCLEVBQUUsY0FBYyxFQUFFOzZCQUMzQjt5QkFDRjtxQkFDRjtvQkFFRCxLQUFtQyxVQUFrQixFQUFsQixLQUFBLFdBQVcsQ0FBQyxNQUFNLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7d0JBQTVDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTt3QkFDM0IsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIs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ZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlckluc3RydWN0aW9uLCBWYWxpZGF0ZVJlc3VsdCwgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcclxuXHJcbmVudW0gU3RhdGUge1xyXG4gIHZhbGlkID0gJ2lzLXZhbGlkJyxcclxuICBpbnZhbGlkID0gJ2lzLWludmFsaWQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgaW1wbGVtZW50cyBWYWxpZGF0aW9uUmVuZGVyZXIge1xyXG4gIHByaXZhdGUgbWVzc2FnZVNlbGVjdG9yOiBzdHJpbmcgPSAnLmludmFsaWQtZmVlZGJhY2snO1xyXG4gIHByaXZhdGUgcGFyZW50U2VsZWN0b3I6IHN0cmluZyA9ICcuZm9ybS1ncm91cCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJvb3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgLSBTZXRzIHZhbGlkYXRpb24gc3RhdGUvZXJyb3IgbWVzc2FnZXMgb24gYm9vdHN0cmFwIHY0IGZvcm0tZ3JvdXBzXHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVuZGVyZXIgZW50cnkgcG9pbnRcclxuICAgKiBAcGFyYW0gaW5zdHJ1Y3Rpb24gbGlzdCBvZiBpbnN0cnVjdGlvbnMgZnJvbSB2YWxpZGF0aW9uIGNvbnRyb2xsZXJcclxuICAgKi9cclxuICByZW5kZXIoaW5zdHJ1Y3Rpb246IFJlbmRlckluc3RydWN0aW9uKSB7XHJcbiAgICAvLyB0aGlzLmxvZ2dlci5pbmZvKFwicmVuZGVyXCIsIGluc3RydWN0aW9uKTtcclxuICAgIGlmICghaW5zdHJ1Y3Rpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi51bnJlbmRlcikge1xyXG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuICAgICAgICBpZiAoIXJlc3VsdC52YWxpZCkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCwgcmVzdWx0KTtcclxuICAgICAgICAgIH0gY2F0Y2ggeyAvKmRvIG5vdGhpbmcqLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi5yZW5kZXIpIHtcclxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKGVsZW1lbnQsIHJlc3VsdCk7XHJcbiAgICAgICAgICB9IGNhdGNoIHsgLypkbyBub3RoaW5nKi8gfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUvYWRkIGNsYXNzIGZyb21cclxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldFxyXG4gICAqL1xyXG4gIHNldENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSkge1xyXG4gICAgY29uc3QgcmVtb3ZlID0gc3RhdGUgPT09IFN0YXRlLnZhbGlkID8gU3RhdGUuaW52YWxpZCA6IFN0YXRlLnZhbGlkO1xyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCByZW1vdmUpO1xyXG4gICAgdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGNsYXNzTmFtZSB0byBlbGVtZW50IGlmIGl0IGlzIG5vdCBhbHJlYWR5IGFkZGVkXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gYWRkIGNsYXNzIHRvXHJcbiAgICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byBhZGRcclxuICAgKi9cclxuICBhZGRDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBjbGFzc05hbWU6IFN0YXRlKSB7XHJcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGNsYXNzTmFtZSBmcm9tIGVsZW1lbnQgaWYgaXQgaXMgcHJlc2VudFxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIHJlbW92ZSBjbGFzcyBmcm9tXHJcbiAgICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byByZW1vdmVcclxuICAgKi9cclxuICByZW1vdmVDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBjbGFzc05hbWU6IFN0YXRlKSB7XHJcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZmluZHMgY2xvc2VzdCBwYXJlbnQgZWxlbWVudCB3aXRoIHBhcmVudFNlbGVjdG9yIGNsYXNzXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gZmluZCBwYXJlbnQgZnJvbVxyXG4gICAqL1xyXG4gIGdldFBhcmVudEVsZW1lbnQoZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbGVtZW50LmNsb3Nlc3QodGhpcy5wYXJlbnRTZWxlY3RvcikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0cyBlbGVtZW50IGNsYXNzKHN0YXRlKSBhbmQgZXJyb3IgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXQgaXQgdG9cclxuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgZXJyb3IgbWVzc2FnZVxyXG4gICAqL1xyXG4gIHNldFN0YXRlKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSwgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHBhcmVudDogRWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5tZXNzYWdlU2VsZWN0b3IpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLnNldENsYXNzKGVsZW1lbnQsIHN0YXRlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZHMgaW52YWxpZCBzdGF0ZSB0byBpbnB1dCBlbGVtZW50IGFuZCBhZGRzIGVycm9yIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaW5wdXQgZWxlbWVudCB0byBzZXQgaW52YWxpZCBzdGF0ZSB0b1xyXG4gICAqIEBwYXJhbSByZXN1bHQgdGhlIHZhbGlkYXRpb24gcmVzdWx0XHJcbiAgICovXHJcbiAgYWRkKGVsZW1lbnQ6IEVsZW1lbnQsIHJlc3VsdDogVmFsaWRhdGVSZXN1bHQpIHtcclxuICAgIHRoaXMuZ2V0UGFyZW50RWxlbWVudChlbGVtZW50KVxyXG4gICAgICAudGhlbih0aGlzLnNldFN0YXRlKGVsZW1lbnQsIFN0YXRlLmludmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGRzIHZhbGlkIHN0YXRlIHRvIGlucHV0IGVsZW1lbnQgYW5kIHJlbW92ZXMgZXJyb3IgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCB2YWxpZCBzdGF0ZSB0b1xyXG4gICAqIEBwYXJhbSByZXN1bHQgdGhlIHZhbGlkYXRpb24gcmVzdWx0XHJcbiAgICovXHJcbiAgcmVtb3ZlKGVsZW1lbnQ6IEVsZW1lbnQsIHJlc3VsdDogVmFsaWRhdGVSZXN1bHQpIHtcclxuICAgIHRoaXMuZ2V0UGFyZW50RWxlbWVudChlbGVtZW50KVxyXG4gICAgICAudGhlbih0aGlzLnNldFN0YXRlKGVsZW1lbnQsIFN0YXRlLnZhbGlkLCByZXN1bHQubWVzc2FnZSkpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
