'use strict';

function Controller() {
	var self = this;

	model.observable.addObserver(self);

	function getCHF() {
		return $("#chfIN").val();
	}

	function processCHF() {
		var chfText = getCHF();
		var chf = parseFloat(validateInput(chfText));
		if (isNaN(chf)) {
			self.update("");
			$("#chfIN").val("");
		} else {
			model.setCHF(chf);
		}
	}

	self.onLoaded = function() {
		$("#convertBN").click(processCHF);
	};

	self.update = function(euro) {
		$("#euroIN").val(euro);
	};
	
	/*
	 * Diese Funktion validiert die Eingabe mit Regular Expression
	 */
	function validateInput(value) {
		var pattern = new RegExp(/^[0-9]{1,}(\.\d{0,2})?$/);
		if (pattern.test(value) === true) {
			return value;
		} else {
			return NaN;
		}
	}
}