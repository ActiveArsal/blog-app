const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');

router.post('/blogs', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, (err, newBlog) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/blogs');
        }
    })
})


module.exports = router;