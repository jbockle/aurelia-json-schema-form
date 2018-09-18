import { InlineViewStrategy } from 'aurelia-framework';
import { SchemaFormConfiguration } from '../../services/schema-form-configuration';
import { SchemaFormLogger } from '../../resources/logger';
import { IFormOverride } from '../../interfaces/form-override';
import { FormService } from '../../services/form-service';
export declare class SfObject {
    configuration: SchemaFormConfiguration;
    formService: FormService;
    private logger;
    form: IFormOverride;
    model: object;
    formInstance: string;
    id: string;
    kind: string;
    view: InlineViewStrategy;
    constructor(configuration: SchemaFormConfiguration, formService: FormService, logger: SchemaFormLogger);
    attached(): void;
    bind(): Promise<void>;
}
//# sourceMappingURL=sf-object.d.ts.map