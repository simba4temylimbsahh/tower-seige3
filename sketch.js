const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var score = 0

function setup() {
	createCanvas(900, 400);
	engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(450, 390, 900, 20)  

    stand1 = new Ground(390, 300, 250, 10)
    stand2 = new Ground(700, 200, 200, 10)

    Box1 = new Box(300,275,30,40); 
    Box2 = new Box(330,275,30,40); 
    Box3 = new Box(360,275,30,40); 
    Box4 = new Box(390,275,30,40); 
    Box5 = new Box(420,275,30,40); 
    Box6 = new Box(450,275,30,40); 
    Box7 = new Box(480,275,30,40); 
    Box8 = new Box(330,235,30,40); 
    Box9 = new Box(360,235,30,40); 
    Box10 = new Box(390,235,30,40); 
    Box11 = new Box(420,235,30,40); 
    Box12 = new Box(450,235,30,40); 
    Box13 = new Box(360,195,30,40); 
    Box14 = new Box(390,195,30,40); 
    Box15 = new Box(420,195,30,40); 
    Box16 = new Box(390,155,30,40); 
    Box17 = new Box(640,175,30,40); 
    Box18 = new Box(670,175,30,40); 
    Box19 = new Box(700,175,30,40); 
    Box20 = new Box(730,175,30,40); 
    Box21 = new Box(760,175,30,40); 
    Box22 = new Box(670,135,30,40); 
    Box23 = new Box(700,135,30,40); 
    Box24 = new Box(730,135,30,40); 
    Box25 = new Box(700,95,30,40);

    ball = new Ball(100, 100, 50, 50)
    slingshot = new Slingshot(ball.body, {x:150, y:100})
    }

function draw(){
    background(0);
    Engine.update(engine);

    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();
    Box8.display();
    Box9.display();
    Box10.display();
    Box11.display();
    Box12.display();
    Box13.display();
    Box14.display();
    Box15.display();
    Box16.display();
    Box17.display();
    Box18.display();
    Box19.display();
    Box20.display();
    Box21.display();
    Box22.display();
    Box23.display();
    Box24.display();
    Box25.display();

    Box1.score();
    Box2.score();
    Box3.score();
    Box4.score();
    Box5.score();
    Box6.score();
    Box7.score();
    Box8.score();
    Box9.score();
    Box10.score();
    Box11.score();
    Box12.score();
    Box13.score();
    Box14.score();
    Box15.score();
    Box16.score();
    Box17.score();
    Box18.score();
    Box19.score();
    Box20.score();
    Box21.score();
    Box22.score();
    Box23.score();
    Box24.score();
    Box25.score();

    ball.display();
    slingshot.display();
    
    textSize(20)
    fill("red")
    text("Score = " + score, 50, 50)
    

}


function mouseDragged(){

Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})

}

function mouseReleased(){

slingshot.fly()

}

function keyPressed(){
     if(keyCode === 32){
         slingshot.attach(ball.body)
     }
}