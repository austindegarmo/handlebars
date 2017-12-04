var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// CREATE A VAR HERE	

var animals = [
{
	animalName:"dog",
	ferociousness:3,
	pet: true,
},{
	animalName:"cow",
	ferociousness:1,
	pet: false,
},{
	animalName:"wolf",
	ferociousness:42,
	pet: false,
},{
	animalName:"hamtaro",
	ferociousness:69,
	pet: true,
}];


app.get("/", function(req, res) {
  //Handlebars sure beats this!?! 
  var html = "<h1>My Routes</h1>"
  html += "<p><a href='/dog'>/dog</a></p>"
  html += "<p><a href='/all-pets'>/all-pets</a></p>"
  html += "<p><a href='/all-non-pets'>/all-non-pets</a></p>"
  res.send(html)
});

app.get("/dogs", function(req,res) {


res.render("dog", animals[0]);

});

app.get("/all-pets", function(req,res) {

	var data = { anims: []};

	for (var i = animals.length += 1;) {
		animals[i]
	}

	var newAnimal = animals[i]);

if (newAnimal.ferociousness <= 69,) {data.anims.push(newAnimal)} 

res.render("index", data);

});

app.get("all-non-pets", function(req,res) {

	var data = {anim: []};

	res.render("index", data);


});