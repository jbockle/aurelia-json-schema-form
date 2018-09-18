import { ValidationRenderer } from 'aurelia-validation';
import { IValidationMessages } from './aurelia-json-schema-form';
import { ITemplates } from './interfaces/templates';
export declare class PluginOptions {
    /**
     * @property modifies DOM to display error/success states
     * @default BootstrapValidationRenderer "targets Bootstrap v4"
     */
    validationRenderer: ValidationRenderer;
    /**
     * @property defines moduleNames of form elements
     * @default bootstrap4 "pre-defined custom elements"
     */
    templates: ITemplates;
    /**
     * @property global validation message overrides, choose which messages you want to override (default)
     * @default empty "use validator's default message"
     */
    validationMessages: IValidationMessages;
    /**
     * @property sets the log level (available values from LogManager.logLevel)
     * @default none "only initialization is logged"
     */
    logLevel: number;
    constructor();
}
//# sourceMappingURL=plugin-options.d.ts.map