const { unstable_renderSubtreeIntoContainer } = require('react-dom');
const{db,Users,Seats}=require('../models.js');
const route=require('express').Router();


function isIdUnique(id){ 
    return db.Seats.count({where:{userId : id} });
}

function isSeat(no){ 
    return db.Users.count({where:{seat_no : no}});
}

route.use('/',function(req,res){ 
    var current_tickets=req.body.tickets_avaliable;
    const tickets_booked=req.body.no_of_tickets;
    if(current_tickets>0){ 
       Users.create({ 
           movie_name:req.body.name,
           no_of_tickets:req.body.no_of_tickets,
           seat_no:req.body.seat_no,
           date:req.body.date,
           time:req.body.time,
       }).then((data) => { 
           //check if seats table contains user with u_id=data.id 
          const count= isIdUnique(data.id);
          if(count==0){ 
              //means it is new user and it does't have uid in seats table then create a row in  seats table
              
              Seats.create({ 
                  userId:data.id,
                  status:Yes
              }).then((details) => { 
                current_tickets=current_tickets-tickets_booked;
                console.log("your show is booked");
                 res.send(current_tickets);
              }).catch(e => { 
                  res.send(e);
            })
          }else{ 
              //means user already exists then check if count of seat_no in Users table is 0,if >=1 then seat is already booked else book seat 
              //and change status to yes 
              const no=data.seat_no;
              const isseatavaliable=isSeat(no);
              if(isseatavaliable!=0){
                   res.send("seat is already booked");
                }
              else{  
                  //book seat
                Seats.create({ 
                    userId:data.id,
                    status:Yes
                }).then((details)=>{ 
                    current_tickets=current_tickets-tickets_booked;
                    console.log("your show is booked");
                    res.send(current_tickets);
                   
                }).catch(e =>{ res.end(e);})
               
              }
          }
       })


    }
    else{ 
     //if no_of_seats<=0 then housefull
     res.send("housefull");

    }

}).
// then(function() { 
//     res.send("booked");
// }).catch(function(e){
//      res.send(e);
//     })



//function to return count of id
 
// function isIdUnique(id){ 
//     return db.Seats.count({where:{userId : id} });
// }

// function isSeat(no){ 
//     return db.Users.count({where:{seat_no : no}});
// }

exports=module.exports={ 
    route
}