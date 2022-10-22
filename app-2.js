const SECTION = document.getElementById("adaptative");
const DIV_SCR = document.getElementById("screen");
const PERSON = document.getElementById("person");
const CURSOR = document.getElementById("cursor");
const BOTON1 = document.getElementById("buton1");
const BOX = document.getElementById('cuadrado')

function mover(){
    BOX.style.display=('flex')
    BOX.classList.add('moviendo');
}
mover()
function die(){
    return 
}
BOX.addEventListener("click",() =>{
    // BOX.style.display=("none")
    BOX.style.backgroundImage="url(./assets/bomb.gif)"
    setTimeout(()=>{(
    BOX.style.backgroundImage="url(./assets/run-josh.gif)"
)}, 1700);
});



// setInterval(()=>{(
//     BOX.style.backgroundImage="url(./assets/bomb.gif)"
// )}, 1000);