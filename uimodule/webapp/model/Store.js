sap.ui.define([
  "./BaseObject",
  "./Settings",
  "./Statistics",
  "./Guess"
], function (BaseObject, Settings, Statistics,Guess) {
  "use strict";
  const initialStatistics = {
    successCount: 2,
    guessCount: 3,
    guesses: [
      new Guess("122","122",false),
      new Guess("555","666",false),
      new Guess("123","321",true)
    ]
  }
  const initialData = {
    number: undefined,
    guess: undefined,
    settings: new Settings(),
    statistics: new Statistics(initialStatistics),
    screenState: {}
  }
  return BaseObject.extend("net.konzult.memory.game.model.Store", {
    constructor: function (data = initialData) {
      BaseObject.call(this);
      this.number = data.number;
      this.settings = data.settings || new Settings();
      this.statistics = data.statistics || new Statistics();
    },
    resetStatistics: function() {
      this.statistics.reset();
    }
  });
}); 