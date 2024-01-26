var SpeechRecognition= window.webkitSpeechRecognition
var recognition= new SpeechRecognition()
var textbox= document.getElementById("textbox")
function start(){
    textbox.innerHTML= ""
    recognition.start()
}

recognition.onresult= function(event){
    var content= event.results[0][0].transcript
    textbox.innerHTML= content
    if (content=="tire as minhas selfies"){
        speak()
    }
}
function speak(){
    var synth= window.speechSynthesis
    speakdata= "Tirando suas selfies em 5 segundos"
    var utterthis= new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
    Webcam.attach(camera)
    setTimeout(function(){
        imgid= "selfie1"
        takeaselfie()
        save()
    },5000)
    setTimeout(function(){
        imgid= "selfie2"
        takeaselfie()
        save()
    },10000)
setTimeout(function(){
    imgid= "selfie3"
    takeaselfie()
    save()
},15000)
}
camera= document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 250,
    image_format:"png",
    png_quality: 90
})
function takeaselfie(){
    Webcam.snap(function(data_uri){
        if (imgid=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1"src="' + data_uri +'"/>'
        }
        if (imgid=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2"src="' + data_uri +'"/>'
        }
        if (imgid=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3"src="' + data_uri +'"/>'
        }
    })
}
function save(){
    link= document.getElementById("link")
    image= document.getElementById("selfie1").src
    link.href= image
    link.click()
}