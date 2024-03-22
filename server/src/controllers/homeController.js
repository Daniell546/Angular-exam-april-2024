const express = require("express");
const router = express.Router();
const perfumeManager = require("../managers/perfumeManager");

router.get('/home', async(req, res) => {
    let perfumes = await perfumeManager.getPerfumes().lean();
    // console.log("Perfumes: ", perfumes);
    res.send(perfumes)
    return perfumes;
});

module.exports = router;
