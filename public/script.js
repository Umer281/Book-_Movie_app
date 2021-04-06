$(function(){ 

const set_date=$('#set_date').val();
const set_time =$('#set_time').val();
const set_tickets=parseInt($('#set_tickets').val());
const tickets_avaliable=parseInt($('.tickets_avaliable').val());
const  btn_book=$('#book_btn');
const movie_name=$('#movie_name').val();



//const tickets_avaliable=parseInt(tickets);

btn_book.click(function(e){ 

    $.post('/book',{ 
        set_date,set_time,tickets_avaliable,movie_name,set_tickets
        
    }).then((data) => { 
        console.log(data);
    }).catch((e)=>{ 
        console.log(e);
    })
})

























})