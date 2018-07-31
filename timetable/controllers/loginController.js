const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = 'mongodb://Piotr:qwerty1@ds147181.mlab.com:47181/masaz';

//Connect to database 
mongoose.Promise = global.Promise;
mongoose.connect(uri,{ useNewUrlParser: true });

//let data = [{item: 'get some mmilk'}, {item: 'kick some asses'}, {item:'walk with dog'}];
const urlencodedParser = bodyParser.urlencoded({extended: false});

let loginSchema = new mongoose.Schema({
    item: String,
    users: String
});



let logins = mongoose.model('logins', loginSchema);
//let person = mongoose.model('person', todoSchema);

//  let itemOne = todo({item: 'buy flowers', users: 'Piotr'}).save(function(err){
//      if(err) throw err;
//      console.log('Item saved');
//  });

module.exports = function(app){



    app.get('/login', function(req, res){
        logins.find({}, function(err,data){
            if(err) throw err;
            res.render('login',{todos:data});
        });
    });


    app.post('/login',urlencodedParser, function(req,  res){

       // console.log(req.body);
        let Temps = new logins ({
                item: req.body.item,
                users: req.body.users
          });
         

          let newUser = Temps.save(function(err,data){
               if(err) throw err;
               res.json(data);
           })


    });



}