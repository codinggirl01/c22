class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.cannon_image=loadImage("assets/canon.png")
    this.cannon_Base=loadImage("assets/cannonBase.png")
    
  }
  display(){
    //CODE TO CREATE CANNON TOP
      push()
      imageMode(CENTER)
      image(this.cannon_image,this.x,this.y,this.width,this.height,this.angle)
      pop();


      //CODE TO CREATE CANNON BOTTOM
      image(this.cannon_Base,70,20,200,200)
      noFill()

  }
}
