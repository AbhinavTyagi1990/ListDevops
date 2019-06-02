const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("./models/post");
const app = express();
mongoose.connect('mongodb+srv://Abhinav:1em1dSca0JKk581s@cluster0-7elrf.mongodb.net/unlimitedPost?retryWrites=true&w=majority',{ useNewUrlParser: true })
.then(()=>{
  console.log('Connected');
})
.catch((e)=>{
  console.log(e);
});
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
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: "Added"
  });
});


app.get("/posts", (req, res, next) => {
  
  Post.find().then(document => {
    res.status(200).json({
      posts: document
    });
  }).catch((e)=>{
    console.log(e);
  });
  
});

app.delete('/posts/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(()=> {
    res.status(200).json({
      message: "Post deleted"
    })
  })
  
});
module.exports = app;
