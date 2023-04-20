import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let id = 0;
const posts = {};

app.post("/events", (req, res) => {
  //   const { type, data } = req.body;
});

app.post("/posts/", (req, res) => {
  const { title } = req.body;

  const post = {
    id,
    title,
  };

  posts[id] = post;

  axios
    .post("http://localhost:3002/events", {
      type: "POST_CREATED",
      data: post,
    })
    .catch((err) => {});

  res.status(201).send(posts[id]);
  id++;
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
