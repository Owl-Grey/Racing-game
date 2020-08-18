let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let xpos = 100;
let ypos = 520;
let wdt = 240
let points = 0;
var crash = new Audio();
var score_audio = new Audio();
var lvlup = new Audio();


crash.src = "snd/crash.mp3"; // Указание нужной записи
score_audio.src = "snd/score.mp3";
lvlup.src = "snd/lvlup.mp3";// Аналогично
// let xposc=100;
// let yposc=50;
speed = 1;

function randcord(min, max, num) {
    return Math.floor(Math.floor(Math.random() * (max - min + 1) + min) / num) * num;
}
function randomcar()
{

}
document.addEventListener("keydown", moving);

function moving(e) {
  switch(e.keyCode){

          case 65:  // если нажата клавиша влево
              if(xpos>20 && speed!=0){xpos-=20;}
              break;
          case 68:   // если нажата клавиша вверх
              if(xpos<wdt-40 && speed!=0){xpos+=20;}
              break;
          case 37:  // если нажата клавиша влево
              if(xpos>20 && speed!=0){xpos-=20;}
               break;
          case 39:   // если нажата клавиша вверх
              if(xpos<wdt-40 && speed!=0){xpos+=20;}
               break;

}
}



function drawbg() {

  ctx.fillStyle = "rgba(178, 178, 178,1)";
  for(let i = 0; i<wdt; i+=20){
    for (let j = 0; j<=600; j+=20){

      ctx.fillRect(i,j,20,20);
      ctx.clearRect(i+3,j+3,14,14);
      ctx.fillRect(i+5,j+5,10,10);
    }
  }
  ctx.clearRect(wdt+1,0,cvs.width-wdt,600);
  }
  function drawlives() {

    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.beginPath();
    ctx.moveTo(wdt+1, 0);
    ctx.lineTo(wdt+1, 600);
    ctx.stroke();
    let lx=wdt;
    let ly=120;
    for(let n = 1; n<=sessionStorage.lives; n++){

        ctx.fillRect(lx,ly,20,20);
        ctx.clearRect(lx+3,ly+3,14,14);
        ctx.fillRect(lx+5,ly+5,10,10);
        lx+=20;
      }
    }


function drawplayer(){
ctx.fillStyle = "rgba(0,0,0,1)";

  // ypos+=speed;

  ctx.fillRect(xpos-20,ypos+20,60,20);
  ctx.clearRect(xpos-17,ypos+23,54,14);
  ctx.fillRect(xpos-15,ypos+25,50,10);

  ctx.fillRect(xpos,ypos,20,60);
  ctx.clearRect(xpos+3,ypos+3,14,54);
  ctx.fillRect(xpos+5,ypos+5,10,50);

  ctx.fillRect(xpos-20,ypos+60,20,20);
  ctx.clearRect(xpos-17,ypos+63,14,14);
  ctx.fillRect(xpos-15,ypos+65,10,10);

  ctx.fillRect(xpos+20,ypos+60,20,20);
  ctx.clearRect(xpos+23,ypos+63,14,14);
  ctx.fillRect(xpos+25,ypos+65,10,10);
}

function drawcars(xposc,yposc){

ctx.fillStyle = "rgba(0,0,0,1)";


  ctx.fillRect(xposc-20,yposc+20,60,20);
  ctx.clearRect(xposc-17,yposc+23,54,14);
  ctx.fillRect(xposc-15,yposc+25,50,10);

  ctx.fillRect(xposc,yposc,20,60);
  ctx.clearRect(xposc+3,yposc+3,14,54);
  ctx.fillRect(xposc+5,yposc+5,10,50);

  ctx.fillRect(xposc+20,yposc-20,20,20);
  ctx.clearRect(xposc+23,yposc-17,14,14);
  ctx.fillRect(xposc+25,yposc-15,10,10);

  ctx.fillRect(xposc-20,yposc-20,20,20);
  ctx.clearRect(xposc-17,yposc-17,14,14);
  ctx.fillRect(xposc-15,yposc-15,10,10);
}

let car = [];
 car[0] = {
   x:randcord(20, wdt-40, 20),
   y:0
 }
function wdtx(){
  let x = prompt("Какую ширину поля вы хотите, в пределах от 10 до 15?",0);
  if (x<10 && x>15) {alert("Неверное заполнение"); sessionStorage.clear();}
  else{wdt=x*20; console.log(wdt)}
}
function main(){

if (isNaN(sessionStorage.progress)) {sessionStorage.progress=0;}
if (isNaN(sessionStorage.speed)||sessionStorage.speed==0) {sessionStorage.speed=1;}
if (isNaN(sessionStorage.goal)) {sessionStorage.goal=sessionStorage.speed*10;}
if (isNaN(sessionStorage.lives)) {sessionStorage.lives=5;}
if (isNaN(localStorage.HiScore)) {localStorage.HiScore=0;}
if (points>localStorage.HiScore) {localStorage.HiScore=points;}
drawbg();
drawlives();
// setTimeout(car.push({x : randcord(20, wdt-40, 20),y : 0}), 5000);
  for(let i = 0; i < car.length; i++) {
   drawcars(car[i].x, car[i].y);


    car[i].y+=Number(sessionStorage.speed);

   // if(car[i].y == 400) {
   //
   //
   //

   // }a
   if(car[i].y>600)
   {
     setTimeout(car.push({x : randcord(20, wdt-40, 20),y : 0}), 5000);
     car.shift();
     car.push({
     x : randcord(20, wdt-40, 20),
     y : 0
     });
     points+=10;
     score_audio.play();
     sessionStorage.progress++;
     if (sessionStorage.progress == sessionStorage.goal)
     {
       sessionStorage.speed++;
       lvlup.play()
       sessionStorage.goal=sessionStorage.speed*10;
     }
   }

if ((xpos+20==car[i].x)&&(ypos==car[i].y+40) ||
    (xpos==car[i].x+20)&&(ypos==car[i].y+40) ||
    (xpos+40==car[i].x)&&(ypos+20==car[i].y+40) ||
    (xpos-20==car[i].x+20)&&(ypos+20==car[i].y+40) ||
    ((xpos+40-car[i].x-20)<0)&&(ypos<=car[i].y && car[i]<620) ||
    ((xpos-20-car[i].x+40)<0)&&(ypos<=car[i].y && car[i]<620) ||
    (xpos==car[i].x)&&(ypos==car[i].y+60)){
    if (sessionStorage.lives!=0)
    {
      sessionStorage.lives--;
      crash.play()
      if (confirm("Вы потеряли одну жизнь, желаете продолжить?")){location.reload();}
      else{sessionStorage.lives--; sessionStorage.clear();}
     }
    else if (confirm("Жизней больше нет, желаете повторить?")){sessionStorage.clear(); location.reload();}
    else {sessionStorage.clear();}
}


}



// drawcars();
drawplayer();


ctx.font = "20px Times New Roman";
ctx.fillText("Points" , wdt+5, 20);
ctx.fillText(points, wdt+5, 40);
ctx.fillText("HiScore"  , wdt+5, 60);
ctx.fillText(localStorage.HiScore, wdt+5, 80);
ctx.fillText("Goal: "+ sessionStorage.progress +"/"+ sessionStorage.goal, wdt+5, 160);
requestAnimationFrame(main)
}
wdtx();
requestAnimationFrame(main)
