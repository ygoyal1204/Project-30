const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground; 
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var blocks1, blocks2, blocks3, blocks4, blocks5, blocks6, blocks7, blocks8, blocks9;
var polygon, polygonImg;
var launcher;

function setup() {
  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, 490, width, 20);
  stand1 = new Ground(490, 400, 250, 20);
  stand2 = new Ground(800, 300, 200, 20);

  block1 = new Block(400, 375);
  block2 = new Block(430, 375);
  block3 = new Block(460, 375);
  block4 = new Block(490, 375);
  block5 = new Block(520, 375);
  block6 = new Block(550, 375);
  block7 = new Block(580, 375);
  block8 = new Block(430, 335);
  block9 = new Block(460, 335);
  block10 = new Block(490, 335);
  block11 = new Block(520, 335);
  block12 = new Block(550, 335);
  block13 = new Block(460, 295);
  block14 = new Block(490, 295);
  block15 = new Block(520, 295);
  block16 = new Block(490, 255);

  blocks1 = new Block(740, 275);
  blocks2 = new Block(770, 275);
  blocks3 = new Block(800, 275);
  blocks4 = new Block(830, 275);
  blocks5 = new Block(860, 275);
  blocks6 = new Block(770, 235);
  blocks7 = new Block(800, 235);
  blocks8 = new Block(830, 235);
  blocks9 = new Block(800, 195);


  polygon = new Polygon(150, 300, 20);
  
  launcher = new Launcher(polygon.body, {x:150, y:300});
}

function draw() {
  background(56,44,44);  
  fill("white");
  textSize(30);
  textAlign(CENTER);
  text("TOWER SEIGE 2", 500, 50);
  textSize(20);
  fill("orange");
  text("Drag and release the Hexagonal Stone to destroy as many Blocks as you can!", 500, 80);
  fill("lightgreen");
  textSize(25);
  text("Press SPACE to get another chance!", 500, 120);
  Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  launcher.display();
  fill("pink");
  blocks9.display();
  polygon.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(polygon.body, {x:150, y: 300});
		launcher.attach(polygon.body);
	}
}