
var position;
var form,player,game;
var gameState=0;
var dataBase;


function setup(){
  
 
  createCanvas(500,500);
  dataBase=firebase.database();
  game=new Game();
  game.getState();
  game.start();

  


  
}

function draw(){
  background("white");
  
  
    
    drawSprites();
  
}






