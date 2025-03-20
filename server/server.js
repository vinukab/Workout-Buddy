const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.PORT;
const workoutsRoutes = require("./routes/workoutRoute");

app.get("/", (req, res) => { 
  res.send("welcome to my server");
});

// express.json() automatically reads the JSON object in the incoming request
// parses it into a JavaScript object
// attaches it to req.body.
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Redirect all requests starting with /api/workouts to workoutsRoutes
app.use("/api/workouts", workoutsRoutes);

// mongoose.connect() returns a promise
// after receiving the promise, it wiill console log the success message
// or the error message
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("conneted to MongoDB successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("listening on port", port);
});
