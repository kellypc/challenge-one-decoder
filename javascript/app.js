// - chamar a função para criptografar
// - A letra "e" é convertida para "enter"
// - A letra "i" é convertida para "imes"
// - A letra "a" é convertida para "ai"
// - A letra "o" é convertida para "ober"
// - A letra "u" é convertida para "ufat"

function encoder() {
  var input = document.querySelector("#contentInput").value;
  var inputDecoder = input
                    .replace(/e/g, 'enter')
                    .replace(/i/g, 'imes')
                    .replace(/a/g, 'ai')
                    .replace(/o/g, 'ober')
                    .replace(/u/g, 'ufat');


  var outputDecoder = document.getElementById("textDecoder");
  outputDecoder.innerHTML = `<textarea>${inputDecoder}</textarea>`;
}






