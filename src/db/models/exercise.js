const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema({
    "name" : {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "img": {
        type: String,
        required: true
    },
    "parameters": {
        "duracion": {type: Number, default: 60} 
    },
    "params_description": {
        "Duración": {type: String, default: "Duración del ejercicio en segundos"},
    }
})

module.exports = mongoose.model('Exercise', exerciseSchema)