//Singleton -GOF --> Criar somente uma instancia de uma determinada classe, não mais que isso
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
  //Factory Method -GOF
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database; // verificando se tem valor
    Database.database = new Database(host, user, password); //passando valor, caso a ação de cima ñ tenha
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'hoot', '123456');
db1.connect();
