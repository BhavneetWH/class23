class Box
{
    constructor(x,y,width,height)
    {
        
         var temp ={ 'restitution':0.8,
                        'friction' :0.3,
                        'density' :1.0
        
        }

        
        this.body=BODIES.rectangle(x,y,width,height,temp);
       this.width=width;
        this.height=height;
        WORLD.add(world,this.body);
    }

      display()
      {
          
             var pos=this.body.position;
             var angle=this.body.angle;

             push();
              translate(pos.x,pos.y);
          rotate(angle); 
           rectMode(CENTER);     
             rect(0,0,this.width,this.height);
             stroke("green");
             strokeWeight(4);
             pop();

      }
};