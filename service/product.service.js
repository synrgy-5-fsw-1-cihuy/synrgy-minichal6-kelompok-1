const productRepository = require('../repository/product.repository');

const createProduct = async () => {
    return await productRepository.create();
}

const getAllProduct = async () => {
    return await productRepository.getAll();
}

const getProductById = async () => {
    return await productRepository.getById();
}

const updateProduct = async () => {
    return await productRepository.update();
}

const deleteProduct = async () => {
    return await productRepository.deleteProduct()
}

module.exports = {createProduct, getAllProduct, getProductById, updateProduct, deleteProduct};