Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

mycam=document.getElementById("camera");

Webcam.attach(mycam);

function take_snapshot()
{
    Webcam.snap(function(data)
    {
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data+"'>";
    })
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fT1OQLzId/model.json", modelloaded);

function modelloaded()
{
    console.log("model is loaded")
}
function check()
{
    image=document.getElementById("capture_image");
    classifier.classify(image, gotresults);
}
function gotresults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_member_name").innerHTML=results[0].label;
        document.getElementById("result_member_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}