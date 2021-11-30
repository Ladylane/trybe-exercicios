//  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// ################################### Exercicio 1
// Percorra o array imprimindo todos os valores nele contidos com a função console.log():
// for (let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// ################################### Exercicio 2
// Some todos os valores contidos no array e imprima o resultado:
// let soma=0;
// for (let i=0; i<numbers.length; i++){
//     soma+=numbers[i];
// }
// console.log(soma)

// ################################### Exercicio 3
//  Calcule e imprima a média aritmética dos valores contidos no array:
// let soma=0;
// for (let i=0; i<numbers.length; i++){
//     soma+=numbers[i];
// }
// let valorTotal= soma/numbers.length
// console.log(valorTotal)

// ################################### Exercicio 4
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20":
// let soma=0;
// for (let i=0; i<numbers.length; i++){
//     soma+=numbers[i];
// }
// let valorTotal= soma/numbers.length
// if (valorTotal > 20){
//     console.log("Valor maior que 20")
// }else{
//     console.log("Valor menor ou igual a 20")
// }

// ################################### Exercicio 5
// Utilizando for , descubra qual o maior valor contido no array e imprima-o:
// https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
// let maior=0;
// for (let i=0; i<numbers.length; i++){
//     if (numbers[i] > maior){
//         maior=numbers[i];
//     }
// }
// console.log(maior);

// ################################### Exercicio 6
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado":
// let impares=0;
// for (let i=0; i<numbers.length; i++){
//     if (numbers[i]%2!==0){
//         impares+=1;
//     }
// }
// if (impares===0){
//     console.log("Nenhum número ímpar encontrado")
// }
// console.log(impares);

// ################################### Exercicio 7
// Utilizando for , descubra qual o menor valor contido no array e imprima-o:
// let menor=numbers[0];
// for (let i=1; i<numbers.length; i++){
//     if (numbers[i]<menor){
//         menor=numbers[i];
//     }
// }
// console.log(menor)

// ################################### Exercicio 8
// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado:
// let array=[1]
// for (let i=1; i<25; i++){
//     // array[i]=(array[i-1])+1; ou a linha abaixo
//     array.push((array[i-1])+1);
// }
// console.log(array);
// ################################### Exercicio 9 (...cont do 8)
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2:
// let result=[];
// for (let i=0; i<array.length; i++){
//     result.push(array[i]/2);
// }
// console.log("Elementos dividido por 2: ", result);


// #######################BONUS##############################################
// 1.Ordene o array numbers em ordem crescente e imprima seus valores:
// for (let i=1; i<numbers.length; i++){
//     for (let j=0; j<i; j++){
//         if (numbers[i]< numbers[j]){
//             let position=numbers[i];
//             numbers[i]=numbers[j];
//             numbers[j]=position;
//         }
//     }
// }
// console.log(numbers);

// 2.Ordene o array numbers em ordem decrescente e imprima seus valores:
// se eu nao comecar i=1 e j=0, o j vai avancar p prox casa antes do i, e eu preciso q o i chegue na posicao do j (posicao igual) antes do j ir p fente, 
// for (let i=1; i<numbers.length; i++){
//     for (let j=0; j<i; j++){
//         if (numbers[i]>numbers[j]){
//             position=numbers[i];
//             numbers[i]=numbers[j];
//             numbers[j]=position;
//         }
//     }
// }
// console.log(numbers)

// 3. Crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo: [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray=[];
for (let i=0; i<numbers.length; i++){
    if(i==(numbers.length-1)){
        newArray[i]=numbers[i]*2
    }else{
        newArray[i]=numbers[i]*numbers[i+1];
    }
}
console.log(newArray);
            