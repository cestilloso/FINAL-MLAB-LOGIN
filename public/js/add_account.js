
function createUser(){

	let name = document.querySelector('#name').value;
	let email = document.querySelector('#email').value;
	let username = document.querySelector('#username').value;
	let age = document.querySelector('#age').value;
	let password = document.querySelector('#password').value;
	let confirm = document.querySelector('#confirm').value;
	let newAccount = {
		name: name,
		email: email,
		username: username,
		age: age,
		password: password,
		confirm: confirm
	}

	const MongoClient = require('mongodb').MongoClient;
	const MONGO_URL = 'mongodb://localhost:27017/data';

	MongoClient.connect(MONGO_URL, (err, db) => {  
	  if (err) {
	    return console.log(err);
	  }

		   db.collection('accounts').insertOne(
	    {
	      	name: name,
			email: email,
			username: username,
			age: age,
			password: password,
			confirm: confirm
	    },
	    function (err, res) {
	      if (err) {
	        db.close();
	        return console.log(err);
	      }
	      // Success
	      db.close();
	    }
	  )
	});
}
