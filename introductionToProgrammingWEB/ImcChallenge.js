const name = `Everton Augusto`;
const weight = 68;
const height = 1.58;
const sex = "M";

const imc = weight / (height * height);

if (imc >= 30) {
  console.log(`${name}, você está acima do peso`);
} else {
  console.log(`${name}, você não está acima do peso`);
}
