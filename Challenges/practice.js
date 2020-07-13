/*
  TODO: Display an XKCD comic based on a number that a user chooses
​
  Prompt the user for a number (NUMBER)
  Click a button to FETCH the comic based on this number (click event)
  Take the data from the response (JSON)
  display the comic and title and date (DOM)
*/
​
/*
  Need:
  Input Box for the Number
  Button
  Function:
    grab the number
    craft the api url with the number
    fetch request to the url
    translate the response into json
    display data to the DOM
​
  Guide
​
*/
​
​
let searchterm;
​
let resultArea = document.getElementById('result');
​
let displayComic = (data) => {
  resultArea.textContent = undefined;
​
  // img, p, p
  let comicImage = document.createElement('img');
  let title = document.createElement('p');
  let date = document.createElement('p');
​
  comicImage.src = data.img;
  title.innerText = data.title;
  date.innerText = `${data.day}/${data.month}/${data.year}`;
​
  resultArea.appendChild(comicImage);
  resultArea.appendChild(title);
  resultArea.appendChild(date);
}
​
let getComic = async (comicId) => {
  try {
    let response = await fetch(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${ comicId }/info.0.json`);
    let data = await response.json();
    displayComic(data);
  } catch {
    console.error('Something didn\'t work')
  }
}
​
document.getElementById('inputField').addEventListener('keyup', (event) => {
  searchterm = event.target.value
});
​
document.getElementById('searchTerm').addEventListener('submit', (event) => {
  event.preventDefault();
  getComic(searchterm);
})
