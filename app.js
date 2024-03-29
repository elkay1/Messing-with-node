const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.port || 3000;
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./", "views", "404.html"));
});

app.listen(port, function () {
  console.log("serving on " + port);
})