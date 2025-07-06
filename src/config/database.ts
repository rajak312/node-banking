import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME || "",
  password: process.env.DATABASE_PASSWORD || "",
  database: process.env.DATABASE_NAME || "",
  port: parseInt(process.env.DATABASE_PORT || "5432"),
});

export default sequelize;
