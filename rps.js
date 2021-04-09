const express = require('express');
const app = express();

app.set ("view engine", "ejs");
app.get("/", function(req,resp) {

	resp.sendFile(__dirname + "/index.html");

});

app.post("/game", function(req, res) {
	console.log("Player Choice: " + req.body.choice);

});

app.listen(3000);
