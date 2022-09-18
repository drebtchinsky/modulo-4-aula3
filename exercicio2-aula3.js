let v = [1, 2, 3, 4, 5];

// function incluirNaPosicao(valor, vetor, posicao) {
//   let vetorResposta = [];
//   //copiar vetor até posição
//   for (let i = 0; i < posicao; i++) {
//     vetorResposta[vetorResposta.length] = vetor[i];
//     // vetorResposta.push(vetor[i]);
//   }

//   //colocar valor na posição
//   vetorResposta[posicao] = valor;
//   //copiar o resto do vetor em posição + 1
//   for (let j = posicao; j < vetor.length; j++) {
//     vetorResposta[vetorResposta.length] = vetor[j];
//   }
//   return vetorResposta;
// }

function incluirNaPosicao(valor, vetor, posicao) {
  for (let i = vetor.length; i > posicao; i--) {
    vetor[i] = vetor[i - 1];
  }
  vetor[posicao] = valor;
  return vetor;
}

v = incluirNaPosicao(55, v, 2);
console.log(v);
