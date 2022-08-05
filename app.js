var express = require('express')

var app = express()

app.listen(3000, function(){
    console.log("Express_Server_is_completly_Open")
})




app.get('/', function(req,res){
    res.send("<h1>thanks for visit my site!</h1>")
});