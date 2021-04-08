const express=require('express');
const path=require('path');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',require('./api').route)

app.use('/',express.static(path.join(__dirname,'/public')));

app.listen(8686,() =>{ 
    console.log("running server at 8686");
})

