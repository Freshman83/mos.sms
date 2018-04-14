'use strict';

function Controller() {
	var self = this;

	model.observable.addObserver(self);

	function getTrinkgeld() {
		return document.getElementById("trinkgeld").value;
	}
	
	function getBetrag() {
		return document.getElementById("betrag").value;
	}
	
	function getPerson() {
		return document.getElementById("personen").value;
	}

	function calculateTip() {
    
	//Beträge von input Feldern ermitteln und in Variable speichern
    var betrag = validateInput(getBetrag());
    var trinkgeld = validateInput(getTrinkgeld());
    var personen = parseInt(getPerson(),10);
    if (isNaN(betrag) || isNaN(trinkgeld)) {
		alert("Please enter a valid number, i.e. 1.55, 2 or 3.1!");
    	self.update("","","","","");
    } else {
    	model.setResult(betrag, trinkgeld, personen);
    };
	};

	self.onLoaded = function() {
		window.document.getElementById("calculate").addEventListener("click", calculateTip, false);
	};

	self.update = function(totalBetrag, propersonBetrag, trinkgeldMenge, propersonTrinkgeld) {
		//Werte in HTML setzen
    	document.getElementById("total").innerHTML = "Gesamtbetrag: " + totalBetrag + " €";
    	document.getElementById("perperson").innerHTML = "Betrag je Person: " + propersonBetrag + " €";
    	document.getElementById("tip").innerHTML = "Trinkgeld: " + trinkgeldMenge + " €";
    	document.getElementById("tipperperson").innerHTML = "Trinkgeld je Person: " + propersonTrinkgeld + " €";
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