import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"


 const cliente1 = new Cliente("Luana", 45815306878);
 const cliente2 = new Cliente("Giovanna",15749856281);
 const contaCorrenteLuana = new ContaCorrente(1001, cliente1);
 contaCorrenteLuana.depositar(500);
 const conta2 = new ContaCorrente(102, cliente2);



let valor = 200;
contaCorrenteLuana.transferir(valor, conta2);


console.log(ContaCorrente.numeroDeContas);

