import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@config/database.js";

export interface CardAttributes {
  id: string;
  cardNumber: string;
  cardType: "debit" | "credit";
  expiryDate: string;
  cvv: string;
  customerId: string;
  accountId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CardCreationAttributes
  extends Optional<CardAttributes, "id" | "createdAt" | "updatedAt"> {}

export class Card
  extends Model<CardAttributes, CardCreationAttributes>
  implements CardAttributes
{
  public id!: string;
  public cardNumber!: string;
  public cardType!: "debit" | "credit";
  public expiryDate!: string;
  public cvv!: string;
  public customerId!: string;
  public accountId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Card.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cardType: {
      type: DataTypes.ENUM("debit", "credit"),
      allowNull: false,
    },
    expiryDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    accountId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Card",
    tableName: "cards",
    timestamps: true,
  }
);
