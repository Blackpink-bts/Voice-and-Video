var SpeechRecognition =window.webkitSpeechRecognition
var recognition =new SpeechRecognition();
function start(){
document.getElementById("textbox"),innerHTML="";
recognition.start()
}
recognition.onresult=function(event){
console.log(event);
var Context=event.result[0][0].transcript;
console.log(Content);
Document.getElementById("textbox").innerHTML=Content;
}