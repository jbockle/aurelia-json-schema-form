define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var State;
    (function (State) {
        State["valid"] = "is-valid";
        State["invalid"] = "is-invalid";
    })(State || (State = {}));
    var BootstrapValidationRenderer = /** @class */ (function () {
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
    exports.BootstrapValidationRenderer = BootstrapValidationRenderer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxJQUFLLEtBR0o7SUFIRCxXQUFLLEtBQUs7UUFDUiwyQkFBa0IsQ0FBQTtRQUNsQiwrQkFBc0IsQ0FBQTtJQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtJQUVEO1FBSUU7O1dBRUc7UUFDSCxvQ0FBb0M7UUFDcEM7WUFQUSxvQkFBZSxHQUFXLG1CQUFtQixDQUFDO1lBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO1FBTS9CLENBQUM7UUFFakI7OztXQUdHO1FBQ0gsNENBQU0sR0FBTixVQUFPLFdBQThCO1lBQ25DLDJDQUEyQztZQUMzQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixPQUFPO2FBQ1I7WUFDRCxLQUFtQyxVQUFvQixFQUFwQixLQUFBLFdBQVcsQ0FBQyxRQUFRLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CLEVBQUU7Z0JBQTlDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTtnQkFDM0IsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7b0JBQTNCLElBQU0sT0FBTyxpQkFBQTtvQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0JBQ2pCLElBQUk7NEJBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7eUJBQzlCO3dCQUFDLFFBQVEsY0FBYyxJQUFoQixFQUFFLGNBQWMsRUFBRTtxQkFDM0I7aUJBQ0Y7YUFDRjtZQUVELEtBQW1DLFVBQWtCLEVBQWxCLEtBQUEsV0FBVyxDQUFDLE1BQU0sRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtnQkFBNUMsSUFBQSxXQUFvQixFQUFsQixrQkFBTSxFQUFFLHNCQUFRO2dCQUMzQixLQUFzQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtvQkFBM0IsSUFBTSxPQUFPLGlCQUFBO29CQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTt3QkFDakIsSUFBSTs0QkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzt5QkFDM0I7d0JBQUMsUUFBUSxjQUFjLElBQWhCLEVBQUUsY0FBYyxFQUFFO3FCQUMzQjtpQkFDRjthQUNGO1FBQ0gsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCw4Q0FBUSxHQUFSLFVBQVMsT0FBZ0IsRUFBRSxLQUFZO1lBQ3JDLElBQU0sTUFBTSxHQUFHLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsOENBQVEsR0FBUixVQUFTLE9BQWdCLEVBQUUsU0FBZ0I7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztRQUNILENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsaURBQVcsR0FBWCxVQUFZLE9BQWdCLEVBQUUsU0FBZ0I7WUFDNUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQztRQUVEOzs7V0FHRztRQUNILHNEQUFnQixHQUFoQixVQUFpQixPQUFnQjtZQUMvQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCw4Q0FBUSxHQUFSLFVBQVMsT0FBZ0IsRUFBRSxLQUFZLEVBQUUsT0FBZTtZQUF4RCxpQkFPQztZQU5DLE9BQU8sVUFBQyxNQUFlO2dCQUNyQixJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO29CQUNqRSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDL0I7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILHlDQUFHLEdBQUgsVUFBSSxPQUFnQixFQUFFLE1BQXNCO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7aUJBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsNENBQU0sR0FBTixVQUFPLE9BQWdCLEVBQUUsTUFBc0I7WUFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztpQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNILGtDQUFDO0lBQUQsQ0FuSEEsQUFtSEMsSUFBQTtJQW5IWSxrRUFBMkIiLCJmaWxlIjoicmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVySW5zdHJ1Y3Rpb24sIFZhbGlkYXRlUmVzdWx0LCBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5cclxuZW51bSBTdGF0ZSB7XHJcbiAgdmFsaWQgPSAnaXMtdmFsaWQnLFxyXG4gIGludmFsaWQgPSAnaXMtaW52YWxpZCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciBpbXBsZW1lbnRzIFZhbGlkYXRpb25SZW5kZXJlciB7XHJcbiAgcHJpdmF0ZSBtZXNzYWdlU2VsZWN0b3I6IHN0cmluZyA9ICcuaW52YWxpZC1mZWVkYmFjayc7XHJcbiAgcHJpdmF0ZSBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nID0gJy5mb3JtLWdyb3VwJztcclxuXHJcbiAgLyoqXHJcbiAgICogQm9vdHJhcFZhbGlkYXRpb25SZW5kZXJlciAtIFNldHMgdmFsaWRhdGlvbiBzdGF0ZS9lcnJvciBtZXNzYWdlcyBvbiBib290c3RyYXAgdjQgZm9ybS1ncm91cHNcclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiByZW5kZXJlciBlbnRyeSBwb2ludFxyXG4gICAqIEBwYXJhbSBpbnN0cnVjdGlvbiBsaXN0IG9mIGluc3RydWN0aW9ucyBmcm9tIHZhbGlkYXRpb24gY29udHJvbGxlclxyXG4gICAqL1xyXG4gIHJlbmRlcihpbnN0cnVjdGlvbjogUmVuZGVySW5zdHJ1Y3Rpb24pIHtcclxuICAgIC8vIHRoaXMubG9nZ2VyLmluZm8oXCJyZW5kZXJcIiwgaW5zdHJ1Y3Rpb24pO1xyXG4gICAgaWYgKCFpbnN0cnVjdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHsgcmVzdWx0LCBlbGVtZW50cyB9IG9mIGluc3RydWN0aW9uLnVucmVuZGVyKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50LCByZXN1bHQpO1xyXG4gICAgICAgICAgfSBjYXRjaCB7IC8qZG8gbm90aGluZyovIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHsgcmVzdWx0LCBlbGVtZW50cyB9IG9mIGluc3RydWN0aW9uLnJlbmRlcikge1xyXG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuICAgICAgICBpZiAoIXJlc3VsdC52YWxpZCkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5hZGQoZWxlbWVudCwgcmVzdWx0KTtcclxuICAgICAgICAgIH0gY2F0Y2ggeyAvKmRvIG5vdGhpbmcqLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIHJlbW92ZS9hZGQgY2xhc3MgZnJvbVxyXG4gICAqIEBwYXJhbSBzdGF0ZSB0aGUgc3RhdGUgdG8gc2V0XHJcbiAgICovXHJcbiAgc2V0Q2xhc3MoZWxlbWVudDogRWxlbWVudCwgc3RhdGU6IFN0YXRlKSB7XHJcbiAgICBjb25zdCByZW1vdmUgPSBzdGF0ZSA9PT0gU3RhdGUudmFsaWQgPyBTdGF0ZS5pbnZhbGlkIDogU3RhdGUudmFsaWQ7XHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIHJlbW92ZSk7XHJcbiAgICB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIHN0YXRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgY2xhc3NOYW1lIHRvIGVsZW1lbnQgaWYgaXQgaXMgbm90IGFscmVhZHkgYWRkZWRcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBhZGQgY2xhc3MgdG9cclxuICAgKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBjbGFzcyBuYW1lIHRvIGFkZFxyXG4gICAqL1xyXG4gIGFkZENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIGNsYXNzTmFtZTogU3RhdGUpIHtcclxuICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgY2xhc3NOYW1lIGZyb20gZWxlbWVudCBpZiBpdCBpcyBwcmVzZW50XHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gcmVtb3ZlIGNsYXNzIGZyb21cclxuICAgKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBjbGFzcyBuYW1lIHRvIHJlbW92ZVxyXG4gICAqL1xyXG4gIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIGNsYXNzTmFtZTogU3RhdGUpIHtcclxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBmaW5kcyBjbG9zZXN0IHBhcmVudCBlbGVtZW50IHdpdGggcGFyZW50U2VsZWN0b3IgY2xhc3NcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBmaW5kIHBhcmVudCBmcm9tXHJcbiAgICovXHJcbiAgZ2V0UGFyZW50RWxlbWVudChlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsZW1lbnQuY2xvc2VzdCh0aGlzLnBhcmVudFNlbGVjdG9yKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXRzIGVsZW1lbnQgY2xhc3Moc3RhdGUpIGFuZCBlcnJvciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnRcclxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldCBpdCB0b1xyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoZWxlbWVudDogRWxlbWVudCwgc3RhdGU6IFN0YXRlLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAocGFyZW50OiBFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3Rvcih0aGlzLm1lc3NhZ2VTZWxlY3RvcikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoZWxlbWVudCwgc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkcyBpbnZhbGlkIHN0YXRlIHRvIGlucHV0IGVsZW1lbnQgYW5kIGFkZHMgZXJyb3IgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCBpbnZhbGlkIHN0YXRlIHRvXHJcbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcclxuICAgKi9cclxuICBhZGQoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xyXG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXHJcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUuaW52YWxpZCwgcmVzdWx0Lm1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZHMgdmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgcmVtb3ZlcyBlcnJvciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnQgdG8gc2V0IHZhbGlkIHN0YXRlIHRvXHJcbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcclxuICAgKi9cclxuICByZW1vdmUoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xyXG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXHJcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUudmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
