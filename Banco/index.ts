import { Conta } from "./src/models/Conta.js";
import { ContaCorrente } from "./src/models/Corrente.js";
import { Poupanca } from "./src/models/Poupanca.js";

console.log("=== SISTEMA DA CONTA ===");

const poupanca = new Poupanca({
    numeroConta: "111.222.333-44",
    titular: "Carlos Silva",
    saldo: 11999999999,
    taxaAniversario: 1000
});

const corrente = new ContaCorrente({
    numeroConta: "555.666.777-88",
    titular: "Maria Oliveira",
    saldo: 5000,
    limiteCheque: 237623984
});

console.log("\n--- DEMONSTRAÇÃO DE POLIMORFISMO ---");


const exibirPerfil: Conta[] = [poupanca, corrente];


for (const conta of exibirPerfil) {
    conta.exibirPerfil();
}
