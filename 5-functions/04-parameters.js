
//If name is not given a value, it will come up as undefined.
let greeting = function (name) {
    console.log(`Hello, ${ name }!`);
}

greeting('Broski')



let fName = "Avian";
let lName = "Royer";
let printMyName = function (fName, lName) {
    let fullName = fName + " " + lName;
    console.log(`Hello my name is ${ fullName }!`)
}

printMyName('Avian', 'Royer')





let calculateBalance = function (debits, credits) {
    // Parameter Debits = [ numbers ]
    // Parameter Credits = [ numbers ]
    let total = 0;
    for (debit of debits){
        total -= debit;
    }
    for (credit of credits){
        total += credit;
    }
    console.log(total)
}
let myDeb = [150.00, 34.00, 23.98]
let myCred= [1000.00, 50.00, 25.00]
calculateBalance(myDeb, myCred)