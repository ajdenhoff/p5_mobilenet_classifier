let mobilenet

let img_name = 'chihuahua.jpg'
let img
let p

let label = ''
let confidence = 0

function modelReady() {
  // once the model is ready, assign a label
  console.log('Model is ready!!!')
  mobilenet.predict(img, gotResults)
}

function gotResults(error, results) {
  if (error) {
    console.error(error)
  } else {
    console.log(results)
    // assign a label and confidence percentage

    label = results[0].label
    confidence = results[0].confidence
    console.log(label)
    

    fill(0)
    textSize(64)
    outputString = "I am " + (confidence*100).toFixed(2) + "% sure this is a " + label

    removeElements()
    p = createP(outputString)
    input = createFileInput(handleFile);
    
    
    
    p.style('font-size', '32px');
    
  }
}

function imageReady() {
  image(img, 0, 0, width, height)
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    modelReady()
    img.hide();
  } else {
    img = null;
  }
}

function setup() {
  createCanvas(640,480)
  input = createFileInput(handleFile);
  input.position(0, 0);
  //img = createImg(img_name, imageReady);
  //img.hide()

  background(0)
  mobilenet = ml5.imageClassifier("MobileNet", modelReady)
}

function draw() {
  if (img) {
    image(img, 0, 0, width, height);
    gotResults;
  }
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