type VotationOpt = {
  numberOfvotes: number;
  option: string;
};

export class Votation {
  private _votationOpt: VotationOpt[] = [];
  constructor(public details: string) {}

  addVotationOpt(votationOpt: VotationOpt): void {
    this._votationOpt.push(votationOpt);
  }

  vote(votationIndex: number): void {
    if (!this._votationOpt[votationIndex]) return;
    this._votationOpt[votationIndex].numberOfvotes += 1;
  }

  get votationOpt(): VotationOpt[] {
    return this._votationOpt;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOpt of votation.votationOpt) {
        console.log(votationOpt.option, votationOpt.numberOfvotes);
      }
    }
  }
}

const votation1 = new Votation(
  'Qual a sua linguagem de programação favorita? ',
);

votation1.addVotationOpt({ option: 'Python', numberOfvotes: 0 });
votation1.addVotationOpt({ option: 'JS', numberOfvotes: 0 });
votation1.addVotationOpt({ option: 'TS', numberOfvotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();
