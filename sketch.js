var backgroundImg
var marioAnimations

function preload(){

 backgroundImg=loadImage("../Assets/images.png") 
marioAnimations=loadAnimation("../Assets/1.png","../Assets/2.png","../Assets/3.png","../Assets/4.png","../Assets/5.png","../Assets/6.png")
}
function setup() {
  createCanvas(windowWidth-20,windowHeight-20);

  database=firebase.database()
  game=new Game()
  game.getState()
  game.start()

 
}

function draw() {
  background(backgroundImg);
  form=new Form()
  form.display()
  
  if(playerCount===2){
   game.update(1)
  }
}