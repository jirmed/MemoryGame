sap.ui.define([
  "./BaseObject",
], function (BaseObject) {
  "use strict";
  const MAX_LOG_LENGTH = 30;
  const initialData = {
    guesses:[],
    guessCount: 0,
    successCount: 0
  }
  return BaseObject.extend("net.konzult.memory.game.model.Statistics", {
    constructor: function (data = initialData) {
      BaseObject.call(this);
      this._setData(data);
    },
    addGuess: function( guess) {
      this.guesses.unshift(guess);
      this.guesses = this.guesses.slice(0,MAX_LOG_LENGTH);
      this.guessCount++;
      if (guess.correct) { this.successCount++};
    },
    get successRate() {
      return this.guessCount > 0 ? this.successCount / this.guessCount : 0;
    },
    reset: function() {
      this._setData(initialData);
    },
    _setData: function(data) {
      this.guessCount = data.guessCount;
      this.successCount = data.successCount;
      this.guesses = data.guesses;
    }
  });
}); 