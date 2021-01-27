const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground

function preload() {
    
}

function setup(){
createCanvas(1600,800)

    engine = Engine.create();
    world = engine.world;
ground = new Ground()

}

function draw(){
    background("black");
    rectMode(CENTER);
    Engine.update(engine);



    drawSprites()
}
