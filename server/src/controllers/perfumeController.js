const express = require("express");
const router = express.Router();
const perfumeManager = require("../managers/perfumeManager");

router.post('/create', async (req, res) => {
    console.log("req: " + req.user);
    const data = {
        ...req.body,
        // owner_id: req.user._id,
      };
    // console.log(data.owner_id);
    const createdPerfume = await perfumeManager.create(data.perfumeData)
    res.status(200).send(createdPerfume);
    return createdPerfume;
})


router.put('/:perfumeId/edit', async (req, res) => {
  const id = req.params.perfumeId;
  const newData = req.body;
  const perfume = await perfumeManager.edit(id, newData);
  res.send(perfume);
  return perfume
})


module.exports = router;
