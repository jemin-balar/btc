const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    jabber: {
        type: String
    },
    created_At: {
        type: Date,
        default: new Date()
    },
    updated_At: {
        type: Date,
        default: new Date()
    }
});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;