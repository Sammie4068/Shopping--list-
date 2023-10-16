const express = require("express");
const bodyParser = require("body-parser")
const shopRoutes = require("./routes/shoppingRoutes");

const app = express();
const port = 3002;

app.use(bodyParser.json())

app.use("/", shopRoutes);

app.listen(port, () => {
  console.log("Running...");
});
