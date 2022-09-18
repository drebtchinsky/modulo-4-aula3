let vetor = [1, 2, 3, 4, 5];

function incluirNaPrimeiraPosicao(valor, paramVetor) {
  let vetorResposta = [];
  vetorResposta.push(valor);
  for(
    let i = 0;//declarar variável com o valor inicial
    i<paramVetor.length;//condição de repetição
    i++//incremento da variável
  ){
    vetorResposta[vetorResposta.length] = paramVetor[i];
  }
  //faça o exercício aqui!!!
  return vetorResposta;
}
//vetor.push(valor)

vetor = incluirNaPrimeiraPosicao(55, vetor);
console.log(vetor);
