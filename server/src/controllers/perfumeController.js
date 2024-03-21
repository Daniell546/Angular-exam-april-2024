const express = require("express");
const router = express.Router();
const perfumeManager = require("../managers/perfumeManager");

router.get('/',  async (req, res) => {
    let perfumes = await perfumeManager.getPerfumes().lean(); 
    console.log(perfumes);
    return perfumes;

});



module.exports = router;
