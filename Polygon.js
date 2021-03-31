class Polygon{
    constructor(x,y,radius){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.image=loadImage("polygon.png");
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(this.x,this.y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}