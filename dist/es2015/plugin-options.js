import { BootstrapValidationRenderer } from './aurelia-json-schema-form';
import { LogManager } from 'aurelia-framework';
import { GetBootstrapTemplates } from './templates/bootstrap4';
export class PluginOptions {
    constructor() {
        /**
         * @property modifies DOM to display error/success states
         * @default BootstrapValidationRenderer "targets Bootstrap v4"
         */
        this.validationRenderer = new BootstrapValidationRenderer();
        /**
         * @property global validation message overrides, choose which messages you want to override (default)
         * @default empty "use validator's default message"
         */
        this.validationMessages = {};
        /**
         * @property sets the log level (available values from LogManager.logLevel)
         * @default none "only initialization is logged"
         */
        this.logLevel = LogManager.logLevel.none;
        this.templates = GetBootstrapTemplates();
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSwyQkFBMkIsRUFBdUIsTUFBTSw0QkFBNEIsQ0FBQztBQUU5RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0QsTUFBTSxPQUFPLGFBQWE7SUF5QnhCO1FBeEJBOzs7V0FHRztRQUNILHVCQUFrQixHQUF1QixJQUFJLDJCQUEyQixFQUFFLENBQUM7UUFRM0U7OztXQUdHO1FBQ0gsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztRQUU3Qzs7O1dBR0c7UUFDSCxhQUFRLEdBQVcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFHMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FDRiIsImZpbGUiOiJwbHVnaW4tb3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIsIElWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tICcuL2F1cmVsaWEtanNvbi1zY2hlbWEtZm9ybSc7XG5pbXBvcnQgeyBJVGVtcGxhdGVzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBMb2dNYW5hZ2VyIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgR2V0Qm9vdHN0cmFwVGVtcGxhdGVzIH0gZnJvbSAnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNCc7XG5cbmV4cG9ydCBjbGFzcyBQbHVnaW5PcHRpb25zIHtcbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBtb2RpZmllcyBET00gdG8gZGlzcGxheSBlcnJvci9zdWNjZXNzIHN0YXRlc1xuICAgKiBAZGVmYXVsdCBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgXCJ0YXJnZXRzIEJvb3RzdHJhcCB2NFwiXG4gICAqL1xuICB2YWxpZGF0aW9uUmVuZGVyZXI6IFZhbGlkYXRpb25SZW5kZXJlciA9IG5ldyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIoKTtcblxuICAvKipcbiAgICogQHByb3BlcnR5IGRlZmluZXMgbW9kdWxlTmFtZXMgb2YgZm9ybSBlbGVtZW50c1xuICAgKiBAZGVmYXVsdCBib290c3RyYXA0IFwicHJlLWRlZmluZWQgY3VzdG9tIGVsZW1lbnRzXCJcbiAgICovXG4gIHRlbXBsYXRlczogSVRlbXBsYXRlcztcblxuICAvKipcbiAgICogQHByb3BlcnR5IGdsb2JhbCB2YWxpZGF0aW9uIG1lc3NhZ2Ugb3ZlcnJpZGVzLCBjaG9vc2Ugd2hpY2ggbWVzc2FnZXMgeW91IHdhbnQgdG8gb3ZlcnJpZGUgKGRlZmF1bHQpXG4gICAqIEBkZWZhdWx0IGVtcHR5IFwidXNlIHZhbGlkYXRvcidzIGRlZmF1bHQgbWVzc2FnZVwiXG4gICAqL1xuICB2YWxpZGF0aW9uTWVzc2FnZXM6IElWYWxpZGF0aW9uTWVzc2FnZXMgPSB7fTtcblxuICAvKipcbiAgICogQHByb3BlcnR5IHNldHMgdGhlIGxvZyBsZXZlbCAoYXZhaWxhYmxlIHZhbHVlcyBmcm9tIExvZ01hbmFnZXIubG9nTGV2ZWwpXG4gICAqIEBkZWZhdWx0IG5vbmUgXCJvbmx5IGluaXRpYWxpemF0aW9uIGlzIGxvZ2dlZFwiXG4gICAqL1xuICBsb2dMZXZlbDogbnVtYmVyID0gTG9nTWFuYWdlci5sb2dMZXZlbC5ub25lO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGVtcGxhdGVzID0gR2V0Qm9vdHN0cmFwVGVtcGxhdGVzKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
