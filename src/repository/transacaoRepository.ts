import { prisma } from "../prisma.js";
import { ContaRepository } from "./contaRepository.js";

export class TransacaoRepository {

  async deposito(contaId: number, valor: number) {
    if (valor <= 0) {
      throw new Error("Valor inválido");
    }

    return prisma.$transaction(async (tx) => {

      const conta = await tx.conta.findUnique({
        where: { id: contaId }
      });

      if (!conta) {
        throw new Error("Conta não encontrada");
      }

      await tx.conta.update({
        where: { id: contaId },
        data: {
          saldo: { increment: valor }
        }
      });

      return tx.transacao.create({
        data: {
          conta_id: contaId,
          tipo: "DEPOSITO",
          valor,
          descricao: "Depósito em conta"
        }
      });
    });
  }

  async transferencia(
    contaOrigemId: number,
    contaDestinoId: number,
    valor: number
  ) {

    if (contaOrigemId === contaDestinoId) {
      throw new Error("Transferência para a mesma conta não permitida");
    }

    if (valor <= 0) {
      throw new Error("Valor inválido");
    }

    return prisma.$transaction(async (tx) => {

      const origem = await tx.conta.findUnique({
        where: { id: contaOrigemId }
      });

      const destino = await tx.conta.findUnique({
        where: { id: contaDestinoId }
      });

      if (!origem || !destino) {
        throw new Error("Conta inválida");
      }

      // 🔥 AJUSTE CRÍTICO
      if (origem.saldo.toNumber() < valor) {
        throw new Error("Saldo insuficiente");
      }

      await tx.conta.update({
        where: { id: contaOrigemId },
        data: {
          saldo: { decrement: valor }
        }
      });

      await tx.conta.update({
        where: { id: contaDestinoId },
        data: {
          saldo: { increment: valor }
        }
      });

      await tx.transacao.createMany({
        data: [
          {
            conta_id: contaOrigemId,
            tipo: "TRANSFERENCIA_SAIDA",
            valor,
            descricao: "Transferência enviada"
          },
          {
            conta_id: contaDestinoId,
            tipo: "TRANSFERENCIA_ENTRADA",
            valor,
            descricao: "Transferência recebida"
          }
        ]
      });
    });
  }

  async extrato(contaId: number) {
    return prisma.transacao.findMany({
      where: { conta_id: contaId },
      orderBy: { created_at: "desc" }
    });
  }
}
