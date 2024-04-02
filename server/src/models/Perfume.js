const mongoose = require("mongoose");

const perfumeModel = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
    },
    count: {
        required: true,
        type: Number,
    },
    imageUrl: {
        required: true,
        type: String,
    },
    model: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
        minLength: 0,
    },
    owner: {
        // required: true,
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

const Perfume = mongoose.model("Perfume", perfumeModel);

module.exports = Perfume;
