var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var xpos = 100;
var ypos = 520;
var xposc=100;
var yposc=50;
speed = 1;
document.addEventListener("keydown", moving);

function moving(e) {
  switch(e.keyCode){

          case 65:  // если нажата клавиша влево
              xpos-=20;
              break;
          case 68:   // если нажата клавиша вверх
            xpos+=20
              break;

}
}
function drawbg() {
ctx.globalAlpha=0.3
  ctx.fillStyle = "rgba(178, 178, 178,1)";
  for(var i = 0; i<=200; i+=20){
    for (var j = 0; j<=600; j+=20){

      ctx.fillRect(i,j,20,20);
      ctx.clearRect(i+3,j+3,14,14);
      ctx.fillRect(i+5,j+5,10,10);
    }
  }
  ctx.globalAlpha=1
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

function drawcars(){

ctx.fillStyle = "rgba(0,0,0,1)";
  yposc+=speed;

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

function draw(){
drawbg();
drawcars();
drawplayer();


requestAnimationFrame(draw)
}

requestAnimationFrame(draw)
