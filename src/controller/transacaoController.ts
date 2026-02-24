import { Request, Response } from "express";
import { TransacaoRepository } from "../repository/transacaoRepository.js";

export class TransacaoController {
  private repository = new TransacaoRepository();

  deposito = async (req: Request, res: Response) => {
    const contaId = Number(req.params.id);
    await this.repository.deposito(contaId, req.body.valor);

    return res.status(201).json({
      mensagem: "Depósito realizado com sucesso"
    });
  };

  transferencia = async (req: Request, res: Response) => {
    const { contaOrigemId, contaDestinoId, valor } = req.body;

    await this.repository.transferencia(
      contaOrigemId,
      contaDestinoId,
      valor
    );

    return res.status(201).json({
      mensagem: "Transferência realizada com sucesso"
    });
  };

  extrato = async (req: Request, res: Response) => {
    const contaId = Number(req.params.id);
    const extrato = await this.repository.extrato(contaId);
    return res.json(extrato);
  };
}