export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  //acesso somente pela classe, padrão GOF chamado factory method
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Nicolas', 'Araujo', 30, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Joao', 'Jose');
console.log(pessoa, pessoa2);
pessoa.metodoNormal();

console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao);
