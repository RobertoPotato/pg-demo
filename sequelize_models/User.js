//const express = require("express"); //add express
const Sequelize = require("sequelize"); //add sequelize

//create a connection to db using an instance of Sequelize
const sequelize = require("../sequelize_config");

//create a model for db
const User = sequelize.define(
  "user",
  {
    //attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
    },
  }
);

//Sync the table and add this data to it
User.sync();

module.exports = User;
