const button1 = document.querySelector('#button1');

let synth = speechSynthesis,
  isSpeaking = true;

button1.addEventListener('click', textToSpeech);

function textToSpeech(button) {
  let textReading = new SpeechSynthesisUtterance(button.target.innerText);
  voice = synth.getVoices()[10];
  textReading.voice = voice;
  synth.speak(textReading);
}
