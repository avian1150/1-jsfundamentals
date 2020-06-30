let returnToSender = () => {
    return 'Not here'
}

let value = returnToSender();
console.log(value);

let what = () => returnToSender();
let hmmm = what();

console.log(hmmm);

