const Sequelize=require('sequelize')
const db=new Sequelize('Moviedb','booker','pass',{ 
    host:'localhost',
    dialect:'mysql'
})


const Users=db.define('users',{ 
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
      type: Sequelize.DataTypes.INTEGER(),
      allowNull:false
    },
    seat_no:{ 
        type:Sequelize.DataTypes.INTEGER(),
        allowNull:false
    },
    date:{ 
        type: Sequelize.DataTypes.DATE,
        allowNull:false
    },
    time:{ 
        type:Sequelize.DataTypes.TIME,
        allowNull:false
    },
    
})
const Seats=db.define('seats',{ 
    id:{ 
        type: Sequelize.DataTypes.INTEGER,
         primaryKey:true,
         autoIncrement: true
     },
    status:{ 
        type:Sequelize.DataTypes.STRING(3)
    },
    
    
})




Users.hasMany(Seats);


db.sync();
 exports=module.exports={ 
    db,Users,Seats
 }