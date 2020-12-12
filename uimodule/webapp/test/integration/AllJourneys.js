sap.ui.define([
  "sap/ui/test/Opa5",
  "net/konzult/memory.game/test/integration/arrangements/Startup",
  "net/konzult/memory.game/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
