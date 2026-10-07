import { CorrenteProps } from "../interface/ContaProps.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta<CorrenteProps> {

constructor(props: CorrenteProps) {
    super(props);
}

public get getLimite(): number { return this.props.limiteCheque; }

    public set setLimite(novoLimite: number) {
        if (novoLimite < 0) {
            console.log("\n ERRO: O limite da conta corrente não pode ser negativo!");
            return;
        }
        this.props.limiteCheque = novoLimite;
    }

    exibirPerfil(): void {
        console.log(`\n--- PERFIL DA CONTA CORRENTE ---`);
        console.log(`Número da Conta: ${this.props.numeroConta}`);
        console.log(`Titular: ${this.props.titular}`);
        console.log(`Saldo: R$ ${this.props.saldo.toFixed(2)}`);
        console.log(`Limite do Cheque Especial: R$ ${this.props.limiteCheque.toFixed(2)}`);
    } 
}