const mongoose = require('mongoose');

const friendTableEntry = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    friendUsername: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Friends', friendTableEntry);
