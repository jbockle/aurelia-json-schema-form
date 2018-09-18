import { FluentRuleCustomizer } from 'aurelia-validation';
import { SfBoolean } from '../form/boolean/sf-boolean';

export class BooleanRules {

  register() {
    this.add();
  }

  add() {
    // nothing specific to booleans
  }

  bind(_ctrl: SfBoolean, _rule: FluentRuleCustomizer<{}, any>) {
    // nothing specific to booleans
  }
}
