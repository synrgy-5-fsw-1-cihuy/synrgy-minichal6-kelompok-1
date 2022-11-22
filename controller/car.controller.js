const formidableMiddleware = require('formidable');
const cloudinaryConfig = require('../config/cloudinary');
const models = require('../models');
const Car = models.Car;
const carService = require('../service/car.service');

// get all car handler
const getAllCarHandler = async (request, response) => {
    const cars = await carService.doGetAllCars();

    response.status(200).json({data: cars})
}

const createCarHandler = (request, response) => {
    const form = formidableMiddleware({});

    form.parse(request, (err, fields, files) => {
        if(err) {
            next(err);
            return;
        }

        cloudinaryConfig.uploader.upload(files.photo.filepath, function(err, result) {
            if(err) {
                next(err);
                return;
            }

            Car.create({
                name: fields.name,
                price: fields.price,
                size: fields.size,
                photo: result.secure_url
            }).then(result => {
                response.status(201).json({message: "Car successfully created", body: fields})
            })
        })
    })
}

// get car by id
const getCarByIdHandler = (request, response) => {
    Car.findByPk(request.params.id).then(result => {
        if(result == null) {
            response.status(404).json({message: "Car not found"});
            return;
        }
        
        response.status(200).json({data: result})
    })
}

module.exports = {getAllCarHandler, getCarByIdHandler, createCarHandler};