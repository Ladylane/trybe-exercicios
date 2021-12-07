// console.log(document.getElementById("header-container"));

// console.log(document.getElementsByClassName("no-emergency-tasks"));

// console.log(document.querySelector(".emergency-tasks div").innerHTML =<p>Entregar projeto B4</p>);

// document.querySelector("head title");

const titulo= document.getElementsByTagName("h1")[0];
titulo.style.backgroundColor="green";

const preto= document.querySelectorAll(".no-emergency-tasks h3");
for (let i in preto){
    preto[i].style.backgroundColor ="black";
}

const rosa=document.querySelectorAll(".emergency-tasks h3");
for (let i in rosa){
    rosa[i].style.backgroundColor="pink";
}

