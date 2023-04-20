import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let id = 0;
const comments = {};

app.post("/events", (req, res) => {
  //   const { type, data } = req.body;
});

app.post("/comments", (req, res) => {
  const { text, postId } = req.body;

  const comment = {
    id,
    text,
    postId,
  };

  comments[id] = comment;
  axios
    .post("http://localhost:3002/events", {
      type: "COMMENT_CREATED",
      data: comment,
    })
    .catch((err) => {});
  res.status(201).send(comments[id]);
  id++;
});

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
