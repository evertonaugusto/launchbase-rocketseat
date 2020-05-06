// Criar um programa que calcula
// a média das notas dos alunos e
// enviar o resultado.
const student1 = "Everton";
const notestudent1 = 9.8;

const student2 = "Mayk";
const notestudent2 = 10;

const student3 = "Caio";
const notestudent3 = 2;

const average = (notestudent1 + notestudent2 + notestudent3) / 3;

if (average >= 5) {
  console.log(`A média é ${average}, parabéns.`);
} else {
  console.log("Que pena, a média é menor que 5.");
}
