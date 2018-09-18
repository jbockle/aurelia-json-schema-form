import { InlineViewStrategy } from 'aurelia-framework';
import { SchemaFormLogger } from '../../resources/logger';
import { IFormOverride } from '../../interfaces/form-override';
import { FormService } from '../../services/form-service';
export declare class SfObject {
    formService: FormService;
    private logger;
    form: IFormOverride;
    model: object;
    formInstance: string;
    id: string;
    kind: string;
    view: InlineViewStrategy;
    constructor(formService: FormService, logger: SchemaFormLogger);
    attached(): void;
    bind(): Promise<void>;
}
//# sourceMappingURL=sf-object.d.ts.map