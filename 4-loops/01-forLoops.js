let i = 7;

// for loop controller i.e. ()
// pos1: variable declaration, initialization
// pos2: condition to run the loop (needs to be true)
// pos3: increment or change to allow the condition to fail
for (i = 0; i < 10; i++){
    console.log('nice')
    // increment i 
    // verify conditional (hop up if true, leave loop if false)

}

console.log(i)

let z = 10;

for (z = 0; z <= 10; z++){
    console.log(z);
}

let name = "PatrickStarrIsReallyCoolWouldYouLikeToLiveUnderARockTooYo";
let pCharacter = name[0];
console.log(name.length);



let nameThing = "SquareBobSpongePants";

for (let xnameThing=0; xnameThing < nameThing.length; xnameThing++){
    console.log(nameThing[xnameThing]);
}

//This is essentially how you spell out a name, same set up as numbers, but with words instead!

for (let n of nameThing){
    console.log(n);
}

let invoice = [3.1, 4.1, 89.98, 3.50]
let total = 0;

for (let i = 0; i < invoice.length; i++){
    total = total + invoice[i]
}

console.log(total);