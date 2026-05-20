import { Router } from "express";
import { ClienteController } from "../controller/clienteController.js";
import { clienteCreateSchema } from "../SchemasZod/clienteSchema.js";
import { validateBody } from "../middlewares/Validate/validateBody.js";

const router = Router();
const controller = new ClienteController();

router.post(
  "/clientes",
  validateBody(clienteCreateSchema),
  controller.cadastrar
);

export default router;