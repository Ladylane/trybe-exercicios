// TEMPLATE LITERALS
// let nome = "Ladylane";
// let idade = 36;
// console.log(`Bem vinda ${nome}! Sua idade é ${idade}`);

// console.log(`Ladylane;
// Campos;
// Reis;`);

// const nome = (primeiro) => primeiro;
// console.log(nome("Ladylane"));

// function soma(valor1, valor2){
//   return valor1+valor2;
// }
// console.log(soma(2,2));

// ##################
// const soma= (valor1, valor2)=> valor1+valor2 ? (valor1+valor2)%2 === 0 : console.log("impar");
// console.log(soma(2,3));

// 
// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.values(student);
//   for(index in arrayOfSkills){
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };

// console.log(`Turma 1: ${Object.values(student1)}`);
// console.log(Object.values(student2));

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);


// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };


// const person = {
//   name:'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const newPerson = Object.assign({},person,lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);

// const getDayName = (number) => {
//   if (number < 1 || number > 7) throw new Error('Informe um número entre 1 e 7');
//   const dayNumber = number - 1;
//   const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//   return days[dayNumber];
// };

// const printDayname = (dayNumber) => {
//   try {
//     console.log(getDayName(dayNumber));
//   } catch {
//     console.log(error);
//   }
// };


