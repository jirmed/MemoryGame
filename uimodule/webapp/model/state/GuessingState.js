sap.ui.define([
  "./BaseState"
], function (BaseState) {
  "use strict";
  return BaseState.extend("net.konzult.numberMemorizer.model.state.GuessingState", {
    id: "guessing",
    init: function () {
      console.log("---Guessing Init---");
    },
    _getScreenState: function() {
      return {
        stateId: this.id,
        submitButtonAllowed: true,
        submitButtonLabel: "Submit",
        guessInputAllowed: true,
        numberVisible: false
      }
    },
    onSubmit: function () {
      this.context.changeState("result");
    }
  });
});