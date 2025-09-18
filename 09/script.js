let texto = "Aqui vai o script, lembra?";
console.log(texto); //Imprimir no console do navegador.
let nome = "Maria";
let idade = 30;
let ativo = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ativo);

let x;
console.log(typeof x);

let y = null;
console.log(typeof y);

let pessoa = { nome: "João" };
console.log(typeof pessoa);

let frutas = ["maçã", "banana"];
console.log(typeof frutas);

let pessoas = { nome: "João" };

console.log(Array.isArray(frutas));
console.log(Array.isArray(pessoas));

function imprimirNoConsole() {
  console.log(frutas);
  idade = 25;
  console.log(idade);
}

function AlterarIdade(novaIdade) {
  idade = novaIdade;
}

imprimirNoConsole();

AlterarIdade(32);

console.error(idade);

console.log(true && false);
console.log(true || false);
console.log(!true);

const pessoa1 = {
  nome: "João",
  idade: 30,
  ativo: true,
};
console.log(pessoa1.nome);
console.log(pessoa1["idade"]);

pessoa1.idade = 24;
console.log(pessoa1.idade);

pessoa1.nome = "Maria";
pessoa1.idade = 25;
console.log(pessoa.nome);

pessoa1.cidade = "Maricá";
console.log(pessoa1.cidade);

let aluno = {
  nome: "Carla",
  curso: {
    nome: "Front-end",
    duracao: "6 meses",
  },
};
console.log(aluno.curso.nome);

console.log(aluno);

let carro = {
  marca: "Renault",
  modelo: "Logan",
  ano: 2011,
};
console.log(carro);

carro.cor = "Preto";
console.log(carro.cor);
console.log(carro);