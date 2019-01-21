var express = require('express');

var app = express();
 
 


 
 

app.get('/',function(req,res)
{
 
 
   
    console.log("get api call");
	res.send("called api")


});



app.listen(3000);
console.log('server running');
