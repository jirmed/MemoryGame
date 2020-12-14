sap.ui.define([
  "./BaseState",
  "../../thirdParty/responsiveVoice"

], function (BaseState) {
  "use strict";
  return BaseState.extend("net.konzult.numberMemorizer.model.state.PlayingState", {
    id: "playing",
    init: function () {
      this.context.store.guess = undefined;
      this.context.newNumber();
    },
    start: function () {
      this._play()
        .then(this.onPlayCompleted.bind(this));
    },
    _getScreenState: function () {
      return {
        stateId: this.id,
        submitButtonAllowed: false,
        submitButtonLabel: "submit",
        guessInputAllowed: false,
        numberVisible: this.context ? this.context.store.settings.showNumber : false
      };
    },
    _play: function (number = this.context.store.number) {
      return new Promise(resolve => {
        const { delay, rate } = this.context.store.settings;
        if (number && number.length > 0) {
          responsiveVoice.speak(" " + number[0], "Czech Female", {
            rate,
            onend: () => setTimeout(() => {
              resolve(this._play(number.slice(1)));
            }, delay)
          });
        } else {
          resolve("playback completed");
        }
      });
    },

    onPlayCompleted: function () {
      this.context.changeState("guessing");
    },
    onSubmit: function () { }
  });
});