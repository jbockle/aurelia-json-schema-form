import { valueConverter } from 'aurelia-binding';

export class SfNumberValueConverter {
  toView(val) {
    return val;
  }

  fromView(val) {
    if (val === '') { return null; }
    return Number(val);
  }
}
