const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("*", (req, res) => {
  res.send("<h1>Hello AWS</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is live on port ${port}`);
});
