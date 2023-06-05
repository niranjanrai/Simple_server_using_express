const express = require("express");

const bodyParser = require("body-parser");

//
const app = express();

//Home path
app.get("/", (req, res) => {
  return res.send("<h1>Home Page</h1>");
});

app.use(bodyParser.json());

// data to post
const posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
  { id: 4, title: "post 4" },
  { id: 5, title: "post 5" },
  { id: 6, title: "post 6" },
  { id: 7, title: "post 7" },
  { id: 8, title: "post 8" },
  { id: 9, title: "post 9" },
  { id: 10, title: "post 10" },
  { id: 11, title: "post 11" },
  { id: 12, title: "post 12" },
  { id: 13, title: "post 13" },
  { id: 14, title: "post 14" },
  { id: 15, title: "post 15" },
  { id: 16, title: "post 16" },
  { id: 17, title: "post 17" },
  { id: 18, title: "post 18" },
  { id: 19, title: "post 19" },
  { id: 20, title: "post 20" },
];

app.post("/posts", (req, res) => {
  return res.json(posts);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
