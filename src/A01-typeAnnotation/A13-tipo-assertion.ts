//associar o tipo com a DOM e informar que o elemento existe

//Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

//HTMLElement (consegue selecionar qualquer tag que quiser)
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer valor';
input.focus();

//caso não tenha certeza que o elemento exista, utilizar condicional
const body3 = document.querySelector('body');
if (body3) body3.style.background = 'red';
