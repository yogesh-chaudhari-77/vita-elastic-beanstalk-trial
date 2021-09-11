const express = require('express')
const config = require("config");

const app = express()
const { PORT = 3000 } = process.env;

console.log("PORT : ", PORT);

app.get('/', (req, res) => {
  var environment_name = config.get("environment_name");
  res.json({"message":"Hello World, "+environment_name});
})

app.listen(PORT, () =>
    console.log(`The application is now listening on http://localhost:${PORT}`)
);
