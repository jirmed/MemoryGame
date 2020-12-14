sap.ui.define([], function () {
	"use strict";
	return {
		guessCorrectIcon: function (correct) {
			return (correct ? "sap-icon://accept" : "sap-icon://alert");
		},
		guessReverseIcon: function (correct) {
			return (correct ? "sap-icon://media-reverse" : "sap-icon://media-play");
		},
		guessCorrectState: function (correct) {
			return (correct ? "Success" : "Error");
		},
		rate: function (success, total) {
			return (total == 0 ? "" :
				Number(parseInt(success) / parseInt(total)).toLocaleString(undefined, {
					style: "percent",
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
				})
			);
		},
		i18n: function( key ) {
			return this.getView().getModel("i18n").getResourceBundle().getText(key);
		}
	};
});
