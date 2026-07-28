const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  overview: {
    type: String,
    default: "" 
  },
  release_date: {
    type: String
  },
  poster_path: {
    type: String
  }
});


module.exports = mongoose.model("Movie", movieSchema);