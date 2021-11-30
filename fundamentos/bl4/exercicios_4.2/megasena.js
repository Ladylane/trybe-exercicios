// let megaSena= Math.floor(Math.random()*100)+1 ;



// ################MEGA
let numerosMega=[]
for (let i=0; i<6; i++){
    let megaSena= Math.floor(Math.random()*100)+1 ;
    numerosMega[i]=megaSena;
}
console.log("Números do sorteio: ", numerosMega);

// #############LADYLANE
let ladylane= [45,1,12,9,53,27];
// for (let i=0; i < numerosMega.length; i++){
//     // console.log("Mega: ", numerosMega[i]);
//     for (let j=0; j < ladylane.length; j++){
//         // console.log("Ladylane: ", ladylane[j]);
//         if (numerosMega[i]==ladylane[j]){
//             // console.log("IGUAL!!");
//         }
//     }
// }
// ###############DANILO
let danilo= [32,76,41,15,22,90];
// for (let i=0; i < numerosMega.length; i++){
//     // console.log("Mega: ", numerosMega[i]);
//     for (let j=0; j < danilo.length; j++){
//         // console.log("Danilo: ", danilo[j]);
//         if (numerosMega[i]==danilo[j]){
//             // console.log("IGUAL!!");
//         }
//     }
// }

let jogadores=[danilo, ladylane]

for (let compracao of jogadores){
    for (let i=0; i<numerosMega.length; i++){
        console.log(numerosMega[i], "Sorteio")
        for (let j=0; j<compracao.length; j++){
            console.log(compracao[j], "Jogador")
            if (numerosMega[i]===compracao[j]){
                console.log("$$$$$UHULLLLLL$$$$$$");
            }
        }
    }
}













// comentario linha 11: coloco esse comando fora do laço FOR pq se nao ele vai imprimir 6 linhas, e os numeros conforme for sendo incrementado.