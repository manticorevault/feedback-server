const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./models/User");
require("./services/passport");

// Connect to MongoDB Atlas
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });



// Bring in the express app
const app = express();

//Call and configure cookieSession
app.use(
  cookieSession({
    // Set maxAge to a week in miliseconds
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// Call the passport.initialize
app.use(passport.initialize());

// Call the passport.session
app.use(passport.session());

// Access the authRoutes file and pass app as an argument
require("./routes/authRoutes")(app);

// Pass the port the app identifies as the active one
const PORT = process.env.PORT || 5000;


// Log the port where it's running 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});