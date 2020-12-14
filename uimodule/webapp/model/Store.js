sap.ui.define([
  "./BaseObject",
  "./Settings",
  "./Statistics",
], function (BaseObject, Settings, Statistics) {
  "use strict";
  const initialStatistics = {
    successCount: 0,
    guessCount: 0,
    guesses: []
  };
  const initialData = {
    number: undefined,
    guess: undefined,
    settings: new Settings(),
    statistics: new Statistics(initialStatistics),
    screenState: {}
  };
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