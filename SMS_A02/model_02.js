var model = new TipModel();
try{
model.setTipPercent(5);
model.setPartySize(2);
model.setAmount(200);
}catch(e){
console.log("Error " + e);
}
var total = model.getTotal();
var totalPerPerson = model.getTotalPerPerson();
var tipPerPerson = model.getTipPerPerson();
var getTip = model.getTip();

console.log("total: " + total);
console.log("totalPerPerson: " + totalPerPerson);
console.log("tipPerPerson: " + tipPerPerson);
console.log("getTip: " + getTip);
//==================================================
//Negative Tests
try{
model.setTipPercent(-5);
} catch(e) {
console.log(e);
}
try{
model.setPartySize(-1);
} catch(e) {
console.log(e);
}
try{
model.setAmount(-100);
} catch(e) {
console.log(e);
}
//================================================
function TipModel() {
    TipModel.prototype.setTipPercent = function(percent){
        if (!(percent > 0)) {
            throw {
            	Name: "ValueError",
            	Message: "percent invalid: " + percent
            };
        }
        this.percent = percent;
    };

    TipModel.prototype.setPartySize = function(partySize){
        if (!(partySize > 0)) {
        	throw {
            	Name: "ValueError",
            	Message: "partySize invalid: " + partySize
            };
        }
        this.partySize = partySize;
    };
    
    TipModel.prototype.setAmount = function(amount){
        if (!(amount > 0)) {
        	throw {
            	Name: "ValueError",
            	Message: "amount invalid: " + amount
            };
        }
        this.amount = amount;
    };
    
    TipModel.prototype.getTotal = function(){
        return this.amount * this.percent/100 + this.amount;
    };

    TipModel.prototype.getTotalPerPerson = function(){
        return this.getTotal()/this.partySize;
    };

    TipModel.prototype.getTipPerPerson = function (){
        return (this.amount * this.percent/100)/this.partySize;
    };

    TipModel.prototype.getTip= function(){
        return this.amount * this.percent/100;
    };
}

/*
 * Output:
 * total: 210
 * totalPerPerson: 105
 * tipPerPerson: 5
 * getTip: 10
 */
