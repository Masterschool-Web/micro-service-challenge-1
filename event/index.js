import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
    {
        "type": "POST_CREATED",
        "data": {
            "id": "123",
            "title": "Post Title",
        }
    }
*/

/*
    {
        "type": "COMMENT_CREATED",
        "data": {
            "id": "123",
            "text": "Comment Text",
            "postId": "123"
        }
    }
*/

app.post("/events", (req, res) => {
  axios.post("http://localhost:3000/events", req.body).catch((err) => {});
  axios.post("http://localhost:3001/events", req.body).catch((err) => {});
  axios.post("http://localhost:3002/events", req.body).catch((err) => {});
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
