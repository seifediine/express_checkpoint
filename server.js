const express = require("express");
const app = express();

const port = 4000;

app.get("*", function (request, response) {
  response.end("Pinazza");
});

app.listen(port, function () {
  console.log(
    "Pinazza's running..." + " Open your browser at http://localhost:" + port
  );
});
