var background_image, cat_image1, mouse_image1, cat_animation, mouse_animation, cat_finalImg, mouse_finalImg; 
var garden, cat, mouse; 

function preload() {

    background_image = loadImage("images/garden.png");
    cat_image1 = loadImage("images/cat1.png"); 
    mouse_image1 = loadImage("images/mouse1.png"); 

    cat_animation = loadAnimation("images/cat2.png","images/cat3.png"); 
    mouse_animation = loadAnimation("images/mouse2.png","images/mouse3.png"); 

    cat_finalImg = loadAnimation("images/cat4.png"); 
    mouse_finalImg = loadAnimation("images/mouse4.png"); 

}

function setup(){
    createCanvas(975,705);

    garden = createSprite(487.5,352.5,50,50); 
    garden.addImage(background_image);
    
    cat = createSprite(865,585,25,25); 
    cat.addImage(cat_image1);
    cat.scale = 0.15;

    mouse = createSprite(140,585,25,25);
    mouse.addImage(mouse_image1); 
    mouse.scale = 0.12; 

}

function draw() {

    background(0);
    text(mouseX +',' + mouseY, 100, 45);
    
    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX = 0; 
        cat.addAnimation("cat_stop",cat_finalImg); 
        cat.changeAnimation("cat_stop"); 
        cat.x=220

        mouse.addAnimation("mouse_stop",mouse_finalImg); 
        mouse.changeAnimation("mouse_stop");
    }

    drawSprites();

}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("cat_moving",cat_animation); 
        cat.changeAnimation("cat_moving");

        mouse.addAnimation("mouse_teasing",mouse_animation); 
        mouse.changeAnimation("mouse_teasing"); 
    }

}
