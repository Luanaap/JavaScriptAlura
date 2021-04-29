import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";


 const cliente1 = new Cliente("Luana", 45815306878);

 const contaCorrenteLuana = new ContaCorrente(0, cliente1, 1001);
 contaCorrenteLuana.depositar(500);
 contaCorrenteLuana.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(contaPoupanca);
console.log(contaCorrenteLuana);

