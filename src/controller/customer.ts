import { RequestHandler } from "express";
import { Customer } from "@models/Customer.js";
import { AppError } from "@utils/AppError.js";

export const createCustomer: RequestHandler = async (req, res) => {
  const { email, address, firstName, lastName, dob, phoneNumber } = req.body;
  if (
    !firstName ||
    !email ||
    !address ||
    !firstName ||
    !lastName ||
    !dob ||
    !phoneNumber
  ) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }
  const customer = await Customer.create({
    email,
    address,
    firstName,
    lastName,
    dob,
    phoneNumber,
  });
  res.status(201).json({
    message: "customer created successfully",
    customer,
  });
};

export const getCustomers: RequestHandler = async (_, res) => {
  const customers = await Customer.findAll();
  res.status(200).json({
    message: "customers fetched successfully",
    customers,
  });
};

export const getById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.findByPk(id);
  if (!customer) {
    new AppError("customer no found", 404);
    return;
  }
  res.status(200).json({
    message: "OK",
    customer,
  });
};
