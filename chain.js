  class Chain{
    constructor(bodyA,PointB){
        var options={
            bodyA:bodyA,
            bodyB:PointB,
            stiffness:0.4,
            lenth:10
        }
        this.PointB = PointB;
        this.Chain = Constraint.create(options);
        World.add(world,this.Chain);
    
    }
    display(){
        var PointA = this.Chain.bodyA.position;
        var PointB  = this.PointB;
        strokeWeight(4);
        line(PointA.x,PointA.y,PointB.x,PointB.y);
    }
    }