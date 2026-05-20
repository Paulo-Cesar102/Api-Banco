import { Request, Response } from "express";
import { TransacaoService } from "../service/transacaoService.js";

export class TransacaoController {
  private service = new TransacaoService();

  deposito = async (req: Request, res: Response) => {
    const contaId = Number(req.params.id);
    await this.service.deposito(contaId, req.body.valor);

    return res.status(201).json({
      mensagem: "Depósito realizado com sucesso"
    });
  };

  transferencia = async (req: Request, res: Response) => {
    const { contaOrigemId, contaDestinoId, valor } = req.body;

    await this.service.transferencia(
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
    const extrato = await this.service.extrato(contaId);
    return res.json(extrato);
  };
}