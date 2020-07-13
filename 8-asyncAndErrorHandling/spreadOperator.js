let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f', 'o', 'r'];
​
// for (let item of array2) {
//   array1.push(item);
// }
​
// array1.concat(array2)
​
console.log(...['adam']);
console.log('adam');
​
console.log(...[1, 2, 3]);
console.log(1, 2, 3);
​
console.log(array1)
console.log(...array1);
​
array1 = [ ...array1, ...array2 ];
array1 = array1.concat(array2);
​
console.log(array1);
​
​
let person1 = {
  name: 'Smokey Bear',
  outfit: 'Bear costume'
}
​
let bearAttributes = {
  danger: 'RED',
  hunger: 10
}
​
// for (let something in bearAttributes) {
//   person1[something] = bearAttributes[something];
// }
​
person1 = {
  ...person1,
  ...bearAttributes
}
​
let mystate = {
  name: 'abc',
  age: 20,
  isCool: true
}
​
mystate = {
  ...mystate,
  age: mystate.age + 1,
}
​
console.log(mystate)
​
​
​
// console.log(person1)