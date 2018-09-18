import { SchemaFormLogger } from '../resources/logger';
import { IJsonSchemaObjectDefinition, IJsonSchemaDefinition } from '../interfaces/json-schema-definition';
export declare class DefaultsService {
    private logger;
    constructor(logger: SchemaFormLogger);
    getSchemaDefaultAsync(schema: IJsonSchemaDefinition, model: any): Promise<any>;
    getPrimitiveDefaultAsync(model: any, schema: IJsonSchemaDefinition): Promise<any>;
    getArrayDefaultAsync(model: any): Promise<any[]>;
    getObjectDefaultAsync(model: object, schema: IJsonSchemaObjectDefinition): Promise<object>;
}
//# sourceMappingURL=defaults-service.d.ts.map