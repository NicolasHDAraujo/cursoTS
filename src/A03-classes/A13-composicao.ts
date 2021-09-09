export class Motor {
  ligar(): void {
    console.log('Motor está ligando!');
  }
  acelerar(): void {
    console.log('Motor está acelerando!');
  }
  parar(): void {
    console.log('Motor está parado!');
  }
  desligar(): void {
    console.log('Motor está desligado!');
  }
}

export class Carro {
  //os metodos de motor fazem parte de carro
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
