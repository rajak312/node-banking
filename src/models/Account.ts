import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@config/database.js";

export interface AccountAttributes {
  id: string;
  accountNumber: string;
  type: "savings" | "current";
  balance: number;
  customerId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AccountCreationAttributes
  extends Optional<
    AccountAttributes,
    "id" | "balance" | "createdAt" | "updatedAt"
  > {}

export class Account
  extends Model<AccountAttributes, AccountCreationAttributes>
  implements AccountAttributes
{
  public id!: string;
  public accountNumber!: string;
  public type!: "savings" | "current";
  public balance!: number;
  public customerId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Account.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set() {
        if (this.accountNumber) {
          throw new Error("accountNumber cannot be updated");
        }
      },
    },
    type: {
      type: DataTypes.ENUM("savings", "current"),
      allowNull: false,
    },
    balance: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Account",
    tableName: "accounts",
    timestamps: true,
  }
);
