type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade; //AND

const pessoa: Pessoa = {
  nome: 'Nicolas',
  sobrenome: 'Araujo',
  idade: 27,
};

console.log(pessoa);

export { pessoa };
