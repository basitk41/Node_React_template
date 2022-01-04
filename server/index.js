const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/api", (req, res, next) => {
  res.send([1, 2, 3]);
});
app.use(express.static("build"));

app.listen(3000, () => console.log("server is up on 3000..."));
