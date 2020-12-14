sap.ui.define([
  "./BaseController",
  "../model/Game",
  "../model/Store"
], function (BaseController, Game, Store) {
  "use strict";

  return BaseController.extend("net.konzult.memory.game.controller.MainView", {
    onInit: function () {
      this.store = new Store();
      this.settings = this.store.settings;
      this.game = new Game(this.store);
      this.getView().setModel(this.game.getModel());
    },
    onAfterRendering: function() {
      this.setFocus();
    },
    onSubmitButton: function () {
      this.game.onSubmit();
      this.setFocus();
    },
    onGuessLiveChange: function(event) {
      const input = event.getSource();
      const value = input.getValue().replace(/[^\d]/g, "");
      input.setValue(value);
    },
    onResetButton: function () {
      this.game.onReset();
      this.setFocus();
    },
    onSettingsChange: function () {
      this.game.onSettingsChanged();
    },
    setFocus: function() {
      const focusOn = this.game.getFocusOn();
      this.getView().byId(focusOn).focus();
    }
  });
});
