let bullets =[];
let zombies =[];
let life = 7;
let score = 0;

function setup() {
  createCanvas(400, 400);
  
  //Creando enemigos
 for (let i=0; i< 10; i++){
   let zombie={
     x:random(0,width),
     y:random(-800,0)
     
   }
   zombies.push(zombie)
 } 
 
} 
  

function draw() {
  background("black");
  
  //Dibujar a los zombies desde el centro 
  rectMode(CENTER);
  
  //Dibujar el jugador 
  fill("white")
  circle(mouseX,height-30,25)
  
  //Dibujamos las balas 
  for (let bullet of bullets){
    bullet.y-=2
    circle(bullet.x,bullet.y,10);
    fill("yellow");
  }
  
  //Dibujando los zombies
  for (let zombie of zombies){
    fill("green");
    zombie.y+=2
    rect(zombie.x,zombie.y,10);
    
    for (let bullet of bullets){ 
      if (dist(zombie.x,zombie.y)) {
      zombies.splice(zombies.indexOf(zombie),1) 
      zombies.pop(newZombie) 
      life-=1 } }

    if(life === 0){
      noLoop();
      text("perdiste",200,200);
    }
  }
  
  
  text("life"+life,20,20);
  text("score"+score,70,20);

  
   

  /*Creando la colisión de los balas con los zombies */
  
  for (let zombie of zombies){
    
    for (let bullet of bullets){
      if (dist(zombie.x,zombie.y,bullet.x,bullet.y)<10){
        zombies.splice(zombies.indexOf(zombie),1)
        bullets.splice(bullets.indexOf(bullet),1)
        let newZombie={
     x:random(0,width),
     y:random(-800,0)
     
   }
   zombies.push(newZombie)
        score = score+1;
      }
    }
    
  }
  
}


/*Creando las balas con un objeto json al 
presionar el mouse*/

function mousePressed(){
  let bullet ={
    x:mouseX,
    y: height-30
  };
  
  bullets.push(bullet);
  
}