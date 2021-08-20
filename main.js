objects = [];
 


 function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
objectDetector = ml5.objectDetector('cocossd' , modelLoaded) ;
document.getElementById("status").innerHTML = "status : Detecting Objects ";
}

img = "";
status = "";
function preload(){
    img = loadImage()
}

function draw() {
    image(video, 0, 0, 380, 380);

    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotResult);
        for(i = 0; i<objects.length; i++)
            fill(r,g,b);
            
            document.getElementById("status").innerHTML = "status : object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects   Detected:" + objects.length;
            nofill();
            stroke(r,g,b);
            rect (objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }

 function modelLoaded(){
     console.log("Model Loaded !")
     status = true;
     objectDetector.detect(video, gotResult);
 }
 
 function gotResult(error,results){
 if(error){
     console.error(error);
 }
 
     console.log(results);
     objects = results; 
 }
