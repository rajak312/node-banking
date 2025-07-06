import { createServer } from "http";
import { config } from "dotenv";
import express from "express";
import { healthCheckHandler } from "@routes/health.js";
import sequelize from "@config/database.js";

config();

const PORT = process.env.PORT;

const app = express();

const server = createServer(app);

app.use(express.json());

app.use(healthCheckHandler);

async function startServer() {
  await sequelize.sync({
    alter: true,
  });
  console.log("Connected to the Database");
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
