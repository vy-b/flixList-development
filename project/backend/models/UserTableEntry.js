const mongoose = require('mongoose');

const userTableEntry = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Users', userTableEntry);
