import { z } from "zod";

export const depositoSchema = z.object({
  valor: z.coerce.number().positive("Valor deve ser maior que zero")
});

export type DepositoDTO = z.infer<typeof depositoSchema>;