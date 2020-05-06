const users = [
  {
    name: "Carlos",
    technology: ["HTML", " CSS"],
  },
  {
    name: "Jasmine",
    technology: ["JavaScript", " CSS"],
  },
  {
    name: "Tuane",
    technology: ["HTML", " Node.js"],
  },
];

for (let user of users) {
  console.log(`${user.name} trabalha com ${user.technology}`);
}
