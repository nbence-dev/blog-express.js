import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { json } from "stream/consumers";

const port = 3000;
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const filePath = path.join(__dirname, "data", "data.json");

const getPostsData = () => {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
};

app.get("/", (req, res) => {
  try {
    const posts = getPostsData();
    res.render("index.ejs", { posts: posts });
  } catch (err) {
    console.error("Error loading posts: ", err);
    res.render("index.ejs");
  }
});

app.post("/compose", (req, res) => {
  try {
    const postTitle = req.body.postTitle;
    const postCategory = req.body.postCategory;
    const postContent = req.body.postContent;

    const posts = getPostsData();
    const newPost = {
      id: Date.now(),
      title: postTitle,
      content: postContent,
      category: postCategory,
    };
    console.log(newPost);
    posts.push(newPost);
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

    res.redirect("/");
  } catch (err) {
    console.err("Error creating new post: ", err);
    res.status(500).send("System error: Could not save entry");
  }
});

app.get("/posts/:id", (req, res) => {
  const postId = req.params.id;

  const posts = getPostsData();
  const post = posts.find((p) => p.id == postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.delete("/delete/:id", (req, res) => {
  const postId = req.params.id;
  try {
    const posts = getPostsData();
    const updatedPosts = posts.filter((p) => p.id != postId);
    fs.writeFileSync(filePath, JSON.stringify(updatedPosts, null, 2));
    console.log(`Log entry: ${postId} has been deleted`);
    res.status(200).json({ success: true }); // DO THIS
  } catch (err) {
    console.error("Critical error during deletion: ", err);
    res.status(500).send("System failed to delete an entry");
  }
});

app.listen(port, () => {
  console.log(`Active on port ${port}`);
});
