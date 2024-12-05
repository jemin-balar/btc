// const express = require('express');
// const app = express();
// const connectDB = require('./connection');
// const userRoutes = require('./routes/user.routes');
// const dotenv = require('dotenv');
// require('dotenv').config();
// dotenv.config();
// const port = 9000;

// app.use(express.json());

// connectDB('mongodb://localhost:27017/userDB').then(() => console.log('Connected to MongoDB'));

// app.use("/user", userRoutes);

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
