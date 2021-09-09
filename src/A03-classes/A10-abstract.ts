//a classe é só um contrato para que os filhos herdem o conteudo dela
export abstract class Personagem {
  protected abstract emoji: string;//forçando os filhos a terem emoji

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} ${this.nome} está sendo atacado...agora tem ${this.vida}`);
  }

  abstract bordao(): void; //assinatura de função abstrata obrigatoria as classes filhas
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void { //sobreescrevendo metodo pai
    console.log(this.emoji + 'Atacando a guerreira');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void { //sobreescrevendo metodo pai
    console.log(this.emoji + 'Atacando o monstro');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
