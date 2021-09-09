export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string, // por convenção se utiliza _ para distinguir
  ) {
    this.cpf = _cpf; // chamando o setter diretamente
  }

  set cpf(cpf: string) {
    console.log('Setter chamado');
    this._cpf = cpf;
  }

  get cpf(): string {
    // ideal para controlar e modificar o valor antes de entregar
    console.log('Getter chamado');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Nicolas', 'Araujo', 30, '123.456.789-00'); //setter pode ser chamado na classe
const cpf = '123.654.978-99'; //pode ser chamado sozinho

console.log(pessoa.cpf); //chamando o getter
