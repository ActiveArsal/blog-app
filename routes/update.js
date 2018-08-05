const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');

router.put('/blogs/:id', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if(err) {
            res.redirect('/blogs')
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    });
});

module.exports = router;