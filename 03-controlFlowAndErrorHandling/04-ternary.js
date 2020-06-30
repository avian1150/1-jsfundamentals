let num = 6;

// Ternary

(num > 0) ? console.log('yes') : console.log('nah');

if(num > 0 && num < 5) {
    console.log('yes');
} else if (num > 5) {
    console.log(`I'm greater than 5`);
} else {
    console.log('nah');
}

/// ==========
(num > 0 && num < 5)
    ? console.log('yes')
    : (num > 5)
        ? console.log(`I'm greater than 5.`)
        : console.log('nah');

//CHALLENGE

let age = 21;

(age >= 25)
? console.log('Yay you can rent a car.')
: (age >= 21)
? console.log('Yay, you can drink alcohol!')
:(age >= 18)
? console.log('yay you can vote')
: console.log(`sorry 'bout it`);
