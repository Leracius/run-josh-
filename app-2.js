const DIV_SCR = document.getElementById("screen");
const BOX = document.getElementById('cuadrado');
const BOX2 = document.getElementById('cuadrado2');
const BOX3 = document.getElementById('cuadrado3');
const P = document.getElementById('p');
const P2 = document.getElementById('p2')

let greeting = 'Bienvenido, toque a los enemigos para explotarlos ' 

P2.innerHTML=greeting

function mover(){
    BOX.classList.add('moviendo')
    BOX2.classList.add('moviendo2')
    BOX3.classList.add('moviendo3')
}
mover()

const changeEL = ()=>{
    if(score>1)P2.innerHTML='Eso! Justo asi!'
    if(score>400)P2.innerHTML='Sigue asi!!';
    if(score>800)P2.innerHTML='800 puntos!!';
    if(score>1000)P2.innerHTML='Gracias por jugar!';
    if(score>1100)P2.innerHTML='Estas a punto de avanzar';
    if(score>1200){
        P2.innerHTML='Level 2'
        DIV_SCR.style.backgroundImage='url(./assets/green-back.gif)'};
    if(score>1500)P2.innerHTML='Estas a punto de avanzar';
    if(score>2000)P2.innerHTML='Ya casi';
    if(score>2400){
        P2.innerHTML='Level 3'
        DIV_SCR.style.backgroundImage='url(./assets/blue-back.gif)'};
}

let score = 0
sumar = (num) => score+=num

BOX.addEventListener("click", function(){
    BOX.style.backgroundImage="url(./assets/bomb.gif)"
    sumar(10)
    changeEL()
    setTimeout(()=>{(
    BOX.style.zIndex='-1'
)}, 900);
setTimeout(()=>{(
    BOX.style.backgroundImage="url(./assets/kamikaze.gif)",
    BOX.style.zIndex='3'
)}, 1200);
});

BOX2.addEventListener("click", function(){
    BOX2.style.backgroundImage="url(./assets/bomb2.gif)"
    sumar(25)
    changeEL()
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
    changeEL()
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
},500)



