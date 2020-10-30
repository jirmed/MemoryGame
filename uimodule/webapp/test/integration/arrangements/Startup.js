sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("net.konzult.myUI5App.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "net.konzult.myUI5App",
          async: true,
          manifest: true
        }
      });
    }

  });
});
