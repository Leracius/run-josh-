const SECTION = document.getElementById("adaptative");
const DIV_SCR = document.getElementById("screen");
const PERSON = document.getElementById("person");
const CURSOR = document.getElementById("cursor");
const BOX = document.getElementById('cuadrado');
const BOX2 = document.getElementById('cuadrado2');
const BOX3 = document.getElementById('cuadrado3');

function mover(){
    BOX.classList.add('moviendo')
    BOX2.classList.add('moviendo2')
    BOX3.classList.add('moviendo3')
}
mover()
BOX.addEventListener("click", function(){
    BOX.style.backgroundImage="url(./assets/bomb.gif)"
    setTimeout(()=>{(
    BOX.style.backgroundImage="url(./assets/kamikaze.gif)"
)}, 1000);
});

BOX2.addEventListener("click", function(){
    BOX2.style.backgroundImage="url(./assets/bomb2.gif)"
    setTimeout(()=>{(
    BOX2.style.backgroundImage="url(./assets/zombi.gif)"
)}, 2700);
});

BOX3.addEventListener("click", function(){
    BOX3.style.backgroundImage="url(./assets/bomb3.gif)"
    setTimeout(()=>{(
    BOX3.style.backgroundImage="url(./assets/momia.gif)"
)}, 2300);
});

