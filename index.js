const express = require("express");
const connectToTv = require("./workers/connectToTv");

const app = express();

const port = 3000;

connectToTv();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
