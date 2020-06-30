let student = {
    name: "Gloria",
    awesome: true,
    specialty: "JavaScript",
    week: 1,
    hungry: false,
    hobby: "skateboarding"
};

console.log(student.name);
console.log(student['awesome']);

for ( x of student ) {
    console.log(x);
}

console.log(typeof student);


let grades = ['A', 'F', 'F-', 'C++', 'B+'];

for (x in grades) {
    console.log(x);
}

//For-in-loop will return to you the keys of some collection.