export interface VeiculoProps {
    marca: string
    modelo: string
    ano: number
}

export interface CarroProps extends VeiculoProps {
   potenciaCv: number
}

export interface MotoProps extends VeiculoProps {
    potenciaCl: number
}