class Tree{
    constructor(){
        this.x = 500;
        this.y = 500;
        this.width = 200;
        this.height = 500;
        this.image = loadImage("Plucking mangoes/tree.png");
        this.Body = Bodies.rectangle(this.x,this.y,this.width,this.height);
    }
    display(){
        //var treePOS = this.body.position;
       imageMode(CENTER)
       image(this.image,this.x,this.y,this.width,this.height);

    }
}