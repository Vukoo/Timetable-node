const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = 'mongodb://Piotr:qwerty1@ds147181.mlab.com:47181/masaz';

//Connect to database 
mongoose.Promise = global.Promise;
mongoose.connect(uri,{ useNewUrlParser: true });

//let data = [{item: 'get some mmilk'}, {item: 'kick some asses'}, {item:'walk with dog'}];
const urlencodedParser = bodyParser.urlencoded({extended: false});

let todoSchema = new mongoose.Schema({
    item: String,
    users: String
});


let todo = mongoose.model('todo', todoSchema);
//let person = mongoose.model('person', todoSchema);

//  let itemOne = todo({item: 'buy flowers', users: 'Piotr'}).save(function(err){
//      if(err) throw err;
//      console.log('Item saved');
//  });

module.exports = function(app){


    app.get('/todo', function(req, res){
    todo.find({}, function(err,data){
        if(err) throw err;
        res.render('todo',{todos:data});
    });

    });

    app.post('/todo',urlencodedParser, function(req,  res){
        // get data from view add it to mongo
        let newTodo = todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:item', function(req, res){
        //delete requested data from mongo
        todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });




}