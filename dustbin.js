class Dustbin{
    constructor(){
      
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:0.3
    
        }
       
            this.body=Bodies.rectangle(650,550,170,170,options);
            this.width=170
            this.height=170
            World.add(world,this.body);
                this.image=loadImage("dustbingreen.png");

      
   
    }
   display(){
       push ();
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       imageMode (CENTER);
       image (this.image,0,0,170,170);
       pop ();
   }

}
