console.log('LOADED FILE');
alert('YOOOOOOOOOOOOOOOOO');




let myPTag = document.getElementById('testParagraph');
console.log(myPTag);
myPTag.style.color = 'blue';

console.log(document.querySelectorAll('p.sampleClass'));


document.querySelectorAll('p.sampleClass')[0].innerText = 'My text has changed!';
let toChange = document.querySelectorAll('p.sampleClass');

toChange.forEach(tag => {
    tag.innerText = '<h1>Hendrix</h1>';
})

document.getElementById('clickThisButton').addEventListener('click', event => {
    if (event.target.style.backgroundColor == 'red') {
        event.target.style.backgroundColor = 'blue'
    } else {
        event.target.style.backgroundColor = 'red';
    }
})

myButton.addEventListener('mouseover', event => {
    event.target.style.fontSize = '30px'
})

let userInput;

document.getElementById('nameInput').addEventListener('keyup', event => {
    userInput = event.target.value;
    document.getElementById('theValue').innerText = userInput
})


// in the HTML file create a button with a unique id and p tag
// when it is clicked, the p tag should read "Aye the button changed colors!"
// When the p tag is clicked, the text inside should say "Hey! no pushing!"

let button = document.getElementById('clickMe');
let iroh = document.getElementById('aParagraph')

button.addEventListener('click', event => {
    iroh.innerText = "SICC THICC GNARLY, YOU CLICKED IT BOIII!";
})

iroh.addEventListener('click', event => {
    event.target.innerText = "DO SUM BRUH!"
})