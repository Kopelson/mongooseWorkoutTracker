const path = require("path");

module.exports = function(app) {
    //index.html "/" route handler
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //stats.html "/stats" route handler
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname + '../public/stats.html'));
    });
    //exercise.html "/exercise" route handler
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname + '../public/exercise.html'));
    });
    //sends any request not handled to index.html
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
