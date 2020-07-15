const Sequelize = require("sequelize"); //add sequelize

//create a connection to db using an instance of Sequelize
const sequelize = new Sequelize(
  "postgres://postgres:Javelin1996@localhost:6000/pg-demo"
);

//op for queries
const Op = Sequelize.Op;

//test if connection is successful
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
