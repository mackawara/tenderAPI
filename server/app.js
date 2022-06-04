const express = require("express");
const app = express();
const PORT = 2000 || process.env.PORT;
const cors = require("cors");
const router=require("express-router)
app.use(cors);

app.listen(PORT, () => console.log("server listening on port" + PORT));
app.get("/", (req, res) => {
  res.send("Hello World");
});
