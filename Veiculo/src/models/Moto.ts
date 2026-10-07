
import { MotoProps } from "../interface/VeiculoProps.js";
import { Veiculo } from "./Veiculo.js";

export class Moto extends Veiculo<MotoProps> {

constructor(props: MotoProps) {
    super(props);
}

public get getRendimento(): number { return this.props.potenciaCl; }

    public set setRendimento(novoRendimento: number) {
        if (novoRendimento < 0) {
            console.log("\n ERRO: A potência não pode ser negativa!");
            return;
        }
        this.props.potenciaCl = novoRendimento;
    }

    public exibirPerfil(): void {
        console.log(`\n--- PERFIL DA MOTO ---`);
        console.log(`Marca: ${this.props.marca}`);
        console.log(`Modelo: ${this.props.modelo}`);
        console.log(`Ano: ${this.props.ano}`);
        console.log(`Potência (CV): ${this.props.potenciaCl}`);
    }
}