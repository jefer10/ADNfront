// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  //chromeDriver:'C:\\Users\\jefersson.rondon\\Documents\\proyecto\\frond-end\\pedido-frond\\angular-base\\node_modules\\protractor\\node_modules\\webdriver-manager\\selenium\\chromedriver_91.0.4472.19.exe","all":["C:\\Users\\jefersson.rondon\\Documents\\proyecto\\frond-end\\pedido-frond\\angular-base\\node_modules\\protractor\\node_modules\\webdriver-manager\\selenium\\chromedriver_90.0.4430.24.exe","C:\\Users\\jefersson.rondon\\Documents\\proyecto\\frond-end\\pedido-frond\\angular-base\\node_modules\\protractor\\node_modules\\webdriver-manager\\selenium\\chromedriver_90.0.4430.24',
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'tmp/screenshots'
   }).getJasmine2Reporter());
    
  }
};