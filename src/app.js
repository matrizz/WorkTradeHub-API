import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import serviceRoutes from "./routes/services.js";
import transactionRoutes from "./routes/transactions.js";
import reviewRoutes from "./routes/reviews.js";
import searchRoutes from "./routes/search.js";
import notificationRoutes from "./routes/notifications.js";
import portfolioRoutes from "./routes/portfolios.js";
import geolocationRoutes from "./routes/geolocation.js";

dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar ao Banco de Dados
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/portfolios", portfolioRoutes);
app.use("/api/geolocation", geolocationRoutes);

app.get("/", (req, res) => res.send("API WorkTradeHub rodando"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
