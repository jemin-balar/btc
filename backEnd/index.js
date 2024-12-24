const express = require('express');
const app = express();
const connectDB = require('./connection');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();
dotenv.config();
const port = 9000;

app.use(express.json());
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], //Allowed headers
}));

connectDB('mongodb+srv://beang91999:hlLb2Meh2E6zoMFO@cluster0.3rc68.mongodb.net/btc?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected to MongoDB'));

app.use("/user", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});