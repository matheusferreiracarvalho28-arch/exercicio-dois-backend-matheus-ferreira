
// base de dados para o teste
const alunos = [
  { nome: "Ana", nota: 8.5, turma: "3A" },
  { nome: "Beto", nota: 5.0, turma: "3B" },
  { nome: "Carla", nota: 9.0, turma: "3A" },
  { nome: "Diego", nota: 6.0, turma: "3B" },
  { nome: "Elisa", nota: 4.5, turma: "3A" },
  { nome: "Fábio", nota: 7.5, turma: "3A" }
];

//  Filtrar alunos aprovados (nota >= 6)
const aprovados = alunos.filter(aluno => aluno.nota >= 6);
console.log("Alunos aprovados:");
console.log(aprovados);

//  Extrair nomes dos alunos
const nomes = alunos.map(aluno => aluno.nome);
console.log("\nNomes dos alunos:");
console.log(nomes);

//  Criar boletim formatado
const statusMap = aluno => {
  const status = aluno.nota >= 6 ? "Aprovado" : "Reprovado";
  return `${aluno.nome} - Nota: ${aluno.nota} - Status: ${status}`;
};
const boletim = alunos.map(statusMap);
console.log("\nBoletim:");
boletim.forEach(item => console.log(item));

//  Calcular média da turma
const somaNotas = alunos.reduce((total, aluno) => total + aluno.nota, 0);
const media = somaNotas / alunos.length;
console.log("\nMédia da turma:");
console.log(media.toFixed(2));

//  Agrupar alunos por turma
const agrupadosPorTurma = alunos.reduce((acc, aluno) => {
  if (!acc[aluno.turma]) {
    acc[aluno.turma] = [];
  }
  acc[aluno.turma].push(aluno.nome);
  return acc;
}, {});
console.log("\nAlunos agrupados por turma:");
console.log(agrupadosPorTurma);

//  Melhores alunos da 3A (nota >= 8)
const melhores3A = alunos
  .filter(aluno => aluno.turma === "3A" && aluno.nota >= 8)
  .map(aluno => aluno.nome);

console.log("\nMelhores alunos da 3A:");
console.log(melhores3A);
