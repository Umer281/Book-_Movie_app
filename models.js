const Sequelize=require('sequelize')
const db=new Sequelize('Moviedb','booker','pass',{ 
    host:'localhost',
    dialect:'mysql'
})


const User=db.define('users',{ 
    id:{ 
        type: Sequelize.DataTypes.INTEGER,
         primaryKey:true,
         autoIncrement: true
     },
     movie_name:{ 
         type:Sequelize.DataTypes.STRING(30),
         allowNull:false
     },
    no_of_tickets:{
      type: Sequelize.DataTypes.INTEGER()
    }
})
const Tickets=db.define('tickets',{ 
    date:{ 
        type: Sequelize.DataTypes.DATE
    },
    time:{ 
        type:Sequelize.DataTypes.TIME
    },
    
    tickets_avaliable:{ 
        type:Sequelize.DataTypes.INTEGER()
    }
})




User.hasMany(Tickets);


db.sync();
// exports=module.exports={ 
//     db,User,Tickets
// }