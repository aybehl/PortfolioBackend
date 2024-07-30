const express = require('express');
const router = express.Router();
const { getAllSkills } = require('../collections/skillCollection');

/**
 * GET /skills
 * Get all skills
 **/
router.get('/', async (req, res) => {
    try {
        const skills = await getAllSkills();
        res.status(200).json({
            status: 200,
            data: skills,
            message: 'Skills sent successfully',
            api: '/skills',
        });
    } catch(err){
        console.error(`Error occurred for API - GET /skills - ${err}`);
        res.status(500).json({
            status: 500,
            method: 'GET',
            api: '/skills',
            errorMessage: 'An error occurred while fetching skills.',
            details: err.message
        });
    }
});

module.exports = router;