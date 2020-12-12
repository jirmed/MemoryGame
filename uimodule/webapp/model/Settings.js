sap.ui.define([
  "./BaseObject",
  "sap/ui/model/json/JSONModel"
], function (BaseObject, JSONModel) {
  "use strict";

  return BaseObject.extend("net.konzult.number.game.model.Settings", {
    constructor: function (data) {
      BaseObject.call(this);
      if (data) {
        Object.assign(this, data);
      } else {
        this.load();
      }
    },
    setDefaults: function () {
      Object.assign(this,
        {
          digits: 5,
          delay: 300,
          showNumber: false,
          reverse: false
        });

    },
    load: function () {
      const data = JSON.parse(window.localStorage.getItem("settings"));
      if (data) {
        Object.assign(this, data);
      } else {
        this.setDefaults();
      }
    },
    save: function () {
      const { digits, delay, showNumber, reverse } = this;
      const data = JSON.stringify({ digits, delay, showNumber, reverse });
      console.log("saving");
      window.localStorage.setItem("settings", data);
    },
    set digits(digits) {
      this.digits = digits;
      this.save();
    }
  });
});

