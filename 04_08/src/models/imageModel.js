const mongoose = require("mongoose");

const Schema = mongoose.Schema;

exports.ImageSchema = new Schema({
    copyright: {
        type: String,
    },
    title: {
        type: String,
        required: 'The title is required.'
    },
    service_version: {
        type: String,
        required: 'The service_version is required.'
    },    
    media_type: {
        type: String,
        required: 'The url is required.'
    },        
    explanation: {
        type: String,
        required: 'The explanation is required.'
    },    
    url: {
        type: String,
        required: 'The url is required.'
    },    
    hdurl: {
        type: String,
        required: 'The explanation is required.'
    },   
    date: {
        type: String,
        required: 'The date is required.'
    },      
});