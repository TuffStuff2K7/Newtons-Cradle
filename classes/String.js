class Suspender{
    
    constructor(body,point){
        
        var options={
            bodyA:body,
            pointB:point   
        }
    
        this.Suspender = Constraint.create(options);
        World.add(world, this.Suspender);
    
    }
    
    display(){
        var pointA = this.Suspender.bodyA.position;
        var pointB = this.Suspender.pointB;

        stroke("black");
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    
    }
        
}