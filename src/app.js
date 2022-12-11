import "express-async-errors";
import express from "express";
import { categoriesRoutes } from "./routes/categories.router";
import { productsRoutes } from "./routes/products.router";
import { errorHandler } from "./errors/errors";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);

app.use(errorHandler);

export default app;
