const carRepository = require('../repository/car.repository');

const doGetAllCars = async () => {
    return await carRepository.findAllCar();
}

module.exports = {doGetAllCars};