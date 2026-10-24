import express from "express";
import {getAllProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

// API endpoint to get all products
router.get("/", getAllProducts);

// API endpoint to create a new product
router.post("/", createProduct);

// API endpoint to get a product by ID and update it
router.put("/:id", updateProduct);

// API endpoint to DELETE a product by ID
router.delete("/:id", deleteProduct);

export default router;
