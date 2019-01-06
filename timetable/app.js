const express = require('express');
const todoController = require('./controllers/todoController');
const loginController = require('./controllers/loginController');
const adminController = require('./controllers/adminController');
const app = express();



// //bootstrap an jquery
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

console.log(__dirname)
//set up template engine/view
app.set('view engine', 'ejs');
app.set("views","./views")

//static file
app.use(express.static('./public'));

//fire controller
//todoController(app);

//listen to port
app.listen(3000);

console.log('You are listening to port 3000');