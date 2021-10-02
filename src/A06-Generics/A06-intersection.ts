function unirObj<T, U>(obj1: T, obj2: U): T & U {
  //return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { chave: 'valor' };
const obj2 = { chave2: 'valor2' };

const uniao = unirObj(obj1, obj2);
console.log(uniao);
