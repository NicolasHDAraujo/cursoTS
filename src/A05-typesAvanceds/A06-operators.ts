//Encadeamento opcional e Operador de coalescencia nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
};

console.log(
  documento.data?.toDateString() ?? '1-Null ou Undefined execulta esse lado',
);
console.log(undefined ?? '1-Null ou Undefined execulta esse lado');
console.log(null ?? '1-Null ou Undefined execulta esse lado');
console.log(false ?? '1-Null ou Undefined execulta esse lado');
console.log(0 ?? '1-Null ou Undefined execulta esse lado');
