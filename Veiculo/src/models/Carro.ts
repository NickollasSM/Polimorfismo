import { CarroProps } from "../interface/VeiculoProps.js";
import { Veiculo } from "./Veiculo.js";

export class Carro extends Veiculo<CarroProps> {

constructor(props: CarroProps) {
    super(props);
}

public get getLimite(): number { return this.props.potenciaCv; }

    public set setLimite(novaPotencia: number) {
        if (novaPotencia < 0) {
            console.log("\n ERRO: A potência não pode ser negativ!");
            return;
        }
        this.props.potenciaCv = novaPotencia;
    }

    exibirPerfil(): void {
        console.log(`\n--- PERFIL DO CARRO ---`);
        console.log(`Marca: ${this.props.marca}`);
        console.log(`Modelo: ${this.props.modelo}`);
        console.log(`Ano: ${this.props.ano}`);
        console.log(`Potência (CV): ${this.props.potenciaCv}`);
    } 
}