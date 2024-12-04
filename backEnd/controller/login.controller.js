const user_signin = require('../model/user.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

async function userLogin(req, res) {
    try {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        const user = await user_signin.findOne({ name: name, password: password });
        if (!user) {
            return res.status(400).json({ message: "user not found" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({code: 200, message: "Login successful", token: token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = userLogin;