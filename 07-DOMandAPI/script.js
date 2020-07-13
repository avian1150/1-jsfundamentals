let unorderedList = document.querySelector('ul');
let submitButton = document.getElementById('submit');


let myData = [
    { title: "Downtown Is Loud", author: "Adam" },
    { title: "My Room is Hot", author: "Nathaniel"},
    { title: "My Neighbors Are Noisy", author: "Alec"},
    { title: "BoatyMcBoatFace", author: "Sheena"},
    { title: "I wish I could Type as Fast as Adam", author: "Sierra"},
    { title: "Python Is Better", author: "YaBoiSwft"}
];

// Goal, loop over myData
for (let thing of myData) {
    let mySuperCoolListItem = document.createElement('li');
    //inner text is the object's title

    let myTitle = document.createElement('h3');
    myTitle.innerText = thing.title;

console.log(mySuperCoolListItem);
unorderedList.appendChild(mySuperCoolListItem);
}