for ( let j = 0; j <= 10; j += 2  ) {
  console.log(j);
}
let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

let grades =['A', "F", "F-", "C++", 'B+'];
for (x of 'grades') {
    console.log(x);
}

// for-of-loops return to you the VALUE and can only run ITERABLES (ordered collection)