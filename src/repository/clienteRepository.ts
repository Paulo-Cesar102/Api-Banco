import { ClienteCreateDTO } from "../entities/clienteCreateDTO.js";
import { prisma } from "../prisma.js";
import type { Cliente } from "@prisma/client";

export class ClienteRepository {

  async cadastrarCliente(cliente: ClienteCreateDTO): Promise<Cliente> {

    return prisma.cliente.create({
      data: {
        nome: cliente.nome,
        cpf: cliente.cpf,
        email: cliente.email
      }
    });
  }
}