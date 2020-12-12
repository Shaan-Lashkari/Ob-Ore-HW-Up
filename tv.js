
img = "";
status = "";
function preload(){
    img = loadImage("TV-Object.png");
} 
function setup(){
    canvas = createCanvas(700,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    textSize(17);
}
function modelLoaded(){
    status = true;
    console.log("modelLoaded == true ; /n console.log(...)");
    objectDetector.detect(img,gotResults);
}
function gotResults(error, results){
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}
function draw(){
    image(img, 0, 0, 700, 500);
}