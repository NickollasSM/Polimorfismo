import {PoupancaProps} from "../interface/ContaProps.js" 
import {Conta} from "./Conta.js"

export class Poupanca extends Conta<PoupancaProps> {

constructor(props: PoupancaProps) {
    super(props);
}

public get getRendimento(): number { return this.props.taxaAniversario; }

    public set setRendimento(novoRendimento: number) {
        if (novoRendimento < 0) {
            console.log("\n ERRO: A taxa de aniversário da poupança não pode ser negativo!");
            return;
        }
        this.props.taxaAniversario = novoRendimento;
    }

    public exibirPerfil(): void {
        console.log(`\n--- PERFIL DA POUPANÇA ---`);
        console.log(`Número da Conta: ${this.props.numeroConta}`);
        console.log(`Titular: ${this.props.titular}`);
        console.log(`Saldo: R$ ${this.props.saldo.toFixed(2)}`);
        console.log(`Taxa de Aniversário: ${this.props.taxaAniversario}%`);
    }
}