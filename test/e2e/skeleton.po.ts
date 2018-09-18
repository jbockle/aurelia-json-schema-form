import { browser } from 'aurelia-protractor-plugin/protractor';

// tslint:disable-next-line:class-name
export class PageObject_Skeleton {
  getCurrentPageTitle() {
    return browser.getTitle();
  }
}
