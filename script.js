//de texo a voz//

function textoavoz() {
    let texto = document.getElementById("textoavoz").value
    let utterance = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(utterance);
}

function limpiarInput() {
    document.getElementById('textoavoz').value = '';
  }

  document.getElementById("blue").addEventListener("click", function() {
    const input = document.getElementById("textoavoz");
    navigator.clipboard.readText().then(
      function(texto) {
        input.value = texto;
      }
    );
  });


//de texto a voz//

function vozatexto() {
    const recognition = new webkitSpeechRecognition();
    recognition.start();
    recognition.onresult = function(event) {
        document.getElementById("vozatexto").innerText = event.results[0][0].transcript;
    }
}

recognition.onspeechend = () => {
  recognition.stop();
  console.log("Speech recognition has stopped.");
};