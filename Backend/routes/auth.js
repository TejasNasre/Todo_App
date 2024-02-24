const router = require("express").Router();
const User = require("../models/user.model.js");

//SignIn Router
router.post("/register", async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const user = new User({username,email,password});
        await user.save().then(() => 
            res.status(200).json({user : user}))
    } catch (error) {
        const err = res.status(400).json({messgae : 'User Already Exist !'})
        console.log(err)
    }
});

module.exports = router;
