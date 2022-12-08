'use strict'

const cloudinaryConfig = require('../config/cloudinary')
const models = require('../models')
const carModel = models.Car
const controller = {}

controller.getAll = async (req, res) => {
    let carData = await carModel.findAll({}).catch((err)=>{
        console.log(err)
        res.end(err)
        return
    })

    res.json(carData)
    return
}

controller.getOne = async (req, res) => {
    let params = req.params

    let carData = await carModel.findOne({
        where: {
            'id': params.id
        }
    })

    if (carData == null) {
        res.end('Car not found.')
        return
    }

    res.json(carData)
    return
}

controller.insertOne = async (req, res) => {
    let fields = req.fields
    let files = req.files

    if(fields.name == undefined || fields.rent_per_day == undefined || fields.capacity == undefined || files.image == undefined) {
        res.end("Data not complete.")
        return
    }

    await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
        if (!!err) {
            res.end("Upload image failed.")
            return
        }

        let data = {
            name: fields.name,
            image: result.secure_url,
            rentPerDay: fields.rent_per_day,
            capacity: fields.capacity,
        }

        await carModel.create(data).catch((err)=>{
            console.log(err)
            res.end(err)
            return
        })

        res.json(data)
        return
    })
    return
}

controller.updateFull = async (req, res) => {
    let fields = req.fields
    let files = req.files
    let params = req.params

    if(fields.name == undefined || fields.rent_per_day == undefined || fields.capacity == undefined || files.image == undefined) {
        res.end("Data not complete.")
        return
    }

    let carData = await carModel.findOne({
        where: {
            'id': params.id
        }
    })

    if (carData == null) {
        res.end('Car not found.')
        return
    }

    let carUrl = carData.image.split('/')

    let filename = carUrl[carUrl.length -2] + '/' + carUrl[carUrl.length -1].split('.')[0]

    let data = {
        name: fields.name,
        rentPerDay: fields.rent_per_day,
        capacity: fields.capacity,
    }

    await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
        if (!!err) {
            res.end("Upload image failed.")
            return
        }

        data.image = result.secure_url

        await carModel.update(data, {
            where: {
                'id': params.id
            }
        }).catch((err)=>{
            console.log(err)
            res.end(err)
            return
        })
        
        await cloudinaryConfig.uploader.destroy(filename)
        
        res.json(data)
        return
    })
    return
}

controller.updatePartially = async (req, res) => {
    let fields = req.fields
    let files = req.files
    let params = req.params

    let carData = await carModel.findOne({
        where: {
            'id': params.id
        }
    })
    
    if (carData == null) {
        res.end('Car not found.')
        return
    }
    
    let carUrl = carData.image.split('/')

    let filename = carUrl[carUrl.length -2] + '/' + carUrl[carUrl.length -1].split('.')[0]

    let data = {}

    if(fields.name != undefined) {
        data.name = fields.name
    }

    if(fields.rent_per_day != undefined) {
        data.rentPerDay = fields.rent_per_day
    }

    if(fields.capacity != undefined) {
        data.capacity = fields.capacity
    }

    if(files.image != undefined) {
        await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
            if (!!err) {
                res.end("Upload image failed.")
                return
            }
    
            data.image = result.secure_url
    
            await carModel.update(data, {
                where: {
                    'id': params.id
                }
            })
    
            await cloudinaryConfig.uploader.destroy(filename)
            
            res.json(data)
            return
        })
    } else {
        await carModel.update(data, {
            where: {
                'id': params.id
            }
        })
        
        res.json(data)
    }
    return
}

controller.delete = async (req, res) => {
    let params = req.params

    let carData = await carModel.findOne({
        where: {
            'id': params.id
        }
    })

    if (carData == null) {
        res.end('Car not found.')
        return
    }

    let carUrl = carData.image.split('/')

    let filename = carUrl[carUrl.length -2] + '/' + carUrl[carUrl.length -1].split('.')[0]

    await carModel.destroy({
        where: {
            'id': params.id
        }
    })
    
    await cloudinaryConfig.uploader.destroy(filename)

    res.end('Success deleting car.')
    return
}

module.exports = controller;