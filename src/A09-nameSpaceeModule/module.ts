/* eslint-disable @typescript-eslint/no-namespace */

namespace MeuNamespace {
  export const nomeDoNamespace = 'Nome tal';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Nicolas');
  console.log(PessoaDoNamespace);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome do outro Namespace';
  }
}

const PessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Joao');
console.log(PessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
