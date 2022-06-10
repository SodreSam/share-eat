const mongoose = require('mongoose')

const recepieSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String
    },
    id: {
        type: Number
    }
});

const RecepieModel = mongoose.model("Recepies", recepieSchema);

module.exports = RecepieModel;