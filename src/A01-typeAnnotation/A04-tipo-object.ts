//tipar ele é opcional, pode se deixar que o próprio ts tipe o objeto, pouco usual
const objetoA: {
  readonly chaveA: string; //não permite alterar a chave
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; //permite criar chave e valor fora do objeto
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Novachave';
