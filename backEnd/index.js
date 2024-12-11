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
    origin: 'https://api.uniteshopes.com/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], //Allowed headers
}));

connectDB('mongodb+srv://balarjemin701:NIbdBFj85j0OmEYM@cluster0.ysgez0m.mongodb.net/btc?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected to MongoDB'));

app.use("/user", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});