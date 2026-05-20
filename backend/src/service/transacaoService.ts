import { TransacaoRepository } from "../repository/transacaoRepository.js";

export class TransacaoService {
  private transacaoRepository: TransacaoRepository;

  constructor() {
    this.transacaoRepository = new TransacaoRepository();
  }

  async deposito(contaId: number, valor: number) {
    return this.transacaoRepository.deposito(contaId, valor);
  }

  async transferencia(contaOrigemId: number, contaDestinoId: number, valor: number) {
    return this.transacaoRepository.transferencia(contaOrigemId, contaDestinoId, valor);
  }

  async extrato(contaId: number) {
    return this.transacaoRepository.extrato(contaId);
  }
}
