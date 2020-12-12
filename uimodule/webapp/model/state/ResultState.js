sap.ui.define([
  "./BaseState",
  "../Guess"
], function (BaseState, Guess) {
  "use strict";
  return BaseState.extend("net.konzult.numberMemorizer.model.state.ResultState", {
    id: "result",
    init: function () {
      const store = this.context.store;
      console.log("---Result Init---");
      const finalGuess = new Guess(store.number, store.guess, store.settings.reverse);
      this.correct = finalGuess.correct;
      store.statistics.addGuess(finalGuess);
    },
    _getScreenState: function() {
      return {
        stateId: this.id,
        submitButtonAllowed: true,
        submitButtonLabel: "New Number",
        guessInputAllowed: false,
        numberVisible: true,
        numberColor: this.correct ? "success" :"error"
      }
    },
    onSubmit: function () {
      this.context.changeState("playing");
    },
    reverse: (str) => str.split("").reverse().join("")
  });
});