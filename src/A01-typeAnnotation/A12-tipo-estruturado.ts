//structural typing--sempre que pedir um tipo de um objeto que cumpra as regras do objeto pai
type verifyUserFn = (user: User, sentUser: User) => boolean; //função tipada
type User = { username: string; password: string }; //objeto pai

const verifyUser: verifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Joao', password: '123456' }; //objetos filhos precisam seguir os tipos
const sentUser = { username: 'Joao', password: '123456', permission: '' }; //podem ter campos a mais, pois não está ligando a função
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
