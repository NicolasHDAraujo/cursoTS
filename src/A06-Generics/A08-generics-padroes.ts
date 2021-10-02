//Record
const obj: Record<string, string | number> = {
  nome: 'Nicolas',
  sobrenome: 'Araujo',
  idade: 27,
};

console.log(obj);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//Required --> torna o opcional em obrigatorio
type PessoaRequired = Required<PessoaProtocol>;
//Partial --> torna o obrigatorio em opcional
type PessoaPartial = Partial<PessoaRequired>;
//Readonly --> tipo absoluto
type PessoaReadonly = Readonly<PessoaRequired>;
//Pick --> Pegar chaves desejáveis
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Nicolas',
  sobrenome: 'Araujo',
  idade: 27,
};

console.log(objeto2);

//Extract --> Computa os valores que estão no primeiro que não estão no segundo
//Exclude --> Computa valores que aparecem em ambos
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type tipoExclude = Exclude<ABC, CDE>;
type tipoExtract = Extract<ABC, CDE>;

//example
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};
//retira o tipo _id que vem do banco e substitui pelo id vindo da api
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const AccountMongo: AccountMongo = {
  _id: 'asasaijsihafhw3u423rhewusdf',
  nome: 'Nicolas',
  idade: 27,
  sobrenome: 'Araujo',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(AccountMongo);
console.log('API');
console.log(accountApi);

//Module mode
export default 1;
