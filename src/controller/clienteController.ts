import { Request, Response } from "express";
import { ClienteRepository } from "../repository/clienteRepository.js";

export class ClienteController {
  private repository = new ClienteRepository();

  cadastrar = async (req: Request, res: Response) => {
    const cliente = await this.repository.cadastrarCliente(req.body);
    return res.status(201).json(cliente);
  };
}