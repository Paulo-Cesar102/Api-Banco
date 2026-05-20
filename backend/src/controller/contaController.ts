import { Request, Response } from "express";
import { ContaService } from "../service/contaService.js";

export class ContaController {
  private service = new ContaService();

  cadastrarConta = async (req: Request, res: Response) => {
    const conta = await this.service.cadastrarConta(req.body);
    return res.status(201).json(conta);
  };
}
