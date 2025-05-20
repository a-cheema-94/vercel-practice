const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = 5000;

const app = express();
app.use(cors())
app.use(express.json());

const NASA_API_KEY = process.env.NASA_API_KEY;

app.get("/haha", (req, res) => {
  console.log('hiii hahah')
  res.status(200).json({ first: 'get time' })
})

app.post("/foo", (req, res) => {
  // const { dataSent } = req.body
  console.log(req.body)
  console.log('hiii foo')
  res.status(200).json({ second: NASA_API_KEY })
})

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
})