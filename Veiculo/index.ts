import { Veiculo } from "./src/models/Veiculo.js";
import { Moto } from "./src/models/Moto.js";
import { Carro } from "./src/models/Carro.js";

console.log("=== SISTEMA DO VEÍCULO ===");

const moto = new Moto({
    marca: "Honda",
    modelo: "CBX 250",
    ano: 2020,
    potenciaCl: 25
});

const carro = new Carro({
    marca: "Volkswagen",
    modelo: "Santana",
    ano: 1987,
    potenciaCv: 92
});

const exibirPerfil: Veiculo[] = [moto, carro];

for (const veiculo of exibirPerfil) {
    veiculo.exibirPerfil();
}
