import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPassword(password, password2);
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  //validar todos os campos
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode estar vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  //validar email
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido!');
}

function checkEqualPassword( //checando senha
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não batem');
    showErrorMessage(password2, 'Senhas não batem');
  }
}

function hideErrorMessages(form: HTMLFormElement): void {
  //exibir as mensagens de erro
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES) //selecionar todas as classes dentro do form
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES)); //removendo todas as classes de erro
}
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  //verificando se existe erro antes de enviar o form
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));
  return send;
}
