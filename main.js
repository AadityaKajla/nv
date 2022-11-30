//setup
noseX= 0;
noseY =0;
difference = 0;
rightWristX =0;
leftWristX =0;
function setup(){
    //video
    video = createCapture(VIDEO);
    video.size(550,500);
    //canvas
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    //Pose Net
    poseNet =  ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
// modelLoaded
function modelLoaded(){
  console.log(' pose Net initialised')
}
//draw

//gotposes
function gotPoses(results){
     if(results.length > 0){
        console.log("results");
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+"noseY"+noseY);
         console.log(difference);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log(floor(leftWristX,rightWristX));
     }
}
function draw(){

  background("#030bfc");
  document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";
  fill("#ff0000"); 
  stroke("#ff00ff");
  square(noseX,noseY,difference);
}