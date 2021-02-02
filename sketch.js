const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  

    box1=new Box(320, 270, 30, 40);
    box2=new Box(310, 270, 30, 40);
    box3=new Box(300, 270, 30, 40);
    box4=new Box(290, 270, 30, 40);
    box5=new Box(305, 250, 30, 40);
    box6=new Box(330, 270, 30, 40);
    box7=new Box(340, 270, 30, 40);
    box8=new Box(315, 250, 30, 40);
    box9=new Box(325, 250, 30, 40);
    box10=new Box(335, 250, 30, 40);
    box11=new Box(295, 250, 30, 40);
    box12=new Box(300, 210, 30, 40);
    box13=new Box(300, 230, 30, 40);
    box14=new Box(310, 230, 30, 40);
    box15=new Box(320, 230, 30, 40)
    box16=new Box(330, 230, 30, 40);
    box17=new Box(330, 210, 30, 40);
    box18=new Box(320, 210, 30, 40);
    box19=new Box(315, 190, 30, 40);
    box20=new Box(620, 170, 30, 40);
    box21=new Box(600, 170, 30, 40);
    box22=new Box(610, 170, 30, 40);
    box23=new Box(630, 170, 30, 40);
    box24=new Box(590, 170, 30, 40);
    box25=new Box(605, 150, 30, 40);
    box26=new Box(615, 150, 30, 40);
    box27=new Box(595, 150, 30, 40);
    box28=new Box(625, 150, 30, 40);
    box29=new Box(610, 130, 30, 40);
    box30=new Box(620, 130, 30, 40);
    box31=new Box(600, 130, 30, 40);
    box32=new Box(610, 110, 30, 40);







    polygon = new Polygon(70,250);
    ground1 = new Ground(600,400,1200,20);
    ground2 = new Ground(320,290,200,10);
    ground3 = new Ground(620,190,200,10);
    slingshot = new SlingShot(polygon.body,{x:70, y:250});
    
}

function draw(){
    background(2000);
    Engine.update(engine);
    strokeWeight(4);
   
    ground1.display();
    ground2.display();
    ground3.display();
    polygon.display();
    slingshot.display();  
    
    
  
    box1.display(); 
    box2.display(); 
    box3.display(); 
    box4.display(); 
    box5.display(); 
    box6.display(); 

    box7.display(); 
    box8.display(); 
    box9.display(); 
    box10.display(); 
    box11.display(); 
    box12.display(); 
    box13.display(); 
    box14.display(); 
    box15.display(); 
    box16.display(); 
    box17.display(); 
    box18.display(); 
    box19.display(); 
    box20.display(); 
    box21.display(); 
    box22.display(); 
    box23.display(); 
    box24.display(); 
    box25.display(); 
    box26.display(); 
    box27.display(); 
    box28.display(); 
    box29.display(); 
    box30.display(); 
    box31.display(); 
    box32.display(); 
      textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}