const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check empty
    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // check existing user
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // save user
    const user = await User.create({
      email,
      password,
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser };
