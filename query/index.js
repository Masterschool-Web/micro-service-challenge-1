import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let id = 0;
const postsWithComments = {
  0: {
    id: 0,
    title: "This is a post",
    comments: [
      {
        id: 0,
        text: "This is a comment",
        postId: 0,
      },
    ],
  },
};

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "POST_CREATED") {
    console.log("data", data);
    const { id, title } = data;

    postsWithComments[id] = {
      id,
      title,
      comments: [],
    };
  }

  if (type === "COMMENT_CREATED") {
    const { id, postId } = data;

    const post = postsWithComments[postId];
    post.comments.push({ id, postId, status: "pending" });
  }

  if (type === "COMMENT_UPDATED") {
    const { id, text, postId, status } = data;

    const post = postsWithComments[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;

    if (status === "approved") {
      comment.text = text;
    }
  }
});

app.get("/posts-and-comments", (req, res) => {
  res.send(postsWithComments);
});

app.listen(3002, () => {
  console.log("Query server is running on port 3002");
});
