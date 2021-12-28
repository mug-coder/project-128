song="";
song_2="";

leftWristx=0;
leftWristy=0;

rightWristx=0;
rightWristy=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses); 
}

function draw(){
    image(video,0,0,600,500);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("leftWristx= "+ leftWristx +" "+ "leftWristy= " + leftWristy);
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("rightWrisx=  "+ rightWristx +" "+ "rightWristy= " + rightWristy);
    }
}