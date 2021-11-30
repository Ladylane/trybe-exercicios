// boolean
// let comparacao= 1>2;
// console.log(comparacao)

// #####################################PROGRAMA 1

// const a = 2;
// const b = 1;

// console.log(a + b, "Adição");
// console.log(a - b, "Subtração");
// console.log(a * b, "Multiplicação");
// console.log(a / b, "Divisão");
// console.log(a % b, "Módulo");

// #####################################PROGRAMA 2

// const n1 = 22;
// const n2 = 9;

// if (n1 > n2) {
//   console.log(n1);
// } else {
//   console.log(n2);
// }

// #####################################PROGRAMA 3

// const n1 = 22;
// const n2 = 60;
// const n3 = 15;

// if (n1 > n2 && n1 > n3) {
//     console.log(n1);
// } else if (n2 > n1 && n2 > n3) {
//     console.log(n2);
// } else {
//     console.log(n3);
// }

// #####################################PROGRAMA 4

// const valor=0;

// if (valor > 0 && valor!=0){
//     console.log("positive");
// } else if (valor < 0 && valor!=0){
//     console.log("negative");
// }else{
//     console.log("zero");
// }

// #####################################PROGRAMA 5

// const a1=89;
// const a2=45;
// const a3=45;

// if (a1+a2+a3===180){
//     console.log("True")
// } else if (a1+a2+a3!==180 && a1+a2+a3 > 0){
//     console.log("False")
// } else{
//     console.log("Erro!!")
// }

// #####################################PROGRAMA 6

// const peao="frente";
// const bispo="diagonal";
// const torre="horizontal e vertical";
// const cavalo="pula";
// const rainha="qualquer direção";
// const rei="qualquer casa adjacente";
// // se atualizar a pagina, dah usar sem function
// function defineMovimento() {
//     let peca = prompt("Entre com a peca:");
//     switch(peca){
//         case "bispo":
//             console.log(bispo);
//             break;
//         case "peao":
//             console.log(peao);
//             break;
//         case "torre":
//             console.log(torre);
//             break;
//         case "cavalo":
//             console.log(cavalo);
//             break;
//         case "rainha":
//             console.log(rainha);
//             break;
//         case "rei":
//             console.log(rei);
//             break;
//         default:
//             console.log("Peça não existe");
//     }
// }      
    
// #####################################PROGRAMA 7
// function avaliacao(){
//     let nota= prompt("Entre com sua nota de 0 a 100:");
//     if (nota >= 90 && nota <=100){
//         console.log("A")
//     }else if (nota >= 80 && nota < 90){
//         console.log("B")
//     }else if (nota >= 70 && nota < 80){
//         console.log("C")
//     }else if (nota >= 60 && nota < 70){
//         console.log("D")
//     }else if (nota >= 50 && nota < 60){
//         console.log("E")
//     }else if (nota < 50 && nota > 0){
//         console.log("F")
//     }else {
//     console.log("ERRO!!")
//     }    
// }

// #####################################PROGRAMA 8

// const a= 1;
// const b= 2;
// const c= 3;
// if (a%2===0 || b%2===0 || c%2===0){
//     console.log(true);
// }else{
//     console.log(false);
// }

// #####################################PROGRAMA 9

// const a= 7;
// const b= 2;
// const c= 8;
// if (a%2!==0 || b%2!==0 || c%2!==0){
//     console.log(true);
// }else{
//     console.log(false);
// }

// #####################################PROGRAMA 10

// function preco(){
//     let valorCusto=parseFloat(prompt("Entre com o valor de custo: ")) ;
//     let valorVenda=parseFloat(prompt("Entre com o valor de venda: "));
//     if (valorCusto>0){
//         let impostoSobreOCusto= valorCusto * 0.2;
//         let valorCustoTotal= valorCusto + impostoSobreOCusto;
//         const lucro = valorVenda - valorCustoTotal;
//         console.log(lucro *1000);
//     }else{
//         console.log("Valores precisam ser maiores que zero!!");
//     }
// }

// #####################################PROGRAMA 11

