/**
* @description Represents a book
* @constructor
* @param {string} title - The title of the book
* @param {string} author - The author of the book
*/

/**
* How to describe your code
* @description Changes input to selected element
* @constructor
* @param {string} defaultValue - The value that displays everytime browser refreshes
* @param {string} inputVal - The selected value from list of options
* @param {string} optBlock - The container for list of options
* @returns {string} Selected option
*/

let inputVal, defaultValue, optBlock, i, mark;
inputVal = document.querySelectorAll('.options p');
defaultValue = document.querySelector('.default p');
optBlock = document.getElementsByClassName('options')[0];
mark = document.getElementsByClassName('tick')[0];

// Displays default value when browser refreshes
window.onload = function(){
    optBlock.style.display = 'none';
}

// Assigns click eventlistener to list of options
// Hides Option block when value is selected
for (i = 0; i < inputVal.length; i++){
    inputVal[i].addEventListener('click', function(e){
        defaultValue.innerHTML = e.target.innerHTML;
        optBlock.style.display = 'none';
        // mark[i].style.display = 'block';
    })
}

// Displays option block when user clicks input
defaultValue.addEventListener('click', function(e){
    optBlock.style.display = 'block';
})

