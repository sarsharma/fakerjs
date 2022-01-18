const faker = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 3000;

const endpoints = {
  "Random Name": "/name",
  "Random Email": "/email",
  "Random Phone Number": "/phone",
};

app.get("/", (req, res) => {
  res.json(endpoints);
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
