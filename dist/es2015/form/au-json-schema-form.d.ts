import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { InlineViewStrategy } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { IFormOptions } from "../interfaces/form-options";
import { SchemaFormLogger } from "../resources/logger";
import { IFormOverride } from "../interfaces/form-override";
import { IJsonSchemaDefinition } from "../interfaces/json-schema-definition";
import { FormService } from "../services/form-service";
import { IFormInstance } from "../interfaces/form-instance";
import { FormInstances } from "../services/form-instances";
export declare class AuJsonSchemaForm {
    private validationControllerFactory;
    private configuration;
    private logger;
    private formService;
    private formInstances;
    schema: IJsonSchemaDefinition;
    form: IFormOverride;
    model: any;
    options: IFormOptions;
    validationController: ValidationController;
    formView: InlineViewStrategy;
    formInstance: IFormInstance;
    id: string;
    private log;
    constructor(validationControllerFactory: ValidationControllerFactory, configuration: SchemaFormConfiguration, logger: SchemaFormLogger, formService: FormService, formInstances: FormInstances);
    schemaChanged(): void;
    formChanged(): void;
    bind(): void;
    createValidationController(): void;
    buildForm(): void;
    buildViewStrategy(): void;
}
//# sourceMappingURL=au-json-schema-form.d.ts.map