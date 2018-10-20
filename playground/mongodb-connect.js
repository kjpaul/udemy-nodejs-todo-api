// // ES6 destructureing
// var user = {name: "andrew", age: 25};
// var {name} = user;
// console.log(name); //prints andrew

//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
	if(err){
		return console.log("Unable to connect to MongoDB server.");
	}
	console.log("Connected to MongoDB server");
	const db = client.db("TodoApp");
	
	db.collection("Todos").insertOne({
		text: "something else to do",
		completed: false
	}, (err, results) => {
		if(err){
			return console.log("Unable to insert todo.", err);
		}
		
		console.log(JSON.stringify(results.ops, undefined, 2));
	});
	
	db.collection("Users").insertOne({
		name: "Jen",
		age: 25,
		location: "Philidelphia"
	}, (err, results) => {
		if(err){
			return console.log("Unable to insert user.", err);
		}
		
		console.log(JSON.stringify(results.ops, undefined, 2));
		console.log(results.ops[0]._id.getTimestamp());
	});
	
	client.close();
});