/**
 * public -> acessivel na classe, subclasse e metodo
 * private -> só é acessivel dentro da classe que foi criado, adequado para encapsulamento de dados sensiveis
 * protected -> pode ser acessado na classe que foi criado e nas subclasses
 */

export class Empresa {
  public readonly nome: string; // public é redundante
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  pushColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Ifsp extends Empresa {
  constructor() {
    //sobreescrevendo o construtor do pai já passando as informações
    super('Ifsp', '101.080.780/0001-11');
  }

  pop(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  //funciona igual a primeira, porém de uma forma mais reduzida, nesse caso precisa expecificar se é public, e seu tipo
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Ifsp();
const colaborador1 = new Colaborador('Nicolas', 'Araujo');

empresa1.pushColaborador(colaborador1);

empresa1.showColaboradores();
