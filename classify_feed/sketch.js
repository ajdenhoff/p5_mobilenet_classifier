let mobilenet
let label = ''
let confidence


function modelReady() {
  console.log('Model is ready!!!')
  mobilenet.predict(gotResults)
}

function gotResults(error, results) {
  if (error) {
    console.error(error)
  } else {
    //console.log(results)
    
    label = results[0].label
    confidence = results[0].confidence
    //console.log(label)
    // TURN ON TO GET LABELS
    //mobilenet.predict(gotResults)
    
  }
}

function setup() {
  createCanvas(640,520)
  video = createCapture(VIDEO)
  video.hide()
  background(0)
  mobilenet = ml5.imageClassifier("MobileNet", video, modelReady)
}

function draw() {
  background(0)
  image(video, 0, 0)
  fill(255)
  textSize(32)
  text(label, 10, height-10)
  //createP(label)
  //createP(confidence)
}



/*
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
*/