const mongoose = require("mongoose");

const Character = mongoose.model("Character", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  imgSrc: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    default: 100
  },
  isBought: {
    type: Boolean
  },
  isAvailable: {
    type: Boolean
  }
});

module.exports = Character;
