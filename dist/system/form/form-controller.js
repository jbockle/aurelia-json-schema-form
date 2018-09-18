System.register([], function (exports_1, context_1) {
    "use strict";
    var FormController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            FormController = /** @class */ (function () {
                function FormController(logger, options, validationController) {
                    this.logger = logger;
                    this.options = options;
                    this.validationController = validationController;
                    this.log = this.logger.info;
                    this.log('building form controller', arguments);
                }
                FormController.prototype.activate = function (params, routeConfig, navigationInstruction) {
                    this.logger.debug('schemaform-activate', { params: params, routeConfig: routeConfig, navigationInstruction: navigationInstruction });
                };
                FormController.prototype.bind = function (bindingContext, overrideContext) {
                    this.logger.info('form-controller binded', { bindingContext: bindingContext, overrideContext: overrideContext });
                };
                FormController.prototype.attached = function () {
                    this.logger.info('schemaform-attached');
                    this.validateOnRender();
                };
                FormController.prototype.detached = function () {
                    this.logger.info('schemaform-detached');
                };
                FormController.prototype.validateOnRender = function () {
                    if (this.options.validateOnRender) {
                        this.logger.info('schemaform-attached:validate');
                        this.validationController.validate();
                    }
                };
                return FormController;
            }());
            exports_1("FormController", FormController);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFLQTtnQkFPRSx3QkFDVSxNQUF3QixFQUN6QixPQUFxQixFQUNyQixvQkFBMEM7b0JBRnpDLFdBQU0sR0FBTixNQUFNLENBQWtCO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFjO29CQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO29CQUVqRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELGlDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQjtvQkFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxxQkFBcUIsdUJBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQzNGLENBQUM7Z0JBRUQsNkJBQUksR0FBSixVQUFLLGNBQXNCLEVBQUUsZUFBdUI7b0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsY0FBYyxnQkFBQSxFQUFFLGVBQWUsaUJBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQ2xGLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQseUNBQWdCLEdBQWhCO29CQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN0QztnQkFDSCxDQUFDO2dCQUNILHFCQUFDO1lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vZm9ybS1jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gJy4uL3Jlc291cmNlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9ucyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xsZXIge1xyXG5cclxuICBwdWJsaWMgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuICBwdWJsaWMgbW9kZWw6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHVibGljIG9wdGlvbnM6IElGb3JtT3B0aW9ucyxcclxuICAgIHB1YmxpYyB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXJcclxuICApIHtcclxuICAgIHRoaXMubG9nID0gdGhpcy5sb2dnZXIuaW5mbztcclxuICAgIHRoaXMubG9nKCdidWlsZGluZyBmb3JtIGNvbnRyb2xsZXInLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1Zygnc2NoZW1hZm9ybS1hY3RpdmF0ZScsIHsgcGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uIH0pO1xyXG4gIH1cclxuXHJcbiAgYmluZChiaW5kaW5nQ29udGV4dDogb2JqZWN0LCBvdmVycmlkZUNvbnRleHQ6IG9iamVjdCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnZm9ybS1jb250cm9sbGVyIGJpbmRlZCcsIHsgYmluZGluZ0NvbnRleHQsIG92ZXJyaWRlQ29udGV4dCB9KTtcclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2NoZW1hZm9ybS1hdHRhY2hlZCcpO1xyXG4gICAgdGhpcy52YWxpZGF0ZU9uUmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBkZXRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ3NjaGVtYWZvcm0tZGV0YWNoZWQnKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlT25SZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnc2NoZW1hZm9ybS1hdHRhY2hlZDp2YWxpZGF0ZScpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
