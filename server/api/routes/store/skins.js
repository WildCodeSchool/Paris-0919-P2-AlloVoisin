const express = require("express");
const router = express.Router();

const Skin = require("../../models/skin");

router.get("/", async (req, res) => {
  try {
    const skins = await Skin.find({});
    res.send(skins);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const skin = await Skin.findById(_id);
    if (!skin) {
      res.status(404).send();
    }
    res.send(skin);
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  const skin = new Skin(req.body);
  try {
    await skin.save();
    res.status(201).send(skin);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "imgSrc", "isBought", "isAvailable"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(404).send({
      error: "Invalid Updates!"
    });
  }
  try {
    const skin = await Skin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!skin) {
      return res.status(404).send();
    }
    res.send(skin);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const skin = await Skin.findByIdAndDelete(req.params.id);
    if (!skin) {
      return res.status(404).send();
    }
    res.send(skin);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
