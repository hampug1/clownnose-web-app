noseX = 0;
noseY = 0;

function preload(){
}
 
function setup(){
 canvas = createCanvas(350, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
    
function draw(){
 image(video, 0, 0, 350, 300);
 fill(255, 0, 0);
 stroke(255, 0, 0)
 circle(noseX, noseY, 20);
}

function takeSnapshot(){
 save('myFilterImage.png');
}

function modelLoaded(){
 console.log("PoseNet Is Initialized")
}

function gotPoses(results){
if(results.length > 0){
 console.log(results);
 noseX = results[0].pose.nose.x;
 noseY = results[0].pose.nose.y;
 console.log("nose x = " + noseX);
 console.log("nose y = " + noseY);
 
 console.log("lefteye x = " + results[0].pose.leftEye.x);
 console.log("lefteye y = " + results[0].pose.leftEye.y);
 
 console.log("eye x = " + results[0].pose.rightEye.x);
 console.log("eye y = " + results[0].pose.rightEye.y);
}
}