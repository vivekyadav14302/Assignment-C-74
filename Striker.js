class Striker{
    constructor(x, y){
        var options = {
            friction: 1,
            restitution: 0.5,
            density: 1.5
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("orange");
        strokeWeight(3);
        stroke("red");
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
