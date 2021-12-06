song_legend=""; 
song_potter=""; 
leftWristX= 0; 
leftWristY= 0; 
rightWristX= 0; 
rightWristY= 0; 
leftWristScore=0;
rightWristScore=0;
song_hold="";

function preload() { 
song= loadSound("Legends_song1.mp3"); 
song1= loadSound("Harry_Potter.mp3") 
} 

function setup() { 
canvas= createCanvas(600,500); 
canvas.position(620,220); 

video= createCapture(VIDEO); 
video.hide(); 
posenet= ml5.poseNet(video, gotModel); 
posenet.on('pose', gotPoses); } 

function gotModel() {
console.log("Reached the end!"); } 

function gotPoses(result) { 

console.log(result);

if (result.length > 0) {
 leftWristX= result[0].pose.leftWrist.x; 
 leftWristY= result[0].pose.leftWrist.x; 
 rightWristX= result[0].pose.rightWrist.y; 
 rightWristY= result[0].pose.rightWrist.y; 

 leftWristScore= result[0].pose.keypoints[9].score;
rightWristScore= result[0].pose.keypoints[10].score;
} 
}
function draw() { 
    image(video, 0, 0, 600, 500); 

song.isPlaying();
song_hold= song.status();   

if(rightWristScore>0.2) {
circle(leftWristX, leftWristY, 20)
song.stop();
}

if (song_hold==false) {
song.play();
song_potter=song1.isPlaying();
}
}