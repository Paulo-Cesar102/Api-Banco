import "express-async-errors";
import "dotenv/config";
import  express  from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { readFileSync } from "fs";
import { join } from "path";

import clienteRouter from "./routes/clienteRoutes.js";
import transacaoRoutes from "./routes/transacao.routes.js";
import contaRoutes from "./routes/contaRoutes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// Carregar Swagger JSON de forma compatível com ES Modules
const swaggerPath = join(process.cwd(), "src", "swagger.json");
const swaggerDocument = JSON.parse(readFileSync(swaggerPath, "utf-8"));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota de Documentação
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(clienteRouter);
app.use(transacaoRoutes);
app.use(contaRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Docs: http://localhost:${PORT}/docs`);
});