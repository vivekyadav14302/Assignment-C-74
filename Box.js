class Box{
    constructor(x, y){
        var options = {
            friction: 1,
            restitution: 0.5,
            density: 1.5
        }
        this.body = Bodies.rectangle(x,y,60,60,options);
        this.width = 60;
        this.height = 60;
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("violet");
        strokeWeight(3);
        stroke("black");
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}