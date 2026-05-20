import { describe, it, expect, vi } from "vitest";
import { TransacaoService } from "../service/transacaoService.js";
import { TransacaoRepository } from "../repository/transacaoRepository.js";
import { AppError } from "../middlewares/AppError.js";

// Mock do repositório usando uma classe real para o Vitest não reclamar do construtor
vi.mock("../repository/transacaoRepository.js", () => {
  return {
    TransacaoRepository: class {
      transferencia = vi.fn().mockImplementation(async (origem: number, destino: number, valor: number) => {
        if (valor > 1000) {
          throw new AppError("Saldo insuficiente", 400);
        }
        return { id: 1, status: "success" };
      });
      deposito = vi.fn();
      extrato = vi.fn();
    }
  };
});

describe("TransacaoService", () => {
  it("deve permitir uma transferência com saldo suficiente", async () => {
    const service = new TransacaoService();
    const result = await service.transferencia(1, 2, 500);
    
    expect(result).toBeDefined();
  });

  it("deve falhar em uma transferência com saldo insuficiente", async () => {
    const service = new TransacaoService();
    
    await expect(service.transferencia(1, 2, 5000))
      .rejects.toThrow("Saldo insuficiente");
  });
});
