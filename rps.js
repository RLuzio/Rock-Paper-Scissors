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
	let userScore = 0;
	let totalGames = 0;
	let computerScore = 0;
	let winOrLose = "Temp";
	let compChoices = ["rock", "paper", "scissors"];

	let num = Math.floor((Math.random() * 3) + 0);
	console.log("Number: " + num);

	let computerChoice = compChoices[num];
	console.log("Computer Choice:"   + computerChoice);
	let  userChoice = req.body.choice;
	
	if (userChoice ===  computerChoice)  {
		console.log("Tied");
	}
	
	else if (userChoice === 'paper') { 
		if (computerChoice === 'scissors') {
			computerScore += 1;
			winOrLose = "You Lost";
			
		}
		else if (computerChoice === 'rock') {
			userScore += 1;
			winOrLose = "You Win!";
		}
	}
	else if (userChoice === 'rock') { 
		if (computerChoice === 'scissors') {
			userScore += 1;
			winOrLose = "You Win!";
		}
		else if (computerChoice === 'paper') {
			computerScore += 1;
			winOrLose = "You Lost";
		}
	}
	else if (userChoice === 'scissors') { 
		if (computerChoice === 'rock') {
			computerScore += 1;
			winOrLose = "You Lost";
		}
		else if (computerChoice === 'paper') {
			userScore += 1;
			winOrLose = "You Win!";
		}
	}
	
	totalGames += 1;
  	res.render(__dirname + "/rps.html", {userScore:userScore});
	res.render(__dirname + "/rps.html", {totalGames:totalGames});
	res.render(__dirname + "/rps.html", {computerScore:computerScore});
	res.render(__dirname + "/rps.html", {winOrLose:winOrLose});
});

app.listen(3000);
