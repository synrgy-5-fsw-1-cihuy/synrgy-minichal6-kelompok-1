
const models = require('../models');
const Product = models.Product;
const productService = require('../service/product.service');

const createProductHandler = async (request, response) => {
    try {
        const {name, description, price} = request.body;
        const result = await Product.create({name, description, price});

        response.status(201).json({
            message: "Product succesfully created",
            data: result
        })
    } catch(err){
        console.error(err);
        throw err;
    }

}
const getAllProductHandler = async (request, response) => {
    try{
        const result = await Product.findAll();
        
        response.status(200).json({data: result});
    } catch(err){
        console.error(err);
        throw err;
    }
}

const getProductByIdHandler = async (request, response) => {
    const result = await Product.findByPk(request.params.id);

    response.status(200).json({data: result});
}

const updateProductHandler = async (request, response) => {
    try {
        const product = await Product.findByPk(request.params.id);
        if (!product) {
          response.status(404).json({ message: "Not found" });
          return;
        }
        const { name, description, price } = request.body;
        if (!name && !description && !price) {
          response.status(400).json({ message: "Error" });
          return;
        }
        await product.update(request.body);
        response.json({ message: "Product has been updated" });
      } catch (err) {
        console.error(error);
        throw err;
      }
}

const deleteProductHandler = async (request, response) => {
    const getById = await Product.findByPk(request.params.id);

    if (getById == null) {
        response.status(404).json({message: "Product not found"});
    }

    await Product.destroy({where: {id: request.params.id}});

    response.status(204).json({data: {}})

}

module.exports = {createProductHandler, getAllProductHandler, getProductByIdHandler, updateProductHandler, deleteProductHandler};



// const createProductHandler = async (request, response) => {
//     const products = await productService.createProduct();

// }
// const getAllProductHandler = async (request, response) => {
//     const products = await productService.getAllProduct();
// }

// const getProductByIdHandler = async (request, response) => {
//     const products = await productService(request.params.id)
// }