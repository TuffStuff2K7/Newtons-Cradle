const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(300,500,50);
	bob2 = new Bob(350,500,50);
	bob3 = new Bob(400,500,50);
	bob4 = new Bob(450,500,50);
	bob5 = new Bob(500,500,50);

	string1 = new Suspender(bob1.body,{x:300,y:200});
	string2 = new Suspender(bob2.body,{x:350,y:200});
	string3 = new Suspender(bob3.body,{x:400,y:200});
	string4 = new Suspender(bob4.body,{x:450,y:200});
	string5 = new Suspender(bob5.body,{x:500,y:200});

	Engine.run(engine);  
}

function draw() {
	rectMode(CENTER);
	background("#eeeeee");

	rect(400,200,400,20);

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0});
	}
}