const projectModel = require('../models/project');

const getAllProjects = async () => {
    try {
        const projects = await projectModel.find({});
        return projects;
    } catch(err) {
        console.error(`Error fetching all projects from Projects Collection - ${err.message}`);
        throw new Error(`Error fetching all projects from Projects Collection - ${err}`);
    }
};

module.exports = {
    getAllProjects
};