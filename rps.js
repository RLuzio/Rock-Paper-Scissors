const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));

app.set ("view engine", "ejs");

app.get("/", function(req,resp) {

	resp.sendFile(__dirname + "/index.html");

});

app.post("/game", function(req, res) {
	'use strict'
	console.log("Player Choice: " + req.body.choice);

	let compChoices = ["rock", "paper", "scissors"];

	let num = Math.floor((Math.random() * 3) + 0);
	console.log("Number: " + num);

	let computerChoice = compChoices[num];

	console.log("Computer Choice: " + computerChoice);
});

app.listen(3000);
