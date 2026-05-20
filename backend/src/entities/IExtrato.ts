export interface ITransacoes {
    valor:number,
    tipo:string,
    descricao:string
}

export interface IExtrato {
    nome:string,
    saldo:number,
    transacoes: ITransacoes[]
}