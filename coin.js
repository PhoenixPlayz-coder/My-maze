class coin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.image = loadImage("GameCoin.png");
    }

    display(){
        image(this.image,this.x,this.y,this.width,this.height);
    }
}