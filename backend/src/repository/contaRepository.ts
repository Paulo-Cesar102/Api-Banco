import { ContaCreateDTO } from "../entities/contaCreateDTO.js";
import { prisma } from "../prisma.js";
import type { conta } from "@prisma/client";

export class ContaRepository {

  async cadastrarConta(conta: ContaCreateDTO): Promise<conta> {
    return prisma.conta.create({
      data: {
        numero: conta.numeroConta,
        cliente_id: conta.clienteid,
        saldo: conta.saldo
      }
    });
  }

  async findByClienteId(clienteId: number): Promise<conta | null> {
    return prisma.conta.findFirst({
      where: { cliente_id: clienteId }
    });
  }
}