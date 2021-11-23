const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
});

const category = mongoose.model('Category', CategorySchema);

module.exports = category;