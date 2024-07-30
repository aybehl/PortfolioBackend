const skillModel = require('../models/skill');

const getAllSkills = async () => {
    try {
        const skills = await skillModel.find({});
        return skills;
    } catch(err) {
        console.error(`Error fetching all skills from Skills Collection - ${err.message}`);
        throw new Error(`Error fetching all skills from Skills Collection - ${err}`);
    }
};

module.exports = {
    getAllSkills
};