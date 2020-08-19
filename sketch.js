

const ENGINE =Matter.Engine;   
const WORLD=Matter.World;       
const BODIES=Matter.Bodies;

var object,ground;
var ball;
var box1 ;    
var g1 ;
var pig1;
function setup()
{
   var canvas = createCanvas(400,400);
    e1=ENGINE.create();   
    world =e1.world;         

    //var object_options={isStatic:true} 
   //object=BODIES.rectangle(200,100,50,50,);
   // WORLD.add(world,object);   //we need to add the object in the world

    box1= new Box(200,300,50,50);
      box2 =new Box(240,100,50,100);
      
    var ground_options={isStatic:true} 
    ground =BODIES.rectangle(200,390,400,20, ground_options);
    WORLD.add(world,ground);

    g1 = new Ground(200 ,390,400 ,20);        //ground object
    pig1 =new Pig(200,200);

     //console.log(object);
     
    //var temp= {restitution :1,density:1 ,mass :3};
    //ball=BODIES.circle(100,100,20 ,temp);
    //WORLD.add(world,ball);

    
}
function draw()
{
    background(0);
    //rectMode(CENTER);  //fill("white");
    ENGINE.update(e1);

    
    

    box1.display();     
    box2.display();
      
     g1.display();  pig1.display();
    // box2.depth=g1.depth;
     //rect(ground.position.x ,ground.position.y,400,20);  

  // ellipseMode(RADIUS);
     //ellipse(ball.position.x,ball.position.y,20,20);   //P5 doesnt use circle it uses ellipse.
     
}
   