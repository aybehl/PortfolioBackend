const contactModel = require('../models/contact');

const addContact = async (contactData) => {
    try {
        const newContact = new contactModel(contactData);
        await newContact.save();
    } catch(err){
        console.error(`Error saving a new contact - ${err.message}`);
        throw new Error(`Error saving a new contact - ${err}`);
    }
}

module.exports = {
    addContact
};