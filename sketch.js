const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;

var polygon,ground;
var stand1,stand2;
var slingShot,polygonImg;

function preload(){
    //polygonImg=loadImage("polygon.png");
}

function setup(){ 
    createCanvas(900,400);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground();
    polygon=new Polygon(200,450,70);


    stand1= new Stand(380,300,270,10);
    stand2=new Stand(700,200,200,10); 
    //tower 1
    //l1
    block1=new Block(280,275,30,40);
    block2=new Block(310,275,30,40);
    block3=new Block(340,275,30,40);
    block4=new Block(370,275,30,40);
    block5=new Block(400,275,30,40);
    block6=new Block(430,275,30,40);
    block7=new Block(460,275,30,40);
    block8=new Block(490,275,30,40);

    //l2
    block9=new Block(310,235,30,40);
    block10=new Block(340,235,30,40);
    block11=new Block(370,235,30,40);
    block12=new Block(400,235,30,40);
    block13=new Block(430,235,30,40);
    block14=new Block(460,235,30,40);

    //l3
    block15=new Block(340,195,30,40);
    block16=new Block(370,195,30,40);
    block17=new Block(400,195,30,40);
    block18=new Block(430,195,30,40);

    //l4
    block19=new Block(370,155,30,40);
    block20=new Block(400,155,30,40);

    //l5
    block21=new Block(385,155,30,40);
     

    //tower2
    //l1
    blocke1=new Block(640,175,30,40);
    blocke2=new Block(670,175,30,40);
    blocke3=new Block(700,175,30,40);
    blocke4=new Block(730,175,30,40);
    blocke5=new Block(760,175,30,40);

    //l2
    blocke6=new Block(670,135,30,40);
    blocke7=new Block(700,135,30,40);
    blocke8=new Block(730,135,30,40);

    //l3
    blocke9=new Block(700,95,30,40);
    
    slingShot=new SlingShot(this.polygon,{x:200,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

    strokeWeight(2);
    stroke(15);

    stand1.display();
    stand2.display();

    stroke(15);
    fill(0);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();    
    block8.display();

    stroke(15);
    fill("orange");
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    stroke(15);
    fill("purple");
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    stroke(15);
    fill("green");
    block19.display();
    block20.display();

    stroke(15);
    fill("blue");
    block21.display();

    stroke(15);
    fill("red");
    blocke1.display();
    blocke2.display();
    blocke3.display();
    blocke4.display();
    blocke5.display();

    stroke(15);
    fill("yellow");
    blocke6.display();
    blocke7.display();
    blocke8.display();
    
    stroke(15);
    fill("pink");
    blocke9.display();



    text("DRAG THE LINE AND RELEASE TO HIT THE BLOCKS",600,250);
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}