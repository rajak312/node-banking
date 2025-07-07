import { createServer } from "http";
import { config } from "dotenv";
import express from "express";
import { healthCheckHandler } from "@routes/health.js";
import sequelize, { ensureAccountNumberSequence } from "@config/database.js";
import { errorHandler } from "@middlewares/errorHandler.js";
import customersRoute from "@routes/customer.js";

config();

const PORT = process.env.PORT;

const app = express();

const server = createServer(app);

app.use(express.json());
app.use("/api/customers", customersRoute);

app.use(healthCheckHandler);

app.use(errorHandler);

async function startServer() {
  await ensureAccountNumberSequence();
  await sequelize.sync({
    alter: true,
  });
  console.log("Connected to the Database");
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
