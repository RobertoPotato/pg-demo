const express = require("express"); //add express
const User = require("../sequelize_models/User");
const router = express.Router();

//Create a new user and add them to the database
router.post("/", (req, res) => {
  // Create a new user
  const currentUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  }).then(res.status(200).send(currentUser));
});

//get all users from the db
router.get("/", (req, res) => {
  //res.send("Users are all here");
  User.findAll().then((users) => {
    res.status(200).send(users);
  });
});

//get a single user from db with ID
router.get("/:id", (req, res) => {
  User.findAll({
    where: {
      id: req.params.id, //the id is passed as part of the query params and not as a json object.
    },
  }).then((user) => {
    res.status(200).send(user);
  });
});

//Update a database entry
router.put("/:id", (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  User.update(
    { firstName: req.body.firstName, lastName: req.body.lastName },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => {
    res.status(200).send(user);
  });
});

//delete a user from db
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  }).then((user) => {
    res.send("Deleted");
  });
});

module.exports = router;
