sap.ui.define([
  "sap/ui/test/Opa5",
  "net/konzult/myUI5App/test/integration/arrangements/Startup",
  "net/konzult/myUI5App/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
