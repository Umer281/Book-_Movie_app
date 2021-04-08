$(function(){ 



const  btn_book=$('#book_btn');



//const tickets_avaliable=parseInt(tickets);

btn_book.click(function(event){ 
    event.preventDefault();
    const date=$('#set_date').val();
    const time =$('#set_time').val();
    const seat_no=$('#seat_no').val();
   const no_of_tickets=parseInt($('#set_tickets').val());
   const tickets_avaliable=parseInt($('#tickets_avaliable').text());
   const movie_name=$('#movie_name').val();



    $.post('/api/booking',{ 
        date,time,tickets_avaliable,movie_name,no_of_tickets,seat_no
         
    }).then((data) => { 
    
        console.log(data);
        tickets_avaliable.text()=data.current_tickets;
    }).catch((e)=>{ 
        console.log(e);
    })
})
























})