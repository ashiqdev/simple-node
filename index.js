const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = 4000;

const posts = [
  { id: '1', title: 'first post', desc: 'lorem ipsum doller emmat' },
  { id: '2', title: 'second post', desc: 'lorem ipsum doller emmat' },
  { id: '3', title: 'third post', desc: 'lorem ipsum doller emmat' },
  { id: '4', title: 'fourth post', desc: 'lorem ipsum doller emmat' },
];

app.get('/', (req, res) => {
  res.send(posts);
});

app.post('/', (req, res) => {
  const body = req.body;
  posts.push(body);
  res.send(posts);
});

app.get('/posts/:id', (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  console.log({ id });
  const post = posts.find((p) => p.id === id);
  res.send(post);
  const body = req.body;
  // find the post by id
  const pos = posts.find((p) => p.id === id);
  pos.title = body.title;
  pos.desc = body.desc;
  res.send(post);
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const newPosts = posts.filter((post) => post.id !== id);
  res.send(newPosts);
});

app.listen(port, () => console.log('server is listening'));

// CRUD
// C => Create
// R => READ
// U => UPDATE
// D => DELETE
