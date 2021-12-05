// OBJETOS

// let player={
//     name : 'Marta',
//     lastName : 'Silva',
//     age : 34,
//     medals : { golden: 2, silver: 3 }
// }

// player['fullName']= player.name+ " "+ player.lastName;
// // console.log("A jogadora "+ player.fullName + "tem "+ player.age + " anos de idade")
// player['bestInTheWorld']=[2006, 2007, 2008, 2009, 2010, 2018];
// // console.log(player);
// console.log("A jogadora possui "+ player['medals']['golden'] + " medalhas de ouro e " + player['medals']['silver']+ " de prata");

//  FOR IN (nos objetos, percorre as chaves, no array percorre os indices)/ FOR OF
// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
//   for (let index in car) {
//     console.log(index);
//   }
//   1.
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge'
//   };

//   for (let key in names){
//       console.log("Olá "+ names[key]);
//   }
// 2.
let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
  colors: ["blue", "red", "grey"],
};
for (let key in car) {
  console.log(car[key]);
}

// FUNÇOES

// function soma(a, b){
//     console.log(a+b);
// }
// soma(10,5)

// function maior(a,b){
//     if (a>b){
//         console.log(a)
//     }else {
//         console.log(b)
//     }
// }
// maior(3,8)

// EXERCICIOS - FIM DA AULA (OBJETOS E FOR IN)
//  1 ao 5:
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas'
//   };

// // console.log('Bem-vinda ', info['personagem']);
// info['recorrente']='Sim';
// info2['recorrente']='Sim';
// for (let index in info){
//     console.log(info[index] + " e "+ info2[index]);
// }

//  6 ao 8
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//       {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editor: 'Rocco',
//       }
//     ],
//   };
// // leitor['fullName']=leitor['nome']+ " "+ leitor['sobrenome'];
// // console.log("O livro favorito de " + leitor['fullName'] + " se chama ' " + leitor.livrosFavoritos[0].titulo + " '.");
// let index= leitor.livrosFavoritos.length;
// console.log(leitor['nome']+ " tem " + index + " livros favoritos.");

// FUNCOES
// 1.Palindromo
// ex: radar, anilina, ovo, salas
// function palindromo(palavra){
//     for (let i=0, j=palavra.length -1; i<=j, j>=i; i+=1, j-=1){
//         if(palavra[i]!==palavra[j]){
//             console.log(false);
//             break;
//         }
//         if (i===j){
//             console.log(true);
//         }
//     }
// }

// function palindromo(palavra){
//     for (index in palavra){
//         if (palavra[index]!=palavra[(palavra.length -1)-index]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(palindromo("arara"));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// let maior=0;
// function numeroMaior(array){
//     for (let i=0; i<array.length; i+=1){
//         if(array[i]>maior){
//             maior=array[i];
//         }
//     }
//     console.log(array[maior]);
// }
// let maior=0;
// function maiorValor(array){
//     for (index in array){
//         if (array[maior]<array[index]){
//             maior=index
//         }
//     }
//     return maior;
// }
// console.log(maiorValor([3,1,9]));

// 3.Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

// let menor=0;
// function menorValor(array){
//     for(let index in array){
//         if(array[menor]>array[index]){
//             menor=index;
//         }
//     }
//     return menor;
// }
// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function maisCaract(array) {
  let maior = array[0];
  for (let i in array) {
    if (maior.length < array[i].length) {
      maior = array[i];
    }
  }
  return maior;
}
console.log(
  maisCaract(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);

// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2
function numeroRepetido(array) {
  let contador = 0;
  let qtdContador = 0;
  let indice = 0;
  for (let index in array) {
    let posicao = array[index];
    for (let index2 in array) {
      if (posicao === array[index2]) {
        contador += 1;
      }
    }
    if (contador > qtdContador) {
      qtdContador = contador;
      indice = index;
    }
    contador = 0;
  }
  return array[indice];
}
console.log(numeroRepetido([2, 3, 2, 5, 8, 2, 3]));




let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
    ],
  };
  console.log(leitor.livrosFavoritos[0].titulo)


  