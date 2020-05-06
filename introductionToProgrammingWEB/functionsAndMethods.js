const studentsClass1 = [
  {
    name: "Everton",
    note: 9.8,
  },
  {
    name: "Caio",
    note: 10,
  },
  {
    name: "Diego",
    note: 2,
  },
];

const studentsClass2 = [
  {
    name: "Pedro",
    note: 1,
  },
  {
    name: "Dennis",
    note: 10,
  },
  {
    name: "Biel",
    note: 2,
  },
];

function calculateAverage(students) {
  return (students[0].note + students[1].note + students[2].note) / 3;
}

const average1 = calculateAverage(studentsClass1);
const average2 = calculateAverage(studentsClass2);

function message(average, clas) {
  if (average >= 6) {
    console.log(`A média da turma ${clas}  foi de ${average}. Parabéns.`);
  } else {
    console.log(`A média da turma ${clas} é menor que 5.`);
  }
}

message(average1, "Turma 1");
message(average2, "Turma 2");
