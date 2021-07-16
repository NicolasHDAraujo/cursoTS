/*eslint-disable*/
//type annotation é se expecificar os tipos das variaveis
//os tipos mais básicos são string, number, boolean, symbol e bigint

//ex
let simbolo: symbol = Symbol('qualquer-symbol');
let nome: string = 'Luiz' //pode se utilizar '' "" ``
let idade: number = 30; //30, 1.57, -5.55, 0xf00d, 0b1010, 0o7744

// Arrays
let arrayDeNumeros : Array<number> = []; //precisa informar o tipo que vai dentro do array
let opcaoDeArray: number[] = [];

//Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {//parametros do objeto
    nome: "Nicolas",
    idade: 27
}

//Funções
function soma(x: number, y:number) {
    return x+y;
}
                                //tipo do retorno
const soma2:(x: number, y:number) => number = (x, y) => x+y;
