import { z } from "zod";

export const transferenciaSchema = z.object({
  contaOrigemId: z.coerce.number().int().positive("Conta origem inválida"),
  contaDestinoId: z.coerce.number().int().positive("Conta destino inválida"),
  valor: z.coerce.number().positive("Valor deve ser maior que zero")
});
export type TransferenciaDTO = z.infer<typeof transferenciaSchema>;