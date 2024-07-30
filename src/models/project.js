const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    project_id: {
        type: String,
        unique: true,
        required: true
    },
    project_name: {
        type: String,
        required: true
    },
    github_link: {
        type: String,
        required: true
    },
    cover_picture: {
        type: String, // Base64-encoded string
        required: true
    },
    project_description: {
        type: [String],
        required: true
    },
    project_tags: {
        type: Array,
        required: true
    },
});

module.exports = mongoose.model('Projects', ProjectSchema);