const express = require("express");

// Bring in the express app
const app = express();

// Get request on the home page 
app.get("/", (req, res) => {
    res.send({ test: "line!" });
});

// Pass the port the app identifies as the active one
const PORT = process.env.PORT || 3333;

// Log the port where it's running 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});