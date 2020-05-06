const studentsClass1 = [
  {
    name: "Everton",
    grade: 9.8,
  },
  {
    name: "Caio",
    grade: 10,
  },
  {
    name: "Diego",
    grade: 10,
  },
  {
    name: "Felipe",
    grade: 4,
  },
];

const studentsClass2 = [
  {
    name: "Pedro",
    grade: 1,
  },
  {
    name: "Dennis",
    grade: 10,
  },
  {
    name: "Biel",
    grade: 2,
  },
];

function calculateAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }
  const average = sum / students.length;
  return average;
}

function message(average, clas) {
  if (average > 5) {
    console.log(`A média da turma ${clas}  foi de ${average}. Parabéns.`);
  } else {
    console.log(`A média da turma ${clas} é menor que 5.`);
  }
}

function checkResult(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendMessage(student) {
  if (student.flunked) {
    console.log(`o Aluno ${student.name} está reprovado!`);
  }
}

function studentsFlunked(students) {
  for (let student of students) {
    checkResult(student);
    sendMessage(student);
  }
}

const average1 = calculateAverage(studentsClass1);
const average2 = calculateAverage(studentsClass2);

message(average1, "Turma 1");
message(average2, "Turma 2");

studentsFlunked(studentsClass1);
studentsFlunked(studentsClass2);
