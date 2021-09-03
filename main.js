SpeechRecognition = window.webkitSpeechRecognition;

var recognition =  new SpeechRecognition();

function start101(){
    document.getElementById("text_of_voice").innerHTML="";
    recognition.start();

    }

recognition.onresult = function run (event) {
    console.log(event);

    var content = event.results[0] [0].transcript;
    console.log(content);

    document.getElementById("text_of_voice").innerHTML=content;
    speak();
}

Webcam.set({
    width:320,
    height:240,
    image_format:"png",
    png_quality:90
});

webcam_of_user = document.getElementById("camera");

function speak(){
    var synth = window.speechSynthesis;
    speech = "Taking your selfie in 5 seconds";
    var speaking = new SpeechSynthesisUtterance(speech);
    synth.speak(speaking);
    Webcam.attach(webcam_of_user);
}

