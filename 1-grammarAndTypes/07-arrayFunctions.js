let coffee = ['espresso', 'nitro cold brew', 'cappuccino', 'americano', 'cappuccino', 'frappucino']

console.log(coffee[2]);

coffee.pop();

console.log(coffee);

coffee.push('latte');

console.log(coffee);

let firstItem = coffee.shift();
console.log(firstItem);
console.log(coffee);

coffee.unshift('instant' , 'drip');
console.log(coffee);

console.log(coffee.indexOf('cappuccino'));

coffee.forEach((item) => {
    console.log(item.length);
});

let abc = (cb) => {
    console.log('When do I happen?');
    (cb);
}

let callbacker = () => console.log('I happen at some point.');

abc(() => 5);

callbacker();


coffee.forEach((item, index, array) => {
    console.log(item, index);
});