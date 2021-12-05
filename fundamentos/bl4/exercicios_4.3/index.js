// let n=10
// let contador=1
// for (let i=1; i<=n; i+=1){
//     contador*=i;
// }
// console.log(contador)


// BONUS

//  1- Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n:

// let n = 5;
// let estrela = '*';
// let linha = '';
// q nem em situacao q vc tem q somar os valores d array, soh q array ele soma os numeros por ser tipo numerico, com string ele concatena, entao vc cria uma variável vazia p guardar as estrelas, e como é quadrado, soh replicar linha dps
// for (let i = 0; i < n; i++) {
//   linha = linha + estrela;
// };
// for (let i = 0; i < n; i++) {
//   console.log(linha);
// };

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base:

// let n=5;
// let espaco="";
// let estrela= "*"

// for (let i = 1; i <=n; i++) {
//    console.log(espaco+=estrela);
// }
// OU
// let n=5;
// let espaco="";
// let estrela= "*"
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j<=i; j++){
//         espaco+=estrela;
//     }
//     console.log(espaco);
//     espaco="";
// }
// ter como base sempre o primeiro exercicio, faz uma linha primeiro passando a condicao no for, qdo acabar o j e ir para o laço do i, tem q pular linha(console.log), e zerar a variavel espaco, se nao a variavel espaco vai estar com os asteriscos anteriores, mais o da prox iteracao.


// 3- Inverta o lado do triângulo:



