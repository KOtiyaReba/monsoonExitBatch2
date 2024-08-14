const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://user1:SHGxhrdz7VZVWYx6@cluster0.1qg89hd.mongodb.net/MonsoonExit?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
