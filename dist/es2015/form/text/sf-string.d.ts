import { RulesFactory } from '../../rules/rules-factory';
import { IFormOverride } from '../../interfaces/form-override';
import { SchemaFormLogger } from '../../resources/logger';
import { FormInstances } from '../../services/form-instances';
import { FormService } from '../../services/form-service';
export declare class SfString {
    formService: FormService;
    rules: RulesFactory;
    private logger;
    private formInstances;
    form: IFormOverride;
    model: string;
    formInstance: string;
    id: string;
    kind: string;
    view: any;
    private formCtrl;
    constructor(formService: FormService, rules: RulesFactory, logger: SchemaFormLogger, formInstances: FormInstances);
    modelChanged(newValue: any, oldValue: any): void;
    attached(): void;
    bind(): void;
    private determineViewStrategy;
}
//# sourceMappingURL=sf-string.d.ts.map