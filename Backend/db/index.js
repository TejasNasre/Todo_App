require("dotenv").config();
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`).then(console.log("connect sucess to mongodb"));
  } catch (err) {
    console.log("Error connecting to the database", err);
  }
}

connect();
