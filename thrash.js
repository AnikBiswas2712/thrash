class thrash {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0,
          'density':1.5
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,this.r, options);
     
      
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
	    fill(255)
      strokeWeight(100);
      stroke("blue");
      imageMode(CENTER);
	    image(this.image, 0,0,this.r,this.r)
      pop();
    }
  };
  