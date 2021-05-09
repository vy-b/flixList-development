const mongoose = require('mongoose');

const rating = new mongoose.Schema({
    stars: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        requried: false
    }
})

const ratingTableEntry = new mongoose.Schema({
    imdbID: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    rating: {
        type: rating,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Ratings', ratingTableEntry);
