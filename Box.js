class Box {
      constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255
    World.add(world, this.body);
  }
  display(){
    fill("blue");

    var angle = this.body.angle;

    rectMode(CENTER);

    if(this.body.speed < 3){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      
      rect( 0, 0, this.width, this.height);
      pop();
    }

    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255, this.visibility);
      pop();
      

    }
  }

  score(){  
    if(this.visibility > 0 && this.visibility < 255)
    score++;
  }
};
