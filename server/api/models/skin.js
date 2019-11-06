const mongoose = require("mongoose");

const Skin = mongoose.model("Skin", {
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

module.exports = Skin;
