const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const { protect } = require("../middleware/auth.middleware");
const User = require("../models/user.model");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/favorites/:movieId", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const movieId = req.params.movieId;

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const isFav = user.favorites.includes(movieId);

    if (isFav) {
      user.favorites = user.favorites.filter((id) => id.toString() !== movieId);
    } else {
      user.favorites.push(movieId);
    }

    await user.save();
    res.json({ success: true, favorites: user.favorites, isFavorite: !isFav });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/favorites", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favorites");
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.json({ success: true, data: user.favorites });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
