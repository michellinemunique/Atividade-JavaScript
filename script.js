// Tipos de dados
const nome = "Michelline Munique"; // string
const salario = 1800.00; // number
const idade = 40; // number
const possuiDiploma = true; // boolean

// Criar um cadastro de pessoa
const pessoa = {
  nome: nome,
  salario: salario,
  idade: idade,
  possuiDiploma: possuiDiploma,
};

// Exemplos das variaveis
console.log("Nome: " + pessoa.nome);
console.log("Salario: " + pessoa.salario);
console.log("Idade: " + pessoa.idade);
console.log("Possui Diploma: " + (pessoa.possuiDiploma ? "Sim" : "Nao"));
