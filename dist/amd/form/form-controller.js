define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormController = /** @class */ (function () {
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
    exports.FormController = FormController;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBO1FBT0Usd0JBQ1UsTUFBd0IsRUFDekIsT0FBcUIsRUFDckIsb0JBQTBDO1lBRnpDLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQWM7WUFDckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtZQUVqRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVELGlDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQjtZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLHFCQUFxQix1QkFBQSxFQUFFLENBQUMsQ0FBQztRQUMzRixDQUFDO1FBRUQsNkJBQUksR0FBSixVQUFLLGNBQXNCLEVBQUUsZUFBdUI7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxjQUFjLGdCQUFBLEVBQUUsZUFBZSxpQkFBQSxFQUFFLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBRUQsaUNBQVEsR0FBUjtZQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELGlDQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCx5Q0FBZ0IsR0FBaEI7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN0QztRQUNILENBQUM7UUFDSCxxQkFBQztJQUFELENBdkNBLEFBdUNDLElBQUE7SUF2Q1ksd0NBQWMiLCJmaWxlIjoiZm9ybS9mb3JtLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi4vcmVzb3VyY2VzL2xvZ2dlcic7XHJcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbGxlciB7XHJcblxyXG4gIHB1YmxpYyBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIHB1YmxpYyBtb2RlbDogYW55O1xyXG5cclxuICBwcml2YXRlIGxvZzogKG1lc3NhZ2U6IHN0cmluZywgLi4ucmVzdDogYW55W10pID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwdWJsaWMgb3B0aW9uczogSUZvcm1PcHRpb25zLFxyXG4gICAgcHVibGljIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlclxyXG4gICkge1xyXG4gICAgdGhpcy5sb2cgPSB0aGlzLmxvZ2dlci5pbmZvO1xyXG4gICAgdGhpcy5sb2coJ2J1aWxkaW5nIGZvcm0gY29udHJvbGxlcicsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZShwYXJhbXMsIHJvdXRlQ29uZmlnLCBuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24pIHtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdzY2hlbWFmb3JtLWFjdGl2YXRlJywgeyBwYXJhbXMsIHJvdXRlQ29uZmlnLCBuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24gfSk7XHJcbiAgfVxyXG5cclxuICBiaW5kKGJpbmRpbmdDb250ZXh0OiBvYmplY3QsIG92ZXJyaWRlQ29udGV4dDogb2JqZWN0KSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdmb3JtLWNvbnRyb2xsZXIgYmluZGVkJywgeyBiaW5kaW5nQ29udGV4dCwgb3ZlcnJpZGVDb250ZXh0IH0pO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzY2hlbWFmb3JtLWF0dGFjaGVkJyk7XHJcbiAgICB0aGlzLnZhbGlkYXRlT25SZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGRldGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2NoZW1hZm9ybS1kZXRhY2hlZCcpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVPblJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdzY2hlbWFmb3JtLWF0dGFjaGVkOnZhbGlkYXRlJyk7XHJcbiAgICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
