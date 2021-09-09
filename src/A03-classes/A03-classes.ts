/**
 * public -> acessivel na classe, subclasse e metodo
 * private -> só é acessivel dentro da classe que foi criado, adequado para encapsulamento de dados sensiveis
 * protected ->
 */

export class Empresa {
  public readonly nome: string; // public é redundante, se não passar todos os metodos serão public
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  //metodo publico para acessar e acrescentar colaborador no array
  pushColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  //funciona igual a primeira Classe, porém de uma forma mais reduzida, nesse caso precisa expecificar se é public,
  //e seu tipo
  constructor(
    public readonly nome: string, //nesse caso precisa declarar o modificador public
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('IFSP', '101.080.780/0001-11');
const colaborador1 = new Colaborador('Nicolas', 'Araujo');

empresa1.pushColaborador(colaborador1);

empresa1.showColaboradores();
