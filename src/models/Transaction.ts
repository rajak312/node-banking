import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@config/database.js";

export interface TransactionAttributes {
  id: string;
  amount: number;
  type: "credit" | "debit";
  description?: string;
  accountId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TransactionCreationAttributes
  extends Optional<
    TransactionAttributes,
    "id" | "description" | "createdAt" | "updatedAt"
  > {}

export class Transaction
  extends Model<TransactionAttributes, TransactionCreationAttributes>
  implements TransactionAttributes
{
  public id!: string;
  public amount!: number;
  public type!: "credit" | "debit";
  public description?: string;
  public accountId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Transaction.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("credit", "debit"),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Transaction",
    tableName: "transactions",
    timestamps: true,
  }
);
