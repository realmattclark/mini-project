
var express = require("express");
const fs = require("fs");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))


let reservations = [];

app.get("/api/reservations", function (req, res){
return res.json(reservations)
})

app.post("/api/reservations", function (req, res) {

  console.log("post")
  var newReservation = req.body;

  reservations.push(newReservation);
  res.json(newReservation)
})

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});