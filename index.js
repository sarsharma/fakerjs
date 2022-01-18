const faker = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/name", (req, res) => {
  res.send(faker.name.findName());
});

app.get("/email", (req, res) => {
  res.send(faker.internet.email());
});

app.get("/phone", (req, res) => {
  res.send(faker.phone.phoneNumber());
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
