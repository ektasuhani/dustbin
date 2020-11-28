class Paper{
    constructor(){
      
        var options={
            restitution:0.3,
            friction:0.5,
            density:0.3
    
        }
       
            this.body=Bodies.circle(200,200,70,options);
            this.radius=70
            World.add(world,this.body);
                this.image=loadImage("paper.png");

      
   
    }
   display(){
       push ();
      // translate(this.body.position.x,this.body.position.y);
      // rotate(this.body.angle);
       imageMode (RADIUS);
       image (this.image,this.body.position.x,this.body.position.y,70,70);
       pop ();
   }

}