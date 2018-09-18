import { element, by } from 'aurelia-protractor-plugin/protractor';

// tslint:disable-next-line:class-name
export class PageObject_Welcome {
  getGreeting() {
    return element(by.tagName('h1')).getText();
  }
}
