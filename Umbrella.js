class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r)
    }
    display(){
       var pos=this.body.position;
        imageMode(CENTER);
        image(umb,pos.x,pos.y,this.r,this.r);
    }
}