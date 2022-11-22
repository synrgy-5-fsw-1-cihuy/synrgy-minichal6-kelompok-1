const models = require('../models');
const Product = models.Product;

const create = async () => {
    return await Product.create();
}

const getAll = async () => {
    return await Product.findAll();
}

const getById = async () => {
    return await Product.findByPk();
}

const update = async () => {
    return await Product.update();
}

const deleteProduct = async () => {
    return await Product.delete();
}
module.exports = {create, getAll, getById, update, deleteProduct};