sap.ui.define([
  "./BaseState",
  "../LocalVoicePlayer"
], function (BaseState, VoicePlayer) {
  "use strict";
  return BaseState.extend("net.konzult.numberMemorizer.model.state.PlayingState", {
    id: "playing",
    constructor: function(context) {
      BaseState.apply(this, [context]);
      const currentLocale = sap.ui.getCore().getConfiguration().getLanguage();
      this.player = new VoicePlayer(currentLocale);
    },
    init: function () {
      this.context.store.guess = undefined;
      this.context.newNumber();
},
    start: function () {
      const voiceSettings = {
        delay: this.context.store.settings.delay,
      };
      this.player.play(this.context.store.number, voiceSettings)
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
    onPlayCompleted: function () {
      if (!this.stopped)
        this.context.changeState("guessing");
    },
    onReset: function () {
      this.player.stop();
    }
  });
});