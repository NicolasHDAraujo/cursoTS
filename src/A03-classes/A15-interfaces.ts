//similar a type Alias

interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface NomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa2 extends TipoNome, TipoSobrenome, NomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Nicolas', 'Araujo');
