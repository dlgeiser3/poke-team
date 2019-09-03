const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.PORT, {
  dialect: 'postgres'
})

sequelize.authenticate()
  .then(
    function(){
      console.log('*************** Connected to POKE-TEAM postgres database! ***************')
    }, 
    function(err){
      console.log(err);
    }
  )

  module.exports = sequelize;