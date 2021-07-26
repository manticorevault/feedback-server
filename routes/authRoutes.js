const passport = require("passport");

module.exports = app => {
    // Handle user authentication on passport and google.
    app.get("/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]
    }));

    // Handle Google authentication callback.
    app.get("/auth/google/callback", passport.authenticate("google"));

    // Retrieves the current user.
    app.get("/api/user", (req, res) => {
        res.send(req.user);
    })
};

