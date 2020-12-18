sap.ui.define([
  "./VoicePlayer",
], function (VoicePlayer) {
  "use strict";
  return VoicePlayer.extend("net.konzult.numberMemorizer.model.LocalVoicePlayer", {
    _stopped: false,
    _voices: [],
    _play: function (number = "", settings) {
      return new Promise(resolve => {
        const { delay } = settings;
        if (this.stopped || number === "") resolve();
        const digit = parseInt(number[0]);
        const nextNumber = number.slice(1);
        const digitVoice = this._voices[digit];
        if (nextNumber === "") resolve();
        else digitVoice.addEventListener("ended", () =>
          setTimeout(() =>
            resolve(this._play(nextNumber, settings))
            , delay)
          , { once: true });
        digitVoice.play();
      });
    },
    constructor: function (currentLocale) {
      this._setVoices(this._getVoiceLocale(currentLocale));
    },
    play: function (number, settings) {
      this._stopped = false;
      return this._play(number, settings);
    },
    stop: function () {
      this._stopped = true;
      responsiveVoice.cancel();
    },
    _getVoiceLocale: function (locale) {
      if (locale.startsWith("cs")) return "cs";
      else if (locale.startsWith("de")) return "de";
      else return "en";

    },
    _setVoices(voiceLocale) {
      for (let i = 0; i < 10; i++) {
        const digitVoice = document.createElement("audio");
        digitVoice.setAttribute("src", "../resources/voices/" + voiceLocale + "/" + i + ".mp3");
        this._voices.push(digitVoice);
      }
    }
  });
});