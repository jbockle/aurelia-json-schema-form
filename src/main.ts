import { PluginOptions } from './plugin/aurelia-json-schema-form';
import { ConsoleAppender } from 'aurelia-logging-console';
import { Aurelia, LogManager } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import environment from './environment';
import 'bootstrap';
import { logLevel } from 'aurelia-logging';

(Promise as any).config({
  longStackTraces: false,  // <----- I added this.
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('aurelia-validation'));

  LogManager.addAppender(new ConsoleAppender());
  aurelia.use
    .plugin(PLATFORM.moduleName('plugin/aurelia-json-schema-form'), (options: PluginOptions) => {
      options.logLevel = logLevel.debug;
    });
  // .globalResources([
  //   PLATFORM.moduleName('./random-number-generator')
  // ]);

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName("aurelia-html-import-template-loader"));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app'), 'main'));
}
