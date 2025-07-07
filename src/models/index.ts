import { Customer } from "./Customer.js";
import { Account } from "./Account.js";
import { Transaction } from "./Transaction.js";
import { Card } from "./Card.js";

Customer.hasMany(Account, { foreignKey: "customerId" });
Account.belongsTo(Customer, { foreignKey: "customerId" });

Account.hasMany(Transaction, { foreignKey: "accountId" });
Transaction.belongsTo(Account, { foreignKey: "accountId" });

Customer.hasMany(Card, { foreignKey: "customerId" });
Card.belongsTo(Customer, { foreignKey: "customerId" });

Account.hasMany(Card, { foreignKey: "accountId" });
Card.belongsTo(Account, { foreignKey: "accountId" });
