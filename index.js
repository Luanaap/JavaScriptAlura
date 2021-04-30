import{Cliente} from "./Cliente.js"
import{Gerente} from "./Funcionarios/Gerente.js"
import{Diretor} from "./Funcionarios/Diretor.js"
import{SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Thiago", 10000, 87519337819);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("William", 5000, 78459172864);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Felipe", 17458236985, "456");
const gerenteEstaestaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaestaLogado = SistemaAutenticacao.login(diretor, "123456");



const clienteEstaestaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaestaLogado, diretorEstaestaLogado, clienteEstaestaLogado);


