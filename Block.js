class Block{
    constructor(x, y, width, height){
        var options = {
            isStatic:false,
            
         
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
      
        
        World.add(world, this.body);
    }

  display() {
    if(this.body.speed < 3){
       
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         pop();
       }
  
}
}