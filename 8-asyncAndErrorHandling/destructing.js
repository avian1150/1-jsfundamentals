// Array Destructuring
let [name, age, height] = ['Yaboi', 89, 45];
​
console.log(name);
​
let numbers = [1, 4, 8, 9];
let [x, y, z, j, f] = numbers;
​
console.log(x, y, z, j, f);
​
function handleThing (u) {
  let n = [];
  for (let i = 0; i < u; i++ ) {
    n.push(i);
  }
  return n;
}
​
let [first, second, third] = handleThing(3);
​
console.log(first) // -> 0
​
​
// Short hand object literal definition
let information = 'valuable'
​
let representation = 123
​
let status = {
  information,
  representation
}
​
console.log(status);
​
​
// Object destructuring
let lunch = {
  greens: false,
  protein: true,
  duration: 80,
  rating: 'Good'
}
​
let { greens, protein, duration, rating } = lunch;
​
console.log(greens);
​
​
​
let coordinate = {
  x: 44,
  y: 21,
  z: -89
}
​
// Using object destructuring in parameter definitions
                    // Only 2 parameters here
let shiftPosition = ({x, y, z}, force) => {
  x += force/2;
  y -= force*3;
  z *= force/120;
  return { x, y, z }
}
​
let newPosition = shiftPosition(coordinate, 780);
​
console.log(newPosition);