const express = require("express");
const router = express.Router();

const Character = require("../../models/character");

router.get("/", async (req, res) => {
  try {
    const characters = await Character.find({});
    res.send(characters);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const character = await Character.findById(_id);
    if (!character) {
      res.status(404).send();
    }
    res.send(character);
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  const character = new Character(req.body);
  try {
    await character.save();
    res.status(201).send(character);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  console.log(req.params.id);

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
    const character = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (!character) {
      return res.status(404).send();
    }
    res.send(character);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const character = await Character.findByIdAndDelete(req.params.id);
    if (!character) {
      return res.status(404).send();
    }
    res.send(character);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
