const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,575,50,50);
    box2 = new Box(1000,575,50,50);
    box3 = new Box(800,550,50,50);
    box4 = new Box(1000,550,50,50);

    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(900,590);
    pig2 = new Pig(900,540);

    log1 = new Log(900,550,250,PI/2);
    log2 = new Log(900,525,250,PI/2);

    box5 = new Box(900,500,55,55);
    log3 = new Log(850,490,125,PI/4);
    log4 = new Log(950,490,125,-PI/4);

    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}