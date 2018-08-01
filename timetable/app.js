const express = require('express');
const todoController = require('./controllers/todoController');
const loginController = require('./controllers/loginController');
const adminController = require('./controllers/adminController');
const reservationController= require('./controllers/reservationController');
const index = require('./routes/index');
const app = express();



// //bootstrap an jquery and date picke(?)
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/datepicker', express.static(__dirname + '/node_modules')); // 


console.log(__dirname)
//set up template engine
app.set('view engine', 'ejs');

//static file
app.use(express.static('./public'));

//fire controller
todoController(app);
loginController(app);
adminController(app);
reservationController(app);
index(app);

//listen to port
app.listen(3000);

console.log('You are listening to port 3000');