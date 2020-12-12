sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("net.konzult.memory.game.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "net.konzult.memory.game",
          async: true,
          manifest: true
        }
      });
    }

  });
});
