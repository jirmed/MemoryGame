sap.ui.define([
  "./BaseController",
  "../model/Game",
  "../model/Store"
], function (BaseController, Game, Store) {
  "use strict";

  return BaseController.extend("net.konzult.memory.game.controller.MainView", {
    onInit: function () {
      this.oStore = new Store();
      this.oSettins = this.oStore.settings;
      this.oGame = new Game(this.oStore);
      this.getView().setModel(this.oGame.getModel());
    },
    onSubmitButton: function () {
      if (this.oStore.screenState.stateId === "guessing") {
        this.getView().byId("submitButton").focus();
      } else {
        this.getView().byId("guessInput").focus();
      };
      this.oGame.onSubmit();
    },
    onResetButton: function () {
      this.oGame.onReset();
    },
    onSettingsChange: function () {
      this.oSettins.save();
      this.oStore.refresh();
    }
  });
});
