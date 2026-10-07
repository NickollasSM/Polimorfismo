import { VeiculoProps } from "../interface/VeiculoProps.js";

export abstract class Veiculo<T extends VeiculoProps=VeiculoProps> {

    constructor(protected props: T) {}

    public get getMarca(): string { return this.props.marca; }
    public get getModelo(): string { return this.props.modelo; }
    public get getAno(): number { return this.props.ano; }

    public set setMarca(novaMarca: string) {
        if (novaMarca.trim().length === 0) {
            console.log("\n ERRO: A marca não pode ser vazio!");
            return;
        }
        this.props.marca = novaMarca;
    }

    public set setModelo(novoModelo: string) {
        if (novoModelo.trim().length === 0) {
            console.log("\n ERRO: O modelo não pode ser vazio!");
            return;
        }
        this.props.modelo = novoModelo;
    }

    public set setAno(novoAno: number) {
        if (novoAno <= 0) {
            console.log("\n ERRO: O ano não pode ser inválido!");
            return;
        }
        this.props.ano = novoAno;
    }

    public abstract exibirPerfil(): void;
}