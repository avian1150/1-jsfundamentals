/* 

Make a tip calculator using a function
takes in the bill (number)
have it return the tip (number)
capture the returned tip in a variable
print the variable

*/





let total = 24.05

let tip = (total) => {
    return total * 0.2;
}

let tipamount = tip(25);

console.log(tipamount)