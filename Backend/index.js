const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
const allowedOrigins = ['https://monsoon-exit-batch2.vercel.app', 'https://another-domain.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
require("./connection");
const BlogModel = require("./model");

app.get("/", (req, res) => {
  res.json("Hello");
})
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "blog added" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
