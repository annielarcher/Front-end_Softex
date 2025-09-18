//Exercício 1
let nota = 4;
if (nota < 5) {
  console.log("Reprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else if (nota >= 7 && nota <= 10) {
  console.log("Aprovado!");
} else if (nota < 0 || nota > 10) {
  console.log("Entrada inválida!");
}

//Exercício 2
let opção = 3;
switch (opção) {
  case 1:
    console.log("Verão");
    break;
  case 2:
    console.log("Outono");
    break;
  case 3:
    console.log("Inverno");
    break;
  case 4:
    console.log("Primavera");
    break;
  default:
    console.log("Opção Inválida");
}

// Exercício 3
for (let i = 0; i <= 20; i++) {
  console.log(`Número ${i}`);
}

// Exercício 4

//Funções

function nomeDaFuncao() {
  //bloco do código
}

//Exemplo
function dizerOla() {
  console.log("Olá, mundo!");
}

dizerOla();
dizerOla();
dizerOla();
dizerOla();

//Função com (parâmetro)
function saudar(nome) {
  console.log(`Olá, ${nome}`);
}

saudar("Maria");
saudar("João");
saudar("Paulo");

//Função com (Vários Parâmetros)
function somar(a, b) {
  console.log(`Resultado ${a + b}`);
}

somar(456, 1860);

//Retorno de uma função (Saída de dados)
function somar2(a, b) {
  return a + b;
}

let resultado1 = somar(10, 5);
console.log(resultado1);

//Escopo de uma função
function exemplo() {
  let n = 10;
  console.log(n); // aqui funciona
}
exemplo(); //chamando a função para testar
console.log(n); //ERRO: "n" não existe fora da função

//Função com Valores Padrão
functionaplicarDesconto(Preco, percentual =0); {
    return preco - (preco*percentual/100);
}

console.log(aplicarDesconto(100)); //R$100(sem desconto)
console.log(aplicarDesconto(100, 10)); //R$90 (com desconto de 10%)

//Arow functions
const dobrar = (n) => n*2;
let resultado = dobrar(5);
console.log(resultado);

// Função normal
function dobrar (n) {
    return n*2;
}
resultado = dobrar(5)
console.log(resultado);
