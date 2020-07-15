const express = require("express"); //add express
const users = require("./routes/users");
//const Sequelize = require("sequelize"); //add sequelize
const app = express(); //create the app object

app.use(express.json());
app.use('/api/users', users);

//setup the port to use
const port = process.env.PORT || 3000;

//Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
