(function() {

  "use strict";

  /* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

  var chai = require("chai");
  var chaiAsPromised = require("chai-as-promised");

  chai.use(chaiAsPromised);
  var expect = chai.expect;

  var fs = require("fs");

  browser.driver.manage().window().setSize(1024, 768);

  describe("Scroll Setting component", function() {
    beforeEach(function (){
      browser.get("/test/e2e/angular/scroll-setting-test-ng.html");
    });

    it("Should correctly load default defaults", function () {
      //scroll enabled
      expect(element(by.id("scroll-by")).getAttribute("value")).
        to.eventually.equal("none");

      expect(element(by.css(".more-scroll-options")).isDisplayed()).to.eventually.be.false;
    });

    it("Should display scroll settings when scroll is enabled", function () {
      expect(element(by.id("scroll-by")).getAttribute("value")).
        to.eventually.equal("none");
      expect(element(by.css(".more-scroll-options")).isDisplayed()).
      to.eventually.be.false;

      element(by.cssContainingText('option', 'Continuously')).click();
      expect(element(by.css(".more-scroll-options")).isDisplayed())
      .to.eventually.be.true;

      expect(element(by.id("scroll-by")).getAttribute("value"))
      .to.eventually.equal("continuous");

      expect(element(by.id("scroll-speed")).getAttribute("value"))
      .to.eventually.equal("medium");

      expect(element(by.id("scroll-pause")).getAttribute("value"))
      .to.eventually.equal("5");
    });

    xit("Should correctly save settings", function (done) {
      //TODO
    });
  });

})();
