const mongoose = require('mongoose');

const perfumeModel = new mongoose.Schema({
    purpose: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    location: {
        type: String,
    },
    price: {
        type: Number,
    },
    type: {
        type: String,
    },
    description: {
        type: String,
    },
});

const Perfume = mongoose.model('Perfume', perfumeModel);

module.exports = Perfume;