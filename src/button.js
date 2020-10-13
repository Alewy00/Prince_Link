const sound = require("./sound");
const Game = require("./game")
function Button(game, w, h, x, y, blocks, color) {
    this.game = game;
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.blocks = blocks;
    this.color = color;
    mySound = new sound('../dist/audio/timer.mp3');
    countdown = new sound("../dist/audio/FinalCountDownTrimmed.mp3")
    this.timer.bind(this);
}

Button.prototype.draw = function draw(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    
}

Button.prototype.timer = function timer(block){
    mySound.play();
    setTimeout(function(){ 
        block.tile = !block.tile 
      
    }, 10000);
}


Button.prototype.maze = function maze(block){
    countdown.play();
    this.game.drawBlock(200, 20, 360, 490, "rgba(245, 229, 27, 1)", false)
    this.game.drawBlock(400, 20, 260, 400, "rgba(245, 229, 27, 1)", false)
    this.game.drawBlock(20, 100, 550, 490, "rgba(245, 229, 27, 1)", false)
    this.game.drawBlock(200, 20, 550, 570, "rgba(245, 229, 27, 1)", false)
    this.game.drawBlock(20, 100, 650, 400, "rgba(245, 229, 27, 1)", false)
    this.game.drawBlock(20, 190, 730, 400, "rgba(245, 229, 27, 1)", false)
    this.game.drawBlock(200, 20, 730, 400, "rgba(245, 229, 27, 1)", false)
    this.game.drawBlock(20, 140, 910, 400, "rgba(245, 229, 27, 1)", false)
    this.game.drawBlock(20, 60, 260, 340, "rgba(245, 229, 27, 1)", false)
    this.game.drawButton(35, 35, 480 ,530, blocks,"rgba(245, 229, 27, 1)")
    // bottom orange button
    this.game.drawButton(35, 35, 760 ,430, blocks,"rgba(248, 148, 6, 1)")
    // bottom purple button
    this.game.drawButton(35, 35, 290 ,550, blocks,"rgba(140, 20, 252, 1)")
    // bottom pink
    this.game.drawBlock(20, 100, 260, 490, "rgb(255,20,147)", true)
    this.game.drawBlock(20, 100, 340, 490, "rgb(255,20,147)", true)
    this.game.drawBlock(100, 20, 260, 490, "rgb(255,20,147)", true)

    setTimeout(function(){ 
        block.tile = !block.tile 
    }, 50000);
}

Button.prototype.collideX = function collideX(mouse){
    // console.log(mouse)
    button = this;
    const blockLeft = this.x 
    const widthLeft = this.x + this.width
    const blockUp = this.y 
    const color = this.color
    const widthUp = this.y + this.height
    const avg = widthLeft + blockLeft
    const mouseSizeX = mouse.x + mouse.width
    const mouseSizeY = mouse.y + mouse.height
    console.log(mouseSizeX)
    console.log(blockLeft)
    // console.log(mouseSizeX)

    // console.log(mouseSizeY)
    if ((mouseSizeX - 10  > blockLeft && mouseSizeX -10  < widthLeft ) &&
    (mouseSizeY + 20 > blockUp && mouseSizeY - 20 < widthUp )) {
        console.log("button pressed")
        blocks.forEach(function(block){
            console.log(color)
            console.log(block.color)
            if(block.color == color){
                console.log(block.tile)
                block.tile = !block.tile
                if(block.color == "rgb(50,205,50)" ){
                    button.timer(block);
                }
                if(block.color == "rgba(140, 20, 252, 1)"){
                    button.maze(block);
                }
            }
            // obj.collideX(mouse);
        })
       return true
    }else{
        // console.log("return false")
        return false
    }
}

module.exports = Button;