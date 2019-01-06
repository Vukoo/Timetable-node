const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = 'mongodb://Piotr:qwerty1@ds147181.mlab.com:47181/masaz';

//Connect to database 
mongoose.Promise = global.Promise;
mongoose.connect(uri,{ useNewUrlParser: true });

const urlencodedParser = bodyParser.urlencoded({extended: false});

let clientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number
});

let client = mongoose.model('client', clientSchema);


module.exports = function(app){

    app.get('/reservation', function(req, res){
        client.find({}, function(err,data){
            if(err) throw err;
            res.render('reservation',{todos:data});
        });
    });

    app.post('/reservationController',urlencodedParser, function(req,  res){
        // console.log(req.body);
         let Temps = new client ({
                 firstName: req.body.firstName,
                 lastName: req.body.lastName,
                 phone: req.body.phone
           });
          
           let newUser = Temps.save(function(err,data){
                if(err) throw err;
                res.json(data);
            })
 
 
     });


}