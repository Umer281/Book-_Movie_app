const route=require('express').Router();

route.use('/booking',require('./booking').route);




exports=module.exports={ 
    route
}