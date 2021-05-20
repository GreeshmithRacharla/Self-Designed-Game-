var car1,car2,car3,car4,nitro,cars;
var car1img,car2img,car3img,car4img;
var gameState,PLAY,END;
var nitroimg,backgroundimg;


function preload(){

  car1img = loadImage("images/car1.png");
  car2img = loadImage("images/car2.png");
  car3img = loadImage("images/car3.png");
  car4img = loadImage("images/car4.png");
  backgroundimg = loadImage("images/track.jpg");
  nitroimg = loadImage("images/nitro.png");

}


function setup() {
  canvas = createCanvas(displayWidth,displayHeight);
  

  car1 = createSprite(330,600);
  car1.addImage("car1",car1img);
  car2 = createSprite(530,600);
  car2.addImage("car2",car2img);
  car3 = createSprite(730,600);
  car3.addImage("car3",car3img);
  car4 = createSprite(930,600);
  car4.addImage("car4",car4img);
  

  cars = [car1,car2,car3,car4];
  
nitroGroup = new Group();

}

function draw() {
  background(backgroundimg);

  car1.scale = 0.1;
  car2.scale = 0.1;
  car3.scale = 0.1;
  car4.scale = 0.2;
  

 if(keyIsDown("space")){
      gameState === PLAY;
    }
  

if(gameState === PLAY){
   if(keyIsDown(38)){
        car2.velocityY -= 1;
       }
        if(keyIsDown(37)){
          car2.velocityX -= 0.2;
        }
        if(keyIsDown(39)){
          car2.velocityX += 0.2;
        }

        if(keyIsDown(40)){
          car2.velocityY += 1;
         }

          NPC();
      camera.position.x = displayWidth/2;
        camera.position.y = cars.y;
}

   


if(car2.isTouching(nitro)){
  car2.velocityY -= 1.3;
}


if(frameCount % 60 === 0){
  nitro = createSprite();
  nitro.x = Math.round(random(200,1000));
  nitro.addImage("nitro",nitroimg);
  nitro.scale = 0.4;
  nitro.lifetime = 300;

  nitroGroup.add(nitro);
}


        
      

   
  


  drawSprites();
  }

  function NPC(){

      car1.velocityY -= 0.9;
      car3.velocityY -= 0.9;
      car4.velocityY -= 0.9;
      
      if(car1.isTouching(nitro)){
         car1.velocityY -= 1.3;
      }

      if(car3.isTouching(nitro)){
  car3.velocityY -= 1.3;
}
      
if(car4.isTouching(nitro)){
  car4.velocityY -= 1.3;
}

     }

