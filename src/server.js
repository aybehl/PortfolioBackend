const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();

const express = require("express");
const path = require('path');
const connectDB = require('./configs/database');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const contactRoutes = require('./routes/contactRoutes');

// CONNECT TO MONGO DB
connectDB();

//SET UP THE EXPRESS APP
const app = express();
const PORT = process.env.PORT || "8888";

//SET UP CORS MIDDLEWARE
app.use(cors());

//SET UP FOLDER FOR STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

//Middleware - convert query string formats in form data to JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SET UP ROUTES
app.use('/projects', projectRoutes);
app.use('/skills', skillRoutes);
app.use('/contacts', contactRoutes);

//SETUP SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});