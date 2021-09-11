const express = require('express')
const app = express()
const { PORT = 3000 } = process.env;
const config = require("config");

console.log("PORT : ", PORT);

app.get('/', (req, res) => {
  var testVariable = config.get("testVariable");
  console.log(testVariable);
  res.send('Hello World! '+testVariable);
})

app.listen(PORT, () =>
    console.log(`The application is now listening on http://localhost:${PORT}`)
);
