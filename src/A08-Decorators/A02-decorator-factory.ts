function inverteNomeECor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {}
}
//decorator nada mais é que uma função que pode alterar ou assistir sua classe

const animal = new Animal('Nicolas', 'Azul');
console.log(animal);
