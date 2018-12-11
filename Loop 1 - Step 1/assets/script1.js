/**
* @description Changes input to selected element
* @constructor
* @param {string} defaultValue - The value that displays everytime browser refreshes
* @param {string} inputVal - The selected value from list of options
* @param {string} optBlock - The container for list of options
* @param {string} checkmark - Checks a selected value
* @returns {string} Selected option
*/

var inputVal = document.querySelectorAll('.options p'),
    defaultValue = document.querySelector('.default p'),
    optBlock = document.getElementsByClassName('options')[0],
    checkmark = document.getElementsByClassName('tick');

// Displays default value when browser refreshes
//  Hides all checkmarks when browser loads
window.addEventListener('load', function(){

        for (let x = 0; x < inputVal.length; x++){
            if (actualWidth < 700){
            }else{
            }
        }
});

// Assigns click eventlistener to list of options
// Hides Option block when value is selected
document.addEventListener('click', function(event){
    let actualWidth = window.innerWidth;
    for (let i = 0; i < inputVal.length; i++){
        // if(actualWidth < 700){
            if (event.target.matches('.opt-list p')){
                defaultValue.innerHTML = event.target.innerHTML;
                checkmark[i].style.visibility = 'visible';
                if(actualWidth > 700){
                    if(inputVal[i] == event.target){
                        continue;
                    }
                    checkmark[i].style.visibility = 'hidden';
                }
                optBlock.style.display = 'block';

            }
        // }else{
        //     optBlock.style.display = 'block';
        // }
    }
    if (event.target.matches('.container')){
        optBlock.style.display = 'none';
        console.log('You jus clicked the window');
    }
})

// Displays option block when user clicks input
defaultValue.addEventListener('click', function(e){
    optBlock.style.display = 'block';
})