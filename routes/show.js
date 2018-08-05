const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');

router.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            res.redirect('/blogs');
        } else {
            res.render('show', {blog: foundBlog});
        }
    })
})


module.exports = router;