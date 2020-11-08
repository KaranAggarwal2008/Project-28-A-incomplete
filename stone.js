class Stone{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 20;
        this.Body = Bodies.circle(this.x,this.y,this.r);
        this.image=loadImage("Plucking mangoes/stone.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.r,this.r);
    }
}