const express = require("express");
const router = express.Router();
const propertyManager = require("../managers/perfumeManager");

router.get('/',  (req, res, next) => {
    let properties =  propertyManager.getProperties().then(prop => res.json(prop)); 
    return properties;
});

router.post('/create', async (req, res) => {
    let data = req.body;
    return await propertyManager.create(data.propInfo);
});

module.exports = router;
