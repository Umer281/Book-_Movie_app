const{db,User,Tickets}=require('../models.js');
const route=require('express').Router();


route.post('/',function(req,res){ 
   
    const current_tickets=req.body.tickets_avaliable;
    // if(req.body.tickets_avaliable >0 ){ 
        console.log("reached here");
        console.log(req.body.date);

       Tickets.create({ 
           date:req.body.date,
           time:req.body.time,
           tickets_avaliable:req.body.tickets_avaliable
       }).then((data) => { 
          
        User.create({ 
            movie_name:req.body.movie_name,
            no_of_tickets:req.body.no_of_tickets
        }).then(function(data){ 
            current_tickets=current_tickets-1;
            res.send(current_tickets);
        }).catch((e) => { 
            res.send(e);
        })
       }).catch((e) => { 
           res.send(e);
       })
       
// }else{ 
//     res.send("seats are full");
// }







})


exports=module.exports={ 
    route
}