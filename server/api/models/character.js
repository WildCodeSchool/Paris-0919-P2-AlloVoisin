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
  }
});

module.exports = Character;
