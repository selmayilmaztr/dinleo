let voices = [];

function populateVoices() {
  voices = speechSynthesis.getVoices();
  const voiceSelect = document.getElementById("voiceSelect");
  voiceSelect.innerHTML = ""; // Temizle

voices.forEach((voice, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = `${voice.name} (${voice.lang})`;
  voiceSelect.appendChild(option);
 });
} 

speechSynthesis.onvoiceschanged = populateVoices;

function speakText() {
  const text = document.getElementById("text").value;
  const voiceIndex = document.getElementById("voiceSelect").value;
  const utterance = new SpeechSynthesisUtterance(text);

  if (voices[voiceIndex]) {
    utterance.voice = voices[voiceIndex];
  }

  speechSynthesis.speak(utterance);
}

  



