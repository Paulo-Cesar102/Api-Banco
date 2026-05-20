import { Router } from "express";
import { ContaController } from "../controller/contaController.js";
import { contaCreateSchema } from "../SchemasZod/contaSchema.js";
import { validateBody } from "../middlewares/Validate/validateBody.js";

const router = Router();
const controller = new ContaController();

router.post(
  "/contas",
  validateBody(contaCreateSchema),
  controller.cadastrarConta
);

export default router;