var express = require('express');
var app = express();
var fs = require("fs");

var appName = [];

app.get('/name', function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	if (req.query.syllables == undefined) {
		var syllables = 2;
	} else {
		var syllables = req.query.syllables;
	}
	var adjectiveFile = 'adjectives/' + syllables + 'syllableadjectives.txt';
	var nounFile = 'nouns/' + syllables + 'syllablenouns.txt';
	var adjective;
	var noun;

	// Asynchronous read
	/*fs.readFile(adjectiveFile, function (err, data) {
		if (err) {
			return console.error(err);
		}*/
	// Synchronous read
	var data = fs.readFileSync(adjectiveFile);

	var list = data.toString().split("\r");
	var randomListNumber = Math.floor(Math.random() * list.length);
	adjective = list[randomListNumber];
	adjective = adjective.trim();
	adjective = adjective.substring(0,1).toUpperCase() + adjective.substring(1);
	console.log("Adjective: " + adjective);
	//});

	var data = fs.readFileSync(nounFile);

	var list = data.toString().split("\r");
	var randomListNumber = Math.floor(Math.random() * list.length);
	noun = list[randomListNumber];
	noun = noun.trim();
	noun = noun.substring(0,1).toUpperCase() + noun.substring(1);
	console.log("Noun: " + noun);
	

	appName.push({"name":adjective + " " + noun});

	res.send(appName[appName.length - 1]);
	console.log("Syllables: " + syllables);
});

app.listen(1337);
console.log("API is running on port 1337");