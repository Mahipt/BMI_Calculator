const port = 3000; // initialize to be use port
var express = require("express"); 
var bodyParser = require("body-parser"); 

// initialize express for further use
var app = express(); 
// adding body parser into express
app.use(bodyParser.urlencoded({extended: true}));

// listen
app.listen(port, function (){
    console.log("Server is runnign on port:" + port); 
}); 
// get
app.get('/', function(request, response){
    // let the request clinet receive the webpage
    response.sendFile(__dirname + "/bmi_calculator.html"); 
}); 
// post
app.post('/', function(request, response){
    var h = Number(request.body.height) / 100; 
    var w = Number(request.body.weight); 
    var result = w / (h*h); 
    result = result.toFixed(2);
    response.send("Your BMI is: " + result); 
}); 