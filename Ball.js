class Ball{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1
        }
        this.image = loadImage("polygon.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width
        this.height = height
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
       imageMode(CENTER)
       fill("red")
       image(this.image, pos.x, pos.y, this.width, this.height)
      }
}