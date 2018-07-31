const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = 'mongodb://Piotr:qwerty1@ds147181.mlab.com:47181/masaz';

//Connect to database 
mongoose.Promise = global.Promise;
mongoose.connect(uri,{ useNewUrlParser: true });

const urlencodedParser = bodyParser.urlencoded({extended: false});

let massageSchema = new mongoose.Schema({
    massagetype: String,
    price: Number,
    time: Number
});

let massage = mongoose.model('massage', massageSchema);


module.exports = function(app){

    app.get('/addmasage', function(req, res){
        massage.find({}, function(err,data){
            if(err) throw err;
            res.render('addmasage',{todos:data});
        });
    });

    app.post('/adminController',urlencodedParser, function(req,  res){
        // console.log(req.body);
         let Temps = new massage ({
                 massagetype: req.body.massagetype,
                 price: req.body.price,
                 time: req.body.time
           });
          
           let newUser = Temps.save(function(err,data){
                if(err) throw err;
                res.json(data);
            })
 
 
     });


}