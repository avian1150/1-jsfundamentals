let person1 = {
    name: 'Macy',
    age: 21,
    canVote: true,
}
console.log(person1)

let person2 = {
    name: "Thicc Nicc",
    age: 56,
    canVote: true
}

let person3 = {
    name: 'Argyle',
    age: 15,
    canVote: false
}


/* function createPerson (name, age, canVote) {
    let person ={
        name: name,
        age: age,
        canVote: canVote
    }

    return person;
} */

function Person (name, age, canVote) {
    this.name = name;
    this.age = age;
    this.canVote = canVote;

    this.greeting = () => `Hello, my name is ${ this.name }`;
}

person1 = new Person('Macy', 24, true)

console.log(person1.age);


let myobj = {
    '123abc': true
};

console.log(myobj["123abc"])


let macyJones = new Person('Macy', 24, true);
abc = Person('abc', 22, false);

macyJones.age, macyJones.canVote

console.log(macyJones instanceof Person);


 
