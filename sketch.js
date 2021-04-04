var cat,catimg1,catimg2
var mouse,mouseimg1,mouseimg2
var bgImage

function preload() {
   bgImage=loadImage("images/garden.png");
   catimg1=loadAnimation("images/cat1.png");
   mouseimg1=loadAnimation("images/mouse1.png");
   catimg2=loadAnimation("images/cat2.png","images/cat3.png");
   catimg3=loadAnimation("images/cat4.png")
   mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseimg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(800,700,30,30)
    cat.addAnimation("cat",catimg1)
    
    
    cat.scale=0.2
    mouse=createSprite(200,700,20,20)
    mouse.addAnimation("mouse",mouseimg1)
   
   
    mouse.scale=0.2
    //create tom and jerry sprites here
     
}

function draw() {
    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
      cat.velocityX=0;
      cat.addAnimation("cat3",catimg3)
      cat.changeAnimation("cat3")
      mouse.addAnimation("mouse3",mouseimg3)
      mouse.changeAnimation("mouse3")
      cat.x=300
    }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
  cat.velocityX=-4;
  cat.addAnimation("cat2",catimg2)
      cat.changeAnimation("cat2")
      mouse.addAnimation("mouse2",mouseimg2)
      mouse.changeAnimation("mouse2")
}
  //For moving and changing animation write code here


}
