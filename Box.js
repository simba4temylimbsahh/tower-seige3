class Box{
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.5,
            friction: 1,
            density: 1 
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = width;
        World.add(world, this.body);
        this.Visiblity = 255
      }
      display(){
        var pos = this.body.position
        if(this.body.speed<3){
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("cyan")
        rect(0, 0, this.width, this.height)
        pop()
      }
      else{

        World.remove(world,this.body)
        push()
        this.Visiblity = this.Visiblity -5;
        pop()
      }
    }

    score(){
      if(this.Visiblity<0&&this.Visiblity>-1050){
        score++
      }
}
}