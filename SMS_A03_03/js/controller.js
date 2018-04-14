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
    var betrag = getBetrag();
    var trinkgeld = getTrinkgeld();
    var personen = getPerson();
    
    model.setResult(betrag, trinkgeld, personen);
	}

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
	 * Aufgabe 2 c)
	 * Diese Funktion validiert die Eingabe mit Regular Expression
	 */
	function validateInput(value) {
		var pattern = new RegExp(/^[1-9]{1,}(\.\d{0,2})?$/);
		if (pattern.test(value) === true) {
			return value;
		} else {
			return NaN;
		}
	}
}