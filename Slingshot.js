class Slingshot{

constructor(bodyX, pointY){

var options = {

bodyA: bodyX,
pointB: pointY,
stiffness: 0.04,
length: 10
}

this.pointB = pointY
this.connector = Constraint.create(options)
World.add(world, this.connector)
}

fly(){
this.connector.bodyA = null
}

attach(body){
    this.connector.bodyA = body
}

display(){
if(this.connector.bodyA){
    var pointA = this.connector.bodyA.position
    var pointB = this.pointB
    stroke("white")
    strokeWeight(7)
    line(pointA.x, pointA.y, pointB.x, pointB.y)
}
}
}