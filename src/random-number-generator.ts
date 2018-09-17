import { bindable, inject } from 'aurelia-framework';
import { IJsonSchemaDefinition, FormInstances, IFormInstance, RulesFactory } from 'plugin/aurelia-json-schema-form';

@inject(FormInstances)
export class RandomNumberGenerator {
  @bindable schema: IJsonSchemaDefinition;
  @bindable model: number;
  @bindable formInstance: string;

  formCtrl: IFormInstance;

  constructor(private instances: FormInstances) { }

  bind() {
    // tslint:disable-next-line:no-console
    console.log('random-number-generator', { schema: this.schema, model: this.model });
    this.formCtrl = this.instances.get(this.formInstance);

  }

  generate() {
    this.model = Math.random();
  }
}
