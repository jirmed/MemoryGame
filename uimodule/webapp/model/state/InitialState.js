sap.ui.define([
  "./BaseState"
], function (BaseState) {
  "use strict";
  return BaseState.extend("net.konzult.memory.game.model.state.InitialState", {
    id: "init",
    init: function () {
      this.context.guess = undefined;
    },
    _getScreenState: function() {
      return {
        stateId: this.id,
        submitButtonAllowed: true,
        submitButtonLabel: "new-number",
        guessInputAllowed: false,
        numberVisible: false
      };
    },
    onSubmit: function () {
      this.context.changeState("playing");
    }
  });
});
