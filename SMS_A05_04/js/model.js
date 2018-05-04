'use strict';

function Model() {
	var self = this, chf, rateCHF, rateEUR;

	self.observable = new Observable();

	function getEUR() {
		var dollar = chf / rateCHF;
		var euro = dollar * rateEUR;
		euro = round(euro,2);
		self.observable.notifyObservers(euro);
	}
	
	function getRate() {
        $.ajax({
            url : "http://apilayer.net/api/live?access_key=ba00f8300b658ac409a75a3b13e148e0&currencies=EUR,CHF&format=1",
            success : transferComplete,
            error: transferFailed
        });
	}

	self.setCHF = function(amount) {
		chf = amount;
		getRate();
	};
    
    self.setRateCHF = function(rate){
        rateCHF = rate;
    };
    
    self.setRateEUR = function(rate){
        rateEUR = rate;
    };
    
    function transferComplete(result){
        model.setRateCHF(parseFloat(result.quotes.USDCHF));
        model.setRateEUR(parseFloat(result.quotes.USDEUR));
        getEUR();
    }

    function transferFailed(result){
        alert("Fehler beim auslesen des Umrechnungskurses: " + result);
    }
 
 	/*
	 * Diese Funktion rundet € auf X (2) Nachkommastellen
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
