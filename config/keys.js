// Figures out the credentials depending on env
if (process.env.NODE_ENV === "production") {
    module.exports = require("./prod");

} else {
    module.exports = require("./dev");
}



