'use strict';

function Model() {
	var self = this, totalBetrag, propersonBetrag, trinkgeldMenge, propersonTrinkgeld;

	self.observable = new Observable();
	
	self.setResult = function(betrag, trinkgeld, personen) {
		setTotalAmount(betrag, trinkgeld);
		setAmountPerPerson(personen);
		setTip();
		setTipPerPerson(personen);
		
		self.observable.notifyObservers(totalBetrag, propersonBetrag, trinkgeldMenge, propersonTrinkgeld);
	};
	
	function setTotalAmount(betrag, trinkgeld) {
		trinkgeldMenge = parseFloat(betrag) * parseFloat(trinkgeld) / 100;
		totalBetrag = round(parseFloat(betrag) + trinkgeldMenge,2);
	}

	function setAmountPerPerson(personen) {
		propersonBetrag = round(totalBetrag  / parseInt(personen),2);
	};
	
	function setTip() {
		trinkgeldMenge = round(trinkgeldMenge,2);
	};
	
	function setTipPerPerson(personen) {
		propersonTrinkgeld = round(trinkgeldMenge / parseInt(personen),2);
	};
	
	/*
	 * Diese Funktion rundet einen Betrag auf x Nachkommastellen
	 */
	function round(number, precision) {
		if (number === "") {
			return "";
		}
    var shift = function (number, precision, reverseShift) {
        if (reverseShift) {
            precision = -precision;
        }
        var numArray = ("" + number).split("e");
        return  + (numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
	}
}
