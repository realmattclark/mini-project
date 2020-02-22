let express = require("express");
let path = require("path");
let app = express();
let PORT = process.env.PORT || 3030;

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="jumbotron">
            <h1 class="display-4 d-flex justify-content-center">Hot Restaurant</h1>
            <p class="lead d-flex justify-content-center">Book your seat before they're all gone</p>
            <hr class="my-4">
            <p></p>
            <p class="lead d-flex justify-content-center">
            <a class="btn btn-primary btn-lg m-1 viewTable"  href="#" role="button">View Tables</a>
            <a class="btn btn-danger btn-lg m-1 reservation" href="#" role="button">Make Reservation</a>
            ${res}

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
            </p>
          </div>
          <script src="../viewres.js"></script>
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