var canvas=new fabric.Canvas('myCanvas');

var block_img_width=30;
var block_img_height=30;
var player_x=10;
var player_y=10;

var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y, 
        left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({
        top:player_y, 
        left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keyPress=e.keyCode;
    console.log(keyPress);
    if(e.shiftKey == true && keyPress=='80'){
        console.log("Shift and p are getting pressed together");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey == true && keyPress=='77'){
        console.log("Shift and m are getting pressed together");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keyPress=='67'){
        new_img('cloud.jpg');
        console.log("c");
    }
    if(keyPress=='68'){
        new_img('dark_green.png');
        console.log("d");
    }
    if(keyPress=='71'){
        new_img('ground.png');
        console.log("g");
    }
    if(keyPress=='76'){
        new_img('light_green.png');
        console.log("l");
    }
    if(keyPress=='82'){
        new_img('roof.jpg');
        console.log("r");
    }
    if(keyPress=='84'){
        new_img('trunk.jpg');
        console.log("t");
    }
    if(keyPress=='85'){
        new_img('unique.png');
        console.log("u");
    }
    if(keyPress=='87'){
        new_img('wall.jpg');
        console.log("w");
    }
    if(keyPress=='89'){
        new_img('yellow_wall.png');
        console.log("y");
    }
    if(keyPress=='37'){
        left();
        console.log("left");
    }
    if(keyPress=='38'){
        up();
        console.log("up");
    } 
    if(keyPress=='39'){
        right();
        console.log("right");
    }
    if(keyPress=='40'){
        down();
        console.log("down");
    }
}

function up(){
    if (player_y>0){
        player_y=player_y-block_img_height;
        console.log("The block image height ="+block_img_height);
        console.log("When the up arrow key is pressed ,player_x="+player_x+" Player_y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (player_y<360){
        player_y=player_y+block_img_height;
        console.log("The block image height="+block_img_height);
        console.log("When the down arrow key is pressed, Player_x="+player_x+" Player_y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x<850){
        player_x=player_x+block_img_width;
        console.log("The block image width="+block_img_width);
        console.log("When the right arrow key is pressed, Player_x="+player_x+" Player_y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>0){
        player_x=player_x-block_img_width;
        console.log("The block image width="+block_img_width);
        console.log("When the left arrow key is pressed, Player_x="+player_x+" Player_y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}