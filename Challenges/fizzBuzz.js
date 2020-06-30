/*
​
- write a for loop running between the numbers 0 - 100
- for multiples of 3, instead of the number, console.log "Fizz"
- for multiples of 5 console.log "Buzz";
- for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
- for any other number, console.log the value
​
*/


for (let x = 0; x <= 100; x++){
    if (x % 15 === 0){
        console.log('fizzbuzz')
    }
    else if (x % 5 === 0){
    console.log('buzz');

    }
    else if (x % 3 === 0){
    console.log('fizz')
    } else {
        console.log(x)
    }
    
}
//if i is mult of 3 log fizz
//if i is mult of 5 log buzz
//if i is mult of 3 and 5 log fizzbuzz
//otherwise log i