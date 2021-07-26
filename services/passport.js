const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("users");

// Serialize and deserialize users
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        }); 
});

// Configure the passport to use the Google Strategy with the imported keys
passport.use(
    new GoogleStrategy({ 
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    }, 
    // Check if User already exists based on googleID. If not, create the new user.
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleID: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    new User({ googleID: profile.id })
                        .save()
                        .then(user => done(null, user));

                }
            });
        })   
);