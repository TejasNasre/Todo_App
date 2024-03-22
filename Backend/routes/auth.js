const router = require("express").Router();
const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");

//SignIn Router
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password);
    const user = new User({ username, email, password: hashPassword });
    await user
      .save()
      .then(() => res.status(201).json({ message: "Sign Up Successful !" }));
  } catch (error) {
    const err = res.status(200).json({ message: "User Already Exist !" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    if (!user) {
      res.status(200).json({ message: "Please Register First" });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      res.status(200).json({ message: "Invalid Password" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ message : "SuccessFully Login" , others });
  } catch (error) {
    res.status(200).json({ message: "Invalid User" });
  }
});

module.exports = router;
