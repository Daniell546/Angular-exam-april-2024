const express = require("express");
const router = express.Router();
const perfumeManager = require("../managers/perfumeManager");
const auth = require("../midddlewares/authMiddleware");

router.post("/create", async (req, res) => {
    const data = { ...req.body };
    const createdPerfume = await perfumeManager.create(data);
    res.status(200).send(createdPerfume);
    return createdPerfume;
});

router.put("/:perfumeId/edit", async (req, res) => {
    const id = req.params.perfumeId;
    const newData = req.body;
    const perfume = await perfumeManager.edit(id, newData);
    res.send(perfume);
    return perfume;
});


router.delete('/:perfumeId/delete', async (req, res) => {
    const id = req.params.perfumeId;
    const deletedPerfume = await perfumeManager.delete(id)
    res.send(deletedPerfume);
    return deletedPerfume;
})

module.exports = router;
