var State;
(function (State) {
    State["valid"] = "is-valid";
    State["invalid"] = "is-invalid";
})(State || (State = {}));
export class BootstrapValidationRenderer {
    /**
     * BootrapValidationRenderer - Sets validation state/error messages on bootstrap v4 form-groups
     */
    // tslint:disable-next-line:no-empty
    constructor() {
        this.messageSelector = '.invalid-feedback';
        this.parentSelector = '.form-group';
    }
    /**
     * renderer entry point
     * @param instruction list of instructions from validation controller
     */
    render(instruction) {
        // this.logger.info("render", instruction);
        if (!instruction) {
            return;
        }
        for (const { result, elements } of instruction.unrender) {
            for (const element of elements) {
                if (!result.valid) {
                    try {
                        this.remove(element, result);
                    }
                    catch ( /*do nothing*/_a) { /*do nothing*/ }
                }
            }
        }
        for (const { result, elements } of instruction.render) {
            for (const element of elements) {
                if (!result.valid) {
                    try {
                        this.add(element, result);
                    }
                    catch ( /*do nothing*/_b) { /*do nothing*/ }
                }
            }
        }
    }
    /**
     *
     * @param element the element to remove/add class from
     * @param state the state to set
     */
    setClass(element, state) {
        const remove = state === State.valid ? State.invalid : State.valid;
        this.removeClass(element, remove);
        this.addClass(element, state);
    }
    /**
     * Adds className to element if it is not already added
     * @param element the element to add class to
     * @param className the class name to add
     */
    addClass(element, className) {
        if (!element.classList.contains(className)) {
            element.classList.add(className);
        }
    }
    /**
     * Removes className from element if it is present
     * @param element the element to remove class from
     * @param className the class name to remove
     */
    removeClass(element, className) {
        if (element && element.classList.contains(className)) {
            element.classList.remove(className);
        }
    }
    /**
     * finds closest parent element with parentSelector class
     * @param element the element to find parent from
     */
    getParentElement(element) {
        return Promise.resolve(element.closest(this.parentSelector));
    }
    /**
     * sets element class(state) and error message
     * @param element the input element
     * @param state the state to set it to
     * @param message the error message
     */
    setState(element, state, message) {
        return (parent) => {
            if (parent) {
                parent.querySelector(this.messageSelector).textContent = message;
                this.setClass(element, state);
            }
        };
    }
    /**
     * adds invalid state to input element and adds error message
     * @param element the input element to set invalid state to
     * @param result the validation result
     */
    add(element, result) {
        this.getParentElement(element)
            .then(this.setState(element, State.invalid, result.message));
    }
    /**
     * adds valid state to input element and removes error message
     * @param element the input element to set valid state to
     * @param result the validation result
     */
    remove(element, result) {
        this.getParentElement(element)
            .then(this.setState(element, State.valid, result.message));
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxJQUFLLEtBR0o7QUFIRCxXQUFLLEtBQUs7SUFDUiwyQkFBa0IsQ0FBQTtJQUNsQiwrQkFBc0IsQ0FBQTtBQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtBQUVELE1BQU0sT0FBTywyQkFBMkI7SUFJdEM7O09BRUc7SUFDSCxvQ0FBb0M7SUFDcEM7UUFQUSxvQkFBZSxHQUFXLG1CQUFtQixDQUFDO1FBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO0lBTS9CLENBQUM7SUFFakI7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFdBQThCO1FBQ25DLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELEtBQUssTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3ZELEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDakIsSUFBSTt3QkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDOUI7b0JBQUMsUUFBUSxjQUFjLElBQWhCLEVBQUUsY0FBYyxFQUFFO2lCQUMzQjthQUNGO1NBQ0Y7UUFFRCxLQUFLLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUNyRCxLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7b0JBQ2pCLElBQUk7d0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQzNCO29CQUFDLFFBQVEsY0FBYyxJQUFoQixFQUFFLGNBQWMsRUFBRTtpQkFDM0I7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsT0FBZ0IsRUFBRSxLQUFZO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsUUFBUSxDQUFDLE9BQWdCLEVBQUUsU0FBZ0I7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsT0FBZ0IsRUFBRSxTQUFnQjtRQUM1QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNwRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0IsQ0FBQyxPQUFnQjtRQUMvQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxRQUFRLENBQUMsT0FBZ0IsRUFBRSxLQUFZLEVBQUUsT0FBZTtRQUN0RCxPQUFPLENBQUMsTUFBZSxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztnQkFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEdBQUcsQ0FBQyxPQUFnQixFQUFFLE1BQXNCO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7YUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsT0FBZ0IsRUFBRSxNQUFzQjtRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO2FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRiIsImZpbGUiOiJyZW5kZXJlcnMvYm9vdHN0cmFwLXZhbGlkYXRpb24tcmVuZGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJJbnN0cnVjdGlvbiwgVmFsaWRhdGVSZXN1bHQsIFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcblxyXG5lbnVtIFN0YXRlIHtcclxuICB2YWxpZCA9ICdpcy12YWxpZCcsXHJcbiAgaW52YWxpZCA9ICdpcy1pbnZhbGlkJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIGltcGxlbWVudHMgVmFsaWRhdGlvblJlbmRlcmVyIHtcclxuICBwcml2YXRlIG1lc3NhZ2VTZWxlY3Rvcjogc3RyaW5nID0gJy5pbnZhbGlkLWZlZWRiYWNrJztcclxuICBwcml2YXRlIHBhcmVudFNlbGVjdG9yOiBzdHJpbmcgPSAnLmZvcm0tZ3JvdXAnO1xyXG5cclxuICAvKipcclxuICAgKiBCb290cmFwVmFsaWRhdGlvblJlbmRlcmVyIC0gU2V0cyB2YWxpZGF0aW9uIHN0YXRlL2Vycm9yIG1lc3NhZ2VzIG9uIGJvb3RzdHJhcCB2NCBmb3JtLWdyb3Vwc1xyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eVxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbmRlcmVyIGVudHJ5IHBvaW50XHJcbiAgICogQHBhcmFtIGluc3RydWN0aW9uIGxpc3Qgb2YgaW5zdHJ1Y3Rpb25zIGZyb20gdmFsaWRhdGlvbiBjb250cm9sbGVyXHJcbiAgICovXHJcbiAgcmVuZGVyKGluc3RydWN0aW9uOiBSZW5kZXJJbnN0cnVjdGlvbikge1xyXG4gICAgLy8gdGhpcy5sb2dnZXIuaW5mbyhcInJlbmRlclwiLCBpbnN0cnVjdGlvbik7XHJcbiAgICBpZiAoIWluc3RydWN0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24udW5yZW5kZXIpIHtcclxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQsIHJlc3VsdCk7XHJcbiAgICAgICAgICB9IGNhdGNoIHsgLypkbyBub3RoaW5nKi8gfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24ucmVuZGVyKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZChlbGVtZW50LCByZXN1bHQpO1xyXG4gICAgICAgICAgfSBjYXRjaCB7IC8qZG8gbm90aGluZyovIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gcmVtb3ZlL2FkZCBjbGFzcyBmcm9tXHJcbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXRcclxuICAgKi9cclxuICBzZXRDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBzdGF0ZTogU3RhdGUpIHtcclxuICAgIGNvbnN0IHJlbW92ZSA9IHN0YXRlID09PSBTdGF0ZS52YWxpZCA/IFN0YXRlLmludmFsaWQgOiBTdGF0ZS52YWxpZDtcclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgcmVtb3ZlKTtcclxuICAgIHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBjbGFzc05hbWUgdG8gZWxlbWVudCBpZiBpdCBpcyBub3QgYWxyZWFkeSBhZGRlZFxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGFkZCBjbGFzcyB0b1xyXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIGNsYXNzIG5hbWUgdG8gYWRkXHJcbiAgICovXHJcbiAgYWRkQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xyXG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBjbGFzc05hbWUgZnJvbSBlbGVtZW50IGlmIGl0IGlzIHByZXNlbnRcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUgY2xhc3MgZnJvbVxyXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIGNsYXNzIG5hbWUgdG8gcmVtb3ZlXHJcbiAgICovXHJcbiAgcmVtb3ZlQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xyXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZpbmRzIGNsb3Nlc3QgcGFyZW50IGVsZW1lbnQgd2l0aCBwYXJlbnRTZWxlY3RvciBjbGFzc1xyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGZpbmQgcGFyZW50IGZyb21cclxuICAgKi9cclxuICBnZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWxlbWVudC5jbG9zZXN0KHRoaXMucGFyZW50U2VsZWN0b3IpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNldHMgZWxlbWVudCBjbGFzcyhzdGF0ZSkgYW5kIGVycm9yIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaW5wdXQgZWxlbWVudFxyXG4gICAqIEBwYXJhbSBzdGF0ZSB0aGUgc3RhdGUgdG8gc2V0IGl0IHRvXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgKi9cclxuICBzZXRTdGF0ZShlbGVtZW50OiBFbGVtZW50LCBzdGF0ZTogU3RhdGUsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChwYXJlbnQ6IEVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMubWVzc2FnZVNlbGVjdG9yKS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGRzIGludmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgYWRkcyBlcnJvciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnQgdG8gc2V0IGludmFsaWQgc3RhdGUgdG9cclxuICAgKiBAcGFyYW0gcmVzdWx0IHRoZSB2YWxpZGF0aW9uIHJlc3VsdFxyXG4gICAqL1xyXG4gIGFkZChlbGVtZW50OiBFbGVtZW50LCByZXN1bHQ6IFZhbGlkYXRlUmVzdWx0KSB7XHJcbiAgICB0aGlzLmdldFBhcmVudEVsZW1lbnQoZWxlbWVudClcclxuICAgICAgLnRoZW4odGhpcy5zZXRTdGF0ZShlbGVtZW50LCBTdGF0ZS5pbnZhbGlkLCByZXN1bHQubWVzc2FnZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkcyB2YWxpZCBzdGF0ZSB0byBpbnB1dCBlbGVtZW50IGFuZCByZW1vdmVzIGVycm9yIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaW5wdXQgZWxlbWVudCB0byBzZXQgdmFsaWQgc3RhdGUgdG9cclxuICAgKiBAcGFyYW0gcmVzdWx0IHRoZSB2YWxpZGF0aW9uIHJlc3VsdFxyXG4gICAqL1xyXG4gIHJlbW92ZShlbGVtZW50OiBFbGVtZW50LCByZXN1bHQ6IFZhbGlkYXRlUmVzdWx0KSB7XHJcbiAgICB0aGlzLmdldFBhcmVudEVsZW1lbnQoZWxlbWVudClcclxuICAgICAgLnRoZW4odGhpcy5zZXRTdGF0ZShlbGVtZW50LCBTdGF0ZS52YWxpZCwgcmVzdWx0Lm1lc3NhZ2UpKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
