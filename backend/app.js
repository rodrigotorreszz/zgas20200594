// Importo todo lo de la libreria express
import express from "express";
import ProductsRoutes from "./src/routes/products.js";
import ClientRoutes from "./src/routes/clients.js";
import EmplooyesRoutes from "./src/routes/employees.js";
import OfficeRoutes from "./src/routes/office.js";

// creo una constante que es igual a la libreria
// que acabo de importar y la ejecuto
const app = express();

//middleware para que acepte datos JSON
app.use(express.json());

app.use("/api/products", ProductsRoutes);
app.use("/api/clients", ClientRoutes);
app.use("/api/employees", EmplooyesRoutes);
app.use("/api/office", OfficeRoutes);

// exporto esta constante para usar express en todos lados
export default app;
