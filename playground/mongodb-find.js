///const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
	if(err){
		return console.log("Unable to connect to MongoDB server.");
	}
	console.log("Connected to MongoDB server");
	
	const db = client.db("TodoApp");
	
	//db.collection("Todos").insertOne({
	//	text: "something I already did!",
	//	completed: true
	//}, (err, results) => {
	//if(err){
	//	return console.log("Unable to insert todo.", err);
	//}
	//	
	//	console.log(JSON.stringify(results.ops, undefined, 2));
	//});

	
	//db.collection("Todos").find({completed: false}).toArray().then( (docs) => {
	//	console.log("Todos");
	//	console.log(JSON.stringify(docs, undefined, 2));
	//	
	//}, (err) => {
	//	console.log("unable to fetch todos: ", err);
	//});
	
	//db.collection("Todos").find({completed: false}).count().then( (count) => {
	//	console.log(`Todos left count: ${count}`);
	//}, (err) => {
	//	console.log("unable to fetch todos: ", err);
	//});
	
	//db.collection("Todos").find().count().then( (count) => {
	//	console.log(`Todos total count: ${count}`);
	//}, (err) => {
	//	console.log("unable to fetch todos: ", err);
	//});

	db.collection("Users").find({name: "Paul de Jong"}).toArray().then( (docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log("unable to fetch todos: ", err);
	});
	
	//client.close();
});