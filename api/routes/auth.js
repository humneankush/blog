const router = require("express").Router();

const User = require("../models/User");

const bcrypt = require("bcrypt");

// router.get("/", (req, res) => {
//   res.status(200).json("working");
// });

// register route
router.post("/register", async (req, res) => {
  try {
    const u = await User.findOne({ email: req.body.email });
    if (u) {
      res.status(300).json("user already exist please provide diffrent email");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
      });

      const user = await newUser.save();
      res.status(201).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("wrong credentials");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("worong credentials");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.log({ err: err.message });
  }
});

module.exports = router;
