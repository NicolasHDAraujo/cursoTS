function decorador(classPrototype: any, name: string | symbol): any {
  console.log(classPrototype);
  console.log(name);

  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      valorPropriedade = valor.split('').reverse().join('');
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  @decorador
  sobrenome: string;
  idade: number; //se decorar number pode ocasionar erro

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }
  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Nicolas', 'Araujo', 27);
const metodo = pessoa.metodo('Olá');
console.log(metodo);
