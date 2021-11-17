const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    post_date: Date,
    post_data: String,
});

module.exports = mongoose.model('post', postSchema);