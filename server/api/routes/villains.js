const express = require("express");
const router = express.Router();

const Villain = require("../models/villain");

router.get("/", async (req, res) => {
  try {
    const villains = await Villain.find();
    res.status(201).send(villains);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const villain = await Villain.findById(req.params.id);
    if (!villain) {
      res.status(404).send();
    }
    res.status(201).send(villain);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const villain = new Villain(req.body);
  try {
    await villain.save();
    res.status(201).send(villain);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "idLevel",
    "name",
    "image",
    "damages",
    "healthDivisor",
    "coinAward",
    "bgSrc"
  ];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(404).send({
      error: "Invalid updates!"
    });
  }
  try {
    const villain = await Villain.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!villain) {
      res.status(404).send();
    }
    res.status(201).send(villain);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const villain = await Villain.findOneAndDelete(req.params.id);
    if (!villain) {
      res.status(404).send();
    }
    res.send(villain);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
