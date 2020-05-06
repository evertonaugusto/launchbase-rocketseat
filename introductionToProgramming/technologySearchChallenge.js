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

function checkUserCSS(user) {
  for (let techno of user.technology) {
    if (techno == " CSS") return true;
  }
  return false;
}

for (let i = 0; i < users.length; i++) {
  const userWorkCSS = checkUserCSS(users[i]);

  if (userWorkCSS) {
    console.log(`O usuário ${users[i].name} trabalha com CSS`);
  }
}
