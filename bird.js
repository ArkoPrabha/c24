class Bird{
    constructor(x,y){
        
        var options={
            restitution:0.8,friction:1,density:1.5
        }
        this.width=50
        this.height=50
        this.body=Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        pos.x=mouseX
        pos.y=mouseY
        push()
        fill("yellow")
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}