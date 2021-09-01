const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Kapil:123%40kapil@blog-cluster.4gx5m.mongodb.net/blogs?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });

  // mongoose.connection.on("error", (err) => console.log("error :", err));
};

connectDB();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.json("kya chal raha hai");

  res.sendFile(__dirname + "/index.html");
  // res.sendFile(__dirname + "/signin.html");
});

// SCHEMA
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
  // console.log(req.body);
  const data = req.body;
  console.log(data);
  let userProfile = await User.findOne({ email: data.email });

  // console.log(userProfile);
  if (userProfile) {
    if (userProfile.password === data.password) {
      console.log("username and password are correct");
      res.send("username and password are correct");
    } else {
      console.log("Incorrect password");
      res.send("Incorrect password");
    }
  } else {
    console.log("Email not found");
    res.send("Email not found");
  }
});

app.post("/signup", (req, res) => {
  const data = req.body;
  console.log(data);

  const newUser = new User({
    firstName: data.firstName,
    lastName: data.lastName,
    userName: data.userName,
    email: data.email,
    password: data.password[0],
  });

  newUser
    .save()
    .then((result) => {
      console.log(result);
      console.log("placed");
    })
    .catch((error) => {
      console.log(error);
    });

  res.json("Done");
});

// SCHEMA
const postSchema = new mongoose.Schema({
  authorId: String,
  userName: String,
  post: {
    title: String,
    metaTitle: String,
    slug: String,
    summary: String,
  },
  publishedAt: { type: "date" },
  updatedAt: { type: "date" },
});

const Post = new mongoose.model("Post", postSchema);

app.post("/insertPost", (req, res) => {
  let data = req.body;
  console.log(data);
  const newPost = new Post({
    authorId: data.authorId,
    userName: data.userName,
    post: data.post,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
  });

  newPost
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("cant insert data due to ", error);
    });
});

app.post("/getPost", async (req, res) => {
  let postTitle = req.body.title;
  let data = await Post.findOne({ type: { title: postTitle } });
  res.json(data);
});

app.post("/postsList", async (req, res) => {
  let reqDomain = req.body.domain;
  console.log("reqDomain:", reqDomain);
  let data = await Post.find({ "post.domain": reqDomain });
  console.log(data);
  res.json(data);
});

app.post("/posts", async (req, res) => {
  let reqTitle = req.body.postTitle;
  console.log("reqTitle:", reqTitle);
  let data = await Post.findOne({ "post.title": reqTitle });
  console.log(data);
  res.json(data);
});

const domainSchema = new mongoose.Schema({
  name: String,
});

const Domain = new mongoose.model("Domain", domainSchema);

app.get("/domains", async (req, res) => {
  var data = await Domain.find();
  console.log(data);
  var obj = { domain: data };
  res.json(obj);
});

app.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
