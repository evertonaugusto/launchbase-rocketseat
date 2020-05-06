const name = `Everton Augusto`;
const sex = "M";
const age = 22;
const contribution = 4;

const situation = age + contribution;

if (sex === "M") {
  if (situation >= 95) {
    console.log(`${name}, você pode ser aposentar!`);
  } else {
    console.log(`${name}, você ainda não pode se aposentar!`);
  }
} else {
  if (situation >= 85) {
    console.log(`${name}, você pode ser aposentar!`);
  } else {
    console.log(`${name}, você ainda não pode se aposentar!`);
  }
}
