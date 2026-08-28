const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res
      .status(401)
      .json({
        success: false,
        error: "Not authorized to access this route. No token provided.",
      });
  }

  try {
    const secret = process.env.JWT_SECRET || "super_secret_key_123";
    const decoded = jwt.verify(token, secret);

    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, error: "Not authorized. Invalid token." });
  }
};

exports.admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res
      .status(403)
      .json({
        success: false,
        error: "Access denied. Only admins can perform this action.",
      });
  }
};
