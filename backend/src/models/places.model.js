const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    recepies: {
        type: Number,
    },
    id: {
        type: Number,
    }
});

const PlaceModel = mongoose.model("Places", placeSchema);

module.exports = PlaceModel;