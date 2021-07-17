//Não desejável pois pode ocasionar problemas no sistema, utilizar em ultimo caso
/*eslint-disable*/
/*function showMessage(msg): {
  return msg;
}

console.log(showMessage('asasas'));
console.log(showMessage(1));
console.log(showMessage([1, 2, 3]));
*/

//caso seja necessário utilizar, recomenda o uso de unknown pois força o teste do tipo antes de executar uma ação
let x:unknown;

x= 100;
x = 'Jose';
x = 900;
x = 20;
const y = 800;

if (typeof x === 'number') console.log(x + y)
