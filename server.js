require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UsersController = require('./routes/UsersController')
mongoose.Promise = global.Promise;


const app = express();



mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board
const connection = mongoose.connection;


connection.on('connected', () => {
console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
console.log('Mongoose default connection error: ' + err);
});


app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());

app.use('/api/users', UsersController)



app.get('/', (req,res) => {
res.send( __dirname + '/client/build/index.html')
})



const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
console.log("Magic happening on port " + PORT);
})