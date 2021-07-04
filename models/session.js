const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: true
    },
    users: {
        type: Array,
        required: false,
    },
    favorites: {
        type: Array,
        required: false,
    },
    tags: {
        type: Array,
        required: false,
    },
    price: {
        type: Array,
        required: false,
    }
});

module.exports = mongoose.model('session', SessionSchema);