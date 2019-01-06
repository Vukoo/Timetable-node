const express = require('express');
const todoController = require('./controllers/todoController');
const loginController = require('./controllers/loginController');
const adminController = require('./controllers/adminController');
const reservationController= require('./controllers/reservationController');
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
<<<<<<< HEAD
//todoController(app);
=======
todoController(app);
loginController(app);
adminController(app);
reservationController(app);
>>>>>>> be2ccd6a2467fa1e5b3e7e70eaf17a9d5799b91f

//listen to port
app.listen(3000);

console.log('You are listening to port 3000');