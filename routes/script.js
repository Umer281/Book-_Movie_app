const{db,User,Tickets}=require('../models.js');
const route=require('express').Router();


route.post('/',function(req,res){ 
   
    const current_tickets=req.body.tickets_avaliable;
    if(req.body.tickets_avaliable >0 ){ 
       Tickets.create({ 
           date:req.body.set_date,
           time:req.body.set_time,
           tickets_avaliable:req.body.tickets_avaliable
       })
       User.create({ 
           movie_name:req.body.movie_name,
           no_of_tickets:req.body.set_tickets
       }).then(function(data){ 
           current_tickets=current_tickets-1;
           res.send(current_tickets);
       }).catch((e) => { 
           res.send(e);
       })
}else{ 
    res.send("seats are full");
}







})


exports=module.exports={ 
    route
}