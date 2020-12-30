class Drop{
    constructor(x,y,r){
var options={
    isStatic:false
}
this.r=r
this.body=Bodies.circle(x,y,r,options);
    }
    update(){
        if(this.body.position.x>800){
            this.body.position.x=random(0,400);
        }
    }
    display(){
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.x,this.body.y,this.r,this.r);
    }
}