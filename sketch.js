var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1500,400);
  speed=random(50,90)
  weight=random(5,7)
  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor="white";
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(230,230,230);
  bullet.velocityX=speed;

  
}
 
function draw() {
  background(0,0,0);  
  drawSprites();
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509

  if(deformation>180)  
  {
   bullet.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)  
  {
   bullet.shapeColor=color(230,230,0);
  }
  if(deformation<100)  
  {
   bullet.shapeColor=color(0,255,0);
  }


}

 
}
  
  
    
    
    