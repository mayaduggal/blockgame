class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibilty=255;
  }
  display(){
    if(this.body.speed<2){
    super.display();
    var pos =this.body.position;
    rectMode(CENTER);
    strokeWeight(2);
    fill(255, 201, 210);
    rect(pos.x, pos.y, this.width, this.height);
    }else{
      World.remove(world, this.body)
      push();
      this.visibilty=this.visibilty-55;
      tint(255, this.visibilty);
      pop();
    
    }}}