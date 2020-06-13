const mongoose = require("mongoose");
const searchable = require('mongoose-regex-search');
// post schema with searchable plugin for regex search

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        searchable: true
    },
    body: {
        type: String,
        required: true,
        searchable: true
    },
    postedTime: {
        type: Date,
        default: Date.now
    }
})
postSchema.plugin(searchable);
const Post = new mongoose.model("Post", postSchema);

module.exports = Post;