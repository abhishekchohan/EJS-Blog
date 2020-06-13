const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model("Post");
// Routes are defined below

// home route fetch all posts and displays on screen
router.get("/", (req, res) => {
    Post.find({})
        .then(result => {
            if (result) {
                res.render("home", { posts: result })
            } else {
                res.render("home", { posts: [] })
            }
        })
        .catch(err => console.log(err))
});

// Below are some simple render routes.
router.get("/about", (req, res) => {
    res.render("about");
});
router.get("/contact", (req, res) => {
    res.render("contact");
});
router.get("/compose", (req, res) => {
    res.render("compose");
});

// We will take the id or anything that userpass and display the result accordingly
router.get("/:id", (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        Post.findById({ _id: req.params.id })
            .then(result => {
                if (result) {
                    res.render("post", { post: result })
                } else {
                    res.render("post", { post: "error" })
                }
            })
            .catch(err => console.log(err))
    } else {
        res.render("post", { post: "error" })
    }
});


// Here we search for the string that user send by matching it with 2 different datas
// i.e Titles, Body of each post
router.post("/search", (req, res) => {
    Post.search(req.body.search, (error, result) => {
        if (result) {
            res.render("search", { result: result })
        }
        if (error) {
            console.log(error);
            res.redirect("/");
        }
    });
});

// here we are deleting the post
router.post("/delete", (req, res) => {
    let id = req.body.id;
    Post.deleteOne({ _id: id })
        .catch(er => console.log(er))
    res.redirect("/");
});

// here we are making new post
router.post("/compose", (req, res) => {
    const post = new Post({
        title: req.body.postTitle,
        body: req.body.postBody
    })
    post.save()
        .catch(err => console.log(er))
    res.redirect("/");
});

module.exports = router;