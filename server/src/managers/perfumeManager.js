const Perfume = require("../models/Perfume");

exports.getPerfumes = () => Perfume.find();

exports.create = (data) => Perfume.create(data);