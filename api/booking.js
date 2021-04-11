const { unstable_renderSubtreeIntoContainer } = require('react-dom');
const{db,Users,Seats}=require('../models.js');
const route=require('express').Router();
// var seats=new Array(4).fill(0).map(() => new Array(6).fill(0));
const row=4;
const col=6;
var seats=[[row],[col]];

 
//initially fill all the seats with their seat no which means the is not yet booked,
const num=1;
for(let i=0;i<row;i++){ 
    for(let j=0;j<col;j++){ 
        seats[i][j]=num;
        num++;
    }
}
//function to check if seat is vacant,if it is vacant book it and return true else return false
function isSeatFilled(seat_no){ 
    var seat_row=0;
    if(seat_no%row==0){ 
         seat_row=seat_no/row;
    }else{
        seat_row=(seat_no/row)+1;
    }
     //check for each col in seat_row
     for(let j=0;j<col;j++){ 
         if(seats[seat_row][j]==seat_no){ 
             seats[seats_row][j]=1;
             return true;}
     }
     return false;
 
  }




// function isIdUnique(id){ 
//     return db.Seats.count({where:{userId : id} });
// }

// function isSeat(no){ 
//     return db.Users.count({where:{seat_no : no}});
// }



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
           //check if seats is avaliable
          const check_seat= isSeatFilled(data.seat_no);
          if(check_seat){ 
              //means seat at particular row and col is vacant
              
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
              //if returned value is false means seat is already booked
                   res.send("seat is already booked");
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