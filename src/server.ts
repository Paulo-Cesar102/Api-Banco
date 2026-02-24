import  express  from "express";
import clienteRouter from "./routes/clienteRoutes.js";
import transacaoRoutes from "./routes/transacao.routes.js";
import contaRoutes from "./routes/contaRoutes.js";
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(clienteRouter);
app.use(transacaoRoutes);
app.use(contaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});