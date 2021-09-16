require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const connectDB = async () => {
  await mongoose
    .connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
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

// SCHEMA
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.post("/login", (req, res) => {
  const username = req.body.email;
  const password = req.body.password;

  User.findOne({ email: username }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, (err, result) => {
          if (result === true) {
            console.log(username);
            res.send("/domains");
          } else {
            console.log("Incorrect Password");
            res.send("Incorrect Password");
          }
        });
      } else {
        console.log("Invalid Email");
        res.send("Email Not Found ");
      }
    }
  });
});

app.post("/signup", (req, res) => {
  const data = req.body;
  console.log(data);
  const SALTROUNDS = 5;
  bcrypt.hash(data.password, SALTROUNDS, (err, hash) => {
    const newUser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: hash,
    });
    newUser.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(newUser.result);
        res.send("/domains");
      }
    });
  });
});

// SCHEMA
const postSchema = new mongoose.Schema({
  authorId: String,
  userName: String,
  post: {
    title: String,
    domain: String,
    content: String,
  },
  publishedAt: { type: "date" },
  updatedAt: { type: "date" },
});

const Post = new mongoose.model("Post", postSchema);

app.post("/insertPost", (req, res) => {
  let data = req.body;
  console.log(data);

  const newPost = new Post({
    userName: data.userName,
    post: {
      title: data.title,
      domain: data.domain,
      content: data.content,
    },
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
  res.json(data);
});

// app.post("/searchTitle", async (req, res) => {
//   const reqTitle = req.body.title;
//   let data = await Post.findOne({ "post.title": reqTitle });
//   res.json(data);
// });

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
