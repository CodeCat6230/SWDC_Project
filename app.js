const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;



console.log("server is opend by port 3000!")
app.get('/', (req, res) => {
    res.send('get function is running')
    console.log(items)
});

app.post('/',(req, res) => {
    res.send('post function is running')
});

app.patch('/', (request, response) => {
    response.send('patch function is running')
});

app.listen(port,() => {});