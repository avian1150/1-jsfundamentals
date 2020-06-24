// booleans

let isOn = true;
let isRaining = false;

//NULL

let empty = null;

//Undefined

let undef = undefined;

let whatAmI;
console.log(undefined)

//Numbers

let degrees = 90;
console.log(degrees);

//Strings
let stringOne = "doubleydoos";
let stringTwo ="singleyDoos";

let first = 1050 + 100;
let second = '1050' + 100;
let third = 1050 + '100';
let last = '1050' + '100';

console.log(first, second, third, last)

let firstName = "Josh";
let lastName = "Royer";

console.log(firstName + " " + lastName)

//Escape Characters

let myMessage = 'don\'t do this'
console.log(myMessage)

//Objects

let frodo = {
    race: 'Hobbit',
    rings: 1,
    cloak: true,
    primaryWeapon: {
        name: 'Sting',
        attack: 30,
        damage: false
    }
};
console.log(typeof frodo);

//Array

let groceryList = [
    'kiwi',
    'banana',
    'coconut',
];



let aThing = [23, {isOn: true, electricity: 'AC'}, ['wallaby']];

console.log(aThing instanceof Array);

//String Methods

let userTitle = "a Day iN tHE lIFe oF Dev";
console.log(userTitle.toUpperCase());
