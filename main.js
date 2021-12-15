nosex = 0;
nosey = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/QxsMFG4g/moustache-PNG18.png');
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is initialized');
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        nosex = results[0].pose.nose.x-27.5;
        nosey = results[0].pose.nose.y-10;
        console.log("nose x = " + nosex);
        console.log("nose y = " + nosey);
    }
}

function draw() {
    image(video,0,0,300,300);
    image(clown_nose, nosex, nosey, 60,60)    
}
function take_snapshot() {
    save('I-have-a-clown-nose.jpg');
}