import { RulesFactory } from '../../rules/rules-factory';
import { SchemaFormLogger } from '../../resources/logger';
import { IFormOverride } from '../../interfaces/form-override';
import { FormInstances } from '../../services/form-instances';
import { FormService } from '../../services/form-service';
export declare class SfNumber {
    formService: FormService;
    rules: RulesFactory;
    private logger;
    private formInstances;
    form: IFormOverride;
    model: number;
    formInstance: string;
    id: string;
    view: any;
    kind: string;
    private formCtrl;
    constructor(formService: FormService, rules: RulesFactory, logger: SchemaFormLogger, formInstances: FormInstances);
    modelChanged(newValue: any, oldValue: any): void;
    attached(): void;
    bind(): void;
    determineViewStrategy(): void;
    readonly minimum: any;
    readonly maximum: any;
}
//# sourceMappingURL=sf-number.d.ts.map