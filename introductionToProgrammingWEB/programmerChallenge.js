const programmer = {
  name: "Carlos",
  age: 32,
  technology: [
    { name: "C++", specialty: "Desktop" },
    { name: "JavaScript", specialty: "Web/Mobile" },
  ],
};

console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa a 
tecnologia ${programmer.technology[0].name} com especialidade em 
${programmer.technology[0].specialty}`);
