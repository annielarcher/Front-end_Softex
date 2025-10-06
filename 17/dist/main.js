"use strict";
// Declaração com tipagem
let mensagem = "Aula de Typescript";
console.log(mensagem);
// Função tipada
function dobro(valor) {
    return valor * 2;
}
console.log("Dobro de 456 é:", dobro(456));
// Desafio Prático
let Aluno = "Camila";
function apresentarAluno(nome) {
    console.log(`Olá, eu sou ${nome} e estou aprendendo Typescript`);
}
function apresentarAlunoB(nome) {
    return `Olá, eu sou ${nome} e estou aprendendo Typescript`;
}
apresentarAluno(Aluno);
let texto = apresentarAlunoB("João");
console.log(texto);
