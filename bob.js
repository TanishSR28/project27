class Bob {
    constructor(x,y){
        var options = {
            isStatic:true,
            // restitution:0.3,
            // friction:0.5,
            // density:1.2
        }
        this.body = Bodies.circle(x,y,40,options);
        this.x = x;
        this.y = y;
        this.r = 40;
        World.add(world,this.body);
    }
    display(){
        var bobpos = this.body.position;

        push();
        translate(bobpos.x, bobpos.y);
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255);
        imageMode(CENTER);
        ellipse(0,0,this.r);
        pop();
    }
}