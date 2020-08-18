let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let xpos = 100;
let ypos = 520;
let car_count =1;
let points = 0;

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
              if(xpos<180 && speed!=0){xpos+=20;}
              break;
          case 37:  // если нажата клавиша влево
              if(xpos>20 && speed!=0){xpos-=20;}
               break;
          case 39:   // если нажата клавиша вверх
              if(xpos<180 && speed!=0){xpos+=20;}
               break;

}
}



function drawbg() {
  ctx.fillStyle = "rgba(178, 178, 178,1)";
  for(let i = 0; i<=200; i+=20){
    for (let j = 0; j<=600; j+=20){

      ctx.fillRect(i,j,20,20);
      ctx.clearRect(i+3,j+3,14,14);
      ctx.fillRect(i+5,j+5,10,10);
    }
  }

  }
  function drawlives() {

    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.beginPath();
    ctx.moveTo(221, 0);
    ctx.lineTo(221, 600);
    ctx.stroke();
    let lx=220;
    let ly=120;
    for(let n = 1; n<=localStorage.lives; n++){

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
   x:randcord(20, 180, 20),
   y:0
 }

function draw(){
if (isNaN(localStorage.lives)) {localStorage.lives=5}
if (isNaN(localStorage.HiScore)) {localStorage.HiScore=0}
drawbg();
drawlives();
  for(let i = 0; i < car.length; i++) {
   drawcars(car[i].x, car[i].y);


    car[i].y+=speed;

   if(car[i].y > 400 && car_count<2) {

   car.push({
   x : randcord(20, 180, 20),
   y : 0
   });
   car_count++;

   }
   if(car[i].y==520)
   {
     car_count-=1;
     points+=10;
   }

if ((xpos+20==car[i].x)&&(ypos==car[i].y+40) ||
    (xpos==car[i].x+20)&&(ypos==car[i].y+40) ||
    (xpos+40==car[i].x)&&(ypos+20==car[i].y+40) ||
    (xpos-20==car[i].x+20)&&(ypos+20==car[i].y+40) ||
    (xpos==car[i].x)&&(ypos==car[i].y+60)){
    if (localStorage.lives!=0)
    {
      localStorage.lives--;
      console.log(localStorage.lives);
      if (confirm("Вы проиграли, желаете продолжить?")){location.reload();}
      else{speed=0}
     }
    else if (confirm("Жизней больше нет, желаете повторить?")){localStorage.lives=5; location.reload();}
    else {speed=0}
}


}



// drawcars();
drawplayer();


requestAnimationFrame(draw)
}

requestAnimationFrame(draw)
