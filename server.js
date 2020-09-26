const express = require('express');

const path = require('path');

const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log("Express is working on port " + port);
  });