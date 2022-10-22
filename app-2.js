const DIV_SCR = document.getElementById("screen");
const BOX = document.getElementById('cuadrado');
const BOX2 = document.getElementById('cuadrado2');
const BOX3 = document.getElementById('cuadrado3');
const P = document.getElementById('p')

function mover(){
    BOX.classList.add('moviendo')
    BOX2.classList.add('moviendo2')
    BOX3.classList.add('moviendo3')
}
mover()

let score = 0
sumar = (num) => score+=num

BOX.addEventListener("click", function(){
    BOX.style.backgroundImage="url(./assets/bomb.gif)"
    sumar(10)
    setTimeout(()=>{(
    BOX.style.zIndex='-1'
)}, 900);
setTimeout(()=>{(
    BOX.style.backgroundImage="url(./assets/kamikaze.gif)",
    BOX.style.zIndex='3'
)}, 1000);
});

BOX2.addEventListener("click", function(){
    BOX2.style.backgroundImage="url(./assets/bomb2.gif)"
    sumar(25)
    setTimeout(()=>{(
    BOX2.style.zIndex='-1'
)}, 900);
setTimeout(()=>{(
    BOX2.style.backgroundImage="url(./assets/zombi.gif)",
    BOX2.style.zIndex='3'
)}, 2500);
});

BOX3.addEventListener("click", function(){
    BOX3.style.backgroundImage="url(./assets/bomb3.gif)"
    sumar(50)
setTimeout(()=>{(
    BOX3.style.zIndex='-1'
)}, 900);
setTimeout(()=>{(
    BOX3.style.backgroundImage="url(./assets/momia.gif)",
    BOX3.style.zIndex='3'
)}, 1500);
    
});

setInterval(()=>{
    let contador = score
    P.innerHTML='SCORE: ' + contador
},50)




