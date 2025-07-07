import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@config/database.js";

export interface CustomerAttributes {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phoneNumber: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CustomerCreationAttributes
  extends Optional<CustomerAttributes, "id" | "createdAt" | "updatedAt"> {}

export class Customer
  extends Model<CustomerAttributes, CustomerCreationAttributes>
  implements CustomerAttributes
{
  public id!: string;
  public firstName!: string;
  public lastName!: string;
  public dob!: Date;
  public email!: string;
  public phoneNumber!: string;
  public address!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Customer.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Customer",
    tableName: "customers",
    timestamps: true,
  }
);
