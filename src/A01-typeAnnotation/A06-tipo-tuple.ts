//tupla seria um array com tipos expecificos e tamanho fixo

const dadosClientes: readonly [number, string] = [1, 'Joao']; //readonly evita que seja feito modificaçoes como pop no array
const dadosClientes2: [number, string, string?] = [1, 'Joao'];
const dadosClientes3: [number, string, ...string[]] = [1, 'Joao'];

dadosClientes2[2] = 'Blabla';

console.log(dadosClientes);
console.log(dadosClientes2);
