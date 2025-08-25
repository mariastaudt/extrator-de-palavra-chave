const botaMostraPalavras = document.querySelector("#botao-palavrachave*):
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);
function mostraPalavrasChave(){
const texto = document querySelector (*#entrada-de-texto").value;
const campoResultado = document.querySelector("#resultado-palavrachave);
const palavrasChave = processaTexto(texto):
campoResultado.textContent = palavrasChave.join(",");
}
fuction processaTexto(texto){
 let palavra = texto.split(/\P{L}+/u);

return palavras;
}
