import { z } from "zod";

export const contaCreateSchema = z.object({
  clienteid: z.coerce.number().int().positive(),
  numeroConta: z.string().min(3),
  saldo: z.coerce.number().min(0)
});

export type ContaCreateDTO = z.infer<typeof contaCreateSchema>;