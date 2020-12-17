sap.ui.define([
  "./VoicePlayer",
  "../thirdParty/responsiveVoice"
], function (VoicePlayer) {
  "use strict";
  return VoicePlayer.extend("net.konzult.numberMemorizer.model.ResponsiveVoicePlayer", {
    _stopped: false,
    _play: function (number, settings) {
      return new Promise(resolve => {
        const { delay, rate } = settings;
        if (number && number.length > 0 && !this.stopped) {
          responsiveVoice.speak(" " + number[0], this._voice, {
            rate,
            onend: () => setTimeout(() => {
              resolve(this._play(number.slice(1), settings));
            }, delay)
          });
        } else {
          resolve("playback completed");
        }
      });
    },
    constructor: function (currentLocale) {
      this._voice = (currentLocale && currentLocale.startsWith("cs")) ? "Czech Female" : "UK English Female";
    },
    play: function (number, settings) {
      this._stopped = false;
      return this._play(number, settings);
    },
    stop: function () {
      this._stopped = true;
      responsiveVoice.cancel();
    }
  });
});