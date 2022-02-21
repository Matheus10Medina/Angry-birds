const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);
    ground = new Ground(600,height,1200,20)
    pig1= new Pig(810, 320)
    log1= new Log(810, 290, 300, PI/2)
    log2= new Log(810, 250, 300, [PI/2] )

    box3 = new Box(700, 270, 50, 50)
    box4 = new Box(920, 270, 50, 50)
    box5= new Box(810, 230, 50, 50)
    bird1 = new bird(100, 100)
pig2 = new Pig(810, 270)
}
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();

    box3.display();
    box4.display();
    box5.display();
    bird1.display();

}