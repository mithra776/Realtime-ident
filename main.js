function setup() {
  canvas = createCanvas(270 , 270);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet' , modelLoaded);
}

function draw()
{
  image(video , 0 , 0 , 270 , 270 );
  classifier.classify(video , gotResults );
}

function modelLoaded()
{
  console.log("model loaded");
}

function gotResults(error , results)
{
  if(error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);
    document.getElementById("name_of_object").innerHTML = results[0].label;
    document.getElementById("accuracy_of_object").innerHTML = results[0].confidence.toFixed(3);
  }
}