function calculateTip() {
    
	//Beträge von input Feldern ermitteln und in Variable speichern
    var betrag = document.getElementsByName("betrag")[0];
    var trinkgeld = document.getElementsByName("trinkgeld")[0];
    var personen = document.getElementsByName("personen")[0];
    
    //Beträge ausrechnen
    var trinkgeldMenge = parseFloat(betrag.value) * parseFloat(trinkgeld.value) / 100;
    var totalBetrag = parseFloat(betrag.value) + trinkgeldMenge;
    var propersonBetrag = totalBetrag / parseInt(personen.value);
    var propersonTrinkgeld = trinkgeldMenge / parseInt(personen.value);
    
    //Werte in HTML setzen
    document.getElementById("total").innerHTML = "Gesamtbetrag: " + Math.round(totalBetrag * 100) / 100 + " €";
    document.getElementById("perperson").innerHTML = "Betrag je Person: " + Math.round(propersonBetrag * 100) / 100 + " €";
    document.getElementById("tip").innerHTML = "Trinkgeld: " + Math.round(trinkgeldMenge * 100) / 100 + " €";
    document.getElementById("tipperperson").innerHTML = "Trinkgeld je Person: " + Math.round(propersonTrinkgeld * 100) / 100 + " €";
}