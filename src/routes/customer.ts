import { createCustomer, getCustomers } from "@controller/customer.js";
import { asyncHandler } from "@utils/asyncHandler.js";
import express from "express";

const router = express.Router();

router.post("/", asyncHandler(createCustomer));
router.get("/", asyncHandler(getCustomers));

export default router;
