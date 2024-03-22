const mongoose = require('mongoose');

const perfumeModel = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
    },
    count: {
        type: Number,
    },
    imageUrl: {
        type: String,
    },
    creator_id: {
        type: Number,
    },
    model:{
        type: String,
    },
    price: {
        type: Number,
        minLength: 0
    }
});

const Perfume = mongoose.model('Perfume', perfumeModel);

module.exports = Perfume;