var express=require('express');
var bodyParser=require('body-parser');
var users=require('./data')
var app=express();
var jsonBodyParser=bodyParser.json();
app.use(jsonBodyParser);

app.get('/Find/:Job',function(req ,res){
    const Job=req.params["Job"];
    res.json(users.filter((el)=>el.Job==Job));
});
app.post('/Add',function(req ,res){
    var user=req.body;
    users.push(user);
    res.json(user);
});
app.put('/Update/:Job',function(req ,res){
    var Job=req.params.Job;
    var chUser=null;
    var {Job,Position,Skill}=req.body;
    for(let i=0;i<users.length;i++){
        if(Job)
           users[i].Job=Job;
        if(Position)
           users[i].Position=Position;
        if(Skill)
           users[i].Skill=Skill;
    chUser=users[i];
    break;
    }
});
app.delete('/Remove/:Job',function(req ,res){
    const Job=req.params["Job"];
    res.json(users.filter((el)=>el.Job!=Job))
});
var server=app.listen(8087,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("Welcome!!");
})