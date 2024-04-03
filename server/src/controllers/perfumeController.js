const express = require("express");
const router = express.Router();
const perfumeManager = require("../managers/perfumeManager");

router.post('/create', async (req, res) => {
    let data = req.body;
    const createdPerfume = await perfumeManager.create(data.perfumeData)
    res.status(200).send(createdPerfume);
    return createdPerfume;
})



module.exports = router;
