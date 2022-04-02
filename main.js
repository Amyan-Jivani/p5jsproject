function preload(){

}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.position(100,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 100, 80, 275, 375);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    circle(50, 450, 80);
    circle(550, 450, 80);
    circle(550, 50, 80);
fill(0, 255, 0);
stroke(0, 255, 0);
    rect(50, 50, 500, 20);
    rect(50, 440, 500, 20);
    rect(50, 50, 20, 400);
    rect(540, 50, 20, 410);
}

function takeSnapshot(){
    video.save();
}