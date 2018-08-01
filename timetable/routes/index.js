const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = 'mongodb://Piotr:qwerty1@ds147181.mlab.com:47181/masaz';

//Connect to database 
mongoose.Promise = global.Promise;
mongoose.connect(uri,{ useNewUrlParser: true });

const urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app){

    app.get('/index', function(req, res){
            res.render('index');
    });
}