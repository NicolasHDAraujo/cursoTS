interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const p: Pessoa = {
  nome: 'Nicolas',
  sobrenome: 'Araujo',
  enderecos: ['Av Ipanema'],
  idade: 27,
};

p.idade = 31;
console.log(p);
