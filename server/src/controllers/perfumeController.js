const express = require("express");
const router = express.Router();
const perfumeManager = require("../managers/perfumeManager");

router.post('/create', async (req, res) => {
    let data = req.body;
    return await perfumeManager.create(data.perfumeData)
})



module.exports = router;
