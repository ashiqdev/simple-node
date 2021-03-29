const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Post = require('./models/Post');

const mongodbOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
};

const DATABASE =
  '';

mongoose.connect(DATABASE, mongodbOptions, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('connection successfull');
  }
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
// CRUD

// create a post
app.post('/posts', async (req, res) => {
  const post = await new Post(req.body).save();
  res.send(post);
});

// read all posts
app.get('/posts', async (req, res) => {
  // find all posts
  const posts = await Post.find({});
  res.send(posts);
});

// read single post
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOne({ _id: id });
  res.send(post);
});

// delete a post
app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOneAndDelete({ _id: id });
  res.send(post);
});

// edit a post
app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.send(post);
});

const port = 4000;

app.listen(port, () => console.log(`server is listening on port ${port}`));

// GET, POST, PUT, DELETE
