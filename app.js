/* Imports */

/* DOM Elements */
const headSelect = document.getElementById('head-select');
const middleSelect = document.getElementById('middle-select');
const pantsSelect = document.getElementById('pants-select');
const headImage = document.getElementById('head-image');
const middleImage = document.getElementById('middle-image');
const pantsImage = document.getElementById('pants-image');
const phraseInput = document.getElementById('phrase-input');
const addButton = document.getElementById('add-button');
const phraseList = document.getElementById('phrase-list');

/* State */
const character = {
    head: 'bird',
    middle: 'dress',
    pants: 'white',
    phrases: [],
};

headSelect.addEventListener('change', () => {
    character.head = headSelect.value;
    displayCharacter();
});

middleSelect.addEventListener('change', () => {
    // > set the character middle from the value of the middle <select>
    // > redisplay the character
});

pantsSelect.addEventListener('change', () => {
    // > set the character head from the value of the head <select>
    // > redisplay the character
});

function displayCharacter() {
    headImage.src = 'assets/character/' + character.head + '-head.png';
    // > set the middle and pants images .src property based on the character middle and pants properties
}

function displayPhrases() {
    // clear the list
    phraseList.innerHTML = '';

    for (const phrase of character.phrases) {
        // > create an <li> element
        // > set the text of the li to the phrase
        // > append the <li> to the phrases list
    }
}

addButton.addEventListener('click', () => {
    // > Get the phrase from the value of the phrase input
    // > Use ".push" to add the phrase to the end of the character phrases array
    // > Re-display the phrases

    // reset the input
    phraseInput.value = '';
});

displayCharacter();
displayPhrases();
