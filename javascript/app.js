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
  outputDecoder.innerHTML = `${inputDecoder}`;
}

function decoder() {
  var output = document.querySelector("#textArea").value;
  var outputDecoder = output
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  var textDecoder = document.getElementById("textDecoder");
  textDecoder.innerHTML = `<textarea id="textArea">${outputDecoder}</textarea>`;
}






