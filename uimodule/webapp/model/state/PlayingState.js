sap.ui.define([
  "./BaseState"
], function (BaseState) {
  "use strict";
  return BaseState.extend("net.konzult.numberMemorizer.model.state.PlayingState", {
    id: "playing",
    init: function () {
      this.context.store.guess = undefined;
      this.context.newNumber();
    },
    start: function () {
      this.context.play()
        .then(this.onPlayCompleted.bind(this));
    },
    _getScreenState: function() {
      console.log("---Playing State get ScreenState - start")
      console.log(this.context.store.settings);
      console.log("---Playing State get ScreenState - end")
      if (this.context) {
        return {
          stateId: this.id,
          submitButtonAllowed: false,
          submitButtonLabel: "Submit",
          guessInputAllowed: false,
          numberVisible: this.context.store.settings.showNumber
        }
      }
    },
    onPlayCompleted: function () {
      this.context.changeState("guessing");
      console.log(this.context.currentState);
    },
    onSubmit: function () { }
  });
});