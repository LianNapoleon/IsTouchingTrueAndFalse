var fixedRect, movingRect;
var o1, o2, o3, o4;

function setup() {

  createCanvas(800,400);
  fixedRect=createSprite(600,400,50,80);
  movingRect =createSprite(400, 200, 80, 30);
  o1 =createSprite(100,100,50,50);
  o1.shapeColor="green";
  o2 =createSprite(200,100,50,50);
  o2.shapeColor="blue";
  o3 =createSprite(300,100,50,50);
  o3.shapeColor="brown";
  o4 =createSprite(400,100,50,50);
  04.shapeColor="red";
}

function draw() {

  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,o2)){

    movingRect.shapeColor = "red";
    o2.shapeColor = "red";

  }

  else{

    movingRect.shapeColor = "purple";
    o2.shapeColor = "purple";
  
  }

  drawSprites();

}
function isTouching(object1,object2){

  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2 ){
    return true 
    
    }
 else {
   return false
 }

}