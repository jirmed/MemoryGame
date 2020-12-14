sap.ui.define([
    "sap/ui/base/Object",
    "sap/ui/model/json/JSONModel"
  ], function (Object, JSONModel) {
    "use strict";
    return Object.extend("net.konzult.memory.game.model.BaseObject", {
      constructor: function () {
        this.model = new JSONModel( this, true);
      },
      getModel: function () {
        return this.model;
      },
      refresh: function() {
        this.model.refresh();
      }
    });
  });