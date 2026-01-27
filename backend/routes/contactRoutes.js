const express = require("express");
const router = express.Router();
const User = require("../models/User");


// POST - Save contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newContact = new User({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
