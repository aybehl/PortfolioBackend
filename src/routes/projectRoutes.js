const express = require('express');
const router = express.Router();
const { getAllProjects } = require('../collections/projectCollection');

/**
 * GET /projects
 * Get all projects
 **/
router.get('/', async (req, res) => {
    try {
        const projects = await getAllProjects();
        res.status(200).json({
            status: 200,
            data: projects,
            message: 'Projects sent successfully',
            api: '/projects',
        });
    } catch(err){
        console.error(`Error occurred for API - GET /projects - ${err}`);

        res.status(500).json({
            status: 500,
            method: 'GET',
            api: '/projects',
            errorMessage: 'An error occurred while fetching projects.',
            details: err.message
        });
    }
});

module.exports = router;