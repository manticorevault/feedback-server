const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Bring in the express app
const app = express();

// Configure the passport to use the Google Strategy;
passport.use(new GoogleStrategy());

// Pass the port the app identifies as the active one
const PORT = process.env.PORT || 3333;

// Log the port where it's running 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});