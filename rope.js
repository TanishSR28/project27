class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        // imageMode(CENTER);
        // image(this.sling1,200,20);
        // image(this.sling2,150,20);
        // // image(this.sling3,200,20);
        // if(this.sling.bodyA){
        //     var body1 = this.sling.bodyA.position;
        //     var pointB = this.pointB;
        //     strokeWeight(4);
        //     line(body1.x, body1.y, pointB.x, pointB.y);
        // }
}