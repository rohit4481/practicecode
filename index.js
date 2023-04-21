import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017", {
    dbName: "backend",
  })
  .then(() => console.log("Database Connected"))
  .catch(() => console.log("b"));
const app = express();

app.get("/", (req, res) => {
  res.send("Himmmmm");
});

app.listen(3000, () => {
  console.log("server is working");
});

// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
