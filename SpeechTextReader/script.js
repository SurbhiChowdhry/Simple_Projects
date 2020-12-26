const voiceSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');

// init speech synthesis
const message = new SpeechSynthesisUtterance();

// store voices

let voices = [];

function getVoices(){
    voices = speechSynthesis.getVoices();
    voices.forEach( voice => {
        const option = document.createElement('option');

        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;

        voiceSelect.appendChild(option);
    });
}

// set text
function setTextMessage(text) {
    message.text = text;
}

// set voice
function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
}

// speak text
function speakText() {
    speechSynthesis.speak(message);
}

// voice change event

speechSynthesis.addEventListener('voiceschanged', getVoices);

// change voice
voiceSelect.addEventListener('change', setVoice);

// Read text button event
readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value);
    speakText();
})

getVoices();