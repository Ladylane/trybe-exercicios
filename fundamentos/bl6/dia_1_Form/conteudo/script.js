// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


function nada(event){
    event.preventDefault();
}
function nada2(event){
    event.preventDefault();
}
function nada3(event){
    if (event.key!== "a"){
        event.preventDefault();;
    } 
}

HREF_LINK.addEventListener("click", nada);
INPUT_CHECKBOX.addEventListener("click", nada2)
INPUT_TEXT.addEventListener("keypress", nada3)