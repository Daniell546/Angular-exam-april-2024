const mongoose = require("mongoose");

const perfumeModel = new mongoose.Schema({
    id: {
        type: Number,
    },
    brand: {
        type: String,
        // required: true,
    },
    model: {
        // required: true,
        type: String,
    },
    amount: {
        // required: true,
        type: Number,
    },
    imageUrl: {
        // required: true,
        type: String,
    },
    price: {
        // required: true,
        type: Number,
        minLength: 0,
    },
    description: {
        // required: true,
        type: String,
    },
    owner: {
        // required: true,
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

const Perfume = mongoose.model("Perfume", perfumeModel);

module.exports = Perfume;
