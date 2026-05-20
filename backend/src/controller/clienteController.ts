import { Request, Response } from "express";
import { ClienteService } from "../service/clienteService.js";

export class ClienteController {
  private service = new ClienteService();

  cadastrar = async (req: Request, res: Response) => {
    const cliente = await this.service.cadastrarCliente(req.body);
    return res.status(201).json(cliente);
  };
}