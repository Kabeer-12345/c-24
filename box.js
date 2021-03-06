class Box{
    constructor(x,y,width,height){
        var box_options = {
            restitution : 1.0
          };
          this.body = Bodies.rectangle(x,y,width,height,box_options);
          this.width = width;
          this.height = height;
          World.add(world,this.body)
    }

    display(){

        push ();
        // translate the axis to the center of the rect.
        translate (this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);

        fill("red");
        rectMode(CENTER) ;
        rect(0,0,this.width,this.height);


        // rect(100,200,10,10);
        pop ();
    }
}