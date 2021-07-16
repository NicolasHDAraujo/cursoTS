//Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaArgs(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCaseArgs(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaArgs('a', 'b', 'c');
const upper = toUpperCaseArgs('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);

//readonly array
const array1: readonly string[] = ['Joao', 'Bla'];
const array2: ReadonlyArray<string> = ['Nicolas', 'Araujo'];

console.log(array1);
console.log(array2);
