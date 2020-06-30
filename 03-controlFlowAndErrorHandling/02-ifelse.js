let temperature = 75;

if (temperature < 65) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}

let myName = "Avian";

if (myName == "Avian"){
    console.log('Hello, my name is' + ' ' + myName);
}   else {
    console.log('Hello, is your name' + ' ' + myName);
}

// ifElse

let age = 12;

//Older than 25, "Yay! You can rent a car."
//Older than 21, but not 25, "Hey you can purchase alcohol."
//Older than 18 but not 21, "Hey you can vote"
//Younger than 18, "Hey you can do stuff one day"

if (age >= 25) {
    console.log("Yay! You can rent a car.");
} else if (age >= 21) {
    console.log("Hey, you can purchase alcohol.");
} else if (age >= 18) {
    console.log("Hey, you can vote.");
} else {
    console.log('Sorry \'bout it');
}