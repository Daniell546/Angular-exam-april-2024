const express = require('express');
const router = express.Router();
const propertyManager = require("../managers/perfumeManager");



router.get('/home', async (req, res) => {
    const properties = await propertyManager.getProperties().lean();

    return properties;
})







module.exports = router;