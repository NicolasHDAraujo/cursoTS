interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo2<string, number> = {
  nome: 'Nicolas',
  sobrenome: 'Araujo',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 12345,
  sobrenome: 456,
  idade: 30,
};

const aluno3: PessoaProtocolo2<string, number> = {
  nome: 'Nicolas',
  sobrenome: 'Araujo',
  idade: 30,
};

console.log(aluno1, aluno2, aluno3);
