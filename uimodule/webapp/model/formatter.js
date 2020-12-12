sap.ui.define([], function () {
	"use strict";
	return {
		guessCorrectIcon: function( correct) {
			return ( correct ? "sap-icon://accept" : "sap-icon://alert")
		},
		guessCorrectState: function( correct) {
			return ( correct ? "Success" : "Error")
		}
	};
});
