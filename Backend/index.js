const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
require("./db/index.js");
const auth = require("./routes/auth.js");
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/api/v1", auth);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port http://localhost:${process.env.PORT}/`);
});
