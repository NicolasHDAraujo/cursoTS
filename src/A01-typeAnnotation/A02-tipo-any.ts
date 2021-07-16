//Não desejável pois pode ocasionar problemas no sistema, utilizar em ultimo caso
/*eslint-disable*/
function showMessage(msg) {
  return msg;
}

console.log(showMessage('asasas'));
console.log(showMessage(1));
console.log(showMessage([1, 2, 3]));
