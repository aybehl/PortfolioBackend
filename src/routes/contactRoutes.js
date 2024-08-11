const express = require('express');
const router = express.Router();
const { addContact } = require('../collections/contactCollection');

/**
 * POST /contact/add
 * Add a new Contact
 */
router.post('/add', async(req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email) {
        return res.status(400).send({
            method: 'POST',
            api: '/contact/add',
            status: 400,
            errorMessage: 'All fields are required'
        });
    }

    try {
        const contactData = {
            contact_name: name,
            contact_email: email,
            message,
        };

        await addContact(contactData);
        
        res.status(201).json({
            status: 201,
            data: contactData,
            message: 'Contact added successfully',
            api: '/contact/add',
        });
    } catch(err){
        console.error(`Error occurred for API - POST /contact/add - ${err}`);
        res.status(500).send({
            method: 'POST',
            api: '/contact/add',
            status: 500,
            errorMessage: 'An error occurred while adding the contact',
            details: err.message
        });
    }
});

module.exports = router;
