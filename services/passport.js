const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

// Configure the passport to use the Google Strategy with the imported keys
passport.use(
    new GoogleStrategy({ 
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log("Access Token: ", accessToken);
        console.log("Refresh Token: ", refreshToken);
        console.log("Profile: ", profile);
        console.log("Name: ", profile.displayName);
        console.log("E-mail: ", profile.emails[0].value);
    })
);