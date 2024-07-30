const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    // contact_id: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    contact_name: {
        type: String,
        required: true
    },
    contact_email: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Contacts', ContactSchema);