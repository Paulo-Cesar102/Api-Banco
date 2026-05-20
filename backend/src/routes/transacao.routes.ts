import { Router } from "express";
import { TransacaoController } from "../controller/transacaoController.js";
import { depositoSchema } from "../SchemasZod/depositoSchema.js";
import { transferenciaSchema } from "../SchemasZod/transferenciaSchema.js";
import { validateBody } from "../middlewares/Validate/validateBody.js";

const router = Router();
const controller = new TransacaoController();

router.post(
  "/contas/:id/deposito",
  validateBody(depositoSchema),
  controller.deposito
);

router.post(
  "/contas/transferencia",
  validateBody(transferenciaSchema),
  controller.transferencia
);

router.get("/contas/:id/extrato", controller.extrato);

export default router;