type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;
//chamando assim não se atrela os tipos a um valor fixo, podendo acrescentar mais opções de valores na constante
const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
