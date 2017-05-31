var express=require('express');
var request=require('request')
var port = process.env.port||3000;
var dbManager= process.env.DB_MANAGER||'http://localhost:4000/test';
var app=express();
app.get('/',function(req,res) {
    res.send('Hello World')
});

app.get('/test',function(req,res) {
    request(dbManager, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.send('My response is  : '+body);
    });});

var server = app.listen(port,function() {
    console.log('Listening on port ',port)
})