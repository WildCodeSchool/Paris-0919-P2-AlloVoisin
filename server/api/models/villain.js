const mongoose = require("mongoose");

const Villain = mongoose.model("Villain", {
  idLevel: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  damages: {
    type: Number,
    required: true
  },
  healthDivisor: {
    type: Number,
    required: true
  },
  coinAward: {
    type: Number,
    required: true
  },
  bgSrc: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = Villain;
