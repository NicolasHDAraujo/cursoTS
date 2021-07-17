//criando tipos manualmente
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul'; //union
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'; //union
type CorPreferida = CorCMYK | CorRGB; //union

const pessoa: Pessoa = {
  //pessoa é do tipo Pessoa
  nome: 'Joao',
  idade: 30,
  salario: 200_000, //200000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Ciano'));
