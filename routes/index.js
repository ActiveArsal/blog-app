const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');

//ROUTES
router.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err){
            console.log(err);
        } else {
            res.render('index', {blogs: blogs})
        }
    });
});



module.exports = router;