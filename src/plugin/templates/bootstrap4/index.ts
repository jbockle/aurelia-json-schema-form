import { ITemplates } from '../../interfaces/templates';
import { PLATFORM } from 'aurelia-framework';
// tslint:disable:max-line-length
export function GetBootstrapTemplates(): ITemplates {
  return {
    boolean: PLATFORM.moduleName('./inputs/sft-boolean.html'),
    number: PLATFORM.moduleName('./inputs/sft-number.html'),
    numberRange: PLATFORM.moduleName('./inputs/sft-number-range.html'),
    string: PLATFORM.moduleName('./inputs/sft-string.html'),
    stringRadioEnum: PLATFORM.moduleName('./inputs/sft-string-radio-enum.html'),
    stringSelectEnum: PLATFORM.moduleName('./inputs/sft-string-select-enum.html'),
    object: PLATFORM.moduleName('./inputs/sft-object.html'),
    array: PLATFORM.moduleName('./inputs/sft-array.html'),
    arrayTabs: PLATFORM.moduleName('./inputs/sft-array-tabs.html'),
    arrayStringEnum: PLATFORM.moduleName('./inputs/sft-array-string-enum.html')
  };
}
