var cors = require('cors');
var express= require('express');

var fs = require('fs');
var app = express();
app.use(cors());
var mongojs= require('mongojs');

var db=mongojs('demo',['emp']);

app.get('/',function(req,res){
  db.emp.find({},function(err,data){
    res.send(data);
  });
});
app.get('/deleteRecord/:id',function(req,res){
  var id= parseInt(req.params.id);
  //var dataid= new mongojs.ObjectId(id);
  db.emp.remove({id: id},1,function(err,data){
    // res.send(data);
    console.log("Deleted");
  });
  db.empList.find({},function(err,data){
    res.send(data);
  });
});

app.get('/addRecord/:data',function(req,res){
  var max= 2000,min=3000;
  var id= Math.floor(Math.random()*(max-min+1)+min);
  var data= JSON.parse(req.params.data);
  data._id= new mongojs.ObjectId(id);
  db.emp.insert(data);
  db.emp.find({},function(err,data){
    res.send(data)
  });
});

app.get('/updateRecord/:user',function(req,res){
  var user = JSON.parse(req.params.user);
  //console.log(user);
  db.emp.update({_id:new mongojs.ObjectId(user._id)},{$set:{ firstName: user.firstName, mname: user.mname, lastName: user.lastName, dept: user.dept, email: user.email, Salary: user.Salary, City: user.City, Company: user.Company}});
  db.emp.find({},function(err,data){
    res.send(data)
  });

})

var db1=mongojs('demo',['infotel']);
app.get('/getHotels',function(req,res){
  db1.infotel.find({},function(err,data){
    res.send(data);
  });
});
app.listen(3000);
