import { Request, Response } from "express";
import { ContaRepository } from "../repository/contaRepository.js";

export class ContaController {
  private repository = new ContaRepository();

  cadastrarConta = async (req: Request, res: Response) => {
    const conta = await this.repository.cadastrarConta(req.body);
    return res.status(201).json(conta);
  };
}
