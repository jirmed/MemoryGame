sap.ui.define([
  "./BaseObject",
], function (BaseObject) {
  "use strict";
  return BaseObject.extend("net.konzult.memory.game.model.Guess", {
    constructor: function (randomNumber, guessNumber, reverse = false) {
      BaseObject.call(this);
      this.randomNumber = randomNumber;
      this.guessNumber = guessNumber;
      this.reverse = reverse;
      this.correct = this._isCorrect();

    },
    _isCorrect: function() {
      const evaluateNumber = this.reverse ? this._reverse(this.randomNumber) : this.randomNumber;
      return (evaluateNumber === this.guessNumber);
    },
    _reverse: function(input) {
      return input.split("").reverse().join("");
    }
  });
});