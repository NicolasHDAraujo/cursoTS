let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function criarPessoa( //passando os parametros
  nome: string,
  sobrenome?: string,
): {
  //passando os tipos
  nome: string;
  sobrenome?: string;
} {
  return {
    //retorno
    nome,
    sobrenome,
  };
}

export function quadradoDe(x: any) {
  //recebendo qualquer coisa
  if (typeof x === 'number') return x * x; //verificando se o que foi recebido é numero
  return null;
}

const quadrado2 = quadradoDe(2);
const quadradoDoisString = quadradoDe('2');
//permitir isso está passando o problema passar e td vez que for mexer no codigo tem que tomar cuidado com o tipo informado
if (quadradoDoisString === null) {
  console.log('Valor inválido!');
} else {
  console.log(quadradoDoisString * 100);
}
