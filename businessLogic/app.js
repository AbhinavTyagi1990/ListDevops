const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Rquested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.send(201).json({
    message: "Post Added"
  });
});

app.use("/posts", (req, res, next) => {
  const posts = [
    {
      id: "2165767",
      title: "First",
      content: "This is server"
    },
    {
      id: "21hjgsadh7",
      title: "Second",
      content: "This is server two"
    }
  ];
  res.status(200).json({
    message: "Hello",
    posts: posts
  });
});

module.exports = app;
