let officeCharacter = 'Jim';

switch (officeCharacter) {
    case 'Michael':
        console.log('My mind is going a million miles.');
        break;
    case 'Dwight':
        console.log('Perfectenschlag');
        break;
    case 'Jim':
        console.log('Bears. Beets. Battlestar Galactica.');
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

let temperature = 120;

// >90. 'It's hot'
// >50, 'jacket'
// >0, 'coat'

switch (true) {
    case (true):
        console.log(`It's hot.`);
        break;
    case (false):
        console.log('You need a jacket');
        break;
    case (false):
        console.log('You need a coat');
        break;
    default:
        console.log("You are colder than a lot of things.")
}