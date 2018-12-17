var eachTab = document.querySelectorAll('.tab'),
    chosen = document.getElementsByClassName('display')[0],
    button = document.querySelector('input[type=button]');
    inputVal = document.querySelector('input[type=number]');

document.addEventListener('click', function(event){
    for(let i = 0; i < eachTab.length; i++){
        if(event.target.matches(".tab")){
            chosen.innerHTML = event.target.innerHTML + " Content";
            if(eachTab[i] ==  event.target){
                eachTab[i].style.fontWeight = "bold";
                continue;
            }
            chosen.innerHTML = event.target.innerHTML + " Content";
            eachTab[i].style.fontWeight = "100";
            console.log(eachTab[i]);
        }
    }

    for(let x = 0; x < eachTab.length; x++){
        if(event.target.matches("input[type=button]")){
            if(Number(inputVal.value) >= 1 && Number(inputVal.value) <= 3){

                if(Number(inputVal.value) === x+1){
                    console.log(typeof(inputVal.value));
                    eachTab[x].style.fontWeight = "bold";
                    chosen.innerHTML = eachTab[x].innerHTML + " Content";
                    // continue;
                }else{
                    eachTab[x].style.fontWeight = "200";
                    console.log('Sorry');
                }
            }else{
                alert('Index is invalid');
                break;
            }
        }
    }
})