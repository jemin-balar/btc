const signup_user = require('../model/user.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

async function userRegistration(req, res) {
    try {
        const { name, password } = req.body;

        if (!name || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const existingUser = await signup_user.findOne({ name });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new signup_user({ name, password });

        await newUser.save();

        const token = jwt.sign({ name: newUser.name }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = userRegistration;
