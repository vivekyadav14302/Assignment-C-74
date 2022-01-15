class Plank{
    constructor(x, y){
        var options = {
            friction: 1,
            restitution: 0.8,
            density: 0.5
        }
        this.body = Bodies.rectangle(x,y,100,25,options);
        this.width = 100;
        this.height = 25;
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("red");
        strokeWeight(3);
        stroke("#DF711B");
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
