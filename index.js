const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

// Bring in the express app
const app = express();

// Configure the passport to use the Google Strategy with the imported keys
passport.use(new GoogleStrategy(
    { 
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    }, (accessToken, refreshToken, profile, done) => {
        console.log("Access Token: ", accessToken);
        console.log("Refresh Token: ", refreshToken);
        console.log("Profile: ", profile);
        console.log("Name: ", profile.displayName);
        console.log("E-mail: ", profile.emails[0].value);
    })
);

// Handle user authentication on passport and google.
app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));

// Handle Google authentication callback.
app.get("/auth/google/callback", passport.authenticate("google"));

// Pass the port the app identifies as the active one
const PORT = process.env.PORT || 5000;

// Log the port where it's running 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});