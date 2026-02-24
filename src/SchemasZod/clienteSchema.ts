import { z } from "zod";

export const clienteCreateSchema = z.object({
  nome: z.string().min(3),
  cpf: z.string().min(11),
  email: z.string().email()
});

export type ClienteCreateDTO = z.infer<typeof clienteCreateSchema>;