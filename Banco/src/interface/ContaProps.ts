export interface ContaProps {
    numeroConta: string
    titular: string
    saldo: number
}

export interface CorrenteProps extends ContaProps {
   limiteCheque: number
}

export interface PoupancaProps extends ContaProps {
    taxaAniversario: number
}