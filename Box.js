class box {
  constructor(x, y){

   var options={
       'restitution': 0.4,
       //'isStatic': true
   }

    this.body=Bodies.rectangle(x, y, 30, 40, options);
    this.x=x;
    this.y=y;
    this.width= 30;
    this.height= 40;
    World.add(world, this.body);
  }
display(){
var pos=this.body.position;
var angle=this.body.angle;
push()
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("red")
stroke("blue")
strokeWeight(4);
rect(0,0,this.width,this.height);
pop();
}
};
