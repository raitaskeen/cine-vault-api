const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const secret = process.env.JWT_SECRET || "super_secret_key_123";
  return jwt.sign({ id }, secret, { expiresIn: "30d" });
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, error: "User already exists" });
    }

    const user = await User.create({ name, email, password, role });

    const token = generateToken(user._id);

    res
      .status(201)
      .json({
        success: true,
        token,
        user: { id: user._id, name: user.name, role: user.role },
      });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({
          success: false,
          error: "Please provide an email and password",
        });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res
      .status(200)
      .json({
        success: true,
        token,
        user: { id: user._id, name: user.name, role: user.role },
      });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
