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

import { QueryTypes } from "sequelize";

export const ensureAccountNumberSequence = async () => {
  const result = await sequelize.query(
    `SELECT COUNT(*) as count 
     FROM information_schema.sequences 
     WHERE sequence_name = 'account_number_seq'`,
    { type: QueryTypes.SELECT }
  );

  const exists = parseInt((result[0] as any).count, 10) > 0;

  if (!exists) {
    console.log("⚠️ Creating missing sequence: account_number_seq");
    await sequelize.query(`
      CREATE SEQUENCE account_number_seq
      START 100000000000
      INCREMENT 1;
    `);
    console.log("✅ Sequence created.");
  } else {
    console.log("✅ Sequence already exists.");
  }
};

export default sequelize;
