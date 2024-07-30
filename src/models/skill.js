const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    skill_id: {
        type: String,
        unique: true,
        required: true
    },
    skill_name: {
        type: String,
        required: true
    },
    skill_logo: {
        type: String, // Base64-encoded string
        required: true
    },
});

module.exports = mongoose.model('Skills', SkillSchema);