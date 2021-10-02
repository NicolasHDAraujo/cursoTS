//Generics passado dentro do diamante, por convenção se inicia T ou A
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;
//recebendo um tipo generico para executar a função
export function meuFilter<T>(array: T[], cb: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
//pode se passar qualquer valor que o generics irá identificar e atribuir a função
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoComJS = array.filter((value) => value < 5);
console.log(arrayFiltradoComJS);

const arrayFiltradoComGenerics = meuFilter(array, (value) => value < 5);
console.log(arrayFiltradoComGenerics);
