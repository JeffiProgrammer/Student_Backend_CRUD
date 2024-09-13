import express from "express";
import dbConnection from "./repositories/studentRepo.js";
// RETRIEVE THE PORT FROM THE ENVIRONMENT VARIABLES
const port = process.env.PORT || 4000;

const app = express();

// Middleware
app.use(express.json());

// Connect to the database
dbConnection
  .sync()
  .then((response) => {
    console.log(response);

    // Running server on given port
    app.listen(port, () => {
      console.log(`SERVER IS RUNNING ON PORT ${port}`);
    });
  })
  .catch((error) => console.log(error));
