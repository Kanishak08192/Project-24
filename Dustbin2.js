class Dustbin2{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':1.2,
            'friction':1.0,
            'density':1.0,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin2.png");
        World.add(world, this.body);
      }
     
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
        pop();
        
      }
}