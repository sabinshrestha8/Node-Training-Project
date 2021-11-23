const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
     name: {
        type: String,
        required: true, 
        trim: true
    },
    categoryName: {
        type: String,
        required: true,
        trim: true
    },
    artist: {
        type: String,
        required: true,
        trim: true
    },
    creatorId: {
        type: String
    }
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;