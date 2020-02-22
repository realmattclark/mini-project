let express = require("express");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))


function cards(res, tableNumber) {
    block = `                   
    <div class="card">
        <div class="card-body">
            <h2 class = "table">Table No. ${tableNumber}</h2>
            <hr>
            <h3 class= "name">Name: ${res.name}</h2>
            <h3 class = "phone">Phone Number:${res.phone}</h3>
            <h3 class = "email">Email: ${res.email}</h3>
            <h3 class = "uniqueID">ID: ${res.id}</h3>
        </div>
    </div>`
    return block;
  }
  
  function cardWait(res, tableNumber) {
    block = `                   
    <div class="card">
        <div class="card-body">
            <h2 class = "table">Place in line: ${tableNumber}</h2>
            <hr>
            <h3 class= "name">Name: ${res.name}</h2>
            <h3 class = "phone">Phone Number:${res.phone}</h3>
            <h3 class = "email">Email: ${res.email}</h3>
            <h3 class = "uniqueID">ID: ${res.id}</h3>
        </div>
    </div>`
    return block;
  }
  
  function createHTML(res, otherlist) {
    
    block = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>View Tables</title>
        <!-- Latest compiled and minified CSS & JS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://code.jquery.com/jquery.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    
    </head>
    
    <body>
    
        <div class="container">
            <div class="jumbotron text-center">
                <h1>James's Soul Kitchen</h1>
                <hr>
                <h3>View Tables</h3>
    
                <div class="text-center">
                    <a href="reserve.html"><button class="btn btn-lg btn-danger"><span class="fa fa-check"></span> Make
                            Reservation</button></a>
                    <a href="index.html"><button class="btn btn-lg btn-default"><span
                                class="fa fa-home"></span></button></a>
                </div>
            </div>
            <div class="row">
    
                <div class="col-12">
    
                    <div class="card mb-4">
                        <div class="card-header">
                            <h3><strong>Current Reservations</strong></h3>
                        <div class="card-body">
                        ${res}
                    </div>
                </div>
            </div>
    
            <div class="row">
    
                <div class="col-12">
    
                    <div class="card mb-4">
                        <div class="card-header">
                            <h3><strong>Waiting List</strong></h3>
                        </div>
                        <div class="card-body">
                        ${otherlist}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/view.js"></script>
    </body>
    
    </html>`
    return block
  
  }
  
  let reservations = [];
  var currentTables = [];
  var waitList = [];
  
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