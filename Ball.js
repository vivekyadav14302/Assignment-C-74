class Ball{
    constructor(x, y, radius){
        var options = {
            friction: 1,
            restitution: 0.7,
            density: 0.4
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(RADIUS);
        stroke("white");
        strokeWeight(3);
        fill("black");
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
