var express = require("express");
var exphbs = require("express-handlebars");
var fuck = require("handlebars")
var app = express();

var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// CREATE A VAR HERE	

var animals = [
{
	type:"dog",
	fierceness:3,
	pet: true,
},{
	type:"cow",
	fierceness:1,
	pet: false,
},{
	type:"wolf",
	fierceness:42,
	pet: false,
},{
	type:"hamtaro",
	fierceness:69,
	pet: true,
}];


app.get("/", function(req, res) {
  //Handlebars sure beats this!?! 
  var html = "<h1>My Routes</h1>"
  html += "<p><a href='/dog'>/dog</a></p>"
  html += "<p><a href='/all-pets'>/all-pets</a></p>"
  html += "<p><a href='/all-non-pets'>/all-non-pets</a></p>"
  html += "<p><a href='/all-sketchy-guys'>/woaaah</a></p>"
  res.send(html)
});

app.get("/dogs", function(req,res) {


res.render("dog", animals[0]);

});

app.get("/all-pets", function(req,res) {

	var data = { anims: []};

	for (var i = 0; animals.length += 1; ) {
		animals[i] = animals;
	}

	var newAnimal = animals[i];

if (newAnimal.fierceness <= 69) {data.anims.push(newAnimal)} 

res.render("index", data);

});

app.get("all-non-pets", function(req,res) {

	var data = {anim: []};

	res.render("index", data);

	// if (newAnimal ) {}


data.anims.push(newAnimal);

});

app.listen(port);