//never significa que a função nunca vai retornar nada, como um laço infinito ou erro
export function criaErro(): never {
  throw new Error('Erro bla bla');
}
