// Declaração com tipagem
let mensagem: string = "Aula de Typescript";
console.log(mensagem);

// Função tipada
function dobro(valor: number): number {
  return valor * 2;
}

console.log("Dobro de 456 é:", dobro(456));

// Desafio Prático
let Aluno: string = "Camila";
function apresentarAluno(nome: string): void {
  console.log(`Olá, eu sou ${nome} e estou aprendendo Typescript`);
}

function apresentarAlunoB(nome: string): string {
  return `Olá, eu sou ${nome} e estou aprendendo Typescript`;
}

apresentarAluno(Aluno);

let texto: string = apresentarAlunoB("João");

console.log(texto);
