const mongoose = require('mongoose');

const movieTableEntry = new mongoose.Schema({
    imdbID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: false
    },
    poster: {
        type: String,
        required: false
    },
    rated: {
        type: String,
        required: false
    },
    year: {
        type: String,
        required: false
    },
    runtime: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    actors: {
        type: String,
        required: false
    },
    totalRating: {
        type: Number,
        required: true
    },
    totalUsersRated: {
        type: Number,
        required: true
    }
    
})

module.exports = mongoose.model('Movies', movieTableEntry);