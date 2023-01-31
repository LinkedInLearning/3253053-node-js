let config = require('dotenv').config()
const mongoose = require('mongoose');
const { ImageSchema} = require('../models/imageModel')

// Config
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);
const Image = mongoose.model('Image', ImageSchema);

(async () => {
    let db = await mongoose.connect(process.env.CONNECTIONSTRING);
})();

// GET
exports.getImages = () => 
    new Promise((resolve, reject) => {
        try {
            Image.find({}, (err, image) => {
                if (err) {
                    return reject(err);
                }
                resolve(image);
            })
        } catch (error) {
            reject(error)
        }
    });

// GET:id
exports.getImage = async (id) =>
    new Promise((resolve, reject) => {
        try {
            Image.findById(id, (err, image) => {
                if (err)
                    return reject(err);
                resolve(image);
            });
        } catch (error) {
            reject(error);
        }
    });

// POST
exports.addImage = async (image) => {
    let newImage = new Image(image);
    try {
        return await newImage.save();;
    } catch (error) {
        return undefined;
    }
};

// PUT:id
exports.UpdateImage = (id, image) =>
    new Promise((resolve, reject) => {
        try {
            Image.findOneAndUpdate({ _id: id}, image, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        } catch (error) {
            reject(error);
        }
    })

exports.deleteImage = (id, image) =>
    new Promise((resolve, reject) => {
        try {
            Image.remove({ _id: id}, image, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        } catch (error) {
            reject(error);
        }
    })