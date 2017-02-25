var express = require('express');

var app = express();
var mongojs=require('mongojs');
var db = mongojs('articleApp',['blog']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactList',function(req,res)
{
 

 	db.blog.find(function(err,doc)
 	{
 		console.log(doc);
 		 res.json(doc);


 	})

   
    console.log("get api call");


});

app.post('/contactList',function(req,res){

	console.log(req.body);
	db.blog.insert(req.body, function(err , doc)
	{
		res.json(doc);
	})
})

app.delete('/contactList/:id',function(req, res){

	var id =req.params.id;
	console.log(id);
	db.blog.remove({_id: mongojs.ObjectId(id)} , function(err,doc)
	{
		res.json(doc);

	})
})

app.get('/contactList/:id',function(req,res)
{
 	var id = req.params.id;

 	db.blog.findOne({_id: mongojs.ObjectId(id)} , function(err,doc)
	{
		res.json(doc);

	})

   
    console.log("edit get api call");


});


app.put('/contactList/:id',function(req, res){

	var id =req.params.id;

	console.log(req.body.name);

	db.blog.findAndModify( { 
		query: { _id: mongojs.ObjectId(id) } , 
		update: {$set: {name: req.body.name , email: req.body.email , phone: req.body.phone  } },
		new: true } , function(err,doc){ 

		res.json(doc);
		

	 });
})


app.listen(3000);
console.log('server running');