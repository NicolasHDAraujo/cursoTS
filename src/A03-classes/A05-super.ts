export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    //recebendo valores do super e criando valor da classe Aluno
    //não está recriando, está recebendo valores do super
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, //esse foi criado apenas para aluno
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Ação antes do super');
    return super.getNomeCompleto(); //modificando metodo da classe pai através do super
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Nicolas', 'Araujo', 27, '111.222.333-44');
const aluno = new Aluno('Joao', 'Antunes', 30, '444.333.222-11', 'ADS');
const cliente = new Cliente('Paulo', 'Camargo', 50, '555.444.888-99');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
