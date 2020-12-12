sap.ui.define([
  "sap/ui/base/Object",
], function (BaseObject) {
  "use strict";
  return BaseObject.extend("net.konzult.numberMemorizer.model.state.BaseState", {
    id: "default",
    constructor: function (context) {
//      BaseObject.call(this);
      this.context = context;
    },
    init: () => { },
    start: () => { },
    getScreenState: function () {
      const defaultScreenState = {
        submitButtonAllowed: false,
        guessInputAllowed: false,
        numberVisible: true,
        numberColor: "default"
      };
      return Object.assign(defaultScreenState, this._getScreenState());
    },
    _getScreenState: function() { return {}}
  });
});
