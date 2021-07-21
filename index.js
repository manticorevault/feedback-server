require("./services/passport");
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");

// Connect to MongoDB Atlas
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

// Bring in the express app
const app = express();

// Access the authRoutes file and pass app as an argument
require("./routes/authRoutes")(app);

// Pass the port the app identifies as the active one
const PORT = process.env.PORT || 5000;


// Log the port where it's running 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});