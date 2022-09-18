const vetorTemp = [18, 20, 25, 30, 28, 3, 5, 4, 90, 8, 7];

function reverterVetor(
  paramVetor) {
  let vetorResposta = [];
  for (let i = paramVetor.length - 1; i >= 0; i--) {
    vetorResposta.push(paramVetor[i]);
  }
  return vetorResposta;
}

function adicionaItem(valor) {
  vetorTemp[vetorTemp.length] = valor;
}

function existeValor(
  valor, 
  vetor) {
  for (
    let i = 0; 
    i < vetor.length; 
    i++) {
    if (valor == vetor[i]) {
      return true;
    }
  }
  return false;
}

console.log(reverterVetor(vetorTemp));
