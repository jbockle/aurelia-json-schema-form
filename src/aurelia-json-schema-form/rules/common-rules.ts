import { IRules } from '../interfaces/rules';
import { inject } from 'aurelia-framework';
import { SchemaFormConfiguration } from '../services/schema-form-configuration';
import { ValidationRules, validationMessages, FluentRuleCustomizer } from 'aurelia-validation';

@inject(SchemaFormConfiguration)
export class CommonRules implements IRules {
  constructor(private configuration: SchemaFormConfiguration) { }

  type = 'common';

  register(): void {
    this.add();
  }

  setCustomMessages() {
    validationMessages.const = this.configuration.messages.const || validationMessages.equals;
  }

  add(): void {
    // enum
    ValidationRules
      .customRule(
        'enum',
        (val, _obj, allowedValues: any[]) => val !== undefined ? allowedValues.indexOf(val) >= 0 : true,
        this.configuration.messages.enum || '${$displayName} has an invalid selection.',
        (allowedValues) => ({ allowedValues })
      );
  }

  bind(ctrl: any): FluentRuleCustomizer<{}, any> {
    let rule = ValidationRules
      .ensure('model')
      .displayName(ctrl.form.$schema.title)
      .satisfies(() => true);
    if (ctrl.form.$schema.const) {
      rule = rule.equals(ctrl.form.$schema.const);
    }
    if (ctrl.form.$schema.enum) {
      rule = rule.satisfiesRule('enum', ctrl.form.$schema.enum);
    }
    if (ctrl.form.$required) {
      rule = rule.required();
    }
    return rule;
  }
}
