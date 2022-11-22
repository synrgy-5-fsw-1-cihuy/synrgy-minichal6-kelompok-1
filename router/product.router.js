const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');

// create
router.post("/products", productController.createProductHandler);

// get all product
router.get("/products", productController.getAllProductHandler);

// get product by id
router.get("/products/:id", productController.getProductByIdHandler);

// update
router.put("/products/:id", productController.updateProductHandler);

// delete
router.delete("/products/:id", productController.deleteProductHandler);

module.exports = router;